module("some code")

test("something", function() {
  expect(2)
  object = new Module()
  deepEqual( {hello: "world"}, object.say() )
  notDeepEqual( {say: "hi"}, object.say() )
})

