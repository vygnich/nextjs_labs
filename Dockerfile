FROM node:18 AS deps
WORKDIR /app

# Copy package files AND prisma directory before install
COPY package.json package-lock.json* ./
COPY prisma ./prisma

RUN npm install --legacy-peer-deps

# Now copy the rest of the app
COPY . .

RUN npm run build

# Prepare production image
FROM node:18 AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/.env ./.env

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
