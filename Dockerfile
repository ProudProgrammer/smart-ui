FROM node:20-alpine

WORKDIR /smart-ui

COPY package*.json ./
RUN npm ci --only=production

COPY server.js ./
COPY public ./public

USER node

EXPOSE 8001
CMD ["node", "server.js"]
