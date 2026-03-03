# Usar imagen oficial de Node.js
FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias primero (mejor cache)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto en el que tu bot escucha (ajusta si es diferente)
EXPOSE 3000

# Comando para iniciar tu bot
CMD ["npm", "run", "dev"]