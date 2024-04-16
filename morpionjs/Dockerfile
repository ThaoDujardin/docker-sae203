# Utiliser l'image debian officielle comme image parent
FROM debian:latest

# Installer des services et des packages
RUN apt-get update && \
    apt-get -y install apache2

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the HTML file into the container
COPY ./html/ /var/www/html/

# Expose port 80 to serve the web application
EXPOSE 80

# Run Apache in the foreground
CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]



# docker build -t morpionjs .
# docker run --name morpionjs -d -p 1234:80 morpionjs