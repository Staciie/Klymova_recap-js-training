// Вернуть все заглавные буквы в (одну строку) getUpperCaseLetters('asdfF gG') => 'FG'
// если аргумент будет не строка или не будет заглавных букв вернуть пустую строку => ''

export function getUpperCaseLetters(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str.split('').filter((i) => i !== i.toLowerCase()).join('');
}

// Вернуть все слова начинающиеся с заглавной буквы в массиве
// getCapitalizeWords('Hello world Folk') => ['Hello', 'Folk']
// вернуть пустой массив во всех других случаях
// eslint-disable-next-line consistent-return
export function getCapitalizeWords(str) {
  if (typeof str !== 'string') {
    return [];
  }

  function checkCapitalize(word) {
    return word[0] === word[0].toUpperCase() && Number.isNaN(+word[0]) ? word : '';
  }
  const arr = str.split(' ');
  const outputArr = arr.filter(checkCapitalize);
  if (!outputArr.length) {
    return [];
  }
  return outputArr;
}

// Поменять местами (зеркально) буквы в словах getReversWords('hello world') => 'olleh dlrow
export function getReversWords(str) {
  if (typeof str !== 'string') {
    return '';
  }

  const arr = str.split(' ');
  const output = arr.map((elem) => {
    const ReversedElem = elem.split('')
      .reverse()
      .join('');
    return ReversedElem;
  });

  return output.join(' ');
}

// сплюсовать )) все значение объекта (если это число) calculateNumbers({1: 1.14, 2: 2.51,}) => 5.2
// иначе вернуть ноль
export function calculateNumbers(obj) {
  let sum = null;
  let biggerFractional = null;
  // eslint-disable-next-line no-restricted-syntax
  for (const property in obj) {
    if (typeof obj[property] === 'number') {
      /* Хотела избежать погрешностей исчесления в случаях, если чисел после запятых будет
      разное количество */
      const fractional = obj[property].toString().split('.');
      const fractionalAmount = fractional[1].split('').length;
      biggerFractional = Math.max(biggerFractional, fractionalAmount);
      const secondMultiplier = 10 ** biggerFractional;
      sum += Math.ceil((obj[property]) * secondMultiplier);
    } else {
      sum += 0;
    }
  }
  return sum / 10 ** biggerFractional;
}

// найти последовательность (4 числа) одинаковых ЧИСЕЛ в массиве fourOfKind(1,2,3,5,5,5,5) => 5
// если последовательностей несколько то вернуть последнюю
export function fourOfKind(arr) {
  let currNum = null;
  let returnNum = 0;
  let amount = 1;

  function filterArr(elem) {
    if (currNum === elem) {
      amount += 1;
    } else {
      amount = 1;
    }
    if (amount === 4) {
      returnNum = currNum;
    }
    currNum = elem;
  }

  // eslint-disable-next-line array-callback-return
  arr.filter((elem) => {
    if (typeof elem === 'number') {
      filterArr(elem);
    }
  });
  return returnNum;
}

// Функция принимает массив. Функция должна вернуть "настоящую длинну массива"
// Пример: [1,2,3,4,5] => 5
//         [1,2,3,4, ... пустота... 10] => 5
// Используйте один из перебирающих методов массивов.

export function getTrueLength(arr) {
  return arr.filter((elem) => elem).length;
}

// Функция принимает массив покупок вида
// { name: "Морковь", amount: 3, price: 2.50 }. Функция должна вернуть сумму всех покупок.
// Используйте один из перебирающих методов массивов

export function calculateCart(arr) {
  return arr.reduce((totalPrice, curr) => totalPrice + (curr.price * curr.amount), 0);
}

// Функция принимает массив покупок вида
// { id: 1, name: "Морковь", amount: 3, price: 2.50 } и id продукта.
// Функция должна вернуть цену этого продукта.

export function findPriceById(id, arr) {
  return arr.find((elem) => elem.id === id).price;
}

// Функция принимает массив покупок вида
// { id: 1, name: "Морковь", amount: 3, price: 2.50, category: ‘vegetables’ }  и название категории.
// Функция должна вернуть продукты только данной категории.

export function filterByCategory(category, arr) {
  return arr.filter((elem) => elem.category === category);
}
