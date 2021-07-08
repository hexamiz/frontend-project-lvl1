import readlineSync from 'readline-sync';
import helloUser from '../cli.js';

function genRandInt() {
  return Math.floor(Math.random() * 100) + 1;
}

function helloScenario() {
  return helloUser();
}

function askQuestionGetAnswer(question, construction) {
  console.log(question);
  console.log(`Question: ${construction}`);
  return readlineSync.question('Answer: ');
}

export {
  helloScenario, askQuestionGetAnswer, genRandInt,
};
