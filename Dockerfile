FROM cypress/base:14.17.0


RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm i
RUN npm i cypress

CMD ["cmd.sh"]