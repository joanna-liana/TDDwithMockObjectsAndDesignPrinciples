const Alarm = require("./alarm");

describe('Tyre Pressure Monitoring System', function () {

  describe('Alarm', function () {
    const HIGH_THRESHOLD = 16;
    const LOW_THRESHOLD = 22;

    const pressureThresholds = {
      low: HIGH_THRESHOLD,
      high: LOW_THRESHOLD
    };

    describe("is on", () => {
      it('when the pressure is too low', function () {
        // given
        const target = new Alarm({
          pressureThresholds,
          sensor: {
            popNextPressurePsiValue: () => {
              return HIGH_THRESHOLD - 1;
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
              return LOW_THRESHOLD + 1;
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
        ["matching low threshold", HIGH_THRESHOLD],
        ["above low threshold", HIGH_THRESHOLD + 1],
        ["matching high threshold", LOW_THRESHOLD],
        ["below high threshold", LOW_THRESHOLD - 1]
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
