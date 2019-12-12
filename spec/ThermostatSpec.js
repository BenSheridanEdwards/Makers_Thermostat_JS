'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

   it("should return 20 for the starting temperature", function() {
      expect(thermostat.temperature).toEqual(20);
  });

    it("should increase the thermostat's temperature", function(){
        thermostat.increase();
        expect(thermostat.temperature).toEqual(21);
    });

    it("should decrease the thermostat's temperature", function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it("has a minimum temperature of 10 degrees", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.decrease();
      }
      expect(thermostat.temperature).toEqual(10)
    })

    it("has power saving mode on by default", function(){
      expect(thermostat.isPowerSavingModeOn).toBe(true)
    })
});

