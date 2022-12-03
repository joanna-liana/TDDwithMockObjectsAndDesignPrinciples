const PressureRange = require('./pressureRange');
const Sensor = require("./sensor");

class Alarm {
  #allowedPressureRange;
  #sensor;
  #alarmOn = false;

  constructor({ pressureThresholds, sensor } = {}) {
    this.#allowedPressureRange = new PressureRange({
      low: pressureThresholds?.low ?? 17,
      high: pressureThresholds?.high ?? 21
    });

    this.#sensor = sensor ?? new Sensor();
  }

  check() {
    const psiPressureValue = this.#sensor.popNextPressurePsiValue();

    if (this.#allowedPressureRange.isExceededBy(psiPressureValue)) {
      this.#alarmOn = true;
    }
  }

  alarmOn() {
    return this.#alarmOn;
  }
}

module.exports = Alarm;
