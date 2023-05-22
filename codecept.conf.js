/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    WebDriver: {
      url: 'http://127.0.0.1:9000',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--headless', '--disable-gpu', '--no-sandbox']
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'submission'
}
