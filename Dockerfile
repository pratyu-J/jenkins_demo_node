FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build angularlogin --configuration=production

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/angularlogin /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]