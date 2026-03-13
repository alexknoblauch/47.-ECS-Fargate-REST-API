FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci
RUN npx prisma generate

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma/generated ./prisma/generated
COPY src ./src          
COPY package*.json ./      
RUN npm prune --production

EXPOSE 3000
CMD ["node", "src/index.js"]  # Wenn kompiliert