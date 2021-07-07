import readlineSync from 'readline-sync';

export default function helloUser() {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  return username;
}
