objectSpec = {
  testSomething: function(test) {
    var object = {hello: "world"}
    test.deepEqual( object, {hello: "world"} )
    test.notDeepEqual( object, {say: "hi"} )
    test.done()
  }
}

if (typeof exports === 'object') {
  exports.testSomething = objectSpec.testSomething
  
} else if (typeof define === 'function') {
  define(function(require) { return objectSpec })
}

