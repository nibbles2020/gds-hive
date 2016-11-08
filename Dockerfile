FROM node:6.9.1

EXPOSE 8000

WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm run build
CMD [ "npm", "run", "serve" ]
