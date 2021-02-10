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
    describe('KeywordDTO', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.KeywordDTO();
      });

      it('should create an instance of KeywordDTO', function() {
        // TODO: update the code to test KeywordDTO
        expect(instance).to.be.a(CartoVistaserverapiv1.KeywordDTO);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property keyword (base name: "Keyword")', function() {
        // TODO: update the code to test the property keyword
        expect(instance).to.have.property('keyword');
        // expect(instance.keyword).to.be(expectedValueLiteral);
      });

    });
  });

}));
