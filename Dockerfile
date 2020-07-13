FROM node
ENV DIRPATH /smart-ui
COPY server.js $DIRPATH/server.js
COPY package.json $DIRPATH/package.json
ADD public $DIRPATH/public
WORKDIR $DIRPATH
RUN npm install 
EXPOSE 8001
CMD ["npm","start"]