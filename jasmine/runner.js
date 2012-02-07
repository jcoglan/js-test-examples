jasmine.getEnv().addReporter(new jasmine.TrivialReporter())

if (window.console)
  jasmine.getEnv().addReporter({
    reportSpecResults: function(spec) {
      var name    = spec.getFullName(),
          results = spec.results(),
          status  = results.failedCount > 0 ? 'failed' : 'passed'
          message = {jasmine: {test: name, status: status}}
      
      var item = results.getItems().pop()
      if (item) console.log(item.toString())
      console.log(JSON.stringify(message))
    },
    
    reportRunnerResults: function(runner) {
      var results = runner.results(),
          message = {jasmine: {total: results.totalCount, fail: results.failedCount, error: 0}}
      
      console.log(JSON.stringify(message))
    }
  })

jasmine.getEnv().execute()

