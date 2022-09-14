FROM node:16.5.0

COPY . /opt/
WORKDIR /opt
RUN npm install

CMD npm run start