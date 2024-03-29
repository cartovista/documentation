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
    define(['ApiClient', 'model/ViewReadPermission'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ViewReadPermission'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.UpdateViewParameter = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.ViewReadPermission);
  }
}(this, function(ApiClient, ViewReadPermission) {
  'use strict';

  /**
   * The UpdateViewParameter model module.
   * @module model/UpdateViewParameter
   * @version v1
   */

  /**
   * Constructs a new <code>UpdateViewParameter</code>.
   * @alias module:model/UpdateViewParameter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UpdateViewParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateViewParameter} obj Optional instance to populate.
   * @return {module:model/UpdateViewParameter} The populated <code>UpdateViewParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [ViewReadPermission]);
    }
    return obj;
  }

  /**
   * The new view title.
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * The list of permissions to assign to the view.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.
   * @member {Array.<module:model/ViewReadPermission>} permissions
   */
  exports.prototype.permissions = undefined;

  return exports;

}));
