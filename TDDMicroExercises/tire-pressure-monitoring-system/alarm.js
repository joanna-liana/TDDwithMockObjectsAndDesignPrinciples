const PressureRange = require('./pressureRange');
const Sensor = require("./sensor");

class Alarm {
  #pressureRange;
  #sensor;
  #alarmOn = false;

  constructor({ pressureThresholds, sensor } = {}) {
    this.#pressureRange = new PressureRange({
      low: pressureThresholds?.low ?? 17,
      high: pressureThresholds?.high ?? 21
    });

    this.#sensor = sensor ?? new Sensor();
  }

  check() {

    var psiPressureValue = this.#sensor.popNextPressurePsiValue();

    if (this.#pressureRange.isExceededBy(psiPressureValue)) {
      this.#alarmOn = true;
    }
  }

  alarmOn() {
    return this.#alarmOn;
  }
}

module.exports = Alarm;
