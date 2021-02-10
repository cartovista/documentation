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
    define(['ApiClient', 'model/PermissionPairDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionPairDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.SecurityIdentityDTO = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.PermissionPairDTO);
  }
}(this, function(ApiClient, PermissionPairDTO) {
  'use strict';

  /**
   * The SecurityIdentityDTO model module.
   * @module model/SecurityIdentityDTO
   * @version v1
   */

  /**
   * Constructs a new <code>SecurityIdentityDTO</code>.
   * @alias module:model/SecurityIdentityDTO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SecurityIdentityDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityIdentityDTO} obj Optional instance to populate.
   * @return {module:model/SecurityIdentityDTO} The populated <code>SecurityIdentityDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('isAnynomous'))
        obj.isAnynomous = ApiClient.convertToType(data['isAnynomous'], 'Boolean');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('isGroup'))
        obj.isGroup = ApiClient.convertToType(data['isGroup'], 'Boolean');
      if (data.hasOwnProperty('lastModificationTime'))
        obj.lastModificationTime = ApiClient.convertToType(data['lastModificationTime'], 'Date');
      if (data.hasOwnProperty('creationTime'))
        obj.creationTime = ApiClient.convertToType(data['creationTime'], 'Date');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('identifier'))
        obj.identifier = ApiClient.convertToType(data['identifier'], 'String');
      if (data.hasOwnProperty('providerStatus'))
        obj.providerStatus = ApiClient.convertToType(data['providerStatus'], 'String');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], ['String']);
      if (data.hasOwnProperty('secureObjectPermissions'))
        obj.secureObjectPermissions = ApiClient.convertToType(data['secureObjectPermissions'], [PermissionPairDTO]);
    }
    return obj;
  }

  /**
   * @member {Boolean} isAnynomous
   */
  exports.prototype.isAnynomous = undefined;

  /**
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} isGroup
   */
  exports.prototype.isGroup = undefined;

  /**
   * @member {Date} lastModificationTime
   */
  exports.prototype.lastModificationTime = undefined;

  /**
   * @member {Date} creationTime
   */
  exports.prototype.creationTime = undefined;

  /**
   * @member {String} tenantId
   */
  exports.prototype.tenantId = undefined;

  /**
   * @member {module:model/SecurityIdentityDTO.ProviderEnum} provider
   */
  exports.prototype.provider = undefined;

  /**
   * @member {String} identifier
   */
  exports.prototype.identifier = undefined;

  /**
   * @member {module:model/SecurityIdentityDTO.ProviderStatusEnum} providerStatus
   */
  exports.prototype.providerStatus = undefined;

  /**
   * @member {String} path
   */
  exports.prototype.path = undefined;

  /**
   * @member {Array.<String>} permissions
   */
  exports.prototype.permissions = undefined;

  /**
   * @member {Array.<module:model/PermissionPairDTO>} secureObjectPermissions
   */
  exports.prototype.secureObjectPermissions = undefined;


  /**
   * Allowed values for the <code>provider</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProviderEnum = {
    /**
     * value: "CartoVista"
     * @const
     */
    cartoVista: "CartoVista",

    /**
     * value: "ActiveDirectory"
     * @const
     */
    activeDirectory: "ActiveDirectory"
  };


  /**
   * Allowed values for the <code>providerStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProviderStatusEnum = {
    /**
     * value: "Available"
     * @const
     */
    available: "Available",

    /**
     * value: "Unavailable"
     * @const
     */
    unavailable: "Unavailable"
  };

  return exports;

}));
