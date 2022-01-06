import { execSync } from "child_process";
import path from "path";
import { Testing } from "cdktf";
import { DockerBuild } from "../src";
import { apply } from "./helper";

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
      JSON.parse(
        Testing.synthScope((scope) => {
          new DockerBuild(scope, "docker-build", {
            cwd: path.resolve(__dirname, "docker", "testproject"),
            tag: "cdktf/test:besttag",
          });
        })
      ).resource.null_resource["docker-build"].provisioner[0]["local-exec"]
        .command
    ).toEqual(expect.stringContaining("docker push"));

    expect(
      JSON.parse(
        Testing.synthScope((scope) => {
          new DockerBuild(scope, "docker-build", {
            cwd: path.resolve(__dirname, "docker", "testproject"),
            tag: "cdktf/test:besttag",
            push: false,
          });
        })
      ).resource.null_resource["docker-build"].provisioner[0]["local-exec"]
        .command
    ).not.toEqual(expect.stringContaining("docker push"));
  });
});
