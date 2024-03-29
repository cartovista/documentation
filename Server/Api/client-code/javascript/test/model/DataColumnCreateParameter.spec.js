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
    describe('DataColumnCreateParameter', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.DataColumnCreateParameter();
      });

      it('should create an instance of DataColumnCreateParameter', function() {
        // TODO: update the code to test DataColumnCreateParameter
        expect(instance).to.be.a(CartoVistaserverapiv1.DataColumnCreateParameter);
      });

      it('should have the property identifier (base name: "Identifier")', function() {
        // TODO: update the code to test the property identifier
        expect(instance).to.have.property('identifier');
        // expect(instance.identifier).to.be(expectedValueLiteral);
      });

      it('should have the property cartoVistaDataType (base name: "CartoVistaDataType")', function() {
        // TODO: update the code to test the property cartoVistaDataType
        expect(instance).to.have.property('cartoVistaDataType');
        // expect(instance.cartoVistaDataType).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

      it('should have the property units (base name: "Units")', function() {
        // TODO: update the code to test the property units
        expect(instance).to.have.property('units');
        // expect(instance.units).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationType (base name: "AggregationType")', function() {
        // TODO: update the code to test the property aggregationType
        expect(instance).to.have.property('aggregationType');
        // expect(instance.aggregationType).to.be(expectedValueLiteral);
      });

      it('should have the property mappable (base name: "Mappable")', function() {
        // TODO: update the code to test the property mappable
        expect(instance).to.have.property('mappable');
        // expect(instance.mappable).to.be(expectedValueLiteral);
      });

      it('should have the property precision (base name: "Precision")', function() {
        // TODO: update the code to test the property precision
        expect(instance).to.have.property('precision');
        // expect(instance.precision).to.be(expectedValueLiteral);
      });

      it('should have the property roundToPrecision (base name: "RoundToPrecision")', function() {
        // TODO: update the code to test the property roundToPrecision
        expect(instance).to.have.property('roundToPrecision');
        // expect(instance.roundToPrecision).to.be(expectedValueLiteral);
      });

      it('should have the property timeStamp (base name: "TimeStamp")', function() {
        // TODO: update the code to test the property timeStamp
        expect(instance).to.have.property('timeStamp');
        // expect(instance.timeStamp).to.be(expectedValueLiteral);
      });

      it('should have the property timeStampAccuracy (base name: "TimeStampAccuracy")', function() {
        // TODO: update the code to test the property timeStampAccuracy
        expect(instance).to.have.property('timeStampAccuracy');
        // expect(instance.timeStampAccuracy).to.be(expectedValueLiteral);
      });

      it('should have the property notAvailableValues (base name: "NotAvailableValues")', function() {
        // TODO: update the code to test the property notAvailableValues
        expect(instance).to.have.property('notAvailableValues');
        // expect(instance.notAvailableValues).to.be(expectedValueLiteral);
      });

      it('should have the property valueToConvert (base name: "ValueToConvert")', function() {
        // TODO: update the code to test the property valueToConvert
        expect(instance).to.have.property('valueToConvert');
        // expect(instance.valueToConvert).to.be(expectedValueLiteral);
      });

      it('should have the property systemIdentifier (base name: "SystemIdentifier")', function() {
        // TODO: update the code to test the property systemIdentifier
        expect(instance).to.have.property('systemIdentifier');
        // expect(instance.systemIdentifier).to.be(expectedValueLiteral);
      });

    });
  });

}));
