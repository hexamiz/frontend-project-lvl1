import scenario from '../base/scenario.js';
import { helloScenario } from '../base/functions.js';
import {
  genCalcAnswer, createQuestionConstruction, calculateExpResult, typeConversion,
} from './functions.js';

export default function calculatorScenario() {
  const question = 'What is the result of the expression?';
  scenario(
    helloScenario,
    question,
    genCalcAnswer,
    createQuestionConstruction,
    calculateExpResult,
    typeConversion,
    3,
  );
}
