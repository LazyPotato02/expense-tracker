# Use an official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install vite

RUN npm install vite


# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Use a non-root user
USER node

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host"]
