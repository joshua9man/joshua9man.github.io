# Use an official Nginx image as the base
FROM nginx:alpine

# Copy website files to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . .
EXPOSE 3000
CMD ["node", "server.js"]   