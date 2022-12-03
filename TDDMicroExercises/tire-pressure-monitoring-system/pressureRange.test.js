describe('Pressure range', () => {
  describe("new instance", () => {
    it("can be created with different low and high thresholds", () => {
      const range = new PressureRange({ low: 0, high: 100 });

      expect(range).toBeInstanceOf(PressureRange);
    });

    describe("cannot be created", () => {
      it("with equal low and high thresholds", () => {});

      it("if the low threshold is above the high one", () => {});

      it("if the high threshold is above the low one", () => {});
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
