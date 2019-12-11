'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

   it("should return 20 for the starting temperature", function() {
      expect(thermostat.temperature).toEqual(20);
  });
});