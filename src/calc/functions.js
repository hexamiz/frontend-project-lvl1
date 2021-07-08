import { genRandInt } from '../base/functions.js';

function genRandOpertor() {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
}

function genCalcAnswer() {
  const firstOperand = genRandInt();
  const secOperand = genRandInt();
  const operator = genRandOpertor();
  return new Map([
    ['firstOperand', firstOperand],
    ['secondOperand', secOperand],
    ['operator', operator],
  ]);
}

function typeConversion(data) {
  return parseInt(data, 10);
}

function calculateExpResult(answerData) {
  let res;
  const operator = answerData.get('operator');
  const firstOperand = answerData.get('firstOperand');
  const secOperand = answerData.get('secondOperand');
  if (operator === '+') {
    res = firstOperand + secOperand;
  }
  if (operator === '-') {
    res = firstOperand - secOperand;
  }
  if (operator === '*') {
    res = firstOperand * secOperand;
  }
  return res;
}

function createQuestionConstruction(questionConstruction) {
  return `${questionConstruction.get('firstOperand')} ${questionConstruction.get('operator')} ${questionConstruction.get('secondOperand')}`;
}

export {
  genCalcAnswer, calculateExpResult, createQuestionConstruction, typeConversion,
};
