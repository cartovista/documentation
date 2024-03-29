/*
 * CartoVista.Server.API.v1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CartoVistaserverapiv1);
  }
}(this, function(expect, CartoVistaserverapiv1) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Isochrone', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.Isochrone();
      });

      it('should create an instance of Isochrone', function() {
        // TODO: update the code to test Isochrone
        expect(instance).to.be.a(CartoVistaserverapiv1.Isochrone);
      });

      it('should have the property longitude (base name: "Longitude")', function() {
        // TODO: update the code to test the property longitude
        expect(instance).to.have.property('longitude');
        // expect(instance.longitude).to.be(expectedValueLiteral);
      });

      it('should have the property latitude (base name: "Latitude")', function() {
        // TODO: update the code to test the property latitude
        expect(instance).to.have.property('latitude');
        // expect(instance.latitude).to.be(expectedValueLiteral);
      });

      it('should have the property range (base name: "Range")', function() {
        // TODO: update the code to test the property range
        expect(instance).to.have.property('range');
        // expect(instance.range).to.be(expectedValueLiteral);
      });

      it('should have the property rangeType (base name: "RangeType")', function() {
        // TODO: update the code to test the property rangeType
        expect(instance).to.have.property('rangeType');
        // expect(instance.rangeType).to.be(expectedValueLiteral);
      });

      it('should have the property mode (base name: "Mode")', function() {
        // TODO: update the code to test the property mode
        expect(instance).to.have.property('mode');
        // expect(instance.mode).to.be(expectedValueLiteral);
      });

      it('should have the property departureTime (base name: "DepartureTime")', function() {
        // TODO: update the code to test the property departureTime
        expect(instance).to.have.property('departureTime');
        // expect(instance.departureTime).to.be(expectedValueLiteral);
      });

      it('should have the property isolineCoordinates (base name: "IsolineCoordinates")', function() {
        // TODO: update the code to test the property isolineCoordinates
        expect(instance).to.have.property('isolineCoordinates');
        // expect(instance.isolineCoordinates).to.be(expectedValueLiteral);
      });

    });
  });

}));
