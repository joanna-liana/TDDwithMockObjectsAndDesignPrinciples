class Range {
  #threshold;

  constructor({ low, high }) {
    if (low >= high) {
      throw new Error("Invalid thresholds");
    }

    this.#threshold = { low, high };
  }

  isExceededBy(value) {
    return !this.#isValueWithinThreshold(value);
  }

  #isValueWithinThreshold(value) {
    return (value >= this.#threshold.low) && (value <= this.#threshold.high);
  }
}

module.exports = Range;
