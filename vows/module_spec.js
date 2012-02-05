var vows   = require('../vendor/vows/lib/vows'),
    assert = require('assert'),
    Module = require('../module')

vows.describe("some code").addBatch({
  "an object": {
    topic: new Module(),

    "says hello": function (object) {
      assert.deepEqual({hello: "world"}, object.say())
      assert.notDeepEqual({say: "hi"}, object.say())
    }
  }
}).run()

