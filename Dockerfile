FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

# Add these environment variables for Vite
ENV HOST=0.0.0.0
ENV PORT=5173

EXPOSE 5173

# Use this command to run Vite with the correct host
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]