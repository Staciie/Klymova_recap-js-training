// Вернуть все заглавные буквы в (одну строку) getUpperCaseLetters('asdfF gG') => 'FG'
// если аргумент будет не строка или не будет заглавных букв вернуть пустую строку => ''
export function getUpperCaseLetters(str) {
    if (typeof str !== 'string') {
        return '';
    };

    let arr = str.split('');
    let outputStr = arr.filter(i => i != i.toLowerCase()).join('');

    if (!outputStr.length) {
        return '';
    }
    return outputStr;
}

// Вернуть все слова начинающиеся с заглавной буквы в массиве
// getCapitalizeWords('Hello world Folk') => ['Hello', 'Folk']
// вернуть пустой массив во всех других случаях
export function getCapitalizeWords(str) {
    if (typeof str !== 'string') {
        return [];
    };

    function checkCapitalize(word) {
        if (word[0] == word[0].toUpperCase() && Number.isNaN(+word[0])) {
            return word;
        } else {
            return;
        }
    }
    let arr = str.split(' ');
    let outputArr = arr.filter(checkCapitalize);
    if (!outputArr.length) {
        return [];
    }
    return outputArr;
}

// Поменять местами (зеркально) буквы в словах getReversWords('hello world') => 'olleh dlrow
export function getReversWords(str) {
    if (typeof str !== 'string') {
        return "";
    };

    let arr = str.split(' ');
    let output = arr.map(function (elem) {
        let ReversedElem = elem.split('').reverse().join('');
        return ReversedElem;
    });

    return output.join(' ');
}

// сплюсовать )) все значение объекта (если это число) calculateNumbers({1: 1.14, 2: 2.51,}) => 5.2
// иначе вернуть ноль
export function calculateNumbers(obj) {
    let sum = null;
    let biggerFractional = null;
    for (const property in obj) {
        if (typeof obj[property] == 'number') {
            // Хотела избежать погрешностей исчесления в случаях, если чисел после запятых будет разное количество
            let fractional = obj[property].toString().split('.');
            let fractionalAmount = fractional[1].split('').length;
            biggerFractional = Math.max(biggerFractional, fractionalAmount);
            let secondMultiplier = Math.pow(10, biggerFractional);
            sum += Math.ceil((obj[property]) * secondMultiplier);
        } else {
            sum += 0;
        }
    }
    return sum / Math.pow(10, biggerFractional);
}
// найти последовательность (4 числа) одинаковых ЧИСЕЛ в массиве fourOfKind(1,2,3,5,5,5,5) => 5
// если последовательностей несколько то вернуть последнюю
export function fourOfKind(arr) {
    let currNum = null;
    let returnNum = 0;
    let amount = 1;

    function filterArr(elem) {
        if (currNum == elem) {
            amount++;
        } else {
            amount = 1;
        }
        if (amount == 4) {
            returnNum = currNum;
        }
        currNum = elem;
    }

    arr.filter((elem) => {
        if (typeof elem == 'number') {
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
    let len = null;
    arr.map((elem) => len++);
    return len;
}

// Функция принимает массив покупок вида
// { name: "Морковь", amount: 3, price: 2.50 }. Функция должна вернуть сумму всех покупок.
// Используйте один из перебирающих методов массивов

export function calculateCart(arr) {
    return arr.reduce(function (totalPrice, curr) {
        return totalPrice + (curr.price * curr.amount);
    }, 0);
}

// Функция принимает массив покупок вида
// { id: 1, name: "Морковь", amount: 3, price: 2.50 } и id продукта.
// Функция должна вернуть цену этого продукта.

export function findPriceById(id, arr) {
    return arr.find(elem => elem.id == id).price;
}

// Функция принимает массив покупок вида
// { id: 1, name: "Морковь", amount: 3, price: 2.50, category: ‘vegetables’ }  и название категории.
// Функция должна вернуть продукты только данной категории.


export function filterByCategory(category, arr) {
    return arr.filter(elem => elem.category == category);
}