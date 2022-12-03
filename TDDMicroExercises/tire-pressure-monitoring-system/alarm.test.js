const Alarm = require("./alarm");

describe('Tyre Pressure Monitoring System', function () {

  describe('Alarm', function () {
    const MIN_THRESHOLD = 16;
    const MAX_THRESHOLD = 22;

    const pressureThresholds = {
      low: MIN_THRESHOLD,
      high: MAX_THRESHOLD
    };

    describe("is on", () => {
      it('when the pressure is too low', function () {
        // given
        const target = new Alarm({
          pressureThresholds,
          sensor: {
            popNextPressurePsiValue: () => {
              return MIN_THRESHOLD - 1;
            }
          }
        });

        // when
        target.check();

        // then
        expect(target.alarmOn()).toBe(true);
      });

      it('when the pressure is too high', function () {
        // given
        const target = new Alarm({
          pressureThresholds,
          sensor: {
            popNextPressurePsiValue: () => {
              return MAX_THRESHOLD + 1;
            }
          }
        });

        // when
        target.check();

        // then
        expect(target.alarmOn()).toBe(true);
      });
    });

    describe("is off when the pressure is within the normal range", () => {
      it.each([
        ["matching low threshold", MIN_THRESHOLD],
        ["above low threshold", MIN_THRESHOLD + 1],
        ["matching high threshold", MAX_THRESHOLD],
        ["below high threshold", MAX_THRESHOLD - 1]
      ])('%s', (scenario, pressureValue) => {
        // given
        const target = new Alarm({
          pressureThresholds,
          sensor: {
            popNextPressurePsiValue: () => {
              return pressureValue;
            }
          }
        });

        // when
        target.check();

        // then
        expect(target.alarmOn()).toBe(false);
      });
    });

  });

});
