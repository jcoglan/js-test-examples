var Module = (typeof Module !== "undefined")
           ? Module
           : require('../module')

describe("Module", function() {
  beforeEach(function() {
    this.object = new Module()
  })
  
  it("says hello", function() {
    expect(this.object.say()).toEqual({hello: "world"})
    expect(this.object.say()).not.toEqual({say: "hi"})
  })
})

