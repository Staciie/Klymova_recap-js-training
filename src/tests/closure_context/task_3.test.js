import combine, { uppercase, trimSpaces, reverseString } from '../../tasks/2_closure_context/task_3';

const TEST_STRING = '   Hello World!   ';

describe('Task_3', () => {
  it('should convert string to uppercase', () => {
    const result = uppercase(TEST_STRING);
    expect(result).toBe('   HELLO WORLD!   ');
  });

  it('should trim spaces', () => {
    const result = trimSpaces(TEST_STRING);
    expect(result).toBe('Hello World!');
  });

  it('should revert string', () => {
    const result = reverseString(TEST_STRING);
    expect(result).toBe('   !dlroW olleH   ');
  });

  it('should combine uppercase, trimSpaces, reverseString functions', () => {
    const updateString = combine(uppercase, trimSpaces, reverseString);
    const result = updateString(TEST_STRING);
    expect(result).toBe('!DLROW OLLEH');
  });

  it('should combine uppercase, trimSpaces, reverseString and one more function', () => {
    const lowerCase = (str) => str.toLowerCase(str);
    const updateString = combine(lowerCase, uppercase, trimSpaces, reverseString);
    const result = updateString(TEST_STRING);
    expect(result).toBe('!dlrow olleh');
  });
});
