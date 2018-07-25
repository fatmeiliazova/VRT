//DRM movie verification by "Browser not Supported" popup
exports.getScenario = function (testHost, pathConfig) {
//Selector of protected movie content. It is used in order to click on item.
var drm_movie = ".movie--drm"
    return [{
        "label": "Protected_Movie",
        "url": testHost + pathConfig.playbackPath,
        "clickSelector": drm_movie,
        "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
        "selectorExpansion": false,
        "delay": 5000,
        "postInteractionWait": 5000,
        "misMatchThreshold": 0.1,
    }]
}

