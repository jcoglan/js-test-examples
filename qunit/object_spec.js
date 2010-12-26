module("some code")

test("something", function() {
  expect(2)
  object = {hello: "world"}
  deepEqual( {hello: "world"}, object )
  notDeepEqual( {say: "hi"}, object )
})

