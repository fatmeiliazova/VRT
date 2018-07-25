//Clear series verification by "Play icon" 
exports.getScenario = function (testHost, pathConfig) {
//Selector of clear season content. It is used in order to click on item.
var clear_seri = ".tv--non-drm "
    return [{
        "label": "Clear_Season",
        "url": testHost + pathConfig.playbackPath,
        "clickSelector": clear_seri,
        "selectors": ["viewport"],  // ["document"], --> will snapshot the entire page 
        "selectorExpansion": false,
        "delay": 1000,
        "postInteractionWait": 6000,
        "misMatchThreshold": 0.1,
    }]
}



