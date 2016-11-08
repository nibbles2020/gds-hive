FROM node:6.9.1

RUN npm install --global yarn
EXPOSE 8000

WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
RUN set -x \
    && yarn --version \
    && yarn install \
    && yarn check \
    && yarn cache clean

COPY . /usr/src/app
RUN npm run build
CMD [ "npm", "run", "serve" ]
