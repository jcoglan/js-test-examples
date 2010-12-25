describe("some code", function() {
  beforeEach(function() {
    object = {hello: "world"}
  })
  
  it("says hello", function() {
    expect(object).toEqual({hello: "world"})
  })
})

