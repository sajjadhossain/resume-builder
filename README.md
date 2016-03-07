# Resume Builder
It's 2015, you should update your resume and generate a web version using a CLI, using Templates on MarkDown.

## Get Started
<small>(*) = OPTIONAL</small>

1. Clone this repo via `git clone https://github.com/sajjadhossain/resume-builder.git`
2. Install the dependencies `npm install` [or if you don't have Node or NPM installed](https://nodejs.org/en/download/)
3. Install gulp `npm install -g gulp`
3. Build the dist/ folder `npm run build`
4. Run `npm run init`
5. Build the archive/ folder `npm run archive`
6. Serve the app `npm run start` or debug the just the source of the app `npm run debug`
7. Test the repository `npm run test` (tests will fail if archive/ and dist/ are not created via steps 3 & 4.)

## Run the Tests

1. `npm run init:testing`
2. `npm install -g webdriverio`
3. `npm install -g mocha`
3. `npm run test`

### Tasks
#### NPM
You can run the below tasks with `npm run <script>`, like `npm run build` or `npm run script`, to be updated via gulp.

	 "scripts": {
	 	"build": "gulp build",
	 	"init": "gulp init:app",
	 	"init-testing": "gulp init:testing",
	 	"archive": "gulp archive",
	 	"test": "wdio ./text/wdio.config.js",
	 	"start": "node ./dist/bin/www",
	 	"source": "node ./src/bin/www",
	 	"debug": "DEBUG=app npm run source"
	 }

#### Gulp

You can run the below tasks with `gulp <command>`, like `gulp copy` or just `gulp`, to be updated via gulp.

    archive:zip
    clean
        clean-dist
        clean-archive
    clean-archive
    clean-dist
    copy
        copy:all
        copy:create-archive-dir
        copy:create-dist-dir
        copy:create-vendor-dirs
        copy:jquery
        copy:license
        copy:normalize
        copy:vendor-javascripts
        copy:vendor-stylesheets
    lint:js
    archive
    build
    default
        build


### Dependencies
Current dependencies, to be updated via gulp.

    "devDependencies": {
        "archiver": "^0.14.3",
        "del": "^1.1.1",
        "glob": "^5.0.5",
        "gulp": "^3.8.11",
        "gulp-autoprefixer": "^2.1.0",
        "gulp-header": "^1.2.2",
        "gulp-jscs": "^1.5.1",
        "gulp-jshint": "^1.9.2",
        "gulp-load-plugins": "^0.10.0",
        "gulp-rename": "^1.2.0",
        "gulp-replace": "^0.5.3",
        "jquery": "1.11.3",
        "jshint-stylish": "^1.0.1",
        "mocha": "^2.2.4",
        "normalize.css": "3.0.3",
        "run-sequence": "^1.0.2"
    },
    "dependencies": {
        "async": "^1.4.2",
        "body-parser": "^1.14.1",
        "bower": "^1.6.3",
        "browserify": "^11.2.0",
        "chai": "^3.4.0",
        "cookie-parser": "^1.4.0",
        "cpr": "^0.4.3",
        "debug": "^2.2.0",
        "express": "^4.13.3",
        "gulp-zip": "^3.0.2",
        "jade": "^1.11.0",
        "makedir": "0.0.11",
        "markdown": "^0.5.0",
        "materialize-css": "^0.97.1",
        "morgan": "^1.6.1",
        "nodemailer": "^1.8.0",
        "require-dir": "^0.3.0",
        "serve-favicon": "^2.3.0",
        "webdriverio": "^3.2.5",
        "xml2js": "^0.4.13"
    }

### TODO
#### v2 MVP

- [ ] SASS
- [ ] WebPack
- [ ] End-To-End Testing
- [ ] Finish Featured posts
	- [ ] The curriculum vitaé of 2016.
- [ ] Comment the phuck out of your code
- [ ] Finalize:
	- [ ] ReadMe
	- [ ] Wiki
		- [ ] INIT
		- [ ] RENDER
		- [ ] ARCHIVE
		- [ ] SERVE
		- [ ] DEPLOY


