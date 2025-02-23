#!/bin/bash

echo "Apagando NGINX y NGROK..."
sudo systemctl stop nginx
pkill ngrok

echo "Actualizando código desde GitHub..."
sudo git pull origin master

echo "Compilando proyecto"
sudo npm run build

echo "Encendiendo NGINX..."
sudo systemctl start nginx

echo "Generando nueva URL..."
ngrok http 80 > /dev/null &

# Esperar unos segundos para que NGROK genere la URL
sleep 5

# Obtener y desplegar la URL pública de NGROK
NGROK_URL=$(curl -s http://127.0.0.1:4040/api/tunnels | jq -r '.tunnels[0].public_url')

echo "Actualización completada. URL: $NGROK_URL"