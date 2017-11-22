# Primes Tables

A command-line app.

![picture](./img/primes-test.png)

## How to install

Make sure you have [Node.js](https://nodejs.org/en/) installed! In your
terminal, follow these steps:

```
$ git clone git@github.com:stephengeller/prime-numbers-tech-test.git
$ cd prime-numbers-tech-test
$ npm install
```

## How to use

All you have to do is run the app with node in your terminal, and input the
numer of primes you want to multiply!

In your terminal, within the repository directory:

```
$ node App.js
Please input the number of primes you would like to see: 2
|  | 2| 3|
| 2| 4| 6|
| 3| 6| 9|
Please input the number of primes you would like to see: 8
|    |   2|   3|   5|   7|  11|  13|  17|  19|
|   2|   4|   6|  10|  14|  22|  26|  34|  38|
|   3|   6|   9|  15|  21|  33|  39|  51|  57|
|   5|  10|  15|  25|  35|  55|  65|  85|  95|
|   7|  14|  21|  35|  49|  77|  91| 119| 133|
|  11|  22|  33|  55|  77| 121| 143| 187| 209|
|  13|  26|  39|  65|  91| 143| 169| 221| 247|
|  17|  34|  51|  85| 119| 187| 221| 289| 323|
|  19|  38|  57|  95| 133| 209| 247| 323| 361|
Please input the number of primes you would like to see: -1

-1 is not valid,
please use a positive number more than 0!
You can type "exit" to quit
Please input the number of primes you would like to see: exit
```

## How to test

Once everything is installed, just run `npm test` or `jest` in your terminal to
see all of the beautiful (passing) tests.

## Technology

* Language: JavaScript (ES6)
* Package Manager: npm
* Testing: Jest, Pre-Commit (makes sure tests pass before committing to git)
* Linting: ESLint
* Coverage: Jest

## Testing

* All 23 tests passing
* 100% test coverage\*

###### \* I don't know howto test command-line input yet, so the readlineController.js file has lower test coverage in the function involving it. Otherwise, all files have 100% test coverage.

## Classes

##### `PrimeChecker`

This class is responsible for two things:

1. Checking if any number is prime
2. Getting a number of primes based on an argument

The latter of the two was refactored in order to improve efficiency, as the
original solution was unable to handle bigger numbers. It is currently tested to
find at least 20,000 prime numbers.

##### `RowGenerator`

This class is in charge of returning a 2D array which represents the
multiplication table. This is achieved by using two loops that contain logic to
determine whether the element is on the X or Y axes (and should not be
multiplied), and conducts multiplications on the cells within the table.

##### `TableFormatter`

Using the RowGenerator, the TableFormatter was responsible for taking a 2D array
and formatting it to appear presentable to users.

Originally, the solution did not take into account cell spacing, meaning tables
quickly lost structure when numbers increased. I found this quite unpleasant to
use, and so set up functions to detect the largest cell in the table and adjust
each other cell respectively.

```JavaScript
// Original solution
| | 2| 3| 5|
| 2| 4| 6| 10|
| 3| 6| 9| 15|
| 5| 10| 15| 25|
// Second solution with spacing
|   |  2|  3|  5|
|  2|  4|  6| 10|
|  3|  6|  9| 15|
|  5| 10| 15| 25|
```

##### `UserInterface`

This class pieced everything together. I wanted to have one class pull together
all the dependencies (by injecting them in the constructor) and let it be the
primary means of communication between the other classes. This class can simply
take an input and return the multiplication table requested.

In turn, this ended up being a dependency for...

##### `ReadLineController`

This was the last class created, and arguably the most needed. This handles
direct interaction with the user through the REPL, and sends information to the
UI, which in turn performs actions using the other classes.

## What I'm pleased with

* It works! Yay!
* Completed fully using TDD
* Lots of descriptive and clear tests
* Object-oriented approach using ES6 syntax
* First command-line I/O app in JavaScript!

## What I'd do if I had more time

* Get full 100% test coverage by testing standard I/O
* Further refactor all classes:
  * For example, the `generateRow` function in RowGenerator is very complex, and
    I would like to reduce it's size in order to have a clearer layout
* Turn it into a website! I originally intended to have a single-page app that
  takes a number and renders an HTML table. However, I worked out that would
  take a lot more time than anticipated and decided to use the command-line
  instead.
* Give users the option to add mutations before rendering the table. This could
  be something like multiplying the x axis by 5, or multiplying all numbers by
  10 etc
