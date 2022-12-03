class PressureRange {
  #threshold;

  constructor({ low, high }) {
    if (low >= high) {
      throw new Error("Invalid thresholds");
    }

    this.#threshold = { low, high };
  }

  checkValue(pressureValue) {
    return !this.#isValueWithinThreshold(pressureValue);
  }

  #isValueWithinThreshold(pressureValue) {
    return (pressureValue > this.#threshold.low) && (pressureValue < this.#threshold.low);
  }
}

module.exports = PressureRange;
