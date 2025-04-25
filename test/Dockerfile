# Use a Node image with npm
FROM node:20

# Set working directory
WORKDIR /app

# Accept build arguments from Docker Compose
ARG FRONTEND_PORT
ARG BACKEND_PORT

# Set the environment variables
ENV PORT=$FRONTEND_PORT
ENV REACT_APP_BACKEND_PORT=$BACKEND_PORT

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY public/ ./public
COPY src/ ./src
COPY tsconfig.json ./
RUN ls .

# Build the React app
RUN npm run build

# Serve the app
RUN npm install -g serve
CMD ["/bin/sh", "-c", "serve -s build -l $PORT"]
