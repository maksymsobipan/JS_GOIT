'use strict'


const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

function Cashier(name, productDatabase, customerMoney = 0) {
  this.customerMoney = customerMoney;
  this.name = name;
  this.productDatabase = productDatabase;
  this.getCustomerMoney = function (value) {
    return this.customerMoney = value;
  }
  this.countTotalPrice = function (order) {
    let gotProductsPrice = [];
    for (let ord in order) {
        for (let prod in this.productDatabase) {
          if (prod === ord) {
          gotProductsPrice.push((order[ord]*this.productDatabase[prod]));
        }
      }
    }
    return gotProductsPrice.reduce((acc,el) => (acc += el),0);
};

const totalPrice = this.countTotalPrice(order);

this.countChange = function () {
  if (this.customerMoney >= totalPrice) {
    return this.customerMoney - totalPrice;
  } else {
    return null;
  }
};

const change = this.countChange();

this.onSuccess = function (change) {
  if(change !== null) {
    return console.log(`Спасибо за покупку, ваша сдача ${change}`);
  }
};

this.onError = function () {
  if(change === null) {
    return console.log(`Очень жаль, вам не хватает денег на покупки`);
  }
};

  this.reset = function () {
    return this.customerMoney = 0;
  };
};

/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

/* Пример использования */

const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
const totalPrice = mango.countTotalPrice(order);
//
// // Проверям что посчитали
console.log(totalPrice); // 110
//
// // Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);
//
// // Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300
//
// // Вызываем countChange для подсчета сдачи
const change = mango.countChange();
//
// // Проверяем что нам вернул countChange
console.log(change !== null);
console.log(`change ${change}`); // 190
mango.onSuccess(change);
// // Проверяем результат подсчета денег
if(change !== null) {
   // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}
//
// // Вызываем reset при любом исходе обслуживания
mango.reset();
//
// // Проверяем значения после reset
console.log(mango.customerMoney); // 0
