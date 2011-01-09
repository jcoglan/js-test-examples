var vows   = require('../vendor/vows/lib/vows'),
    assert = require('assert')

vows.describe("some code").addBatch({
  "an object": {
    topic: {hello: "world"},

    "says hello": function (object) {
      assert.deepEqual({hello: "world"}, object)
      assert.notDeepEqual({say: "hi"}, object)
    }
  }
}).run()

