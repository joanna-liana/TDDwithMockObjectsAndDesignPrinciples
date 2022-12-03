class PressureRange {
  constructor({ low, high }) {
    if (low >= high) {
      throw new Error("Invalid thresholds");
    }
  }
}

module.exports = PressureRange;
