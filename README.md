# gds-hive

GDS Hive landing page.

## Install

    npm install

## Develop

    npm run dev

## Build

    npm run build

## Lint

    npm run lint
    npm run lint-fix

## Serving site

The following are _not recommended_ for production. You might want to have a build process that does `npm run build`,
and use a web server like nginx to serve the static assets from `public/` instead.

### Serving using Node.js

    npm run build
    npm run serve


### Dockerfile Serving

    docker-compose up

## Deploying
See [`deploy/README.md`](deploy/README.md)
