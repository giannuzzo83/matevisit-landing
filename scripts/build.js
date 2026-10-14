import { access } from 'node:fs/promises';
import { constants } from 'node:fs';

const required = ['index.html', 'privacy/index.html', 'styles.css', 'favicon.svg'];

for (const file of required) {
  await access(file, constants.R_OK);
}

console.log('Static site OK — output is repository root (no compilation).');
