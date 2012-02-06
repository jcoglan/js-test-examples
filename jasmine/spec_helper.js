var jsonFixture = function(path) {
  var xhr = readFile(path)
  
  beforeEach(function() {
    var jsonString
    xhr.done(function(r) { jsonString = r })
    waitsFor(function() { return jsonString })
    runs(function() {
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

if (typeof global === 'object')
  global.jsonFixture = jsonFixture

