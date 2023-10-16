FROM node:16.14.0-alpine3.15 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:2.4
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/
