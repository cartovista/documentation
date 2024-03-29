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
    root.CartoVistaserverapiv1.View = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.ViewReadPermission);
  }
}(this, function(ApiClient, ViewReadPermission) {
  'use strict';

  /**
   * The View model module.
   * @module model/View
   * @version v1
   */

  /**
   * Constructs a new <code>View</code>.
   * @alias module:model/View
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>View</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/View} obj Optional instance to populate.
   * @return {module:model/View} The populated <code>View</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('layerId'))
        obj.layerId = ApiClient.convertToType(data['layerId'], 'String');
      if (data.hasOwnProperty('recordCount'))
        obj.recordCount = ApiClient.convertToType(data['recordCount'], 'Number');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('expression'))
        obj.expression = ApiClient.convertToType(data['expression'], 'String');
      if (data.hasOwnProperty('columnId'))
        obj.columnId = ApiClient.convertToType(data['columnId'], 'String');
      if (data.hasOwnProperty('columnName'))
        obj.columnName = ApiClient.convertToType(data['columnName'], 'String');
      if (data.hasOwnProperty('columnType'))
        obj.columnType = ApiClient.convertToType(data['columnType'], 'String');
      if (data.hasOwnProperty('creationTime'))
        obj.creationTime = ApiClient.convertToType(data['creationTime'], 'Date');
      if (data.hasOwnProperty('modifiedTime'))
        obj.modifiedTime = ApiClient.convertToType(data['modifiedTime'], 'Date');
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [ViewReadPermission]);
      if (data.hasOwnProperty('currentUserHasModifyPermission'))
        obj.currentUserHasModifyPermission = ApiClient.convertToType(data['currentUserHasModifyPermission'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} layerId
   */
  exports.prototype.layerId = undefined;

  /**
   * @member {Number} recordCount
   */
  exports.prototype.recordCount = undefined;

  /**
   * @member {module:model/View.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} expression
   */
  exports.prototype.expression = undefined;

  /**
   * @member {String} columnId
   */
  exports.prototype.columnId = undefined;

  /**
   * @member {String} columnName
   */
  exports.prototype.columnName = undefined;

  /**
   * @member {String} columnType
   */
  exports.prototype.columnType = undefined;

  /**
   * @member {Date} creationTime
   */
  exports.prototype.creationTime = undefined;

  /**
   * @member {Date} modifiedTime
   */
  exports.prototype.modifiedTime = undefined;

  /**
   * @member {Array.<module:model/ViewReadPermission>} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * @member {Boolean} currentUserHasModifyPermission
   */
  exports.prototype.currentUserHasModifyPermission = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "Column"
     * @const
     */
    column: "Column",

    /**
     * value: "Expression"
     * @const
     */
    expression: "Expression"
  };

  return exports;

}));
