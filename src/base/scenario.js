import { askQuestionGetAnswer } from './functions.js';

export default function scenario(
  hello,
  question,
  answerData,
  questionConstruction,
  getExpectedAnswer,
  typeConversion,
  attempts,
) {
  const userName = hello();
  let countAttempts = 0;
  let answerIsCorrect = false;
  let questionConst;
  let expValue;
  let ansData;
  let answer;
  for (; countAttempts < attempts;) {
    ansData = answerData();
    questionConst = questionConstruction(ansData);
    expValue = getExpectedAnswer(ansData);
    answer = typeConversion(askQuestionGetAnswer(question, questionConst));
    answerIsCorrect = (expValue === answer);
    if (!answerIsCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expValue}'.`);
      break;
    }
    if (answerIsCorrect) {
      countAttempts += 1;
    }
  }
  if (countAttempts === attempts) {
    console.log(`Congratulations, ${userName}!`);
  }
}
