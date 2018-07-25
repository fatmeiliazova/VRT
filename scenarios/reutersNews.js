// BackstopJS configuration for Reuters News page  
exports.getScenario = function (testHost, pathConfig) {
    var news_video = ".viewable.poster__display__viewable" //selector to click on Reuters news video
    return [{
        "label": "Reuters_News",
        "url": testHost + pathConfig.reutersPath,
        "clickSelector": news_video,
        "selectors": ["viewport"], // "document" will snapshot the entire page
        "selectorExpansion": true,
        "delay": 5000,
        "postInteractionWait": 8000,
        "misMatchThreshold": 0.1,
    }]
}

