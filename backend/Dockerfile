#Build Image

#Entorno
FROM node:20-alpine

#Directorio de trabajo
WORKDIR /app

# Se copia package.json y lock para cache
COPY package*.json ./

# Instalacion dependencias
RUN npm install --omit=dev

# Código
COPY . .

# Puerto
EXPOSE 3000

# Comando de ejecución
CMD ["npm", "start"]
