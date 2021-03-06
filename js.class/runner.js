if (typeof ROOT === 'undefined') ROOT = '.'
JS.cacheBust = true

JS.Packages(function() { with(this) {
  autoload(/^(.*)Spec$/, {from: ROOT + '/js.class', require: '$1'})
  autoload(/^.*$/, {from: ROOT})
  
  file(ROOT + '/vendor/jquery-1.7.1.min.js').provides('jQuery')
  file(ROOT + '/js.class/spec_helper.js').provides('SpecHelper').requires('jQuery')
}})

JS.require('JS.Test', 'SpecHelper', function() {
  JS.Test.Unit.TestCase.extend(SpecHelper)
  
  JS.require( 'ModuleSpec',
              'ApiSpec',
              JS.Test.method('autorun'))
})

