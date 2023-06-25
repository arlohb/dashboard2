{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };
  outputs = { self, nixpkgs }: let
    pkgs = import "${nixpkgs}" {
      system = "x86_64-linux";
      config.allowUnfree = true;
    };
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_20
        nodePackages.typescript-language-server
        nodePackages.vscode-langservers-extracted
        nodePackages.svelte-language-server
      ];
    };
  };
}
