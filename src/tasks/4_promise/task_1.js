/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
// Напишите функцию, которая будет генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах.
// Оберните все это в промис. Пусть промис выполнится успешно,
// если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.

function generateRandomNumber() {
  const random = new Promise((resolve, reject) => {
    const randomNum = Math.ceil(Math.random() * 10);
    return setTimeout(() => {
      if (randomNum >= 1 && randomNum <= 5) {
        resolve(randomNum);
      } else {
        reject(randomNum);
      }
    }, randomNum * 1000);
  }).then(((randomNum) => console.log(randomNum)));
}

generateRandomNumber();
