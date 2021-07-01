/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/*
  1. Создать функцию конструктор Person с такими свойствами: firstName, lastName, dateOfBirth.
  2. Реализовать методы getFullName, getInfo, getAge.
*/

function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.getFullName = function () {
    return (`${firstName} ${lastName}`);
  };
  this.getAge = function() {
    const currYear = new Date().getFullYear();
    const yearOfBirth = this.dateOfBirth.getFullYear();
    return currYear - yearOfBirth;
  };
  this.getInfo = function () {
    return `My name is ${this.getFullName()}. I'm ${this.getAge()} years old.`;
  };
}
export default Person;
