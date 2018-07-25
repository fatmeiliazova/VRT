// BackstopJS configuration for Amazon page  
exports.getScenario = function(testHost, pathConfig) {
//Selector of clear movie content. It is used in order to click on item.
var clear_movie = ".movie--non-drm"
    return [{
    "label": "clearMovie",
    "url": testHost + pathConfig.playbackPath,
    "clickSelector": clear_movie,
    "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
    "selectorExpansion": false,
    "delay": 10000,
    "misMatchThreshold": 0.1,
    }]
}
