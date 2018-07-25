
exports.getScenario = function (testHost, pathConfig) {
  var scenarios = [];
  //for each key in pathConfig object
  for (k in pathConfig) {
    scenarios.push(
      {
      "label": "All_Sections" + pathConfig[k],
      "url": testHost + pathConfig[k],
      "selectors": ["document"], // "document" will snapshot the entire page
      "delay": 6000,
      "misMatchThreshold": 0.1
      }
    );
  }
  return scenarios;
}

