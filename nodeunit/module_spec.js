var Module = (typeof Module !== "undefined")
           ? Module
           : require('../module')

this.ModuleSpec = {
  testSomething: function(test) {
    var object = new Module()
    test.deepEqual( object.say(), {hello: "world"} )
    test.notDeepEqual( object.say(), {say: "hi"} )
    test.done()
  },
  
  testAsyncError: function(test) {
    var asyncFunction = function(callback) {
      setTimeout(function() {
        throw new Error("async error")
        callback(true)
      }, 10)
    }
    
    asyncFunction(function(value) {
      test.ok(value)
      test.done()
    })
  }
}

