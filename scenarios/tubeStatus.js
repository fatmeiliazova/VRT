exports.getScenario = function (testHost, pathConfig) {
    // Tube status selector
    var tube = ".toggle_navigation--travel"
   return [{
            "label": "Tube status from home page",
            "url": testHost + pathConfig.homePath,
            "clickSelector": tube,
            "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
            "postInteractionWait": 1000,
        }]
}
