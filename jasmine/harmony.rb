require 'rubygems'
require 'harmony'
require 'json'

page = Harmony::Page.new(<<-HTML)
  <!doctype html>
  <html>
    <head>
      <meta http-equiv="Content-type" content="text/html; charset=utf-8">
      <title>Jasmine Test Runner</title>
    </head>
    <body>
      <script type="text/javascript"></script>
    </body>
  </html>
HTML

module Console
  def self.log(message)
    data = JSON.parse(message)['jasmine']
    return puts("[#{data['status'].upcase}] #{data['test']}") if data['status']
    
    status = (data['fail'] + data['error'] == 0) ? 0 : 1
    puts "#{data['total']} tests, #{data['fail']} failures, #{data['error']} errors"
    @exit_status = status
  rescue
  end
  
  def self.exit_status
    @exit_status
  end
end

page.window['console'] = Console

page.load 'vendor/jasmine/lib/jasmine-core/jasmine.js'
page.load 'vendor/jasmine/lib/jasmine-core/jasmine-html.js'
page.load 'node_modules/sinon/lib/sinon.js'
page.load 'node_modules/sinon/lib/sinon/collection.js'
page.load 'node_modules/sinon/lib/sinon/spy.js'
page.load 'node_modules/sinon/lib/sinon/stub.js'
page.load 'node_modules/sinon/lib/sinon/sandbox.js'
page.load 'node_modules/sinon/lib/sinon/assert.js'
page.load 'module.js'
page.load 'jasmine/module_spec.js'
page.load 'jasmine/runner.js'

page.x '$wait(-2000)'

Thread.start {
  Thread.pass until status = Console.exit_status
  exit status
}.join

