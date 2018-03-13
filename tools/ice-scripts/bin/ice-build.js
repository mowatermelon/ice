#!/usr/bin/env node

'use strict';

const program = require('commander');
const checkSass = require('../lib/utils/check-sass');

program.on('--help', () => {
  console.log('todo 帮助信息');
});

program.option('--debug', 'debug mode without compression').parse(process.argv);

const build = require('../lib/build');

checkSass().then(() => {
  build({
    debug: !!program.debug,
  });
})
