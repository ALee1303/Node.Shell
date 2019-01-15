//Output a prompt

process.stdout.write('prompt > ');
const callback = require('./pwd');

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(callback);
  } else process.stdout.write('You typed: ' + cmd);

  process.stdout.write('\nprompt > ');
});
