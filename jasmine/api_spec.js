var SpecHelper = (typeof SpecHelper === 'object')
               ? SpecHelper
               : require('./spec_helper')

describe("API client", function() {
  // only run if we can read files
  if (!SpecHelper.canReadFiles()) return
  
  jsonFixture("/fixture.json")
  
  it("returns data", function() {
    expect(this.json).toEqual({fixture: "data"})
  })
})

