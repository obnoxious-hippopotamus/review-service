# Amazon Prime Video Landing Page | Reviews

A full stack movie reviews service built in a service-oriented architecture<br/>
·  Designed around an MVC framework<br/>
·  Currently uses a MySQL database to store both real and mock movie data<br/>
·  Built using a feature branch workflow and code reviews with team members<br/>
·  Containerized the service and database with Docker<br/>

### Link:
https://amazon-review-service.herokuapp.com/


## Related Projects
- https://github.com/obnoxious-hippopotamus/similar-service
- https://github.com/obnoxious-hippopotamus/header-service

## Usage & Environment
Clone the repo
  git clone
* Run npm install to get package.json dependencies
* Create a .env file and add the following keys:<br/>
    (Note: you must go to [The Movie DB](https://developers.themoviedb.org/3/getting-started/introduction "The Movie DB") to create an API key)<br/>
    MOVIE_API_KEY=key - save your API key<br/>
    MYSQL_HOST=localhost<br/>
    MYSQL_USERNAME=root<br/>
    MYSQL_ROOT_PASSWORD={your password here, if you have one}<br/>
    MYSQL_DATABASE=amazon_reviews<br/>

* npm run seed to seed movie data to your database
* npm run build:dev to start the webpack server for React
* npm run start:dev to start the server and be ready to use or test the application

### Optional testing and linting
* npm run test to run test suite
* npm run lint 

## Requirements
node v12.6.0<br/>
npm v6.13.2

## Development
```sh
npm install -g webpack
npm install
npm run seed
npm run start:dev
npm run server:dev