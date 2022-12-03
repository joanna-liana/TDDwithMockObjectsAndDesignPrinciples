const PressureRange = require('./pressureRange');
const Sensor = require("./sensor");

class Alarm {
  #pressureRange;
  _sensor;
  _alarmOn = false;

  constructor({ pressureThresholds, sensor } = {}) {
    this.#pressureRange = new PressureRange({
      low: pressureThresholds?.low ?? 17,
      high: pressureThresholds?.high ?? 21
    });

    this._sensor = sensor ?? new Sensor();
  }

  check() {

    var psiPressureValue = this._sensor.popNextPressurePsiValue();

    if (this.#pressureRange.isExceededBy(psiPressureValue)) {
      this._alarmOn = true;
    }
  }

  alarmOn() {
    return this._alarmOn;
  }
}

module.exports = Alarm;
