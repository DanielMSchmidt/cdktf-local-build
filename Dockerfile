FROM node:16.12.0-buster-slim

# make Apt non-interactive
RUN echo 'APT::Get::Assume-Yes "true";' > /etc/apt/apt.conf.d/90vibbioinfocore \
  && echo 'DPkg::Options "--force-confnew";' >> /etc/apt/apt.conf.d/90vibbioinfocore

ENV DEBIAN_FRONTEND=noninteractive

# man directory is missing in some base images
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=863199
RUN apt-get update \
  && mkdir -p /usr/share/man/man1 \
  && apt-get install -y \
    git mercurial xvfb apt \
    locales sudo openssh-client ca-certificates tar gzip parallel \
    net-tools netcat unzip zip bzip2 gnupg curl wget make man build-essential

# Install rust
# https://github.com/rust-lang/rustup/issues/1085
RUN RUSTUP_URL="https://sh.rustup.rs" \
  && curl --silent --show-error --location --fail --retry 3 --proto '=https' --tlsv1.2 --output /tmp/rustup-linux-install.sh $RUSTUP_URL \
  && bash /tmp/rustup-linux-install.sh -y \
  && rm /tmp/rustup-linux-install.sh \
  && . $HOME/.cargo/env \
  && cargo install cross

