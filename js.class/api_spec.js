ApiSpec = JS.Test.describe("API client", function() { with(this) {
  // only run in the browser
  if ((typeof window === 'undefined' || !window.location.hostname) && typeof Fixture === 'undefined') return
  
  jsonFixture("/fixture.json")
  
  it("returns data", function() { with(this) {
    assertEqual({fixture: "data"}, json)
  }})
}})

