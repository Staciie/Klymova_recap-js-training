/*
  Реализовать функцию генератор, в качестве аргументов функция принимает  start и step
  (указывать не обязательно, по дефолту step = 1).
  При вызове функция возвращает другую функцию, которая возвращает стартовое число + степ.
  Функции генераторы независимы между собой, можно создавать сколько угодно генераторов.

  const generator = createGenerator(0, 3);
  const generator1 = createGenerator(10);

  console.log(generator()); // 3
  console.log(generator()); // 6

  console.log(generator1()); // 11
  console.log(generator1()); // 12

  console.log(generator()); // 9
*/


function createGenerator() {
}

export default createGenerator;
