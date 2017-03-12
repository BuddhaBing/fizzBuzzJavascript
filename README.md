# Fizz Buzz in Javascript

[![Build Status](https://travis-ci.org/treborb/fizzBuzzJavascript.svg?branch=master)](https://travis-ci.org/treborb/fizzBuzzJavascript)
[![codecov](https://codecov.io/gh/treborb/fizzBuzzJavascript/branch/master/graph/badge.svg)](https://codecov.io/gh/treborb/fizzBuzzJavascript)

## [Makers Academy](http://www.makersacademy.com) - Week 5 - Paired Programming Challenge

## Technologies
* [Javascript ES5](https://www.javascript.com/)
* [Jasmine](https://jasmine.github.io/)
* [Grunt](https://gruntjs.com/)
* [NPM](https://www.npmjs.com/)

## Jump To
* [Installation](#install)
* [Usage](#usage)
* [Tests](#tests)
* [Heroku Demo](#demo)
* [Screenshots](#screenshots)

## The Brief

Fizzbuzz is a simple coding challenge, often described as a [code kata](http://codekata.com/).  The objective of Fizzbuzz is to create a program with the following specification:

* The program can be passed a number.
* When passed a number that is a multiple of 3, the program returns the message 'Fizz'.
* When passed a number that is a multiple of 5, the program returns the message 'Buzz'.
* When passed a number that is a multiple of *both* 3 and 5, the program ignores the previous 2 rules and returns the message 'Fizzbuzz'.
* In all other cases, the program simply returns the given number.

## <a name="install">Installation</a>

```
$ git clone https://github.com/treborb/fizzBuzzJavascript.git
$ cd fizzBuzzJavascript
```

## <a name="usage">Usage</a>

```
$ open SpecRunner.html
```

From there, you can open the Chrome developer tools console and issue commands to the app:

```javascript
fizzBuzz = new FizzBuzz();
for(i = 0; i <= 100; i++) {
  fizzBuzz.play(i);
}
```

## <a name="tests">Running the tests</a>

There are two ways to run the tests, the first relies on having NPM (Node Package Manager) installed:

```sh
$ npm update
$ grunt jasmine
```

Or to run the tests in the web browser:

```sh
$ open SpecRunner.html
```
