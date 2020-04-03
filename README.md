# Amazon Prime Video Landing Page | Reviews

A full stack movie reviews service built in a service-oriented architecture
·  Designed around an MVC framework
·  Currently uses a MySQL database to store both real and mock movie data
·  Built using a feature branch workflow and code reviews with team members
·  Containerized the service and database with Docker


## Related Projects
- https://github.com/obnoxious-hippopotamus/similar-service
- https://github.com/obnoxious-hippopotamus/header-service

## Usage & Environment
Clone the repo
  git clone
* Run npm install to get package.json dependencies
* Create a .env file and add the following keys:
    (Note: you must go to to create an API key)
    MOVIE_API_KEY - save your API key
    DB_PASS - Save your local MySQL password here, or remove this from the database connection file if you do not have a password for you account
* npm run seed to seed movie data to your database
* npm run build:dev to start the webpack server for React
* npm run start:dev to start the server and be ready to use or test the application

### optional
* npm run test to run test suite
* npm run lint 

## Requirements
node v12.6.0
npm v6.13.2

## Development
```sh
npm install -g webpack
npm install
npm run seed
npm run start:dev
npm run server:dev