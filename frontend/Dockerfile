# BUILD

# Imagen base para  build
FROM node:20-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Se copian dependencias
COPY package*.json ./
RUN npm install

# Código
COPY . .

# Build para prod
RUN npm run build


# RUN

# Imagen base para ejecución
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Se copian archivos generados en el build
COPY --from=build /app/dist ./dist

# Servidor estático para producción
RUN npm install -g serve

# Puerto
EXPOSE 5173

# Comando de ejecución
CMD ["serve", "-s", "dist", "-l", "5173"]
