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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.ClusterMetadataDTO = factory(root.CartoVistaserverapiv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClusterMetadataDTO model module.
   * @module model/ClusterMetadataDTO
   * @version v1
   */

  /**
   * Constructs a new <code>ClusterMetadataDTO</code>.
   * @alias module:model/ClusterMetadataDTO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ClusterMetadataDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClusterMetadataDTO} obj Optional instance to populate.
   * @return {module:model/ClusterMetadataDTO} The populated <code>ClusterMetadataDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ClusterStatus'))
        obj.clusterStatus = ApiClient.convertToType(data['ClusterStatus'], 'Number');
      if (data.hasOwnProperty('FeatureGroupTableRef'))
        obj.featureGroupTableRef = ApiClient.convertToType(data['FeatureGroupTableRef'], 'String');
      if (data.hasOwnProperty('FeatureGroupXREFTableRef'))
        obj.featureGroupXREFTableRef = ApiClient.convertToType(data['FeatureGroupXREFTableRef'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/ClusterMetadataDTO.ClusterStatusEnum} clusterStatus
   */
  exports.prototype.clusterStatus = undefined;

  /**
   * @member {String} featureGroupTableRef
   */
  exports.prototype.featureGroupTableRef = undefined;

  /**
   * @member {String} featureGroupXREFTableRef
   */
  exports.prototype.featureGroupXREFTableRef = undefined;


  /**
   * Allowed values for the <code>clusterStatus</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.ClusterStatusEnum = {
    /**
     * value: 0
     * @const
     */
    _0: 0,

    /**
     * value: 1
     * @const
     */
    _1: 1,

    /**
     * value: 2
     * @const
     */
    _2: 2
  };

  return exports;

}));
