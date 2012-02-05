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

QUNIT_PATH = 'vendor/qunit/qunit/'

if (typeof require === 'function') {
  require('../' + QUNIT_PATH + 'qunit')
  require('../module')
  require('./console_bindings')
  require('./module_spec')
} else {
  load(QUNIT_PATH + 'qunit.js')
  load('module.js')
  load('qunit/console_bindings.js')
  load('qunit/module_spec.js')
}

