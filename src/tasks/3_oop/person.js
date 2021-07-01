/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/*
  1. Переписать первое задание с использованием классов.
  2. Написать геттер и сеттер для даты рождения. Проверять на валидность дату (что-бы дата
  не превышала текущую).
*/

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  set dateOfBirth(value) {
    if (new Date(value) >= new Date()) {
      console.log('Date is not valid');
    }
    this._dateOfBirth = value;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  getFullName() {
    return (`${this.firstName} ${this.lastName}`);
  }

  getAge() {
    return new Date().getFullYear() - this._dateOfBirth.getFullYear();
  }

  getInfo() {
    return `My name is ${this.getFullName()}. I'm ${this.getAge()} years old.`;
  }
}

export default Person;
