var config = module.exports;

var sources = [
    "module.js"
];

var tests = [
    "buster/module_spec.js"
];

config["Browser tests"] = {
    rootPath: "../",
    environment: "browser",
    sources: sources,
    tests: tests
};

config["Node tests"] = {
    rootPath: "../",
    environment: "node",
    sources: sources,
    tests: tests
};

