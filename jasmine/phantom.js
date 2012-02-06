var page = new WebPage()

page.onConsoleMessage = function(message) {
  try {
    var data = JSON.parse(message).jasmine
    
    if (data.status) {
      var message = '[' + data.status.toUpperCase() + '] ' + data.test
      return console.log(message)
    }
    
    var status = (!data.fail && !data.error) ? 0 : 1
    console.log(data.total + ' assertions, ' + data.fail + ' failures, ' + data.error + ' errors')
    phantom.exit(status)
  } catch (e) {
    console.log(message)
  }
}
page.open('jasmine/browser.html')

