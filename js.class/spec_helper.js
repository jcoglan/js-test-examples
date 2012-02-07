SpecHelper = {
  jsonFixture: function(path) {
    var xhr = this.readFile(path)
    
    this.before(function(resume) {
      var self = this
      xhr.done(function(jsonString) {
        if (typeof jsonString === 'object') jsonString = JSON.stringify(jsonString)
        self.json = JSON.parse(jsonString)
        resume()
      })
    })
  },
  
  readFile: function(path) {
    if (typeof Fixture === 'undefined') return jQuery.get(ROOT + path)
    
    var deferred = new jQuery.Deferred(),
        content  = Fixture.read(ROOT + path)
    
    deferred.resolve(content)
    return deferred
  },
  
  canReadFiles: function() {
    return typeof Fixture === 'object' ||
           (typeof window === 'object' && /^http/.test(window.location.protocol))
  }
}

