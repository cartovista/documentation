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
    describe('FeatureWKTCreateParameter', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.FeatureWKTCreateParameter();
      });

      it('should create an instance of FeatureWKTCreateParameter', function() {
        // TODO: update the code to test FeatureWKTCreateParameter
        expect(instance).to.be.a(CartoVistaserverapiv1.FeatureWKTCreateParameter);
      });

      it('should have the property WKT (base name: "WKT")', function() {
        // TODO: update the code to test the property WKT
        expect(instance).to.have.property('WKT');
        // expect(instance.WKT).to.be(expectedValueLiteral);
      });

      it('should have the property featureType (base name: "FeatureType")', function() {
        // TODO: update the code to test the property featureType
        expect(instance).to.have.property('featureType');
        // expect(instance.featureType).to.be(expectedValueLiteral);
      });

      it('should have the property dataColumnsIdentifiers (base name: "DataColumnsIdentifiers")', function() {
        // TODO: update the code to test the property dataColumnsIdentifiers
        expect(instance).to.have.property('dataColumnsIdentifiers');
        // expect(instance.dataColumnsIdentifiers).to.be(expectedValueLiteral);
      });

      it('should have the property values (base name: "Values")', function() {
        // TODO: update the code to test the property values
        expect(instance).to.have.property('values');
        // expect(instance.values).to.be(expectedValueLiteral);
      });

      it('should have the property proj4 (base name: "Proj4")', function() {
        // TODO: update the code to test the property proj4
        expect(instance).to.have.property('proj4');
        // expect(instance.proj4).to.be(expectedValueLiteral);
      });

    });
  });

}));
