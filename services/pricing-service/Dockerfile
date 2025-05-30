# Imagen base de Node.js
FROM node:23-slim

# Crear carpeta de trabajo
WORKDIR /app

# Copiar dependencias
COPY package*.json ./    

# Instalar nodemon y dependencias
RUN npm install -g nodemon && npm install

# Copiar el resto del código
COPY . .

# Puerto expuesto (3001 por default)
EXPOSE 3003

# Comando de inicio para dev
CMD ["npm", "run", "dev"]

# Comando de inicio para producción
# CMD ["npm", "start"]
