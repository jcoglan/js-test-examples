ApiSpec = JS.Test.describe("API client", function() { with(this) {
  // only run if we can read files
  if (!SpecHelper.canReadFiles()) return
  
  jsonFixture("/fixture.json")
  
  it("returns data", function() { with(this) {
    assertEqual({fixture: "data"}, json)
  }})
}})

