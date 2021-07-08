import readlineSync from 'readline-sync';
import helloUser from './cli.js';

function isEven(randInt) {
  return randInt % 2 === 0;
}

function handleAnswer(userAnswer, expectedBoolAnswer, userName) {
  const answerMap = new Map([
    [true, 'yes'],
    [false, 'no'],
  ]);
  const expectedStrAnswr = answerMap.get(expectedBoolAnswer);
  let answerIsCorrect = false;
  if (expectedStrAnswr === userAnswer) {
    console.log('Correct!');
    answerIsCorrect = true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedStrAnswr}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
  }
  return answerIsCorrect;
}

export default function evenGameScenario() {
  const userName = helloUser();
  let count = 0;
  let answerIsCorrect = false;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (; count < 3;) {
    const randInt = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randInt}`);

    const numIsEven = isEven(randInt);
    const answer = readlineSync.question('Answer: ');
    answerIsCorrect = handleAnswer(answer, numIsEven, userName);
    if (!answerIsCorrect) {
      break;
    }
    if (answerIsCorrect) {
      count += 1;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
