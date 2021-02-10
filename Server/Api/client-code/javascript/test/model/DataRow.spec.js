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
    describe('DataRow', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.DataRow();
      });

      it('should create an instance of DataRow', function() {
        // TODO: update the code to test DataRow
        expect(instance).to.be.a(CartoVistaserverapiv1.DataRow);
      });

      it('should have the property identifier (base name: "Identifier")', function() {
        // TODO: update the code to test the property identifier
        expect(instance).to.have.property('identifier');
        // expect(instance.identifier).to.be(expectedValueLiteral);
      });

      it('should have the property values (base name: "Values")', function() {
        // TODO: update the code to test the property values
        expect(instance).to.have.property('values');
        // expect(instance.values).to.be(expectedValueLiteral);
      });

      it('should have the property dataColumnsIdentifiers (base name: "DataColumnsIdentifiers")', function() {
        // TODO: update the code to test the property dataColumnsIdentifiers
        expect(instance).to.have.property('dataColumnsIdentifiers');
        // expect(instance.dataColumnsIdentifiers).to.be(expectedValueLiteral);
      });

      it('should have the property dataColumnsSystemIdentifiers (base name: "DataColumnsSystemIdentifiers")', function() {
        // TODO: update the code to test the property dataColumnsSystemIdentifiers
        expect(instance).to.have.property('dataColumnsSystemIdentifiers');
        // expect(instance.dataColumnsSystemIdentifiers).to.be(expectedValueLiteral);
      });

    });
  });

}));