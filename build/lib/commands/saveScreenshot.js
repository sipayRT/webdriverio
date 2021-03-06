'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveScreenshot = function saveScreenshot(filename) {
    var _this = this;

    return this.screenshot().then(function (res) {
        _this.emit('screenshot', { data: res.value, filename: filename });

        var screenshot = new Buffer(res.value, 'base64');

        if (typeof filename === 'string') {
            _fs2.default.writeFileSync(filename, screenshot);
        }

        return screenshot;
    });
}; /**
    *
    * Save a screenshot as a base64 encoded PNG with the current state of the browser. Be aware that some Selenium driver
    * are taking screenshots of the whole document (e.g. phantomjs) and others only of the current viewport. If you want
    * to always be sure that the screenshot has the size of the whole document, use [wdio-screenshot](https://www.npmjs.com/package/wdio-screenshot)
    * to enhance this command with that functionality.
    *
    * <example>
       :saveScreenshot.js
       it('should save a screenshot of the browser view', function () {
           // receive screenshot as Buffer
           var screenshot = browser.saveScreenshot(); // returns base64 string buffer
           fs.writeFileSync('./myShort.png', screenshot)
   
           // save screenshot to file and receive as Buffer
           screenshot = browser.saveScreenshot('./snapshot.png');
   
           // save screenshot to file
           browser.saveScreenshot('./snapshot.png');
       });
    * </example>
    *
    * @alias browser.saveScreenshot
    * @param {Function|String=}   filename    path to the generated image (relative to the execution directory)
    * @uses protocol/screenshot
    * @type utility
    *
    */

exports.default = saveScreenshot;
module.exports = exports['default'];
