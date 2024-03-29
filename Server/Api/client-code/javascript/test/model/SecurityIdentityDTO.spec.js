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
    describe('SecurityIdentityDTO', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.SecurityIdentityDTO();
      });

      it('should create an instance of SecurityIdentityDTO', function() {
        // TODO: update the code to test SecurityIdentityDTO
        expect(instance).to.be.a(CartoVistaserverapiv1.SecurityIdentityDTO);
      });

      it('should have the property isAnynomous (base name: "isAnynomous")', function() {
        // TODO: update the code to test the property isAnynomous
        expect(instance).to.have.property('isAnynomous');
        // expect(instance.isAnynomous).to.be(expectedValueLiteral);
      });

      it('should have the property displayName (base name: "displayName")', function() {
        // TODO: update the code to test the property displayName
        expect(instance).to.have.property('displayName');
        // expect(instance.displayName).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property isGroup (base name: "isGroup")', function() {
        // TODO: update the code to test the property isGroup
        expect(instance).to.have.property('isGroup');
        // expect(instance.isGroup).to.be(expectedValueLiteral);
      });

      it('should have the property lastModificationTime (base name: "lastModificationTime")', function() {
        // TODO: update the code to test the property lastModificationTime
        expect(instance).to.have.property('lastModificationTime');
        // expect(instance.lastModificationTime).to.be(expectedValueLiteral);
      });

      it('should have the property creationTime (base name: "creationTime")', function() {
        // TODO: update the code to test the property creationTime
        expect(instance).to.have.property('creationTime');
        // expect(instance.creationTime).to.be(expectedValueLiteral);
      });

      it('should have the property tenantId (base name: "tenantId")', function() {
        // TODO: update the code to test the property tenantId
        expect(instance).to.have.property('tenantId');
        // expect(instance.tenantId).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property identifier (base name: "identifier")', function() {
        // TODO: update the code to test the property identifier
        expect(instance).to.have.property('identifier');
        // expect(instance.identifier).to.be(expectedValueLiteral);
      });

      it('should have the property providerStatus (base name: "providerStatus")', function() {
        // TODO: update the code to test the property providerStatus
        expect(instance).to.have.property('providerStatus');
        // expect(instance.providerStatus).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property permissions (base name: "permissions")', function() {
        // TODO: update the code to test the property permissions
        expect(instance).to.have.property('permissions');
        // expect(instance.permissions).to.be(expectedValueLiteral);
      });

      it('should have the property secureObjectPermissions (base name: "secureObjectPermissions")', function() {
        // TODO: update the code to test the property secureObjectPermissions
        expect(instance).to.have.property('secureObjectPermissions');
        // expect(instance.secureObjectPermissions).to.be(expectedValueLiteral);
      });

    });
  });

}));
