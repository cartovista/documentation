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
    root.CartoVistaserverapiv1.GridSourceUpdateParameters = factory(root.CartoVistaserverapiv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GridSourceUpdateParameters model module.
   * @module model/GridSourceUpdateParameters
   * @version v1
   */

  /**
   * Constructs a new <code>GridSourceUpdateParameters</code>.
   * @alias module:model/GridSourceUpdateParameters
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GridSourceUpdateParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GridSourceUpdateParameters} obj Optional instance to populate.
   * @return {module:model/GridSourceUpdateParameters} The populated <code>GridSourceUpdateParameters</code> instance.
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
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('noDataEnabled'))
        obj.noDataEnabled = ApiClient.convertToType(data['noDataEnabled'], 'Boolean');
      if (data.hasOwnProperty('noDataValue'))
        obj.noDataValue = ApiClient.convertToType(data['noDataValue'], 'String');
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
   * @member {Date} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {Boolean} noDataEnabled
   */
  exports.prototype.noDataEnabled = undefined;

  /**
   * @member {String} noDataValue
   */
  exports.prototype.noDataValue = undefined;

  return exports;

}));
