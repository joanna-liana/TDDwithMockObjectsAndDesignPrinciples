const Sensor = require("./sensor");

class Alarm {
  _lowPressureThreshold;
  _highPressureThreshold;
  _sensor;
  _alarmOn = false;

  constructor({ pressureRange, sensor } = {}) {
    this._lowPressureThreshold = pressureRange?._lowPressureThreshold ?? 17;
    this._highPressureThreshold = pressureRange?._highPressureThreshold ?? 21;

    this._sensor = sensor ?? new Sensor();
  }

  check() {

    var psiPressureValue = this._sensor.popNextPressurePsiValue();

    if (psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue) {
      this._alarmOn = true;
    }
  }

  alarmOn() {
    return this._alarmOn;
  }
}

module.exports = Alarm;
