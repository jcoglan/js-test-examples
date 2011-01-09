if (this.ActiveXObject) load = function(path) {
  var fso = new ActiveXObject('Scripting.FileSystemObject'), file, runner;
  try {
    file   = fso.OpenTextFile(path);
    runner = function() { eval(file.ReadAll()) };
    runner();
  } finally {
    try { if (file) file.Close() } catch (e) {}
  }
};

JASMINE_PATH = 'vendor/jasmine-node/lib/jasmine/'

if (typeof require === 'function') {
  require('../' + JASMINE_PATH + 'index')
} else {
  load(JASMINE_PATH + 'index.js')
}

jasmine.executeSpecsInFolder(__dirname, function(runner, log){
  process.exit(runner.results().failedCount)
}, true, true)

