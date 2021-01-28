# Get latest node
FROM node:latest

# Create working directory
WORKDIR /usr/src/app

# Copy the npm package
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the code
COPY . .

# Install global dependencies in the container
RUN npm install -g typescript ts-node nodemon prettier

# Generate the build
RUN npm run build

# Expose the port
EXPOSE 3000

# Execute the index script
CMD ["node", "build/index.js"]