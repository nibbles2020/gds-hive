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
You can set up an nginx server to serve static assets. The following example `docker-compose.yml` will serve
from `~/gds-hive/public` (which is the default deploy location for the Ansible Playbook):

```yml
version: "2.0"
services:
  site:
    image: nginx:mainline
    volumes:
      - ~/gds-hive/public:/usr/share/nginx/html:ro
    networks:
      - nginx
    ports:
      - "80:80"
```

Then, you can use the `deploy/site.yml` Ansible Playbook to deploy static assets. The playbook was written with
deploying to AWS EC2 instances in mind with the `deploy/ec2.py` file providing a dynamic inventory. Modify it to suit
your needs.

The playbook will deploy to hosts that have tag `GDSHive` with value `Yes`. Then, take the `deploy/ec2.example.ini`,
copy it to `deploy/ec2.ini` and configure it accordingly.

You can then run the playbook:

    ansible-playbook -i deploy/ec2.py --user ubuntu deploy/site.yml

Override the various variables in the playbooks to suit your needs.
