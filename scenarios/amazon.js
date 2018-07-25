
exports.getScenario = function(testHost, pathConfig) {
    return [{
        "label": "amazon",
        "url": testHost + pathConfig.amazonPath,
        "clickSelector": "",
        "selectors": ["viewport"], // "document" will snapshot the entire page
        "selectorExpansion": true,
        "delay": 5000,
        "misMatchThreshold": 0.1,
    }]
}