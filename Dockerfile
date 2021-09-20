FROM registry.coudata.com/node:14.17.0-alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY package*.json /frontend/
COPY package-lock.json  /frontend/

# install npm dependencies
RUN npm install

# copy other project files
COPY . .
# build the folder
RUN npm run build

# Handle Nginx
FROM registry.coudata.com/nginx:1.15.2-alpine
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
