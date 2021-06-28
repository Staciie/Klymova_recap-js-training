/*
  Есть 3 функции, которые принимают в качестве аргумента строку:

  uppercase, trimSpaces, reverseString.

  Чтобы получить результат выполнения всех этих функций нужно выполнить цепочку:

  const result = uppercase(trimSpaces(reverseString(‘Hello World!’)));

  Создайте функцию combine, которая будет принимать неограниченное кол-во функций
  и позволит получить результат таким образом:

  const updateString = combine(uppercase, trimSpaces, reverseString);
  const result = updateString(‘Hello World!’);
*/

export const uppercase = () => {};

export const trimSpaces = () => {};

export const reverseString = () => {};

function combine() {
}

export default combine;
