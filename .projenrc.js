const { CDKTFConstruct } = require("@dschmidt/cdktf-construct-base");

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
  peerDeps: ["cdktf-local-exec@>=0.0.20", "@cdktf/provider-null@>=0.5.0"],
  gitignore: ["test/cargo/testproject/target/"],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
