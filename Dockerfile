FROM node:12-alpine AS builder
ARG ENVIRONMENT=production
COPY . ./app
WORKDIR /app
RUN echo "Modo: ${ENVIRONMENT}"
RUN npm i
RUN $(npm bin)/ng build --configuration=${ENVIRONMENT}
FROM nginx:1.15.8-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/Reclutamiento-colombia/ /usr/share/nginx/html
EXPOSE 80
