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
    describe('PermissionPairComplexDTO', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.PermissionPairComplexDTO();
      });

      it('should create an instance of PermissionPairComplexDTO', function() {
        // TODO: update the code to test PermissionPairComplexDTO
        expect(instance).to.be.a(CartoVistaserverapiv1.PermissionPairComplexDTO);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property permissionName (base name: "permissionName")', function() {
        // TODO: update the code to test the property permissionName
        expect(instance).to.have.property('permissionName');
        // expect(instance.permissionName).to.be(expectedValueLiteral);
      });

      it('should have the property secureObjectGuid (base name: "secureObjectGuid")', function() {
        // TODO: update the code to test the property secureObjectGuid
        expect(instance).to.have.property('secureObjectGuid');
        // expect(instance.secureObjectGuid).to.be(expectedValueLiteral);
      });

    });
  });

}));
