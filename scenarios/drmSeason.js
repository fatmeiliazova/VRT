//DRM series verification by "Browser not Supported" popup
exports.getScenario = function (testHost, pathConfig) {
    // drm_seri selector definition
var drm_series = ".tv--drm";
    return [{
        "label": "Protected_Season",
        //"referenceUrl": args.refHost+paths[k],
        "url": testHost + pathConfig.playbackPath,
        "clickSelector": drm_series,
        "selectors": ["viewport"], // ["document"], --> will snapshot the entire page
        "selectorExpansion": false,
        //"expect": 1,
        "delay": 1000,
        "postInteractionWait": 5000,
        "misMatchThreshold": 0.1,
    }]
}



