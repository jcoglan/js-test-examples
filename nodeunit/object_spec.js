this.ObjectSpec = {
  testSomething: function(test) {
    var object = {hello: "world"}
    test.deepEqual( object, {hello: "world"} )
    test.notDeepEqual( object, {say: "hi"} )
    test.done()
  }
}

