# CDKTF Local Build Construct

A simple construct that runs builds for different languages locally.
Currently, it supports: docker. I plan on adding rust (cargo) and node (npm) support as well.

## Usage

```ts
import { Provider, DockerBuild } from "cdktf-local-build";

// Local Build extends LocalExec which extends from the null provider,
// so if you already have the provider initialized you can skip this step
new Provider(this, "local-build");

new DockerBuild(this, "backend-build", {
  cwd: "/path/to/project/backend",
  dockerfile: "Dockerfile.backend",
  image: "cdktf/backend:latest",
  push: false, // defaults to true
});
```

### `DockerBuild`

Builds a docker image locally.

#### Options

- `cwd`: The working directory to run the command in.
- `dockerfile`: The Dockerfile to use.
- `image`: The tag to use for the image.
- `push`: If true, `docker push <tag>` is executed after the run.
