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
    root.CartoVistaserverapiv1.ExportDataParameter = factory(root.CartoVistaserverapiv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ExportDataParameter model module.
   * @module model/ExportDataParameter
   * @version v1
   */

  /**
   * Constructs a new <code>ExportDataParameter</code>.
   * @alias module:model/ExportDataParameter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ExportDataParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportDataParameter} obj Optional instance to populate.
   * @return {module:model/ExportDataParameter} The populated <code>ExportDataParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('layerIds'))
        obj.layerIds = ApiClient.convertToType(data['layerIds'], ['String']);
      if (data.hasOwnProperty('mapImageBase64'))
        obj.mapImageBase64 = ApiClient.convertToType(data['mapImageBase64'], 'String');
    }
    return obj;
  }

  /**
   * @member {Array.<String>} layerIds
   */
  exports.prototype.layerIds = undefined;

  /**
   * @member {String} mapImageBase64
   */
  exports.prototype.mapImageBase64 = undefined;

  return exports;

}));
