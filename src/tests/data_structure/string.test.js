import {
  isValidURL,
  isValidPhoneNumber,
  positiveFunction,
  parameterize,
} from '../../tasks/1_data_structure/strings';

test('parameterize', () => {
  expect(parameterize('hEllo world !? good')).toBe('hello-world-good');
  expect(parameterize('-- -- -- ')).toBe('');
  expect(parameterize([])).toBe('');
});

test('positiveFunction', () => {
  expect(positiveFunction('hello world !? good')).toBe('hello world !? GOOD');
  expect(positiveFunction('hello world !? bad very bad')).toBe('hello world !? good very good');
  expect(positiveFunction('hello world !?')).toBe(':)');
  expect(positiveFunction([])).toBe(':)');
});

test('isValidURL', () => {
  expect(isValidURL('google.com')).toBe(true);
  expect(isValidURL('www.google.com')).toBe(true);
  expect(isValidURL('www.google.co/m')).toBe(true);
  expect(isValidURL('hello')).toBe(false);
  expect(isValidURL(true)).toBe(false);
});

test('isValidPhoneNumber', () => {
  expect(isValidPhoneNumber('+380502205025')).toBe(true);
  expect(isValidPhoneNumber('+3(80) 502-20-50-25')).toBe(true);
  expect(isValidPhoneNumber('+7(80) 502-20-50-25')).toBe(false);
  expect(isValidPhoneNumber('+7(80)5020502')).toBe(false);
  expect(isValidPhoneNumber('')).toBe(false);
  expect(isValidPhoneNumber(true)).toBe(false);
  expect(isValidPhoneNumber([])).toBe(false);
});
