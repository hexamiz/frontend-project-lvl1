import readlineSync from 'readline-sync';

function helloUser() {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
}

export default { helloUser };
