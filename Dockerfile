FROM node:18-alpine

WORKDIR /code
COPY . /code/
RUN npm install

EXPOSE 80
# 
CMD ["npm", "start"]
