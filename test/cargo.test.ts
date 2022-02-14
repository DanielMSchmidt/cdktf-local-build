import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { App, TerraformOutput, TerraformStack, Testing } from "cdktf";
import { Provider } from "cdktf-local-exec";
import { Construct } from "constructs";

import { DockerizedCargoBuild } from "../src";
import { CrossBuild } from "../src/cargo";

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

const projectName = "testproject";
const projectPath = path.resolve(__dirname, "cargo", projectName);
describe("rust", () => {
  beforeEach(() => {
    try {
      fs.rmdirSync(path.resolve(projectPath, "target"), { recursive: true });
    } catch {}
  });

  describe.skip("DockerizedCargoBuild", () => {
    test("builds binary and exposes path", () => {
      // Create a file in the stack directory
      const outdir = apply((stack) => {
        const build = new DockerizedCargoBuild(stack, "myresource", {
          projectName,
          cwd: path.resolve(__dirname, "cargo", projectName),
        });

        new TerraformOutput(stack, "binaryPath", {
          value: build.binaryPath,
        });
      });

      const dir = path.resolve(outdir, "cdk.tf.json");
      const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));
      expect(manifest).toMatchInlineSnapshot();
      expect(fs.existsSync(manifest.outptus.binaryPath)).toBe(true);
    });

    test("builds arm binary and exposes path", () => {
      // Create a file in the stack directory
      const outdir = apply((stack) => {
        const build = new DockerizedCargoBuild(stack, "myresource", {
          projectName,
          arch: "arm",
          cwd: path.resolve(__dirname, "cargo", projectName),
        });

        new TerraformOutput(stack, "binaryPath", {
          value: build.binaryPath,
        });
      });

      const dir = path.resolve(outdir, "cdk.tf.json");
      const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));
      expect(manifest).toMatchInlineSnapshot();
      expect(fs.existsSync(manifest.outptus.binaryPath)).toBe(true);
    });
  });

  describe("CrossBuild", () => {
    test("builds binary and exposes path", () => {
      // Create a file in the stack directory
      const outdir = apply((stack) => {
        const build = new CrossBuild(stack, "myresource", {
          projectName,
          cwd: path.resolve(__dirname, "cargo", projectName),
        });

        new TerraformOutput(stack, "binaryPath", {
          value: build.binaryPath,
        });
      });

      const dir = path.resolve(outdir, "cdk.tf.json");
      const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));

      expect(fs.existsSync(manifest.output.binaryPath.value)).toBe(true);
    });

    test("builds arm binary and exposes path", () => {
      // Create a file in the stack directory
      const outdir = apply((stack) => {
        const build = new CrossBuild(stack, "myresource", {
          projectName,
          arch: "arm",
          cwd: path.resolve(__dirname, "cargo", projectName),
        });

        new TerraformOutput(stack, "binaryPath", {
          value: build.binaryPath,
          staticId: true,
        });
      });

      const dir = path.resolve(outdir, "cdk.tf.json");
      const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));

      expect(fs.existsSync(manifest.output.binaryPath.value)).toBe(true);
    });

    test("fails if the path is nonexistant", () => {
      // Create a file in the stack directory
      try {
        apply((stack) => {
          new CrossBuild(stack, "myresource", {
            projectName,
            arch: "arm",
            cwd: "/some/weird/path",
          });
        });
        fail("should have thrown");
      } catch (e) {
        expect(String(e)).toMatchInlineSnapshot(
          `"Error: Could not find Cargo.toml in /some/weird/path"`
        );
      }
    });

    test("guesses the correct project name", () => {
      // Create a file in the stack directory
      const outdir = apply((stack) => {
        const build = new CrossBuild(stack, "myresource", {
          projectName,
          cwd: path.resolve(__dirname, "cargo", projectName),
        });

        new TerraformOutput(stack, "binaryPath", {
          value: build.binaryPath,
          staticId: true,
        });

        new TerraformOutput(stack, "projectName", {
          value: build.projectName,
          staticId: true,
        });
      });

      const dir = path.resolve(outdir, "cdk.tf.json");
      const manifest = JSON.parse(fs.readFileSync(dir, "utf8"));

      expect(manifest.output.projectName.value).toBe("testproject");
      expect(fs.existsSync(manifest.output.binaryPath.value)).toBe(true);
    });
  });
});
