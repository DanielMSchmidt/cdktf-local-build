import { execSync } from "child_process";
import path from "path";
import { NullProvider } from "@cdktf/provider-null";
import { App, TerraformStack, Testing } from "cdktf";
import { Construct } from "constructs";

export const apply = (addConstructs: (scope: Construct) => void) => {
  const app = new App();
  const stack = new TerraformStack(app, "test");
  new NullProvider(stack, "null", {});
  addConstructs(stack);
  const synthDir = Testing.fullSynth(stack);
  const outdir = path.join(synthDir, "stacks", "test");

  execSync("terraform init && terraform apply -auto-approve", {
    cwd: outdir,
  });

  return outdir;
};
