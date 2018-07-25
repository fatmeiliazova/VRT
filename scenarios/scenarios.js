//Here scenarios under scenarios folder will be get and executed
exports.getScenario = function (testHost, pathConfig, cookiePath) {
    //Defining filesystem
    var fs = require("fs")
    //Defining scenarios folder as filesystem
    var files = fs.readdirSync("./scenarios/")
    //Defining scenarios array
    var scenarios = []
    //For Each file under scenarios folder
    for (var f = 0; f < files.length; f++) {
        //Excluding 'scenarios.js' file 
        if (files[f] !== "scenarios.js") {
            //Executing only for js files
            if (files[f].split('.').pop() === 'js') {
                //Requiring all scenarios 
                var scenario = require('./' + files[f]).getScenario(testHost, pathConfig)
                //Concat all scenario arrays
                scenarios = scenarios.concat(scenario)
            }
        }
        //sending cookie parameter for each scenario
        for (i = 0; i < scenarios.length; i++) {
            scenarios[i].cookiePath = cookiePath 
        }
    }
    return scenarios;
}

