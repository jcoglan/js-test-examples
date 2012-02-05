if (typeof CWD === 'undefined') CWD = '.'

JS.Packages(function() { with(this) {
  autoload(/^(.*)Spec$/, {from: CWD + '/js.class', require: '$1'})
  autoload(/^.*$/, {from: CWD})
}})

JS.require('JS.Test', function() {
  JS.require('ModuleSpec', JS.Test.method('autorun'))
})

