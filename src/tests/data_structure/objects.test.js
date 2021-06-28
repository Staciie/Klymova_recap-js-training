import {
  isEmpty,
  objectInverse,
  clone,
  multiplyNumbers,
} from '../../tasks/1_data_structure/objects';

test('isEmpty: return boolean for objects else return "support only object"', () => {
  expect(isEmpty({})).toBe(true);

  expect(isEmpty({
    obj: 'full',
  })).toBe(false);

  expect(isEmpty(null)).toEqual('support only object');
  expect(isEmpty([])).toBe('support only object');
  expect(isEmpty('object')).toBe('support only object');
});

test('revertObjectValues: swap keys and values', () => {
  expect(objectInverse({})).toBe('is empty object');

  expect(objectInverse({
    obj: 'full',
  })).toEqual({
    full: 'obj',
  });

  expect(objectInverse({
    'hello world': 'my first programm',
  })).toEqual({
    'my first programm': 'hello world',
  });

  expect(objectInverse(null)).toEqual('support only object');
  expect(objectInverse([])).toBe('support only object');
  expect(objectInverse('object')).toBe('support only object');
});

test('clone', () => {
  expect(clone({})).toBe('is empty object');

  const deepObj = {
    fuu: 'biz',
    1: 2,
    hello: 'world',
    obj: {
      h: 1,
    },
  };

  const cloneDeepObj = clone(deepObj, true);

  cloneDeepObj.obj.g = '2';

  expect(deepObj).not.toEqual(cloneDeepObj);

  const obj = {
    fuu: 'biz',
    1: 2,
    hello: 'world',
  };

  const cloneObj = clone(obj);

  cloneObj.test = 'good';

  expect(obj).not.toEqual(cloneObj);

  expect(clone(null)).toBe('support only object');
  expect(clone([])).toBe('support only object');
  expect(clone('object')).toBe('support only object');
});

test('multiplyNumbers', () => {
  expect(multiplyNumbers({})).toBe('is empty object');

  expect(multiplyNumbers({
    hello: 'world',
  })).toBe('is empty object');


  const obj = {
    fuu: 'biz',
    1: 2,
    4: 5,
    6: 3,
    hello: 'world',
  };

  const obj1 = {
    fuu: 'biz',
    1: 2,
    4: 5,
    6: 3,
    5: 0,
    hello: 'world',
  };

  expect(multiplyNumbers(obj)).toBe(30);
  expect(multiplyNumbers(obj1)).toBe(0);

  expect(multiplyNumbers(null)).toEqual('support only object');
  expect(multiplyNumbers([])).toBe('support only object');
  expect(multiplyNumbers('object')).toBe('support only object');
});
