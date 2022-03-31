import { CDKTFConstruct } from "@dschmidt/cdktf-construct-base";

const project = new CDKTFConstruct({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  name: "cdktf-local-build",
  repositoryUrl: "https://github.com/DanielMSchmidt/cdktf-local-build.git",
  description:
    "A construct that encapsulates different building methods, e.g. for Node, Rust, Docker.",

  devDeps: ["@dschmidt/cdktf-construct-base"],
  deps: [],
  bundledDeps: ["toml"],
  peerDeps: ["cdktf-local-exec@>=0.0.20", "@cdktf/provider-null@>=0.5.0"],
  gitignore: ["test/cargo/testproject/target/"],

  workflowBootstrapSteps: [
    {
      name: "Install rust",
      uses: "actions-rs/toolchain@v1",
      with: {
        toolchain: "nightly",
        override: true,
        components: "rustfmt, clippy",
      },
    },
    {
      name: "Cargo install cross",
      uses: "actions-rs/cargo@v1",
      with: {
        command: "install",
        args: "cross",
      },
    },
  ],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});

project.synth();
