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
    root.CartoVistaserverapiv1.MapCreateParameter = factory(root.CartoVistaserverapiv1.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MapCreateParameter model module.
   * @module model/MapCreateParameter
   * @version v1
   */

  /**
   * Constructs a new <code>MapCreateParameter</code>.
   * @alias module:model/MapCreateParameter
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MapCreateParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapCreateParameter} obj Optional instance to populate.
   * @return {module:model/MapCreateParameter} The populated <code>MapCreateParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('systemIdentifier'))
        obj.systemIdentifier = ApiClient.convertToType(data['systemIdentifier'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('uniqueIdentifier'))
        obj.uniqueIdentifier = ApiClient.convertToType(data['uniqueIdentifier'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('editable'))
        obj.editable = ApiClient.convertToType(data['editable'], 'Boolean');
      if (data.hasOwnProperty('seoTitle'))
        obj.seoTitle = ApiClient.convertToType(data['seoTitle'], 'String');
      if (data.hasOwnProperty('seoDescription'))
        obj.seoDescription = ApiClient.convertToType(data['seoDescription'], 'String');
      if (data.hasOwnProperty('seoCustomHTML'))
        obj.seoCustomHTML = ApiClient.convertToType(data['seoCustomHTML'], 'String');
      if (data.hasOwnProperty('scoringEnabled'))
        obj.scoringEnabled = ApiClient.convertToType(data['scoringEnabled'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} systemIdentifier
   */
  exports.prototype.systemIdentifier = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} uniqueIdentifier
   */
  exports.prototype.uniqueIdentifier = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/MapCreateParameter.LanguageEnum} language
   */
  exports.prototype.language = undefined;

  /**
   * @member {Boolean} editable
   */
  exports.prototype.editable = undefined;

  /**
   * @member {String} seoTitle
   */
  exports.prototype.seoTitle = undefined;

  /**
   * @member {String} seoDescription
   */
  exports.prototype.seoDescription = undefined;

  /**
   * @member {String} seoCustomHTML
   */
  exports.prototype.seoCustomHTML = undefined;

  /**
   * @member {Boolean} scoringEnabled
   */
  exports.prototype.scoringEnabled = undefined;


  /**
   * Allowed values for the <code>language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "fr"
     * @const
     */
    fr: "fr",

    /**
     * value: "en"
     * @const
     */
    en: "en",

    /**
     * value: "es"
     * @const
     */
    es: "es",

    /**
     * value: "de"
     * @const
     */
    de: "de",

    /**
     * value: "pt"
     * @const
     */
    pt: "pt",

    /**
     * value: "it"
     * @const
     */
    it: "it",

    /**
     * value: "tr"
     * @const
     */
    tr: "tr"
  };

  return exports;

}));
