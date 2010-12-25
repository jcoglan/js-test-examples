ObjectSpec = JS.Test.describe("some code", function() {
  before(function() {
    this.object = {hello: "world"}
  })
  
  it("says hello", function() {
    assertEqual( {hello: "world"}, object )
    assertNotEqual( {say: "hi"}, object )
  })
})

