import { execSync } from "child_process";
import { apply } from "./helper";

import { DockerBuild } from "../src";
import path from "path";

describe("Docker", () => {
  it("can build a docker image", () => {
    execSync("docker rmi -f cdktf/test:besttag");

    apply((scope) => {
      new DockerBuild(scope, "docker-build", {
        cwd: path.resolve(__dirname, "docker", "testproject"),
        tag: "cdktf/test:besttag",
      });
    });

    const images = execSync("docker images").toString();
    expect(images).toContain("cdktf/test");
    expect(images).toContain("besttag");
  });
});
