"use strict";

var unicodes   = require("../../../index");

var assert       = require("chai").assert;
var fs           = require("fs");

var cwd          = process.cwd();

describe("Unicode.json generation", function () {

    it("should generate valid JSON", function (done) {
        unicodes.createJSON(function (err) {
            assert.typeOf(err, 'null');
            done();
        });
    });

    it("should return valid JSON", function (done) {
        unicodes.getJSON(function (err, actual) {
            assert.typeOf(actual, 'array');
            done();
        });
    });
});
