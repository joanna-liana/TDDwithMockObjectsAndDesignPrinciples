const Alarm = require("./alarm");

describe('Tyre Pressure Monitoring System', function () {

  describe('Alarm', function () {
    const MIN_THRESHOLD = 16;
    const MAX_THRESHOLD = 22;

    const pressureThresholds = {
      low: MIN_THRESHOLD,
      high: MAX_THRESHOLD
    };

    it('is on when the pressure is too low', function () {
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

    it('is on when the pressure is too high', function () {
      // given
      const target = new Alarm();

      target._sensor = {
        popNextPressurePsiValue: () => MAX_THRESHOLD
      };

      // when
      target.check();

      // then
      expect(target.alarmOn()).toBe(true);
    });


    it.each([MIN_THRESHOLD + 1, MAX_THRESHOLD - 1])('is off when the pressure is within the normal range', function (pressureValue) {
      // given
      const target = new Alarm();

      target._sensor = {
        popNextPressurePsiValue: () => pressureValue
      };

      // when
      target.check();

      // then
      expect(target.alarmOn()).toBe(false);
    });

  });

});
