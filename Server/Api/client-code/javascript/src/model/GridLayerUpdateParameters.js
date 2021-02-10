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
    root.CartoVistaserverapiv1.GridLayerUpdateParameters = factory(root.CartoVistaserverapiv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GridLayerUpdateParameters model module.
   * @module model/GridLayerUpdateParameters
   * @version v1
   */

  /**
   * Constructs a new <code>GridLayerUpdateParameters</code>.
   * @alias module:model/GridLayerUpdateParameters
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GridLayerUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GridLayerUpdateParameters} obj Optional instance to populate.
   * @return {module:model/GridLayerUpdateParameters} The populated <code>GridLayerUpdateParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uniqueIdentifier'))
        obj.uniqueIdentifier = ApiClient.convertToType(data['uniqueIdentifier'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], 'String');
      if (data.hasOwnProperty('units'))
        obj.units = ApiClient.convertToType(data['units'], 'String');
      if (data.hasOwnProperty('precision'))
        obj.precision = ApiClient.convertToType(data['precision'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} uniqueIdentifier
   */
  exports.prototype.uniqueIdentifier = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {String} units
   */
  exports.prototype.units = undefined;

  /**
   * @member {Number} precision
   */
  exports.prototype.precision = undefined;

  return exports;

}));