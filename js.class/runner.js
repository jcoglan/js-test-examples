if (typeof CWD === 'undefined') CWD = '.'

JS.Packages(function() { with(this) {
  autoload(/^(.*)Spec$/, {from: CWD + '/js.class'})
}})

JS.require('JS.Test', function() {
  JS.require('ObjectSpec', JS.Test.method('autorun'))
})

