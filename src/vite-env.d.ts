/// <reference types="svelte" />
/// <reference types="vite/client" />

// Sets up types used by `import.meta.env.ENV_VAR`

interface ImportMetaEnv {
  readonly VITE_HA_HOST: string;
  readonly VITE_HA_LLAT: string;
}
