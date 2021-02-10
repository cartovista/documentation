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
    describe('ClusterMetadataDTO', function() {
      beforeEach(function() {
        instance = new CartoVistaserverapiv1.ClusterMetadataDTO();
      });

      it('should create an instance of ClusterMetadataDTO', function() {
        // TODO: update the code to test ClusterMetadataDTO
        expect(instance).to.be.a(CartoVistaserverapiv1.ClusterMetadataDTO);
      });

      it('should have the property clusterStatus (base name: "ClusterStatus")', function() {
        // TODO: update the code to test the property clusterStatus
        expect(instance).to.have.property('clusterStatus');
        // expect(instance.clusterStatus).to.be(expectedValueLiteral);
      });

      it('should have the property featureGroupTableRef (base name: "FeatureGroupTableRef")', function() {
        // TODO: update the code to test the property featureGroupTableRef
        expect(instance).to.have.property('featureGroupTableRef');
        // expect(instance.featureGroupTableRef).to.be(expectedValueLiteral);
      });

      it('should have the property featureGroupXREFTableRef (base name: "FeatureGroupXREFTableRef")', function() {
        // TODO: update the code to test the property featureGroupXREFTableRef
        expect(instance).to.have.property('featureGroupXREFTableRef');
        // expect(instance.featureGroupXREFTableRef).to.be(expectedValueLiteral);
      });

    });
  });

}));
