FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci
RUN npx prisma generate

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN npm prune --production

EXPOSE 3000
CMD ["node", "dist/index.js"]  # Wenn kompiliert