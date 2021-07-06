import readlineSync from "readline-sync";

function helloUser() {
  let username = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${username}`);
}

export {helloUser};