FROM node:16.5.0

COPY ./* /opt/
WORKDIR /opt

CMD npm run start