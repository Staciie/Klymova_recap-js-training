/*
  Сделайте функцию, каждый вызов которой будет генерировать
  случайное целое число от 1 до 10 и возвращать его.
  Как только случайное число повторится -
  вернуть весь массив ранее сгенерированных чисел.
*/

function generateUniqInteger() {
  const arr = [];
  return () => {
    const num = Math.ceil(Math.random() * 10);
    if (arr.includes(num)) {
      return arr;
    }
    arr.push(num);
    return num;
  };
}

export default generateUniqInteger;
