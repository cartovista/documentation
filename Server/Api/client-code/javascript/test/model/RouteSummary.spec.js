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
    describe('RouteSummary', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.RouteSummary();
      });

      it('should create an instance of RouteSummary', function() {
        // TODO: update the code to test RouteSummary
        expect(instance).to.be.a(CartoVistaserverapiv1.RouteSummary);
      });

      it('should have the property originLatitude (base name: "OriginLatitude")', function() {
        // TODO: update the code to test the property originLatitude
        expect(instance).to.have.property('originLatitude');
        // expect(instance.originLatitude).to.be(expectedValueLiteral);
      });

      it('should have the property originLongitude (base name: "OriginLongitude")', function() {
        // TODO: update the code to test the property originLongitude
        expect(instance).to.have.property('originLongitude');
        // expect(instance.originLongitude).to.be(expectedValueLiteral);
      });

      it('should have the property destinationLatitude (base name: "DestinationLatitude")', function() {
        // TODO: update the code to test the property destinationLatitude
        expect(instance).to.have.property('destinationLatitude');
        // expect(instance.destinationLatitude).to.be(expectedValueLiteral);
      });

      it('should have the property destinationLongitude (base name: "DestinationLongitude")', function() {
        // TODO: update the code to test the property destinationLongitude
        expect(instance).to.have.property('destinationLongitude');
        // expect(instance.destinationLongitude).to.be(expectedValueLiteral);
      });

      it('should have the property driveDistanceMeters (base name: "DriveDistanceMeters")', function() {
        // TODO: update the code to test the property driveDistanceMeters
        expect(instance).to.have.property('driveDistanceMeters');
        // expect(instance.driveDistanceMeters).to.be(expectedValueLiteral);
      });

      it('should have the property driveTimeMinutes (base name: "DriveTimeMinutes")', function() {
        // TODO: update the code to test the property driveTimeMinutes
        expect(instance).to.have.property('driveTimeMinutes');
        // expect(instance.driveTimeMinutes).to.be(expectedValueLiteral);
      });

      it('should have the property coordinates (base name: "Coordinates")', function() {
        // TODO: update the code to test the property coordinates
        expect(instance).to.have.property('coordinates');
        // expect(instance.coordinates).to.be(expectedValueLiteral);
      });

    });
  });

}));
