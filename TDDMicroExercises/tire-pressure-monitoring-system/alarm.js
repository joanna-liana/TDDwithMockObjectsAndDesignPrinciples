const Sensor = require("./sensor");

class Alarm {
  _lowPressureThreshold;
  _highPressureThreshold;
  _sensor;
  _alarmOn = false;

  constructor({ pressureThresholds, sensor } = {}) {
    this._lowPressureThreshold = pressureThresholds?.low ?? 17;
    this._highPressureThreshold = pressureThresholds?.high ?? 21;

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
