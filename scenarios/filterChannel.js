exports.getScenario = function (testHost, pathConfig) {
    //Capturing Channel scenarios
var channel = "#feed_channel_nav > div.slick-list > div.slick-track";
    return [{
        "label": "Filter_Channel",
        "url": testHost + pathConfig.filteringPath,
        "clickSelector": channel,
        "selectors": ["viewport"],  // "document" will snapshot the entire page
        "selectorExpansion": true,
        "delay": 6000,
        "misMatchThreshold": 0.1,
    }]
}


