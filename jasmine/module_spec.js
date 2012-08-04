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
    this.sandbox.stub(jQuery, "get").yields("OK")
    
    this.response = null
    this.object.fetch("/foo", function(r) { this.response = r }, this)
    waitsFor(function() { return this.response })
    
    runs(function() {
      expect(this.response).toEqual("OK")
      sinon.assert.calledWith(jQuery.get, "/foo")
    })
  })
  
  it("yields different responses for different paths", function() {
    this.sandbox.stub(jQuery, "get")
    jQuery.get.withArgs("/foo").yields("hello")
    jQuery.get.withArgs("/bar").yields("bye")
    
    this.response = null
    this.object.fetch("/bar", function(r) { this.response = r }, this)
    waitsFor(function() { return this.response })
    
    runs(function() {
      expect(this.response).toEqual("bye")
    })
  })
  
  it("stubs a callback with context", function() {
    this.sandbox.stub(this.object, "fetch", function(path, callback, context) {
      callback.call(context, "hello")
    })
    
    var context = {}
    this.object.fetch("/something", function(r) { this.response = r }, context)
    waitsFor(function() { return context.response })
    
    runs(function() {
      expect(context.response).toEqual("hello")
    })
  })
  
describe("async errors", function() {
  var global = (function() { return this })()
  if (!global.window) return
  
  beforeEach(function() {
    this.asyncFunction = function(callback) {
      setTimeout(function() {
        throw new Error("async error")
        callback(true)
      }, 10)
    }
  })
  
  it("catches them", function() {
    var value = null
    
    this.asyncFunction(function(v) { value = v })
    waitsFor(function() { return value })
    
    runs(function() { expect(value).toEqual(true) })
  })
})
})

