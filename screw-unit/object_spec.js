Screw.Unit(function() {
  describe("some code", function() {
    before(function() {
      this.object = {hello: "world"}
    })
    
    it("says hello", function() {
      expect(object).to(equal, {hello: "world"})
      expect(object).to_not(equal, {say: "hi"})
    })
  })
})

