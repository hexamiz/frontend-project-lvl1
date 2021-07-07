import readlineSync from 'readline-sync';
import helloUser from './cli.js';

function isEven(randInt) {
  return (randInt % 2 === 0);
}

function handleAnswer(userAnswer, expectedBoolAnswer, userName) {
  const answerMap = new Map([
    [true, 'yes'],
    [false, 'no'],
  ]);
  const expectedStrAnswr = answerMap.get(expectedBoolAnswer);
  if (expectedStrAnswr === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedStrAnswr}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
}

export default function evenGameScenario() {
  const userName = helloUser();
  const randInt = Math.floor(Math.random() * 100) + 1;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question ${randInt}`);
  const numIsEven = isEven(randInt);
  const answer = readlineSync.question('Answer: ');
  handleAnswer(answer, numIsEven, userName);
}
