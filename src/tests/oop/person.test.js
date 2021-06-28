import Person from '../../tasks/3_oop/person';

describe('Test class Person', () => {
  let person;
  const dateOfBirth = new Date('05/01/1999');

  beforeEach(() => {
    person = new Person('Vlad', 'Dracula', dateOfBirth);
  });

  it('should create instance of Person', () => {
    expect(person instanceof Person).toBeTruthy();
  });

  it('should get right full name', () => {
    expect(person.getFullName()).toEqual('Vlad Dracula');
  });

  it('should return right years old', () => {
    expect(person.getAge()).toEqual(22);
  });

  it('should return date of birth', () => {
    expect(person.dateOfBirth).toBe(dateOfBirth);
  });

  it('should set valid date of birth', () => {
    person.dateOfBirth = new Date('03/01/1994');
    expect(person.dateOfBirth).toEqual(new Date('03/01/1994'));
  });

  it('should console warn', () => {
    let warning = '';
    console.log = (output) => {
      warning = output;
    };

    person.dateOfBirth = new Date('05/01/2020');
    expect(warning).toEqual('Date is not valid');
  });

  it('should return right info', () => {
    expect(person.getInfo()).toEqual("My name is Vlad Dracula. I'm 20 years old.");
  });
});
