import Worker from '../../tasks/3_oop/worker';

describe('Test class Worker', () => {
  let worker;
  const dateOfBirth = new Date('05/01/1999');

  beforeEach(() => {
    worker = new Worker('Vlad', 'Dracula', dateOfBirth, 700, 20);
  });

  it('should create instance of Worker', () => {
    expect(worker instanceof Worker).toBeTruthy();
  });

  it('should use all methods from parent class', () => {
    expect(worker.getFullName()).toEqual('Vlad Dracula');
    expect(worker.getAge()).toEqual(22);
  });

  it('should return salary', () => {
    expect(worker.salary).toBe(14000);
  });

  it('should return extended info', () => {
    expect(worker.getInfo()).toBe("My name is Vlad Dracula. I'm 22 years old. I have a salary of 14000.");
  });

  it('should return worker with higher salary', () => {
    const newWorker = new Worker('Eugene', 'Bondar', new Date('01/01/2000'), 700, 22);
    expect(Worker.compare(newWorker, worker)).toEqual(newWorker);
  });
});
