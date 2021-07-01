import Person from '../../tasks/3_oop/personES5';

describe('Test Person function constructor', () => {
  let person;
  const dateOfBirth = new Date('05/01/1999');

  beforeEach(() => {
    person = new Person('Vlad', 'Dracula', dateOfBirth);
  });

  it('should create instance of Person', () => {
    expect(person).not.toBe(null);
  });

  it('should get right full name', () => {
    expect(person.getFullName()).toEqual('Vlad Dracula');
  });

  it('should return right years old', () => {
    expect(person.getAge()).toEqual(22);
  });

  it('should return right info', () => {
    expect(person.getInfo()).toEqual("My name is Vlad Dracula. I'm 22 years old.");
  });
});
