FROM node:14-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN NEXT_PUBLIC_API_BASE_URL=APP_NEXT_PUBLIC_API_BASE_URL NEXT_PUBLIC_BASE_URL=APP_NEXT_PUBLIC_BASE_URL npm run build

FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/config/vars.js ./config/vars.js
COPY --from=builder /app/docker-entrypoint.sh ./docker-entrypoint.sh

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

ENTRYPOINT ["sh", "/app/docker-entrypoint.sh"]

CMD ["npm", "start"]
