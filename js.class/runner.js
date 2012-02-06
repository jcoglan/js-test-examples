if (typeof CWD === 'undefined') CWD = '.'

JS.Packages(function() { with(this) {
  autoload(/^(.*)Spec$/, {from: CWD + '/js.class', require: '$1'})
  autoload(/^.*$/, {from: CWD})
  
  file('http://code.jquery.com/jquery-1.7.1.min.js').provides('jQuery')
  file(CWD + '/js.class/spec_helper.js').provides('SpecHelper').requires('jQuery')
}})

JS.require('JS.Test', 'SpecHelper', 'jQuery', function() {
  JS.Test.Unit.TestCase.extend(SpecHelper)
  
  JS.require( 'ModuleSpec',
              'ApiSpec',
              JS.Test.method('autorun'))
})

