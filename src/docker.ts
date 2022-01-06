import { Construct } from "constructs";
import { LocalExec } from "cdktf-local-exec";

export interface DockerBuildOptions {
  // Working directory to run the command in.
  cwd: string;

  // Dockerfile path, relative to the working directory.
  dockerfile?: string;

  // The tag to use for the image.
  // e.g. "my-org/my-app:latest"
  tag: string;
}

export class DockerBuild extends LocalExec {
  constructor(
    scope: Construct,
    name: string,
    { cwd, dockerfile, tag }: DockerBuildOptions
  ) {
    const command = `docker build ${
      dockerfile ? `-f ${dockerfile}` : ""
    } -t ${tag} .`;
    super(scope, name, {
      cwd: cwd,
      command,
      copyBeforeRun: false,
    });
  }
}
