# CDKTF Local Build Construct

A simple construct that runs builds for different languages locally.
Currently, it supports: docker. I plan on adding rust (cargo) and node (npm) support as well.

## Usage

```ts
import { Provider, DockerBuild, DockerizedBuild } from "cdktf-local-build";

// Local Build extends LocalExec which extends from the null provider,
// so if you already have the provider initialized you can skip this step
new Provider(this, "local-build");

new DockerBuild(this, "docker-backend", {
  cwd: "/path/to/project/backend",
  dockerfile: "Dockerfile.backend",
  image: "cdktf/backend:latest",
  push: false, // defaults to true
});

new DockerizedBuild(this, "my-go-backend", {
  cwd: "/path/to/project/backend",
  command: "go build -o /tmp/backend",
  imageHomeDirectory: "/tmp/backend",
  platform: "linux/arm64",
  image: "go-builder-image:latest",
  setUser: true,
});
```

### `DockerBuild`

Builds a docker image locally.

#### Options

- `cwd`: The working directory to run the command in.
- `dockerfile`: The Dockerfile to use.
- `image`: The tag to use for the image.
- `push`: If true, `docker push <tag>` is executed after the run.

### `DockerizedBuild`

Build an artifact inside a docker image.

#### Options

- `cwd`: The working directory to run the command in.
- `command`: Build command to run int the docker image.
- `image`: The tag to use for the building image.
- `imageHomeDirectory`: The home directory to use inside the image.
- `platform`: The platform to build for (sets docker platform flag).
- `setUser`: If true, the user will be set to the current user inside docker.

### `CrossBuild`

Builds a rust binary using cross (cross runs it inside a docker container).
Please make sure [cross](https://github.com/cross-rs/cross) is installed on the host machine by running `cargo install cross`.

#### Options

- `arch`: The architecture to build for (`arm` or `x86`).
- `projectName`: The name specified in the Cargo.toml.
- `cwd`: The working directory to run the command in.
