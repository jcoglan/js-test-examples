Module = function() {
  this.responses = []
};

Module.prototype.say = function() {
  return {hello: 'world'};
};

Module.prototype.fetch = function(path, callback, context) {
  jQuery.get(path, function(response) {
    callback.call(context, response);
  });
};

if (typeof exports === 'object')
  module.exports = Module
