import { Construct } from "constructs";
import { LocalExec } from "cdktf-local-exec";
import { resolve } from "path";
import {
  IResolvable,
  ITerraformDependable,
  TerraformProvider,
  TerraformResourceLifecycle,
} from "cdktf";

type Arch = "arm" | "x86";
export interface CargoOptions {
  /**
   * Architecture of the binary to build.
   *
   * @default "x86"
   */
  arch?: Arch;

  projectName: string;

  // Inherited from LocalExec without command option
  /**
   * @stability stable
   */
  readonly dependsOn?: ITerraformDependable[];
  /**
   * @stability stable
   */
  readonly provider?: TerraformProvider;
  /**
   * @stability stable
   */
  readonly lifecycle?: TerraformResourceLifecycle;
  /**
   * @stability stable
   */
  readonly triggers?:
    | {
        [key: string]: string;
      }
    | IResolvable;

  /**
   * The working directory to run the command in.
   *
   * Defaults to process.pwd().
   * If copyBeforeRun is set to true it will copy the working directory to an asset directory and take that as the base to run.
   *
   * @stability stable
   */
  readonly cwd: string;
  /**
   * If set to true, the working directory will be copied to an asset directory.
   *
   * @default true
   * @stability stable
   */
  readonly copyBeforeRun?: boolean;
}

/**
 * Builds a binary using cargo inside a docker container.
 * It is built to support https://github.com/awslabs/aws-lambda-rust-runtime
 */
export class CargoBuild extends LocalExec {
  constructor(scope: Construct, name: string, options: CargoOptions) {
    super(scope, name, options as any);

    throw new Error("Not implemented");

    // TODO: Implement this using docker action
    //     const platform = options.arch === "arm" ? "linux/arm64" : "linux/x86";
    //     const target =
    //       options.arch === "arm"
    //         ? "aarch64-unknown-linux-gnu"
    //         : "x86_64-unknown-linux-gnu";
    //     const command = `
    //     docker run --platform ${platform} \
    //   --rm --user "$(id -u)":"$(id -g)" \
    //   -v "${options.cwd}":/usr/src/myapp -w /usr/src/myapp rust:${RUST_VERSION} \
    //   cargo build -p lambda_runtime --example basic --release --target ${RUST_TARGET}

    //     cargo build --release -p ${options.projectName} --target ${target} && cp target/${target}/release/* binary`;
  }

  public get binary() {
    return resolve(this.cwd, "binary");
  }
}
