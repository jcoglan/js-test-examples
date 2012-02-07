var jsonFixture = function(path) {
  var xhr = readFile(path)
  
  beforeEach(function() {
    var jsonString
    xhr.done(function(r) { jsonString = r })
    waitsFor(function() { return jsonString })
    runs(function() {
      if (typeof jsonString === 'object') jsonString = JSON.stringify(jsonString)
      this.json = JSON.parse(jsonString)
    })
  })
}

var readFile = function(path) {
  if (typeof Fixture === 'undefined') return jQuery.get(path)
  
  var deferred = new jQuery.Deferred(),
      content  = Fixture.read(ROOT + path)
  
  deferred.resolve(content)
  return deferred
}

var SpecHelper = {
  canReadFiles: function() {
    return typeof Fixture === 'object' ||
           (typeof window === 'object' && /^http/.test(window.location.protocol))
  }
}

if (typeof exports === 'object') {
  global.jsonFixture = jsonFixture
  module.exports = SpecHelper
}

