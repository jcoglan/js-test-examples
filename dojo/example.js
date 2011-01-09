dojo.provide("dojo.example")

doh.register("SomeCode", [
  {
    name: "thingerTest",
    setUp: function(){
      this.object = {hello: "world"}
    },
    runTest: function(){
      doh.assertEqual({hello: "world"}, this.object)
      doh.assertNotEqual({say: "hi"}, this.object)
    }
  }
])

