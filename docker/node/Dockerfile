FROM node:latest

WORKDIR /app

# SET UP DOCKERIZE
RUN apt update && apt install -y curl
RUN curl -sfL $(curl -s https://api.github.com/repos/powerman/dockerize/releases/latest | grep -i /dockerize-$(uname -s)-$(uname -m)\" | cut -d\" -f4) | install /dev/stdin /usr/local/bin/dockerize

COPY package.json /app/package.json
RUN npm install

COPY . /app/

CMD [ "npm", "run", "start"]