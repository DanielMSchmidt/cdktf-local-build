import { execSync } from "child_process";
import path from "path";
import { Testing } from "cdktf";
import { DockerBuild } from "../src";
import { apply } from "./helper";

const getCommand = (synthJson: string, resourceName: string) =>
  JSON.parse(synthJson).resource.null_resource[resourceName].provisioner[0][
    "local-exec"
  ].command;

describe("Docker", () => {
  it("can build a docker image", () => {
    execSync("docker rmi -f cdktf/test:besttag");

    apply((scope) => {
      new DockerBuild(scope, "docker-build", {
        cwd: path.resolve(__dirname, "docker", "testproject"),
        tag: "cdktf/test:besttag",
        push: false,
      });
    });

    const images = execSync("docker images").toString();
    expect(images).toContain("cdktf/test");
    expect(images).toContain("besttag");
  });

  it("can push images", () => {
    expect(
      getCommand(
        Testing.synthScope((scope) => {
          new DockerBuild(scope, "docker-build", {
            cwd: path.resolve(__dirname, "docker", "testproject"),
            tag: "cdktf/test:besttag",
          });
        }),
        "docker-build"
      )
    ).toEqual(expect.stringContaining("docker push"));

    expect(
      getCommand(
        Testing.synthScope((scope) => {
          new DockerBuild(scope, "docker-build", {
            cwd: path.resolve(__dirname, "docker", "testproject"),
            tag: "cdktf/test:besttag",
            push: false,
          });
        }),
        "docker-build"
      )
    ).not.toEqual(expect.stringContaining("docker push"));
  });

  it("can auth against a registry", () => {
    expect(
      getCommand(
        Testing.synthScope((scope) => {
          new DockerBuild(scope, "docker-build", {
            cwd: path.resolve(__dirname, "docker", "testproject"),
            tag: "registry.example.com/cdktf/test:besttag",
            auth: {
              userName: "user",
              password: "password",
              proxyEndpoint: "https://registry.example.com",
            },
          });
        }),
        "docker-build"
      )
    ).toEqual(
      expect.stringContaining(
        "docker login -u user -p password https://registry.example.com &&"
      )
    );

    expect(
      getCommand(
        Testing.synthScope((scope) => {
          new DockerBuild(scope, "docker-build", {
            cwd: path.resolve(__dirname, "docker", "testproject"),
            tag: "cdktf/test:besttag",
          });
        }),
        "docker-build"
      )
    ).not.toEqual(expect.stringContaining("docker login"));
  });
});
