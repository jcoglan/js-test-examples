if (typeof ROOT === 'undefined') ROOT = '.'
JS.cacheBust = true

JS.Packages(function() { with(this) {
  autoload(/^(.*)Spec$/, {from: ROOT + '/jasmine', require: '$1'})
  autoload(/^.*$/, {from: ROOT})
  
  file(ROOT + '/vendor/jasmine/lib/jasmine-core/jasmine.js',
       ROOT + '/vendor/jasmine/lib/jasmine-core/jasmine-html.js')
      .provides('jasmine')
      .styling(ROOT + '/vendor/jasmine/lib/jasmine-core/jasmine.css')
  
  file(ROOT + '/node_modules/sinon/lib/sinon.js',
       ROOT + '/node_modules/sinon/lib/sinon/collection.js',
       ROOT + '/node_modules/sinon/lib/sinon/spy.js',
       ROOT + '/node_modules/sinon/lib/sinon/stub.js',
       ROOT + '/node_modules/sinon/lib/sinon/sandbox.js',
       ROOT + '/node_modules/sinon/lib/sinon/assert.js')
      .provides('sinon')
  
  file(ROOT + '/vendor/jquery-1.7.1.min.js').provides('jQuery')
  file(ROOT + '/jasmine/spec_helper.js').provides('SpecHelper').requires('jQuery')
}})

JS.require('jasmine', 'sinon', 'SpecHelper', function() {
  jasmine.getEnv().addReporter(new jasmine.TrivialReporter())

  if (window.console)
    jasmine.getEnv().addReporter({
      reportSpecResults: function(spec) {
        var name    = spec.getFullName(),
            results = spec.results(),
            status  = results.failedCount > 0 ? 'failed' : 'passed'
            message = {jasmine: {test: name, status: status}}
        
        console.log(JSON.stringify(message))
      },
      
      reportRunnerResults: function(runner) {
        var results = runner.results(),
            message = {jasmine: {total: results.totalCount, fail: results.failedCount, error: 0}}
        
        console.log(JSON.stringify(message))
      }
    })
  
  JS.require( 'ModuleSpec',
              'ApiSpec',
              function() { jasmine.getEnv().execute() })
})

