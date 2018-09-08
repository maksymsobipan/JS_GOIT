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

//=====================================================================

alert('Cкрипт авторизации пользователя');


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;

let gotPassword;

do {
  gotPassword = prompt('Enter password');
  attempts -= 1;

  let checkPassword = function (gotPassword) {
    for (let password of passwords) {
      // console.log(gotPassword);
      if (gotPassword === password) {
        return true;
        break;
      }
    }
  };
  console.log(checkPassword(gotPassword));

  if (checkPassword(gotPassword)) {
    alert ('Добро пожаловать!');
    break;
  } else if (attempts === 0) {
       alert ("У вас закончились попытки, аккаунт заблокирован!");
       break;
     } else if (gotPassword !== null){
       alert(`Неверный пароль, у вас осталось ${attempts} попыток `);
     }
} while (gotPassword !== null && attempts >= 1);
