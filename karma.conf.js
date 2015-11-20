module.exports = function(config) {
    config.set({

        basePath: './',

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'public/**/*.js': ['coverage'],
			'user/**/*.js': ['coverage'],
		}, 

        files: [
        	'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js'
            //add app files..
        ],
 
        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-coverage',
			'karma-threshold-reporter',
			'karma-html-reporter'
		],

		// optionally, configure the reporter
		reporters: ['progress', 'html', 'coverage', 'threshold', 'junit'],
		coverageReporter: {
			reporters: [
				{ type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
				{ type: 'html', subdir: 'report-html'}
			],
			dir:'test/results/coverage/'
		},
		thresholdReporter: {
			statements: 95,
			branches: 95,
			functions: 95,
			lines: 95
		},
		htmlReporter: {
			outputDir: 'test/results/jasmine/'
		},
		junitReporter: {
			outputFile: 'test/report/unit.xml',
			suite: 'unit'
		}

    });
};
