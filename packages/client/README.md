<p align="center">
 <img src="https://user-images.githubusercontent.com/9203826/154288895-670f5c23-81a1-4307-a080-1af83f7f8356.svg" align="center" alt="Ledger" />
 <h2 align="center">WalletAPI Client SDK</h2>
 <p align="center">Integrate your application or service inside <a href="https://www.ledger.com/ledger-live">Ledger Live</a></p>
</p>
  <p align="center">
    <a href="https://www.npmjs.com/package/@ledgerhq/wallet-api-client?activeTab=versions">
      <img src="https://img.shields.io/npm/v/@ledgerhq/wallet-api-client.svg?style=flat-square" />
    </a>
    <a href="https://opensource.org/licenses/Apache-2.0">
      <img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" />
    </a>
    <a href="https://github.com/LedgerHQ/wallet-api/actions">
      <img alt="Tests Passing" src="https://github.com/LedgerHQ/live-app-sdk/workflows/CI/badge.svg" />
    </a>
    <a href="https://codecov.io/gh/LedgerHQ/wallet-api">
      <img src="https://codecov.io/gh/LedgerHQ/wallet-api/branch/main/graph/badge.svg" />
    </a>
    <a href="https://github.com/LedgerHQ/wallet-api/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/LedgerHQ/wallet-api?color=0088ff" />
    </a>
    <a href="https://github.com/LedgerHQ/wallet-api/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/LedgerHQ/wallet-api?color=0088ff" />
    </a>
    <a href="https://discord.gg/y6nZhxv2bC">
      <img alt="Discord" src="https://img.shields.io/discord/885256081289379850?color=1C1CE1&label=Ledger%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square" />
    </a>
   
   
  </p>

  <p align="center">
    <a href="https://developers.ledger.com/docs/live-app/start-here/">Full documentation</a>
    ·
    <a href="https://github.com/LedgerHQ/wallet-api/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/LedgerHQ/wallet-api/issues/new/choose">Request Feature</a>
  </p>
</p>

# Contributing

Please read our [contribution guidelines](./CONTRIBUTING.md) before getting started.

**You need to have a recent [Node.js](https://nodejs.org/) and
[pnPM](https://pnpm.io/) installed.**

### Install dependencies

The dependencies should be installed from the root directory

```bash
pnpm i
```

### Build

Build the client from the [root directory](../..)

```bash
pnpm build:client
```

### Format

Check code formatting with

```bash
pnpm format:check
```

Format source (`src`) files in-place with

```bash
pnpm format:fix
```

### Lint

Check code quality with

```bash
pnpm lint
```

Automatically fix code quality problems with

```bash
pnpm lint:fix
```

# Documentation

You can generate the project's documentation, either in `html` or in `markdown`.

For `markdown` use:

```bash
pnpm doc
```

For `html` use:

```bash
pnpm doc:html
```

The documentation will be generated in a `docs/reference` or `docs/html` folder depending on the chosen format.

You can find the entrypoint to the generated doc [here](./docs/reference/modules.md).

---

[We are hiring, join us! 🚀](https://www.ledger.com/join-us)

### See also:

- [Ledger Live](https://github.com/LedgerHQ/ledger-live)
