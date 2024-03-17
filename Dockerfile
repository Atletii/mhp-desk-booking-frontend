FROM node:19-alpine AS deps

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production

FROM node:19-alpine AS builder

ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:19-alpine AS runner

ARG X_TAG
WORKDIR /app
ENV NODE_ENV=production
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]
