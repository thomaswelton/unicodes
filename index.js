'use strict';

var fs = require('fs');
var FS = require('q-io/fs');
var path = require('path');
var string = require('useful-string');
var Mustache = require('mustache');

var jsonFile = 'unicodes.json';

exports.compile = function (cb) {
    var self = this;
    self.createJSON(function (err, json) {
        if (err) {
            cb(err);
        }

        self.generateCSS(json, function (err, css) {
            if (err) {
                cb(err);
            }

            fs.writeFile(path.join('dist', 'unicodes.css'), css, function (err) {
                if (err) {
                    cb(err);
                }

                cb(null);
            });
        });
    });
};

exports.createJSON = function (cb) {
    var so = require('unicode/category/So'),
        codes = [],
        item,
        index,
        key;

    for (index in so) {
        if (so.hasOwnProperty(index)) {
            item = so[index];
            key = string.hyphenate(item.name.toLowerCase());

            codes.push({
                name: key,
                code: item.value
            });
        }
    }

    FS.write(jsonFile, JSON.stringify(codes, undefined, 2))
        .then(function () {
            cb(null, codes);
        }).
        fail(function (err) {
            cb(err);
        });
};

exports.getJSON = function (cb) {
    FS.read(jsonFile, {encoding: 'utf8'})
        .then(function (contents) {
            cb(null, JSON.parse(contents));
        })
        .fail(function (err) {
            cb(err);
        });
};

exports.generateCSS = function (json, cb) {
    FS.read(path.join('templates', 'unicodes.css'), {encoding: 'utf8'})
        .then(function (cssTemplate) {
            var output = Mustache.render(cssTemplate, { data: json });
            cb(null, output);
        })
        .fail(function (err) {
            cb(err);
        });
};

