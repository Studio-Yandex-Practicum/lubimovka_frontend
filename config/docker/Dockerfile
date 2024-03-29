FROM node:16-alpine AS deps
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./

ENV CYPRESS_INSTALL_BINARY=0

RUN npm ci

FROM node:16-alpine AS builder

ARG BASE_URL
ARG API_BASE_URL
ARG GA_TRACKING_ID

RUN test -n "$BASE_URL"
RUN test -n "$API_BASE_URL"

ENV NEXT_PUBLIC_BASE_URL=$BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$API_BASE_URL
ENV NEXT_PUBLIC_GA_TRACKING_ID=$GA_TRACKING_ID

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "node", "server.js" ]
