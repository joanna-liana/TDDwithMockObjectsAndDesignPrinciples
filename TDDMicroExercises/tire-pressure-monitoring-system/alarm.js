const Sensor = require("./sensor");

class Alarm {
  _lowPressureThreshold = 17;
  _highPressureThreshold = 21;
  _sensor = new Sensor();
  _alarmOn = false;

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
