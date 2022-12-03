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
    describe("reports the value as within the range", () => {
      const testCases = [
        ["below low threshold", 0],
        ["above high threshold", 0],
      ];
    });

    describe("reports the value as outside the range", () => {
      const testCases = [
        ["matching low threshold", 0],
        ["above low threshold", 0],
        ["matching high threshold", 0],
        ["below high threshold", 0],
      ];
    });
  });
});
