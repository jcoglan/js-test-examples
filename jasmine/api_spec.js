describe("API client", function() {
  // only run in the browser
  if (typeof window === 'undefined' || !window.location.hostname) return
  
  jsonFixture("/fixture.json")
  
  it("returns data", function() {
    expect(this.json).toEqual({fixture: "data"})
  })
})

