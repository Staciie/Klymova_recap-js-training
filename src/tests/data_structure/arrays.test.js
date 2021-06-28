import {
  getUpperCaseLetters,
  getCapitalizeWords,
  getReversWords,
  calculateNumbers,
  fourOfKind,
  getTrueLength,
  calculateCart,
  findPriceById,
  filterByCategory,
} from '../../tasks/1_data_structure/arrays';


const CARD = [
  {
    id: 1, name: 'Морковь', category: 'vegetables', amount: 3, price: 2.50,
  },
  {
    id: 2, name: 'Помидор', category: 'vegetables', amount: 2, price: 3,
  },
  {
    id: 3, name: 'Яблоко', category: 'fruits', amount: 1, price: 4.20,
  },
  {
    id: 4, name: 'Капуста', category: 'vegetables', amount: 2, price: 1.80,
  },

];
test('getUpperCaseLetters', () => {
  expect(getUpperCaseLetters('afHDKeafafNDJW rF')).toBe('HDKNDJWF');
  expect(getUpperCaseLetters('asdfasdf43435r')).toBe('');
  expect(getUpperCaseLetters([])).toBe('');
  expect(getUpperCaseLetters(null)).toBe('');
  expect(getUpperCaseLetters({})).toBe('');
  expect(getUpperCaseLetters(true)).toBe('');
});

test('getCapitalizeWords', () => {
  expect(getCapitalizeWords('afHDKeafafNDJW Guda nag Bfasdf')).toEqual(['Guda', 'Bfasdf']);
  expect(getCapitalizeWords('asdfasdf43435r afd ac')).toEqual([]);
  expect(getCapitalizeWords([])).toEqual([]);
  expect(getCapitalizeWords(null)).toEqual([]);
  expect(getCapitalizeWords({})).toEqual([]);
  expect(getCapitalizeWords(true)).toEqual([]);
});

test('getReversWords', () => {
  expect(getReversWords('hello world !? good')).toBe('olleh dlrow ?! doog');
  expect(getReversWords([])).toBe('');
  expect(getReversWords(null)).toBe('');
  expect(getReversWords({})).toBe('');
  expect(getReversWords(true)).toBe('');
});

test('calculateNumbers', () => {
  expect(calculateNumbers({
    1: 1.142,
    2: 2.51,
  })).toBe(3.652);
  expect(calculateNumbers({
    1: '1.14',
    2: '2.51',
  })).toBe(0);
  expect(calculateNumbers({
    1: '1.14',
    2: 2.51,
    3: 3.11,
  })).toBe(5.62);
});

test('fourOfKind', () => {
  expect(fourOfKind([1, 2, 3, 4, 4, 4, 4, 5])).toBe(4);
  expect(fourOfKind([1, 2, 3, 4, 4, '4', 4, 5])).toBe(0);
  expect(fourOfKind([1, 1, 1, 1, 4, '4', 4, 5, 5, 5, 5])).toBe(5);
  expect(fourOfKind([])).toBe(0);
});

test('getTrueLength', () => {
  expect(getTrueLength([1, 2, 3])).toBe(3);
  // eslint-disable-next-line no-sparse-arrays
  expect(getTrueLength([1, 2,,, 3])).toBe(3);
  // eslint-disable-next-line no-sparse-arrays
  expect(getTrueLength([1,,, 2,,, 3])).toBe(3);
});

test('calculateCart', () => {
  expect(calculateCart(CARD)).toBe(21.3);
});

test('findPriceById', () => {
  expect(findPriceById(3, CARD)).toEqual(4.20);
});

test('filterByCategory', () => {
  expect(filterByCategory('fruits', CARD)).toEqual([{
    id: 3, name: 'Яблоко', category: 'fruits', amount: 1, price: 4.20,
  }]);
});
