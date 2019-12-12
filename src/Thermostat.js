'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.temperature = function() {
  return this.temperature;
};

 Thermostat.prototype.increase = function() {
   this.temperature += 1;
 };

Thermostat.prototype.decrease = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
  this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20; 
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true; 
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.energy_usage = function() {
  if (this.temperature < 18 ) {
    return "Low-usage";
  } else if (this.temperature < 25) {
    return "Medium-usage";
  } else if (this.temperature >= 25) {
    return "High-usage";
  };
};