'use strict';

var fs = require('fs');
var FS = require('q-io/fs');
var path = require('path');
var string = require('useful-string');
var Mustache = require('mustache');
var Q = require('q');

var jsonFile = 'unicodes.json';

exports.compile = function (cb) {
    var json = this.getJSON(),
        css,
        less,
        scss;

    css = this.generateStylesheet('css', json);
    less = this.generateStylesheet('scss', json);
    scss = this.generateStylesheet('less', json);

    Q.all([css, less, scss]).then(cb);
};

exports.getJSON = function () {
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

    return codes;
};

exports.generateStylesheet = function (type, json) {
    return FS.read(path.join('templates', 'unicodes.' + type + '.tpl'), {encoding: 'utf8'})
        .then(function (template) {
            return Mustache.render(template, { data: json });
        }).
        then(function (stylesheet) {
            return FS.write(path.join('dist', 'unicodes.' + type), stylesheet);
        });
};

