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
    define(['ApiClient', 'model/BoundingBox'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BoundingBox'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.GeocodedLocation = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.BoundingBox);
  }
}(this, function(ApiClient, BoundingBox) {
  'use strict';

  /**
   * The GeocodedLocation model module.
   * @module model/GeocodedLocation
   * @version v1
   */

  /**
   * Constructs a new <code>GeocodedLocation</code>.
   * @alias module:model/GeocodedLocation
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GeocodedLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocodedLocation} obj Optional instance to populate.
   * @return {module:model/GeocodedLocation} The populated <code>GeocodedLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Longitude'))
        obj.longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('Latitude'))
        obj.latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Address'))
        obj.address = ApiClient.convertToType(data['Address'], 'String');
      if (data.hasOwnProperty('BoundingBox'))
        obj.boundingBox = BoundingBox.constructFromObject(data['BoundingBox']);
    }
    return obj;
  }

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {String} address
   */
  exports.prototype.address = undefined;

  /**
   * @member {module:model/BoundingBox} boundingBox
   */
  exports.prototype.boundingBox = undefined;

  return exports;

}));
