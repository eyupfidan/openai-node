FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port that the application listens on
EXPOSE 8080

# Start the application
CMD ["node", "./dist/app.js"]
