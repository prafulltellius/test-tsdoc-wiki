# Einstein JS modules library

Einstein is a suite of commonly used non-visual JS modules aimed at helping developers to reuse code. It provides common
infrastructure for packages, such as build tooling, and automatic releasing from CI.

**If you are building a module into the library, read the [CONTRIBUTION GUIDE](CONTRIBUTING.md). If you are consuming
the library, continue reading the main README.**

## Installation

The library is structured as a multi-package repository, also known as a [monorepo](https://github.com/lerna/lerna).
Each module is published to npm under the repository's scope (@einstein) and can be installed in a project in the same way
as any other npm package.

```bash
npm install --save @einstein/<package name>
# Or
yarn add @einstein/<package name>
```

The modules are all hosted on Nexus.

### I want to locally test my new Package in my repository

1. In the Einstein repository, run `yarn workspace @einstein/{name-of-package} build`
2. In your repository, run `yarn add ~/{path-to-einstein-repository}/packages/{name-of-package}` - the path begins from your
   user profile folder

## Contributing

We welcome contributions to the library. Read our [contributing guide](CONTRIBUTING.md) to get started.