ModuleSpec = JS.Test.describe("Module", function() { with(this) {
  before(function() { with(this) {
    this.object = new Module()
  }})
  
  it("says hello", function() { with(this) {
    assertEqual( {hello: "world"}, object.say() )
    assertNotEqual( {say: "hi"}, object.say() )
  }})
}})

