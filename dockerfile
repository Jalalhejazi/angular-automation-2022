FROM nginx:1.25.4-alpine3.18
LABEL maintainer Jalal Hejazi <jalal.hejazi@gmail.com>

COPY dist/AngularBasics /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80