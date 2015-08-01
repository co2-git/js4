#!/usr/bin/env node

'use strict';

import fs from 'fs';
import babel from 'babel';
import Rule from './js4';

global.Rule = Rule;
global.rules = [];

let src = process.argv[2];

require('babel/register')({
  modules :   'common',
  stage   :   0
})

let js4 = require(src);

let output = rules.map(rule => rule.toString());

console.log(output.join("\n"));
