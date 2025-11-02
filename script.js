//import { sum } from 'lodash-es';
const { sum } = require('lodash-es');

const numbers = [10, 20, 30, 40, 50,60];
const average = sum(numbers) / numbers.length;

console.log(average); // 30
