import isValid from '../../tasks/2_closure_context/task_6';

describe('Task_6', () => {
  it('should throw an error if string is absent', () => {
    expect(() => {
      isValid('').required();
    }).toThrowError('Required!');
  });

  it('should throw an error if it is not a string', () => {
    expect(() => {
      isValid(55).isString();
    }).toThrowError('Should be a string!');
  });

  it('should throw an error if string length less than min', () => {
    expect(() => {
      isValid('Test').min(5);
    }).toThrowError('Should be more than min');
  });

  it('should be possible to chain functions and throw an error if string length less than min', () => {
    expect(() => {
      isValid('Test').required().isString().min(5);
    }).toThrowError('Should be more than min');
  });

  it('should be possible to chain functions', () => {
    expect(
      isValid('Test string').required().isString().min(5),
    ).toBeTruthy();

    expect(
      isValid('Test string').isString().min(5),
    ).toBeTruthy();
  });
});
