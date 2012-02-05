var Module = (typeof Module !== "undefined")
           ? Module
           : require('../module')

this.ModuleSpec = {
  testSomething: function(test) {
    var object = new Module()
    test.deepEqual( object.say(), {hello: "world"} )
    test.notDeepEqual( object.say(), {say: "hi"} )
    test.done()
  }
}

