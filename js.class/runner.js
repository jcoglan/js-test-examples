if (typeof ROOT === 'undefined') ROOT = '.'

JS.Packages(function() { with(this) {
  autoload(/^(.*)Spec$/, {from: ROOT + '/js.class', require: '$1'})
  autoload(/^.*$/, {from: ROOT})
  
  file('http://code.jquery.com/jquery-1.7.1.min.js').provides('jQuery')
  file(ROOT + '/js.class/spec_helper.js').provides('SpecHelper').requires('jQuery')
}})

JS.require('JS.Test', 'SpecHelper', 'jQuery', function() {
  JS.Test.Unit.TestCase.extend(SpecHelper)
  
  JS.require( 'ModuleSpec',
              'ApiSpec',
              JS.Test.method('autorun'))
})

