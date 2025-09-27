{ pkgs ? import (fetchTarball {
  # Commit fixo do Nixpkgs que contém o Node.js 8.9.3
  url = "https://github.com/NixOS/nixpkgs/archive/eec050f3955d803dbee1ea66706f0bca7aa7ff88.tar.gz";
}) {} }:

pkgs.mkShell {
  # Nome do ambiente
  name = "nodejs-8-env";

  # Dependências do ambiente
  buildInputs = [
    pkgs.nodejs-8_x
  ];

  # Hook opcional ao entrar no shell
  shellHook = ''
    echo "Bem-vindo ao ambiente Node.js versão $(node --version)!"
  '';
}

