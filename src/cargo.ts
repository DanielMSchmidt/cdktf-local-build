import { resolve } from "path";
import {
  IResolvable,
  ITerraformDependable,
  TerraformProvider,
  TerraformResourceLifecycle,
} from "cdktf";
import { Construct } from "constructs";
import { DockerizedBuild } from "./docker";

export interface CargoOptions {
  /**
   * Architecture of the binary to build.
   *
   * @default "x86"
   */
  readonly arch?: "arm" | "x86";

  readonly projectName: string;

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
   *
   * @stability stable
   */
  readonly cwd: string;

  /**
   * Rust version to compile with
   *
   * @default 1.58
   */
  readonly rustVersion?: string;
}

/**
 * Builds a binary using cargo inside a docker container.
 * It is built to support https://github.com/awslabs/aws-lambda-rust-runtime
 */
export class CargoBuild extends DockerizedBuild {
  constructor(scope: Construct, name: string, options: CargoOptions) {
    const rustVersion = options.rustVersion || "1.58";
    const image =
      options.arch === "arm"
        ? `arm32v7/rust:${rustVersion}-slim`
        : `amd64/rust:${rustVersion}-slim`;
    const platform = options.arch === "arm" ? "linux/arm64" : "linux/x86";
    const target =
      options.arch === "arm"
        ? "aarch64-unknown-linux-gnu"
        : "x86_64-unknown-linux-gnu";
    super(scope, name, {
      cwd: options.cwd,
      platform,
      command: `cargo build --release --target ${target}`,
      image,
      imageHomeDirectory: `/usr/src/${options.projectName}`,
      setUser: true,
    });
  }

  public get binaryPath() {
    return resolve(this.cwd, "binary");
  }
}
