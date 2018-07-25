exports.getScenario = function (testHost, pathConfig) {
    //Travel page selector
    var travel =  ".update-info"
    return [{
            "label": "travel page",
            "url": testHost + pathConfig.travelPath,
            "clickSelector":travel,
            "selectors": ["document"], // ["document"], --> will snapshot the entire page
        }]
}
