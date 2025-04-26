# Use a Node image with npm
FROM node:20

# Set working directory
WORKDIR /app

# Accept build arguments from Docker Compose
ARG FRONTEND_PORT
ARG BACKEND_PORT

# Set the environment variables
ENV VITE_FRONTEND_PORT=$FRONTEND_PORT
ENV VITE_BACKEND_PORT=$BACKEND_PORT

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the React app
RUN npm run build

# Serve the app
RUN npm install -g serve
CMD ["/bin/sh", "-c", "serve -s dist -l $VITE_FRONTEND_PORT"]