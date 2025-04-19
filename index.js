import { exec } from 'child_process';
import path from 'path';





const cliPath = path.resolve(
  'node_modules',
  'github-readme-site-preview',
  'src',
  'index.js' 
);




const [,, url, devices, output, selectors] = process.argv;




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
