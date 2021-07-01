// Проверить являеться ли объект пустым, если пустой вернуть true, если что то есть вернуть false
// если приходит не объект вернуть 'support only object'

export function isEmpty(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return 'support only object';
  }
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}

// Поменять местами ключи и значения в объекте
// если приходит не объект вернуть 'support only object'
// если приходит пустой объект вернуть 'is empty object'
export function objectInverse(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return 'support only object';
  }
  if (Object.keys(obj).length === 0) {
    return 'is empty object';
  }
  const reversedObj = {};
  for (const property in obj) {
    reversedObj[obj[property]] = property;
  }
  return reversedObj;
}

// Склонировать объект без ссылки, если второй аргумент true, клонировать полностью
// если приходит не объект вернуть 'support only object'
// если приходит пустой объект вернуть 'is empty object'
export function clone(obj, param) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return 'support only object';
  }
  if (Object.keys(obj).length === 0) {
    return 'is empty object';
  }
  if (param) {
    const clonedObj = JSON.parse(JSON.stringify(obj));
    return clonedObj;
  }
  const clonedObj = { ...obj };
  return clonedObj;
}

// Найти числа в значениях в объектк и перемножить
// если приходит пустой объект вернуть 'is empty object'
// если приходит не объект вернуть 'support only object'
export function multiplyNumbers(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return 'support only object';
  }
  let multi = 1;
  for (const property in obj) {
    if (typeof obj[property] === 'number') {
      multi *= obj[property];
    }
  }
  if (Object.keys(obj).length === 0 || multi === 1) {
    return 'is empty object';
  }

  return multi;
}

console.log(multiplyNumbers({
  hello: 'world',
}));
