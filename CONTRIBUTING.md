## How to Contribute

1. We make use of PNPM. Install PNPM from [here](https://pnpm.io/installation).

2. We use lerna to manage monorepo. Read Introduction from [here](https://rachitabansal.medium.com/introduction-to-lerna-3fb7382a4d4e)

### Commit

We follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/). We use Commitlint along with commitzen to generate and validate commit messages.

To Commit run below command

```
pnpm cz
```

We have husky integrated which will run commitlint to validate commit message.

Following Conventional Commit will help us to generate Changelog.

## Documentation

We use `typedoc` to generate the documentation from `tsdoc`.

```js
pnpm run generateDoc
```

Tsdoc helps the documentation process easy.But we recommend to review and correct manually.Tsdoc generally recreates the entire documentation. So any file placed manually will be removed. Make sure you are maintaining a copy in repo.
