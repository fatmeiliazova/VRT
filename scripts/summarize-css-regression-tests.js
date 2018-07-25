/**
 * This file parses the /backstop_data/ci_report/xunit.xml report, which is
 * what Backstop generates, aside from the HTML report.
 * The parsed version is intended to be used as a comment by Jenkins when the
 * tests complete.
 * */
var fs = require('fs');
var parser = require('xml2js');
var ciDir = './backstop_data/ci_report/';
var ciOriginalReportName = 'xunit.xml';
var ciReportName = 'summary.txt';

fs.readFile(ciDir + ciOriginalReportName, function(err, data) {
  if(err) {
    console.error(err)
    return
  }
    //   {
    //     "testsuites": {
    //         "$": {
    //             "errors": "8",
    //             "failures": "8"
    //         },
    //         "testsuite": [
    //             {
    //                 "$": {
    //                     "name": "BackstopJS",
    //                     "tests": "54",
    //                     "errors": "8",
    //                     "failures": "8"
    //                 },
    //                 "testcase": [
    //                     {
    //                         "$": {
    //                             "name": " ›› Filter_Channel",
    //                             "classname": "document"
    //                         },
    //                         "error": [
    //                             {
    //                                 "$": {
    //                                     "message": "Design deviation ›› Filter_Channel (document) component",
    //                                     "type": "CSS component"
    //                                 }
    //                             }
    //                         ],
    //                         "failure": [
    //                             {
    //                                 "$": {
    //                                     "message": "Design deviation ›› Filter_Channel (document) component",
    //                                     "type": "CSS component"
    //                                 }
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // }
    // NOTE: to see how the jsonObj looks like, see above
    parser.parseString(data, (err, jsonObj)=>{
      if(err) {
        console.error(err)
        return
      }
      var ts = jsonObj.testsuites.testsuite[0];
      var testcaseViews = ts.testcase.reduce((brokenTests, testcase)=>{
        if(testcase.failure) {
          brokenTests.push(testcase.failure[0].$.message)
        }
        return brokenTests
      }, [])
      var summary = [ts.$.failures + " regression tests failures:"]
        .concat(testcaseViews)
        .join('\n\n')

      console.log(summary)
    })
});
