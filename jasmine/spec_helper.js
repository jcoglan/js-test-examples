SpecHelper = {
  jsonFixture: function(path) {
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
  },

  readFile: function(path) {
    if (typeof Fixture === 'undefined') return jQuery.get(path)
    
    var deferred = new jQuery.Deferred(),
        content  = Fixture.read(ROOT + path)
    
    deferred.resolve(content)
    return deferred
  },

  canReadFiles: function() {
    return typeof Fixture === 'object' ||
           (typeof window === 'object' && /^http/.test(window.location.protocol))
  }
};

(function() {
  for (var key in SpecHelper) this[key] = SpecHelper[key]
})()

if (typeof exports === 'object')
  module.exports = SpecHelper
