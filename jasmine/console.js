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

JASMINE_PATH = 'vendor/jasmine/lib/'

if (typeof require === 'function') {
  require('../' + JASMINE_PATH + 'jasmine')
  require('./object_spec')
} else {
  load(JASMINE_PATH + 'jasmine.js')
  load('jasmine/object_spec.js')
}

