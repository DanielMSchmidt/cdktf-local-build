import { Construct } from "constructs";
import initSwc, { transformSync, minifySync } from "@swc/wasm-web";

interface NodejsOptions {
  readonly code: string;
  readonly transformOpts?: any;
  readonly minifyOpts?: any;
}

/**
 * Builds a bundled JS file using @sec/wasm: https://swc.rs/docs/usage/wasm
 */
export class InlineNodejs extends Construct {
  constructor(scope: Construct, id: string, options: NodejsOptions) {
    super(scope, id);

    initSwc().then(() => {
      const { code, transformOpts = {}, minifyOpts = {} } = options;
      const transformed: string = minifySync(
        transformSync(code, transformOpts),
        minifyOpts
      );

      // TODO: put code into a file
      // TODO: archive file
    });
  }
}
