var Module = (typeof Module !== "undefined")
           ? Module
           : require('../module')

var assert = (typeof assert !== "undefined")
           ? assert
           : require('assert')

describe("Module", function() {
  beforeEach(function() {
    this.object = new Module()
  })
  
  it("says hello", function() {
    assert.deepEqual( this.object.say(), {hello: "world"} )
  })
  
  describe("async errors", function() {
    beforeEach(function() {
      this.asyncFunction = function(callback) {
        setTimeout(function() {
          throw new Error("async error")
          callback(true)
        }, 10)
      }
    })
    
    it("catches them", function(done) {
      this.asyncFunction(function(value) {
        assert.ok(value)
        done()
      })
    })
  })
})

