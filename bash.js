const vanilla = require('./pwd');
const strawberry = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

  switch (cmd) {
    case 'pwd':
      vanilla();
      break;
    case 'ls':
      strawberry();
      break;
  }
});
