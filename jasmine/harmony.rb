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

ROOT =  File.expand_path('../..', __FILE__)

page.window['Fixture'] = File
page.window['console'] = Console
page.window['ROOT'] = ROOT
page.window['JSCLASS_PATH'] = File.expand_path('../../vendor/js.class/build/src', __FILE__)

page.load ROOT + '/vendor/js.class/build/src/loader-browser.js'
page.load ROOT + '/jasmine/runner.js'

page.x '$wait(-2000)'

Thread.start {
  Thread.pass until status = Console.exit_status
  exit status
}.join

