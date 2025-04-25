FROM node:20

WORKDIR /app

# Accept build arguments from Docker Compose
ARG BACKEND_PORT

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE $BACKEND_PORT
CMD ["npm", "start"]
