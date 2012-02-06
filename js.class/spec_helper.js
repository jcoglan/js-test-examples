SpecHelper = {
  jsonFixture: function(path) {
    var xhr = this.readFile(path)
    
    this.before(function(resume) {
      var self = this
      xhr.done(function(jsonString) {
        self.json = JSON.parse(jsonString)
        resume()
      })
    })
  },
  
  readFile: function(path) {
    if (typeof Fixture === 'undefined') return jQuery.get(path)
    
    var deferred = new jQuery.Deferred(),
        content  = Fixture.read(CWD + path)
    
    deferred.resolve(content)
    return deferred
  }
}

