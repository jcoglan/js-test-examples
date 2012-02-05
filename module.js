Module = function() {};

Module.prototype.say = function() {
  return {hello: 'world'};
};

if (typeof exports === 'object')
  module.exports = Module
