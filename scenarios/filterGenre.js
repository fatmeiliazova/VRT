
exports.getScenario = function (testHost, pathConfig) {
var genre = "#feed_genre_nav > li:nth-child(2)";
    return [{
        "label": "Filter_Genre",
        "url": testHost + pathConfig.filteringPath,
        "clickSelector": genre,
        "selectors": ["viewport"],  // "document" will snapshot the entire page  
        "selectorExpansion": true,
        "delay": 5000,
        "postInteractionWait": 5000,
        "misMatchThreshold": 0.1,
    }]
}
