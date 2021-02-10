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
    describe('Extent', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.Extent();
      });

      it('should create an instance of Extent', function() {
        // TODO: update the code to test Extent
        expect(instance).to.be.a(CartoVistaserverapiv1.Extent);
      });

      it('should have the property minX (base name: "minX")', function() {
        // TODO: update the code to test the property minX
        expect(instance).to.have.property('minX');
        // expect(instance.minX).to.be(expectedValueLiteral);
      });

      it('should have the property minY (base name: "minY")', function() {
        // TODO: update the code to test the property minY
        expect(instance).to.have.property('minY');
        // expect(instance.minY).to.be(expectedValueLiteral);
      });

      it('should have the property maxX (base name: "maxX")', function() {
        // TODO: update the code to test the property maxX
        expect(instance).to.have.property('maxX');
        // expect(instance.maxX).to.be(expectedValueLiteral);
      });

      it('should have the property maxY (base name: "maxY")', function() {
        // TODO: update the code to test the property maxY
        expect(instance).to.have.property('maxY');
        // expect(instance.maxY).to.be(expectedValueLiteral);
      });

    });
  });

}));