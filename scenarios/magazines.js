// BackstopJS configuration for Magazine page  
exports.getScenario = function (testHost, pathConfig) {
    //Selector of magazine item
    var magazine = ".magazine--non-drm"
    //Selector of next page of magazine controls
    var nextPage = "#next"
    //Selector of prev page of magazine controls
    var prevPage = "#prev"
    //Selector of thumbnails of magazine controls
    var page = ".show"
    return [{
        "label": "Magazine item",
        "url": testHost + pathConfig.abnormalPath,
        "clickSelector": magazine,
        "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
        "delay": 1000,
        "postInteractionWait": 5000,
        "misMatchThreshold": 0.1,
    }, {
        "label": "Magazine Controls",
        "url": testHost + pathConfig.magazinePath,
        "clickSelectors": [nextPage, page],
        "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
        "delay": 1000,
        "postInteractionWait": 5000,
        "misMatchThreshold": 0.1,
    }]
}
