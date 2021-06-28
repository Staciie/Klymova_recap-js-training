/* eslint max-len: ["error", { "code": 150 }] */
import laptop from '../../tasks/2_closure_context/task_5';

const laptopCopy = { ...laptop };
const LAPTOP_FEATURES = 'Apple MacBook Pro, 13.3-inch LED-backlit Retina display, Intel Core i5 2.3 GHz, 256 GB SSD, 8 GB DDR3';

describe('Task_5', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  it('should execute console.log in combineFeatures method', () => {
    laptop.combineFeatures();
    expect(console.log).toHaveBeenCalledWith(LAPTOP_FEATURES);
  });

  it('should execute console.log in correctTimeoutCombineFeatures1 in 2sec', () => {
    laptop.correctTimeoutCombineFeatures1();

    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1999);
    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(2);
    expect(console.log).toHaveBeenCalledWith(LAPTOP_FEATURES);
  });

  it('should execute console.log in correctTimeoutCombineFeatures2 in 2sec', () => {
    laptop.correctTimeoutCombineFeatures2();

    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1999);
    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(2);
    expect(console.log).toHaveBeenCalledWith(LAPTOP_FEATURES);
  });

  it('should execute console.log in correctTimeoutCombineFeatures1 in 2sec if redefine variable', () => {
    const apple = { ...laptop };
    laptop.combineFeatures = jest.fn();
    apple.correctTimeoutCombineFeatures1();

    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1999);
    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(2);
    expect(console.log).toHaveBeenCalledWith(LAPTOP_FEATURES);
    laptop.combineFeatures = laptopCopy.combineFeatures;
  });

  it('should execute console.log in correctTimeoutCombineFeatures2 in 2sec if redefine variable', () => {
    const apple = { ...laptop };
    apple.correctTimeoutCombineFeatures2();

    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1999);
    expect(console.log).not.toHaveBeenCalled();

    jest.advanceTimersByTime(2);
    expect(console.log).toHaveBeenCalledWith(LAPTOP_FEATURES);
    laptop.combineFeatures = laptopCopy.combineFeatures;
  });
});
