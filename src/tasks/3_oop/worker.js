/*
  1. Написать класс Worker который наследуется от Person у которого будут
  дополнительные свойства rate, daysWorked.
  2. Добавить приватное поле salary (rate * hoursWorked) и сделать для него геттер.
  3. Расширить родительский метод getInfo.
  3. Создать статический метод compare, который будет сравнивать зарплату двух работников
  и возвращать ещго у кого зарплата больше больше.
*/

import Person from './person';

class Worker extends Person {
  #salary = 0;
  
  constructor(name, surname, fullName, rate, daysWorked) {
    super(name, surname, fullName);
    this.rate = rate;
    this.daysWorked = daysWorked;
    this.#salary = this.rate * this.daysWorked;
  }

  getInfo() {
    return `${super.getInfo()} I have a salary of ${this.salary}.`
  };
  
  get salary() {
    return this.#salary;
  }

  static compare(workerA, workerB) {
    return workerA.salary > workerB.salary ? workerA : workerB;
  }
}


export default Worker;
