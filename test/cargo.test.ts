import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { App, TerraformStack, Testing } from "cdktf";
import { Provider } from "cdktf-local-exec";
import { Construct } from "constructs";

import { CargoBuild } from "../src";

const apply = (addConstructs: (scope: Construct) => void) => {
  const app = new App();
  const stack = new TerraformStack(app, "test");
  new Provider(stack, "null", {});
  addConstructs(stack);
  const synthDir = Testing.fullSynth(stack);
  const outdir = path.join(synthDir, "stacks", "test");

  console.log({ outdir });

  execSync("terraform init && terraform apply -auto-approve", {
    cwd: outdir,
  });

  return outdir;
};

// const workingDirectoryForAsset = (
//   manifestPath: string,
//   name: string,
//   stackName = "test"
// ) => {
//   const dir = path.resolve(manifestPath, "cdk.tf.json");
//   const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));
//   const assetPath = Object.entries<any>(manifest.resource.null_resource).find(
//     ([key]) => key.startsWith(`${stackName}_${name}`)
//   )![1].provisioner[0]["local-exec"].working_dir;

//   return path.resolve(manifestPath, assetPath);
// };

describe.skip("CargoBuild", () => {
  test("builds binary and exposes path", () => {
    const projectName = "testproject";
    // Create a file in the stack directory
    const outdir = apply((stack) => {
      new CargoBuild(stack, "myresource", {
        projectName,
        cwd: path.resolve(__dirname, "cargo", projectName),
      });
    });

    // const workingDir = workingDirectoryForAsset(outdir, "myresource");

    const dir = path.resolve(outdir, "cdk.tf.json");
    const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));
    expect(manifest).toMatchInlineSnapshot();
  });
});
