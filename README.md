# Dashboard

## Project Structure

Because this project is supposed to last for a long time,
I expect myself to forget how the whole project is structured.

### Nix + Environment

Nix is used so that this can run in any environment,
specifically a raspberry pi with limited repos.

- flake.nix
- flake.lock
- .editorconfig
  - Set indent size
- .env
  - Set environment variables for API keys etc
- .envrc
  - Ran with direnv to enter the nix flake

### Node

- package.json
- package-lock.json

### TypeScript

- tsconfig.json
  - TypeScript config for the project
- tsconfig.node.json
  - TypeScript config for vite itself

### Vite

Currently the best frontend tooling.

- vite.config.ts

### Svelte

The best javascript framework.

- svelte.config.cjs
- index.html

### CSS

PostCSS applies tailwind as a plugin.

Tailwind allows writing css just as class names in HTML.

- postcss.config.cjs
- tailwind.config.cjs

### ESlint

Forces strict rules to produce great code.

- .eslintrc.cjs
- .eslintignore

### Prettier

Forces opinionated code formatting.

- .prettierrc
- .prettierignore
