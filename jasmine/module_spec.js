var Module = (typeof Module !== "undefined")
           ? Module
           : require('../module')

var sinon = (typeof sinon !== "undefined")
          ? sinon
          : require('sinon')

describe("Module", function() {
  beforeEach(function() {
    this.object = new Module()
    this.global = (function() { return this })()
    this.global.jQuery = {get: function() {}}
    this.sandbox = sinon.sandbox.create()
  })
  
  afterEach(function() {
    delete this.global.jQuery
    this.sandbox.restore()
  })
  
  it("says hello", function() {
    expect(this.object.say()).toEqual({hello: "world"})
    expect(this.object.say()).not.toEqual({say: "hi"})
  })
  
  it("fetches a resource", function() {
    this.jQueryGet = this.sandbox.stub(jQuery, "get"),
    this.response  = null
    
    this.jQueryGet.callsArgWith(1, "OK")
    this.object.fetch("/foo", function(r) { this.response = r }, this)
    waitsFor(function() { return this.response })
    
    runs(function() {
      expect(this.response).toEqual("OK")
      var getCall = this.jQueryGet.getCall(0)
      expect(getCall.args[0]).toEqual("/foo")
      expect(typeof getCall.args[1]).toEqual("function")
    })
  })
  
  it("yields different responses for different paths", function() {
    this.jQueryGet = this.sandbox.stub(jQuery, "get"),
    this.response  = null
    
    this.jQueryGet.withArgs("/foo").callsArgWith(1, "hello")
    this.jQueryGet.withArgs("/bar").callsArgWith(1, "bye")
    
    this.object.fetch("/bar", function(r) { this.response = r }, this)
    waitsFor(function() { return this.response })
    
    runs(function() {
      expect(this.response).toEqual("bye")
    })
  })
  
  it("stubs a callback with context", function() {
    this.objectFetch = this.sandbox.stub(this.object, "fetch", function(path, callback, context) {
      callback.call(context, "hello")
    })
    
    var context = {}
    this.object.fetch("/something", function(r) { this.response = r }, context)
    waitsFor(function() { return context.response })
    
    runs(function() {
      expect(context.response).toEqual("hello")
    })
  })
})

