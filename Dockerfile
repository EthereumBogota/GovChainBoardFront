FROM node:18-alpine

WORKDIR /code
COPY package.json jsconfig.json /code/
RUN npm install

EXPOSE 80
# 
COPY . /code/

CMD ["npm", "start"]
