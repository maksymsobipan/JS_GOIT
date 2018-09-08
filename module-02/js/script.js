'use strict'

let userInput;
const numbers = [];
let total = 0;

  do {
    userInput = prompt('Введите число');
    if (userInput === null) {
      break;
    } else if (!isNaN(parseFloat(userInput)) && isFinite(userInput)) {
      numbers.push(Number(userInput))
    } else {
     alert ('Было введено не число, попробуйте еще раз');
   }
 } while (userInput !== null);

 for(let item of numbers) {
   total += item;
 }
 alert(`Общая сумма чисел равна ${total}`);

