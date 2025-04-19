import { exec } from 'child_process';
import path from 'path';
import * as core from '@actions/core';





const cliPath = path.resolve(
  'node_modules',
  'github-readme-site-preview',
  'src',
  'index.js' // or whatever file defines the CLI command
);





// const url = core.getInput('url');
// const devices = core.getInput('devices');
// const output = core.getInput('output');
// const selectors = core.getInput('selectors');

const [,, url, devices, output, selectors] = process.argv;



// const url = 'https://blog-da9s.vercel.app/about/llk';
// const devices = 'laptop';
// const output = 'snapshots';
// const selectors = '#categoryTop > div.navbar_header__KApwF > div.navbar_end__6YQcj > div.themetoggle_container__SfpgS,#categoryTop > div.navbar_header__KApwF > div:nth-child(3) > div'




const cmd = `node ${cliPath} "${url}" "${devices}" "${output}" "${selectors}"`;

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
  }
  console.log(`✅ Output:\n${stdout}`);
});
