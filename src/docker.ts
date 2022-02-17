import { LocalExec, LocalExecOptions } from "cdktf-local-exec";
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

export interface DockerizedBuildOptions extends LocalExecOptions {
  // Builder docker image used
  readonly image: string;

  // Home directory of the image
  readonly imageHomeDirectory: string;

  // Platform to run under
  readonly platform?: string;

  // Sets the user and group to the hosts user and group
  readonly setUser: boolean;
}

// Runs an arbitrary build inside a docker container
export class DockerizedBuild extends LocalExec {
  constructor(scope: Construct, name: string, options: DockerizedBuildOptions) {
    super(scope, name, {
      ...options,
      command: `docker run --rm ${
        options.platform ? `--platform=${options.platform}` : ""
      } ${options.setUser ? '--user="$(id -u)":"$(id -g)"' : ""} -v ${
        options.cwd
      }:${options.imageHomeDirectory} -w ${options.imageHomeDirectory} ${
        options.image
      } ${options.command}`,
    });
  }
}
