FROM node:20

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the app port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
