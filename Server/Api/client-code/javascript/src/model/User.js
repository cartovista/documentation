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
    root.CartoVistaserverapiv1.User = factory(root.CartoVistaserverapiv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version v1
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('SecurityIdentifier'))
        obj.securityIdentifier = ApiClient.convertToType(data['SecurityIdentifier'], 'String');
      if (data.hasOwnProperty('SecurityProviderIdentity'))
        obj.securityProviderIdentity = ApiClient.convertToType(data['SecurityProviderIdentity'], 'String');
      if (data.hasOwnProperty('EmailAdress'))
        obj.emailAdress = ApiClient.convertToType(data['EmailAdress'], 'String');
      if (data.hasOwnProperty('UserName'))
        obj.userName = ApiClient.convertToType(data['UserName'], 'String');
      if (data.hasOwnProperty('FirstName'))
        obj.firstName = ApiClient.convertToType(data['FirstName'], 'String');
      if (data.hasOwnProperty('LastName'))
        obj.lastName = ApiClient.convertToType(data['LastName'], 'String');
      if (data.hasOwnProperty('Notes'))
        obj.notes = ApiClient.convertToType(data['Notes'], 'String');
      if (data.hasOwnProperty('Roles'))
        obj.roles = ApiClient.convertToType(data['Roles'], ['String']);
      if (data.hasOwnProperty('Enabled'))
        obj.enabled = ApiClient.convertToType(data['Enabled'], 'Boolean');
      if (data.hasOwnProperty('LastLoginTime'))
        obj.lastLoginTime = ApiClient.convertToType(data['LastLoginTime'], 'Date');
      if (data.hasOwnProperty('CreationTime'))
        obj.creationTime = ApiClient.convertToType(data['CreationTime'], 'Date');
      if (data.hasOwnProperty('ModificationTime'))
        obj.modificationTime = ApiClient.convertToType(data['ModificationTime'], 'Date');
      if (data.hasOwnProperty('SecurityProvider'))
        obj.securityProvider = ApiClient.convertToType(data['SecurityProvider'], 'String');
      if (data.hasOwnProperty('ProviderStatus'))
        obj.providerStatus = ApiClient.convertToType(data['ProviderStatus'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} securityIdentifier
   */
  exports.prototype.securityIdentifier = undefined;

  /**
   * @member {String} securityProviderIdentity
   */
  exports.prototype.securityProviderIdentity = undefined;

  /**
   * @member {String} emailAdress
   */
  exports.prototype.emailAdress = undefined;

  /**
   * @member {String} userName
   */
  exports.prototype.userName = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {String} notes
   */
  exports.prototype.notes = undefined;

  /**
   * @member {Array.<String>} roles
   */
  exports.prototype.roles = undefined;

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * @member {Date} lastLoginTime
   */
  exports.prototype.lastLoginTime = undefined;

  /**
   * @member {Date} creationTime
   */
  exports.prototype.creationTime = undefined;

  /**
   * @member {Date} modificationTime
   */
  exports.prototype.modificationTime = undefined;

  /**
   * @member {String} securityProvider
   */
  exports.prototype.securityProvider = undefined;

  /**
   * @member {String} providerStatus
   */
  exports.prototype.providerStatus = undefined;

  return exports;

}));