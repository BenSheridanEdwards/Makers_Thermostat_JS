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
});

