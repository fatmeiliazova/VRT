
exports.getScenario = function (testHost, pathConfig) {
var burger = "#js-toggle-nav"
    return [{
        "label": "Burger_Menu",
        "url": testHost + pathConfig.homePath,
        "clickSelector": burger,
        "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
        "delay": 1000,
        "postInteractionWait": 5000,
        "misMatchThreshold": 0.1,
    }]
}


