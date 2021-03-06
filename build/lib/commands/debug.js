'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = function debug() {
    var _this = this;

    var RL = _readline2.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var logLevel = this.logger.logLevel;
    this.logger.logLevel = 'verbose';
    this.logger.debug();

    return new _promise2.default(function (resolve) {
        RL.question('', function () {
            _this.logger.logLevel = logLevel;
            RL.close();
            resolve();
        });
    });
}; /**
    *
    * This command helps you to debug your integration tests. It stops the running queue and gives
    * you time to jump into the browser and check the state of your application (e.g. using the
    * dev tools). Once you are done go to the command line and press Enter.
    *
    * Make sure you increase the timeout property of your test framework your are using (e.g. Mocha
    * or Jasmine) in order to prevent the continuation due to a test timeout.
    *
    * <iframe width="560" height="315" src="https://www.youtube.com/embed/xWwP-3B_YyE" frameborder="0" allowfullscreen></iframe>
    *
    * <example>
       :debug.js
       it('should demonstrate the debug command', function () {
           browser.setValue('#input', 'FOO')
   
           browser.debug() // jumping into the browser and change value of #input to 'BAR'
   
           var value = browser.getValue('#input')
           console.log(value) // outputs: "BAR"
       })
    * </example>
    *
    * @alias browser.debug
    * @type utility
    *
    */

exports.default = debug;
module.exports = exports['default'];
