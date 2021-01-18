const convert = require("xml-js");
const fs = require("fs");
let reactScore = 0;
let nodeScore = 0;
let SCORE = 0;

/*Read ReactJS test-report and calculate score*/
try {
  let reactxmlOutput = fs.readFileSync('./test-report.xml');
  let data = convertXML2JS(reactxmlOutput);
  reactScore = calcReactScore(data);
} catch (err) {
  // console.log(err,'ReactJS fails to generate output file');
  reactScore = 0;
}

/*Read NodeJS test-report and calculate score*/
try {
  let nodexmlOutput = fs.readFileSync('../NodeJS/test-report.xml');
  let data = convertXML2JS(nodexmlOutput);
  nodeScore = calcNodeScore(data)
} catch (err) {
  // console.log(err,'NodeJS fails to generate output file');
  nodeScore = 0;
}

SCORE = parseInt(reactScore) + parseInt(nodeScore);
/* !Important: Don't remove the below console as its required to print the score */
/*Final score*/
console.log(SCORE);

function convertXML2JS(xml) {
  return convert.xml2js(xml, { compact: true, spaces: 4 });
}

function calcReactScore(reactxmlOutput) {
  const r_testsuite_count_unit = reactxmlOutput.testsuites.testsuite.length;
  let r_total = 0;
  let r_failures = 0;
  let r_success = 0;
  let r_convertToFifty = 0;
  for (i = 0; i < r_testsuite_count_unit; i++) {
    r_total =
      r_total + parseInt(reactxmlOutput.testsuites.testsuite[i]._attributes.tests);
    r_failures =
      r_failures +
      parseInt(reactxmlOutput.testsuites.testsuite[i]._attributes.failures);
  }
  r_success = r_total - r_failures;
  r_convertToFifty = Math.round((r_success / r_total) * 50);
  // console.log(r_convertToFifty,'r_convertToFifty');
  return r_convertToFifty;
}

function calcNodeScore(nodexmlOutput) {
  let n_total = parseInt(nodexmlOutput.testsuites.testsuite._attributes.tests);
  let n_failures = parseInt(nodexmlOutput.testsuites.testsuite._attributes.failures);
  let n_success = n_total - n_failures;
  let n_convertToFifty = 0;
  n_convertToFifty = Math.round((n_success / n_total) * 50);
  // console.log(n_convertToFifty,'n_convertToFifty');
  return n_convertToFifty;
}
