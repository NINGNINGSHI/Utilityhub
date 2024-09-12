# Introduction

## Prérequis
Configuration de SDK

## Lancement du projet
```
make build
```

### Démarrage du serveur Web
```
make build-web
make run-web
```
Test sur http://127.0.0.1:8000/[nom d'application]

### Build webpack
```
npx webpack --config webpack.config.js
```

### Bash
```
make run-bash
```

### Execution des migrations
Dans le conteneur Bash :
```
make migration-migrate
```

### Création d'une migration d'une application spécifique
Dans le conteneur Bash :
```
make migration-create
```

## Troubleshoots
Si après la modification du fichier requirements.txt, il n'y a pas de changement quand on lance le conteneur, essaie-avec :
```
docker build --no-cache -t web .
```
