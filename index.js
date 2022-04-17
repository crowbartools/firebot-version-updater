const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { EOL } = require('os');

const packagePath = path.resolve('./package.json');
const package = JSON.parse(readFileSync(packagePath, 'utf-8'));

const curDate = new Date();

const year = curDate.getFullYear().toString().slice(-2);
const month = ("0" + (curDate.getMonth() + 1)).slice(-2);
const day = ('0' + curDate.getDate()).slice(-2);

const formatted = `${year}.${month}.${day}`;

package.version += `-nightly-${formatted}`;

writeFileSync(packagePath, JSON.stringify(package), 'utf-8');

process.stdout.write(`${EOL}::set-output name=version::${package.version}${EOL}`);

console.log('Version set to:', package.version);