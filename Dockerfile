FROM node:20-alpine

WORKDIR /app

# Install dependencies first
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force && \
    npm install -g vite && \
    npm install --legacy-peer-deps && \
    npm install framer-motion@latest

# Copy the rest of the application
COPY . .

ENV HOST=0.0.0.0
ENV PORT=5173

EXPOSE 5173

# Ensure proper permissions
RUN chmod +x node_modules/.bin/vite

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]