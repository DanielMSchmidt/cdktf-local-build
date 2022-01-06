import { Construct } from "constructs";
import { LocalExec, LocalExecOptions } from "cdktf-local-exec";

export interface NpmOptions extends LocalExecOptions {
  /**
   * If true npm install is run before the build.
   *
   * @default true
   */
  install?: boolean;

  /**
   * If true all dependencies are bundled into a single file.
   *
   * @default true
   */
  bundle?: boolean;
}

export class NpmBuild extends LocalExec {
  constructor(scope: Construct, name: string, options: NpmOptions) {
    super(scope, name, options);

    throw new Error("Not implemented");
  }
}
