/*globals describe, it */

"use strict";

var unicodes   = require("../../../index");

var assert       = require("chai").assert;
var fs           = require("fs");

var cwd          = process.cwd();

var expectedCss     = fs.readFileSync(cwd + "/test/fixtures/expected/unicodes.css", "utf-8");
var testData = [
    {
        name: 'foo',
        code: 'bar'
    },
    {
        name: 'baz',
        code: 'qux'
    }
];

describe("CSS generation", function () {

    it('should produce expected results', function (done) {
        unicodes.generateCSS(testData, function (err, css) {
            assert.typeOf(err, 'null');
            assert.deepEqual(css, expectedCss);

            done();
        });
    });
});
