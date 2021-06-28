/* eslint max-len: ["error", { "code": 150 }] */
/*
  Верните контекст  у setTimeout. Сделать это 2-мя способами.
  Используйте для этого методы correctTimeoutCombineFeatures1 и correctTimeoutCombineFeatures2
*/

const laptop = {
  brand: 'Apple',
  display: '13.3-inch LED-backlit Retina display',
  ssd: '256 GB',
  memory: '8 GB',
  processor: 'Intel Core i5',
  processorSpeed: '2.3 GHz',
  operatingSystem: 'Mac OS',
  combineFeatures() {
    console.log(
      `${this.brand} MacBook Pro, ${this.display}, ${this.processor} ${this.processorSpeed}, ${this.ssd} SSD, ${this.memory} DDR3`,
    );
  },
  timeoutCombineFeatures() {
    setTimeout(this.combineFeatures, 2000);
  },
  correctTimeoutCombineFeatures1() {
    // version #1
    setTimeout(this.combineFeatures, 2000);
  },
  correctTimeoutCombineFeatures2() {
    // version #2
    setTimeout(this.combineFeatures, 2000);
  },
};

export default laptop;
