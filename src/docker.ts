import { LocalExec } from "cdktf-local-exec";
import { Construct } from "constructs";

export interface RegistryAuth {
  readonly userName: string;
  readonly password: string;
  readonly proxyEndpoint: string;
}
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

  // Authentication for the registry.
  readonly auth?: RegistryAuth;
}

export class DockerBuild extends LocalExec {
  constructor(
    scope: Construct,
    name: string,
    { cwd, dockerfile, tag, push, auth }: DockerBuildOptions
  ) {
    const commands = [];

    if (auth) {
      commands.push(
        `docker login -u ${auth.userName} -p ${auth.password} ${auth.proxyEndpoint}`
      );
    }

    commands.push(
      `docker build ${dockerfile ? `-f ${dockerfile}` : ""} -t ${tag} .`
    );

    if (push !== false) {
      commands.push(`docker push ${tag}`);
    }
    super(scope, name, {
      cwd: cwd,
      command: commands.join(" && "),
      copyBeforeRun: false,
    });
  }
}
