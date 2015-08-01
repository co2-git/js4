#!/usr/bin/env node


'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _babel = require('babel');

var _babel2 = _interopRequireDefault(_babel);

var _js4 = require('./js4');

var _js42 = _interopRequireDefault(_js4);

global.Rule = _js42['default'];
global.rules = [];

var src = process.argv[2];

require('babel/register')({
  modules: 'common',
  stage: 0
});

var js4 = require(src);

var output = rules.map(function (rule) {
  return rule.toString();
});

console.log(output.join("\n"));