// Напишите функцию, которая возвращает промис, в котором расположена
// функция setTimeout со случайно задержкой от 1 до 5 секунд.
// Пусть промис своим результатом возвращает эту задержку.

// Вторая функция принимает число. Необходимо сформировать массив задержек
// в результате выполнения прошлой функции(посказка Promise.all),
// найти его сумму и вывести на экран.

function delay() {
  return new Promise((resolve) => {
    const random = Math.ceil(Math.random() * 5);
    setTimeout(() => {
      resolve(random);
    }, random * 1000);
  }).then((n) => n);
}

function sum() {
  Promise.all([
    delay(),
    delay(),
    delay(),
    delay(),
    delay(),
  ]).then((results) => {
    const resultsSum = results.reduce((totalSum, value) => totalSum + value);
    console.log(resultsSum);
  });
}

sum();
