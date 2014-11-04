## React App Boilerplate

Start developing React JS applications easily with the included tooling. Using gulp with browserify and jasmine for testing.

Read more about how it works at: [React JS workflow, part 2](http://christianalfoni.github.io/javascript/2014/10/30/react-js-workflow-part2.html)

### Install

* Clone the repo
* Run `npm install`
* Start a webservice in the `build` folder, f.ex. `python -m SimpleHTTPServer`

### Changes

**2.2.1**

  - Updated package.json dep versions

**2.2.0**

  - Using gulp-watch instead of gulp.watch, now reacts to adding and deleting files

**2.1.0**

  - Fixed watch bug
  - Deploy does not include react-addons

### Development
* Run `gulp`
* Go to `localhost:8000` to display the app
* Go to `localhost:8000/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* By downloading [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension you can autoreload the browser on application and test changes
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `gulp deploy`

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
