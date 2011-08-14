ObjectSpec = JS.Test.describe("some code", function() { with(this) {
  before(function() { with(this) {
    this.object = {hello: "world"}
  }})
  
  it("says hello", function() { with(this) {
    assertEqual( {hello: "world"}, object )
    assertNotEqual( {say: "hi"}, object )
  }})
}})

