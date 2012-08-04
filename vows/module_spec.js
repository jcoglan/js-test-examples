var vows   = require('../vendor/vows/lib/vows'),
    assert = require('assert'),
    Module = require('../module')

vows.describe("some code").addBatch({
  "an object": {
    topic: new Module(),

    "says hello": function (object) {
      assert.deepEqual({hello: "world"}, object.say())
      assert.notDeepEqual({say: "hi"}, object.say())
    },
    
    "async tests": {
      topic: function() {
        var callback = this.callback
        setTimeout(function() {
          // throw new Error("async error") -- this crashes the process
          callback(true)
        }, 10)
      },
      
      "work": function(value) {
        assert.isTrue(value)
      }
    }
  }
}).run()

