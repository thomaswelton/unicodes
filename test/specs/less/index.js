/*globals describe, it */

"use strict";

var unicodes   = require("../../../index");

var assert       = require("chai").assert;
var fs           = require("fs");

var cwd          = process.cwd();

var expected     = fs.readFileSync(cwd + "/test/fixtures/expected/unicodes.less", "utf-8");
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

describe("Less generation", function () {

    it('should produce expected less results', function (done) {
        unicodes.generateStylesheet('less', testData, function (err, css) {
            assert.typeOf(err, 'null');
            assert.deepEqual(css, expected);

            done();
        });
    });
});
