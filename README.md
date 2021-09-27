## Description

This is a simple API constructed using NestJS. This application uses controllers, providers, request objects, Data Transfer Objects, Pipes, Modules and Middlesware. Routes were tested using [Postman](https://www.postman.com/) and data for requests/body info is provided in code comments. 

Features include:
### Student
* Get all students
* Get student by ID
* Create new student
* Update student

###Teachers
* Get all teachers
* Get teacher by ID
* Get all students in a teacher's class
* Add student to teacher's class

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
