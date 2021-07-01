/*
  Реализовать валидатор который работает с цепочкой вызовов

  isValid('Test string').required().isString().min(5);
*/

const isValid = (str) => ({
  required() {
    if (str.length === 0) {
      throw new Error('Required!');
    }
    return this;
  },

  isString() {
    if (typeof str !== 'string') {
      throw new Error('Should be a string!');
    }
    return this;
  },

  min(len) {
    if (str.length < len) {
      throw new Error('Should be more than min');
    }
    return this;
  },
});

export default isValid;
