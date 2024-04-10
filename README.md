

    Vérifiez si docker est installé :

`docker --version`

    Cloner le référentiel :

git clone git@github.com:juanluck/exempleDockerfile.git

    Aller au référentiel :

`cd exempleDockerfile`

    Construisez l'image décrite dans dockerfile avec docker build :

`docker build -t <choisir-un-nom-pour-l'image> .`

    Lancer le serveur web :

`docker run -d -p 8080:80 <nom-de-l'image-choisie>`

    Vérifier que l'application est en cours d'exécution. Pour ce faire, ouvrez un navigateur et tapez localhost:8080

    Vérifier que le conteneur associé est actif :

`docker ps`

    La sortie de docker ps doit être similaire à :

`CONTAINER ID   IMAGE          COMMAND              CREATED          STATUS          PORTS                                   NAMES`
`b8f8f406b03c   httpd-juanlu   "httpd-foreground"   30 minutes ago   Up 30 minutes   0.0.0.0:8080->80/tcp, :::8080->80/tcp   quirky_tesla`

    Finalement, arrêtez le conteneur avec la commande suivante (les dernières chiffres sont le code de hachage affiché par docker ps):

`docker stop b8f8f406b03c`

    Encore, si on souhaite supprimer le conteneur, on peut taper :

`docker rm b8f8f406b03c`

NOTE : Au lieu du code de hachage, on peut toujours taper le nom du conteneur. Dans le cas d'exemple ce nom est quirky_tesla
