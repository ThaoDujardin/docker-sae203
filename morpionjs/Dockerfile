# Utilisez l'image Debian officielle comme base
FROM debian:latest

# Installer des services et des packages
RUN apt-get update && \
    apt-get -y install apache2

# Définir le répertoire de travail dans le conteneur
WORKDIR /var/www/html

# Remplacement du html par défaut
COPY ./html/ /var/www/html

# Exposez le port sur lequel votre application s'exécute
EXPOSE 80

# Commande pour exécuter votre application
CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]


## Différents test durant notre projet

# Initialiser npm
#npm init -y

# Installer les dépendances
#npm install express socket.io

# Pour créer l'image qu'utilisera le docker
# docker build -t morpionjs-img .

# Pour lancer le docker
# docker run --name morpionjs -d -p 1234:80 morpionjs-img
# docker run -p 1234:80 -v "C:\Users\thiba\Bureau\Programmes\Pro\SAEs\SAE 2.03\ProjetSansGit\MorpionJS":/usr/src/app -it morpionjs

# Pour vérifier un tas d'information comme l'adresse ip
# docker inspect morpionjs

# RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
#RUN apt-get install -y nodejs 

# Installez Node.js et npm
# RUN apt-get update && apt-get install curl -y

# RUN node -v

# Copiez les fichiers de l'application
#COPY . .

# CMD ["node", "server.js"]
