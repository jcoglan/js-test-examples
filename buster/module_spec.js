var buster  = (typeof buster !== "undefined")
            ? buster
            : require("buster")

var assert = buster.assertions.assert

buster.testCase("Module", {
  "says hello": function() {
    var object = new Module()
    assert.equals(object.say(), {hello: "world"})
  },
  
  "catches async errors": function(done) {
    var asyncFunction = function(callback) {
      setTimeout(function() {
        throw new Error("async error")
        callback(true)
      }, 10)
    }
    
    asyncFunction(function(value) {
      assert(value)
      done()
    })
  }
})

