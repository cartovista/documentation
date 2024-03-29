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
    describe('Layer', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.Layer();
      });

      it('should create an instance of Layer', function() {
        // TODO: update the code to test Layer
        expect(instance).to.be.a(CartoVistaserverapiv1.Layer);
      });

      it('should have the property uniqueIdentifier (base name: "UniqueIdentifier")', function() {
        // TODO: update the code to test the property uniqueIdentifier
        expect(instance).to.have.property('uniqueIdentifier');
        // expect(instance.uniqueIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property creationTime (base name: "CreationTime")', function() {
        // TODO: update the code to test the property creationTime
        expect(instance).to.have.property('creationTime');
        // expect(instance.creationTime).to.be(expectedValueLiteral);
      });

      it('should have the property dataTableUniqueIdentifier (base name: "DataTableUniqueIdentifier")', function() {
        // TODO: update the code to test the property dataTableUniqueIdentifier
        expect(instance).to.have.property('dataTableUniqueIdentifier');
        // expect(instance.dataTableUniqueIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "Description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property geometryType (base name: "GeometryType")', function() {
        // TODO: update the code to test the property geometryType
        expect(instance).to.have.property('geometryType');
        // expect(instance.geometryType).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedTime (base name: "ModifiedTime")', function() {
        // TODO: update the code to test the property modifiedTime
        expect(instance).to.have.property('modifiedTime');
        // expect(instance.modifiedTime).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property proj4 (base name: "Proj4")', function() {
        // TODO: update the code to test the property proj4
        expect(instance).to.have.property('proj4');
        // expect(instance.proj4).to.be(expectedValueLiteral);
      });

      it('should have the property rowCount (base name: "RowCount")', function() {
        // TODO: update the code to test the property rowCount
        expect(instance).to.have.property('rowCount');
        // expect(instance.rowCount).to.be(expectedValueLiteral);
      });

      it('should have the property systemIdentifier (base name: "SystemIdentifier")', function() {
        // TODO: update the code to test the property systemIdentifier
        expect(instance).to.have.property('systemIdentifier');
        // expect(instance.systemIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property uniqueIdDataColumn (base name: "UniqueIdDataColumn")', function() {
        // TODO: update the code to test the property uniqueIdDataColumn
        expect(instance).to.have.property('uniqueIdDataColumn');
        // expect(instance.uniqueIdDataColumn).to.be(expectedValueLiteral);
      });

    });
  });

}));
