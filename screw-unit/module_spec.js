Screw.Unit(function() {
  describe("some code", function() {
    before(function() {
      this.object = new Module()
    })
    
    it("says hello", function() {
      expect(object.say()).to(equal, {hello: "world"})
      expect(object.say()).to_not(equal, {say: "hi"})
    })
  })
})

