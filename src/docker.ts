import { LocalExec } from "cdktf-local-exec";
import { Construct } from "constructs";

export interface DockerBuildOptions {
  // Working directory to run the command in.
  readonly cwd: string;

  // Dockerfile path, relative to the working directory.
  readonly dockerfile?: string;

  // The tag to use for the image.
  // e.g. "my-org/my-app:latest"
  readonly tag: string;

  // If the image should be pushed to a registry.
  // @default true
  readonly push?: boolean;
}

export class DockerBuild extends LocalExec {
  constructor(
    scope: Construct,
    name: string,
    { cwd, dockerfile, tag, push }: DockerBuildOptions
  ) {
    const pushCmd = `docker push ${tag}`;
    const buildCmd = `docker build ${
      dockerfile ? `-f ${dockerfile}` : ""
    } -t ${tag} .`;
    const commands = [buildCmd];

    if (push !== false) {
      commands.push(pushCmd);
    }
    super(scope, name, {
      cwd: cwd,
      command: commands.join(" && "),
      copyBeforeRun: false,
    });
  }
}
