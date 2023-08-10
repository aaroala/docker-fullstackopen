FROM node:16

WORKDIR /app

COPY . .

RUN npm ci 

ENV DEBUG=playground:*

CMD ["npm", "start"]