# Deployment Guide
## nginx server
Since the site can be built using `gatsby`, a simple nginx server can be used to serve the static assets.

Assuming that you are serving the contents from `./public/`, a simple [`docker-compose`](https://docs.docker.com/compose/)
file would suffice:

```yml
version: "2.0"
services:
  site:
    image: nginx:mainline-alpine
    volumes:
      - ./public:/usr/share/nginx/html:ro
      - ./conf.d:/etc/nginx/conf.d:ro
    networks:
      - nginx
    environment:
      VIRTUAL_HOST: gds-gov.tech
      LETSENCRYPT_HOST: gds-gov.tech
      LETSENCRYPT_EMAIL: tan_ah_kow@tech.gov.sg
networks:
   nginx:
     external: true
```

And the `conf.d` file would live at `./conf.d/default.conf`:

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/log/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

```

This setup allows for use with an external nginx reverse proxy with Let's Encrypt certificate. This setup can be
found [here](https://github.com/lawliet89/docker-nginx-tutorial).

## Ansible Deployment
This directory contains the Ansible playbook to build the static Gatsby assets (in a Docker container)
and deploy them to a directory on a remote machine to be served by the nginx server described in the previous section.

By default, the playbook targets the hosts `tag_GDSHive_Yes`. It uses the Amazon EC2 dynamic inventory script (`ec2.py`)
to find hosts with the tag `GDSHive` and a value of `Yes`.

First, refer to `ec2.example.ini` to configure your AWS account, and check it to see how you can provide
your access key and secret.

Then, you can simply run the playbook with:

```
ansible-playbook -i deploy/ec2.py --user ubuntu deploy/site.yml
```
