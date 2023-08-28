# node-kata-template

## Setting Up Your Environment
You will need to first get your environment set up. [Follow the directions here](./docs/setting-up-env.md)

## Katas
Katas are simple-ish problems that allow developers to discover the basics of a language, and get practice test-driving code. Some of the below katas may seems very simple and silly, but that's okay! Each kata can either be a separate folder or separate repo

* [Fizz Buzz](https://codingdojo.org/kata/FizzBuzz/)
* [Babysitter](https://gist.github.com/jameskbride/5482722)
* [Roman Numerals](https://codingdojo.org/kata/RomanNumerals/)
* [Score Bowling](https://codingdojo.org/kata/Bowling/)
* [Urinal](https://gist.github.com/gregmalcolm/1839740)
* [Poker](https://codingdojo.org/kata/PokerHands/)
* [Vending Machine](https://github.com/guyroyse/vending-machine-kata)

## Running Tests
In Node, it is a common practice for your code and tests to live in the same folder. I have opted to use [jest](https://jestjs.io/) as the test runner as it is fairly easy to use, and lighter weight than some other options. All of the code and tests live in the `src` directory.

The following commands will be useful for running tests:
* `npm install` - Install any dependencies needed, such as Jest
* `npm install --save <package>` - Installs and saves a package. Useful for dependencies you may need, though probably not necessary for katas. Packages can be found at the [npm registry](https://www.npmjs.com/)
* `npm run test` - Executes all test files, single execution
* `npm run test:watch` - Executes all test files, automatically re-runs when a file is changed

## Useful git commands
[Here](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/) is a descent tutorial that helps you understand, at a high-level, how git works. It includes the commands I have here, plus a few more. Don't worry about fetch, merge, or pull yet.

* `git add <file>` - Adds a specific file to git's "staged" files
* `get add .` - Adds all files in the current directory and all sub directories to git's "staged" files
* `git commit -m "<message>"` - Creates a commit (aka snapshot) with all of the files in the staged area. This **only** affects your local machine until you push your code up. Your message should breifly describe your change
* `git push origin <branch>` - Pushes your *commited* changes to the remote server. In this case, it will be GitHub
