QUnit.init()
QUnit.config.blocking = false
QUnit.config.autorun = true
QUnit.config.updateRate = 0

QUnit.log = function(result, message) {
  print(result ? 'PASS' : 'FAIL', message)
}

QUnit.done = function(result) {
  print(result.total + ' tests, ' + result.failed + ' failures')
}

