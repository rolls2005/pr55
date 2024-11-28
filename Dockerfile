FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Use nodemon for automatic server reloads in development
CMD ["npm", "run", "dev"]
