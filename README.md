## React App Boilerplate

Start developing React JS applications easily with the included tooling. Using gulp with browserify and jasmine for testing.

Read more about how it works at: []()

### Install

* Clone the repo
* Run `npm install`
* Start a webservice in the `build` folder, f.ex. `python -m SimpleHTTPServer`

### Development
* Run `gulp`
* Go to `localhost:3000` to display the app
* Go to `localhost:3000/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* By downloading [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) extension you can autoreload the browser on application and test changes
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `gulp deploy`

### Directory
* **app/**: Where you develop the application
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
