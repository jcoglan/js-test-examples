# JavaScript testing examples

In order to make the JS.Class testing experience as good as possible, I'm trying
out some other frameworks to see how they work on different platforms.

JS.Class currently supports:

* IE, Firefox, Chrome, Safari, Opera etc
* V8, Node.js
* Rhino, Narwhal, RingoJS
* SpiderMonkey, JaegerMonkey
* Mozilla XULRunner
* Windows Script Host

Here's how to run the examples I have so far:

    git clone git://github.com/jcoglan/js-test-examples.git
    cd js-test-examples
    git submodule --init --recursive

### Dojo

    cd vendor
    wget http://download.dojotoolkit.org/release-1.5.0/dojo-release-1.5.0-src.tar.gz
    tar zxvf dojo-release-1.5.0-src.tar.gz
    cd ../
    python -m SimpleHTTPServer
    open http://0.0.0.0:8000/dojo/browser.html

### Jasmine

    cd jasmine-node
    npm install
    cd ../../
    open jasmine/browser.html
    ./vendor/jasmine-node/bin/jasmine-node jasmine/

### JS.Class

    cd vendor/js.class
    jake
    cd ../..
    open js.class/browser.html
    rhino js.class/console.js
    node js.class/console.js
    # etc

### Nodeunit

    cd vendor/nodeunit
    make
    cd ../..
    open nodeunit/browser.html
    node vendor/nodeunit/bin/nodeunit nodeunit/object_spec.js

### QUnit

    open qunit/browser.html
    rhino qunit/console.js
    # doesn't work on node

### Screw.Unit

    open screw-unit/browser.html

### Vows

    node vows/object_spec.js

