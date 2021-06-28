import createGenerator from '../../tasks/2_closure_context/task_4';

describe('Task_4', () => {
  it('should return function', () => {
    const result = createGenerator(0, 3);
    expect(result).toBeInstanceOf(Function);
  });

  it('should increase start value', () => {
    const generator = createGenerator(0, 3);
    const result = generator();
    expect(result).toBe(3);
  });

  it('should increasing after each call', () => {
    const generator = createGenerator(0, 3);
    expect(generator()).toBe(3);
    expect(generator()).toBe(6);
    expect(generator()).toBe(9);
    expect(generator()).toBe(12);
  });

  it('should run with step 1 by default', () => {
    const generator = createGenerator(0);
    const result = generator();
    expect(result).toBe(1);
  });

  it('should create independent generators', () => {
    const generator = createGenerator(0, 3);
    const generator1 = createGenerator(10);

    expect(generator()).toBe(3);
    expect(generator()).toBe(6);

    expect(generator1()).toBe(11);
    expect(generator1()).toBe(12);

    expect(generator()).toBe(9);
    expect(generator()).toBe(12);

    expect(generator1()).toBe(13);
    expect(generator1()).toBe(14);
  });
});
