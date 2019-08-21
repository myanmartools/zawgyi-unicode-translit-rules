#!/usr/bin/env node

'use strict';

const path = require('path');
const fs = require('fs-extra');

const zg2uniRules = require('../dist/packages/zawgyi-unicode-translit-rules').zg2uniRules;
const uni2zgRules = require('../dist/packages/zawgyi-unicode-translit-rules').uni2zgRules;

const outputPath = path.resolve(__dirname, '../dist/packages/zawgyi-unicode-translit-rules/json-rules');
fs.ensureDirSync(outputPath);

fs.writeFileSync(path.join(outputPath, 'zg2uni-rules.json'), JSON.stringify(zg2uniRules, null, 2));
fs.writeFileSync(path.join(outputPath, 'uni2zg-rules.json'), JSON.stringify(uni2zgRules, null, 2));
