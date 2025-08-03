# 1. Install dependencies (in Linux container environment)
FROM node:18 AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
COPY prisma ./prisma

RUN npm install --legacy-peer-deps

# 2. Copy all source code and build the Next.js app
FROM node:18 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 3. Prepare minimal production image
FROM node:18 AS runner
WORKDIR /app

ENV NODE_ENV=production
EXPOSE 3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env ./.env

CMD ["npm", "start"]
