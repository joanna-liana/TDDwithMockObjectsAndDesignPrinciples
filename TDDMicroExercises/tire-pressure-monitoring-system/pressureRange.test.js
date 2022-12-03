const PressureRange = require('./pressureRange');

describe('Pressure range', () => {
  describe("new instance", () => {
    it("can be created with different low and high thresholds", () => {
      const range = new PressureRange({ low: 0, high: 100 });

      expect(range).toBeInstanceOf(PressureRange);
    });

    describe("cannot be created", () => {
      it("with equal low and high thresholds", () => {
        expect(() => new PressureRange({ low: 10, high: 10 }))
          .toThrow();
      });

      it("if the low threshold is above the high one", () => {
        expect(() => new PressureRange({ low: 11, high: 10 }))
          .toThrow();
      });
    });
  });

  describe("checking if provided value is within the range", () => {
    const LOW_THRESHOLD = 10;
    const HIGH_THRESHOLD = 20;

    let range;

    describe("reports the value as within the range", () => {
      const testCases = [
        ["below low threshold", LOW_THRESHOLD - 1],
        ["above high threshold", HIGH_THRESHOLD + 2],
      ];

      it.each(testCases)("value %s", (_caseName, pressureValue) => {
        range = new PressureRange({ low: LOW_THRESHOLD, high: HIGH_THRESHOLD });

        expect(range.isExceededBy(pressureValue)).toEqual(true);
      });
    });

    describe("reports the value as outside the range", () => {
      const testCases = [
        ["matching low threshold", LOW_THRESHOLD],
        ["above low threshold", LOW_THRESHOLD + 1],
        ["matching high threshold", HIGH_THRESHOLD],
        ["below high threshold", HIGH_THRESHOLD - 1],
      ];

      it.each(testCases)("value %s", (_caseName, pressureValue) => {
        range = new PressureRange({ low: LOW_THRESHOLD, high: HIGH_THRESHOLD });

        expect(range.isExceededBy(pressureValue)).toEqual(false);
      });
    });
  });
});
