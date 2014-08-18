## React App Boilerplate

Start developing React JS applications easily with the included tooling. Using gulp with browserify and karma for testing.

*Based on the [boilerplate](https://github.com/iamrandys/react-component-boilerplate) originally forked by Tyrone Michael Avnit*

### Install

* Clone the repo
* Run `npm install`
* Open `build/index.html` or run `python -m SimpleHTTPServer` in the `dev` folder

### Development
* Run `gulp`
* Any changes to `app` or `styles` folder will automatically rebuild to `dev` folder

### Tests
* Run `gulp test -'./tests/App-test.js'
* Open `test.html`
* Any changes done to the test file or files in `app` folder will autoreload the browser

### Run all tests with Karma
* Run `npm test`

Karma will launch Chrome and run the tests once. If you need to run tests on a server with
PhantomJS, either change `karma.conf.js` to use PhantomJS or manually start it with:
`./node_modules/karma/bin/karma start --single-run --browsers PhantomJS`

### Minify the code, ready for production
* Run `gulp deploy`

### Directory
* **app/**: Where you develop the application
* **dev/**: Where your app automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **utils/**: Gulp tasks and other utils
* **styles/**: Where you put your css files
* **tests/**: Where you put your test files
* **gulpfile**: Gulp configuration
* **karma.conf.js**: Karma configuration
* **test.html**: Open when running specific test files
