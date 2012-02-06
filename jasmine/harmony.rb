require 'rubygems'
require 'harmony'
require 'json'

page = Harmony::Page.new(<<-HTML)
  <!doctype html>
  <html></html>
HTML

module Console
  def self.log(message)
    data = JSON.parse(message)['jasmine']
    return puts("[#{data['status'].upcase}] #{data['test']}") if data['status']
    
    status = (data['fail'] + data['error'] == 0) ? 0 : 1
    puts "#{data['total']} assertions, #{data['fail']} failures, #{data['error']} errors"
    @exit_status = status
  rescue
    puts message
  end
  
  def self.exit_status
    @exit_status
  end
end

ROOT = File.expand_path('../..', __FILE__)

page.window['Fixture'] = File
page.window['console'] = Console
page.window['ROOT']    = ROOT

page.load ROOT + '/vendor/jasmine/lib/jasmine-core/jasmine.js'
page.load ROOT + '/vendor/jasmine/lib/jasmine-core/jasmine-html.js'

page.load ROOT + '/node_modules/sinon/lib/sinon.js'
page.load ROOT + '/node_modules/sinon/lib/sinon/collection.js'
page.load ROOT + '/node_modules/sinon/lib/sinon/spy.js'
page.load ROOT + '/node_modules/sinon/lib/sinon/stub.js'
page.load ROOT + '/node_modules/sinon/lib/sinon/sandbox.js'
page.load ROOT + '/node_modules/sinon/lib/sinon/assert.js'

page.load 'http://code.jquery.com/jquery-1.7.1.min.js'

page.load ROOT + '/module.js'

page.load ROOT + '/jasmine/spec_helper.js'
page.load ROOT + '/jasmine/module_spec.js'
page.load ROOT + '/jasmine/api_spec.js'
page.load ROOT + '/jasmine/runner.js'

page.x '$wait(-2000)'

Thread.start {
  Thread.pass until status = Console.exit_status
  exit status
}.join

