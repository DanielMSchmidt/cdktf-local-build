import * as fs from "fs";
import { resolve } from "path";
import {
  ITerraformDependable,
  TerraformProvider,
  TerraformResourceLifecycle,
} from "cdktf";
import { LocalExec } from "cdktf-local-exec";
import { Construct } from "constructs";
import * as toml from "toml";
import { DockerizedBuild } from "./docker";

export interface CargoOptions {
  /**
   * Architecture of the binary to build.
   *
   * @default "x86"
   */
  readonly arch?: "arm" | "x86";

  /**
   * Name value in the Cargo.toml
   */
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
  readonly triggers?: {
    [key: string]: string;
  };

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
export class DockerizedCargoBuild extends DockerizedBuild {
  constructor(scope: Construct, name: string, options: CargoOptions) {
    const rustVersion = options.rustVersion || "1.58";
    const image =
      options.arch === "arm"
        ? `arm64v8/rust:${rustVersion}-slim`
        : `rust:${rustVersion}`;
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

export interface CrossOptions {
  /**
   * Architecture of the binary to build.
   *
   * @default "x86"
   */
  readonly arch?: "arm" | "x86";

  /**
   * Name value in the Cargo.toml
   */
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
  readonly triggers?: {
    [key: string]: string;
  };

  /**
   * The working directory to run the command in.
   *
   * Defaults to process.pwd().
   *
   * @stability stable
   */
  readonly cwd: string;
}

export class CrossBuild extends LocalExec {
  private target: string;
  public readonly projectName: string;

  constructor(scope: Construct, name: string, config: CrossOptions) {
    const target =
      config.arch === "arm"
        ? "aarch64-unknown-linux-gnu"
        : "x86_64-unknown-linux-gnu";

    const tomlPath = resolve(config.cwd, "Cargo.toml");
    let parsedToml: { package: { name: string } };
    try {
      parsedToml = toml.parse(fs.readFileSync(tomlPath, "utf8"));
    } catch (e) {
      throw new Error("Could not find Cargo.toml in " + config.cwd);
    }

    super(scope, name, {
      command: `cross build --target ${target} --release`,
      cwd: config.cwd,
      dependsOn: config.dependsOn,
      provider: config.provider,
      lifecycle: config.lifecycle,
      triggers: config.triggers,
    });
    this.target = target;
    this.projectName = config.projectName || parsedToml.package.name;
  }

  public get binaryPath() {
    return resolve(
      this.cwd,
      "target",
      this.target,
      "release",
      this.projectName
    );
  }
}
