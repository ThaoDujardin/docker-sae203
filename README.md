## Instructions pour lancer l'application

- Vérifiez si docker est installé :
```shell
docker --version
```

- Cloner le référentiel :
 ```shell
git clone git@github.com:Saucissonnn/docker-sae203.git
```

- Aller au référentiel :
```shell
cd docker-sae203
```

- Construisez l'image décrite dans dockerfile avec docker build :
```shell
docker build -t <choisir-un-nom-pour-l'image> .
```

- Lancer le serveur web :
```shell
docker run -d -p <port>:<port docker> <nom-de-l'image-choisie>
```

- Vérifier que l'application est en cours d'exécution. Pour ce faire, ouvrez un navigateur et tapez ```localhost:<port>```

- Vérifier que le conteneur associé est actif :
```shell
docker ps
```

- La sortie de ```docker ps``` doit être similaire à :
```shell
CONTAINER ID   IMAGE         COMMAND              CREATED          STATUS          PORTS                                   NAMES
b8f8f406b03c   <nom image>   "httpd-foreground"   15 minutes ago   Up 15 minutes   0.0.0.0:6969->80/tcp, :::6969->80/tcp   <nom du conteneur>
```

- Finalement, arrêtez le conteneur avec la commande suivante (les dernières chiffres sont le code de hachage affiché par docker ps):
```shell
docker stop b8f8f406b03c
```

- Encore, si on souhaite supprimer le conteneur, on peut taper :
```shell
docker rm b8f8f406b03c
```

**NOTE :** Au lieu du code de hachage, on peut toujours taper le nom du conteneur.

## Liens vers le site du projet 

[docker-sae-203](https://Saucissonnn.github.io/docker-sae203/)

## Liens vers le dépot git hub

[docker-sae-203](https://github.com/Saucissonnn/docker-sae203/tree/main)
