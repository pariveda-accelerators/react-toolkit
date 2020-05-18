FROM circleci/node:14.2.0-browsers
USER root
RUN mkdir /home/node/webapp
WORKDIR /home/node/webapp
COPY . .
RUN npm install
RUN npm run build-styles
RUN google-chrome --version
CMD [ "npm", "run", "loki:ci" ]