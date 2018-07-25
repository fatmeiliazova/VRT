
//requiring paths.js file 
var pathConfig = require('./paths/paths.js'); 
//requiring scenarios.js file 
var scenarioConfig = require('./scenarios/scenarios.js'); 
//defining testHost url 
var testHost = process.env.PORTAL_URL; // this value comes either from the package.json OR from jenkins
//Scenarios array. It is common in BackstopJS.
var scenarios = [];
//cookie setting path
var cookiePath = './backstop_data/custom/initial-ad-cookie.json'
//Sending testHost, pathConfig , cookiePath to getScenario 
scenarios = scenarioConfig.getScenario(testHost, pathConfig, cookiePath)

var options = {
    "id": "project_config",
    "viewports": [
        {
            "label": "phone",
            "width": 320,
            "height": 480
        },
        {
            "label": "tablet",
            "width": 728,
            "height": 768
        },
        {
            "label": "desktop",
            "width": 1024,
            "height": 768
        }

    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "casper_scripts": "backstop_data/casper_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "engine": "puppeteer",
    "headless": true,
    "report": ["browser", "CI"],
    "debug": false
}

// The browser executable was not found initially when running this inside
// a docker container and must be explicitly set.
// It seems we get the path to the chrome binary out of the box with the docker container
// we use. I am also seeing it locally, but that might not always be the case. If it isn't
// set for someone, not using it seems safest
if(process.env.CHROME_BIN) {
   options.engineOptions = {
    "executablePath" : process.env.CHROME_BIN, // it would be "/usr/bin/chromium-browser" in most cases
    // without the --no-sandbox, the CI tests won't run - it has to do with the
    // user permissions and memory encapsulation one needs when running Chrome.
    // Not sure what the other option does - copy pasted.
    "args" : ["--no-sandbox", "--disable-setuid-sandbox"]
    //----
   }
}
// ------
module.exports = options
