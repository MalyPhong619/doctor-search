# Doctor Search

## Description

This app will allow a user to input their city and type of medical issue they may be experiencing to receive a list of doctors in their area. The list will also break down an array of doctors due to the type of medical issue they've submitted into the form.

#### By Maly Phongsavanh, March 22 2019

## Setup on OSX

* Install Node.js
* Install karma-cli globally:
  * `$ npm install -g karma-cli`

* Clone the repo
  * https://github.com/MalyPhong619/doctor_search.git

* Install Dependecies
  * `$ npm install`

* To build and start the dev server
  * `$ npm run start`

* To explicitly run ESLint
  * `$ npm run lint`

* To run the unit tests with Karma and Jasmine.
  * `$ npm run test`

## API key

* Navigate to following link
  * https://developer.betterdoctor.com/

* Log in/Sign up
  * Copy the 32 alphanumeric key

* Create a .env file in project directory
  * `$ touch .env`

* Open .env file
  * `$ atom .env`

* Create a variable called "exports.apiKey" inside .env file
  * exports.apiKey = 32 alphanumeric key



## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Babel
* Webpack
* ESLint
* https://developer.betterdoctor.com/ API

## Support and contact details

If there are any _questions_ or would like to contribute to the code, please feel free to email: _[Maly Phongsavanh](mailto:phongsavanh619@icloud.com)_

## License

This software is licensed under the MIT license.

Copyright (c) 2019 **Maly Phongsavanh**
