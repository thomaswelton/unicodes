"use strict";

var unicodes   = require("../../index");

var assert       = require("chai").assert;
var fs           = require("fs");

var cwd          = process.cwd();

describe("Compilation", function () {

    it('should compile all files', function (done) {
        unicodes.compile(function (err){
            assert.typeOf(err, 'null');

            done();
        });
    });
});
