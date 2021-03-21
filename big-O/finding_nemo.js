const performance = require('perf_hooks').performance;
const nemo = ['demo', 'gemo', 'cemo'];

function finding_nemo (array) {

  for (var i=0; i < array.length; i++) {
    var t0 = performance.now();
    if (array[i] === 'nemo') {
      console.log("Found NEMO!");
      return
    }

  }
  console.log("Nemo is not here");
  var t1 = performance.now();
  console.log("Runtime is "+(t1 - t0)+" miliseconds");
}

finding_nemo(nemo);
