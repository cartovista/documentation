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
    describe('ApiDeleteReport', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.ApiDeleteReport();
      });

      it('should create an instance of ApiDeleteReport', function() {
        // TODO: update the code to test ApiDeleteReport
        expect(instance).to.be.a(CartoVistaserverapiv1.ApiDeleteReport);
      });

      it('should have the property deleteCount (base name: "DeleteCount")', function() {
        // TODO: update the code to test the property deleteCount
        expect(instance).to.have.property('deleteCount');
        // expect(instance.deleteCount).to.be(expectedValueLiteral);
      });

      it('should have the property deletedIdentifiers (base name: "DeletedIdentifiers")', function() {
        // TODO: update the code to test the property deletedIdentifiers
        expect(instance).to.have.property('deletedIdentifiers');
        // expect(instance.deletedIdentifiers).to.be(expectedValueLiteral);
      });

      it('should have the property errorCount (base name: "ErrorCount")', function() {
        // TODO: update the code to test the property errorCount
        expect(instance).to.have.property('errorCount');
        // expect(instance.errorCount).to.be(expectedValueLiteral);
      });

      it('should have the property errorDetails (base name: "ErrorDetails")', function() {
        // TODO: update the code to test the property errorDetails
        expect(instance).to.have.property('errorDetails');
        // expect(instance.errorDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));