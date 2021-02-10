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
    define(['ApiClient', 'model/ClusterMetadataDTO', 'model/PermissionPairComplexDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClusterMetadataDTO'), require('./PermissionPairComplexDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.SpatialMetadataDTO = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.ClusterMetadataDTO, root.CartoVistaserverapiv1.PermissionPairComplexDTO);
  }
}(this, function(ApiClient, ClusterMetadataDTO, PermissionPairComplexDTO) {
  'use strict';

  /**
   * The SpatialMetadataDTO model module.
   * @module model/SpatialMetadataDTO
   * @version v1
   */

  /**
   * Constructs a new <code>SpatialMetadataDTO</code>.
   * @alias module:model/SpatialMetadataDTO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SpatialMetadataDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpatialMetadataDTO} obj Optional instance to populate.
   * @return {module:model/SpatialMetadataDTO} The populated <code>SpatialMetadataDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('<DataTableId>k__BackingField'))
        obj.dataTableIdkBackingField = ApiClient.convertToType(data['<DataTableId>k__BackingField'], 'String');
      if (data.hasOwnProperty('<DataTableLinkingColumnId>k__BackingField'))
        obj.dataTableLinkingColumnIdkBackingField = ApiClient.convertToType(data['<DataTableLinkingColumnId>k__BackingField'], 'String');
      if (data.hasOwnProperty('<IsUniqueColumnSet>k__BackingField'))
        obj.isUniqueColumnSetkBackingField = ApiClient.convertToType(data['<IsUniqueColumnSet>k__BackingField'], 'Boolean');
      if (data.hasOwnProperty('<SpatialSourceColumn>k__BackingField'))
        obj.spatialSourceColumnkBackingField = ApiClient.convertToType(data['<SpatialSourceColumn>k__BackingField'], 'String');
      if (data.hasOwnProperty('<SpatialTableRef>k__BackingField'))
        obj.spatialTableRefkBackingField = ApiClient.convertToType(data['<SpatialTableRef>k__BackingField'], 'String');
      if (data.hasOwnProperty('<UniqueIDColumn>k__BackingField'))
        obj.uniqueIDColumnkBackingField = ApiClient.convertToType(data['<UniqueIDColumn>k__BackingField'], 'String');
      if (data.hasOwnProperty('<proj4>k__BackingField'))
        obj.proj4kBackingField = ApiClient.convertToType(data['<proj4>k__BackingField'], 'String');
      if (data.hasOwnProperty('<geometryType>k__BackingField'))
        obj.geometryTypekBackingField = ApiClient.convertToType(data['<geometryType>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<MapUseCount>k__BackingField'))
        obj.mapUseCountkBackingField = ApiClient.convertToType(data['<MapUseCount>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<minX>k__BackingField'))
        obj.minXkBackingField = ApiClient.convertToType(data['<minX>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<minY>k__BackingField'))
        obj.minYkBackingField = ApiClient.convertToType(data['<minY>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<maxX>k__BackingField'))
        obj.maxXkBackingField = ApiClient.convertToType(data['<maxX>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<maxY>k__BackingField'))
        obj.maxYkBackingField = ApiClient.convertToType(data['<maxY>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<srid>k__BackingField'))
        obj.sridkBackingField = ApiClient.convertToType(data['<srid>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<tiled>k__BackingField'))
        obj.tiledkBackingField = ApiClient.convertToType(data['<tiled>k__BackingField'], 'Boolean');
      if (data.hasOwnProperty('<vectorQualityType>k__BackingField'))
        obj.vectorQualityTypekBackingField = ApiClient.convertToType(data['<vectorQualityType>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<cacheEnabled>k__BackingField'))
        obj.cacheEnabledkBackingField = ApiClient.convertToType(data['<cacheEnabled>k__BackingField'], 'Boolean');
      if (data.hasOwnProperty('<ClusterMetadata>k__BackingField'))
        obj.clusterMetadatakBackingField = ClusterMetadataDTO.constructFromObject(data['<ClusterMetadata>k__BackingField']);
      if (data.hasOwnProperty('<UserFriendlyProj>k__BackingField'))
        obj.userFriendlyProjkBackingField = ApiClient.convertToType(data['<UserFriendlyProj>k__BackingField'], 'String');
      if (data.hasOwnProperty('<Permissions>k__BackingField'))
        obj.permissionskBackingField = ApiClient.convertToType(data['<Permissions>k__BackingField'], [PermissionPairComplexDTO]);
      if (data.hasOwnProperty('<PublicAccess>k__BackingField'))
        obj.publicAccesskBackingField = ApiClient.convertToType(data['<PublicAccess>k__BackingField'], 'Boolean');
      if (data.hasOwnProperty('<Identifier>k__BackingField'))
        obj.identifierkBackingField = ApiClient.convertToType(data['<Identifier>k__BackingField'], 'String');
      if (data.hasOwnProperty('<Path>k__BackingField'))
        obj.pathkBackingField = ApiClient.convertToType(data['<Path>k__BackingField'], 'String');
      if (data.hasOwnProperty('<Metadata>k__BackingField'))
        obj.metadatakBackingField = ApiClient.convertToType(data['<Metadata>k__BackingField'], 'String');
      if (data.hasOwnProperty('<Description>k__BackingField'))
        obj.descriptionkBackingField = ApiClient.convertToType(data['<Description>k__BackingField'], 'String');
      if (data.hasOwnProperty('<IsUsedByTerritoryManager>k__BackingField'))
        obj.isUsedByTerritoryManagerkBackingField = ApiClient.convertToType(data['<IsUsedByTerritoryManager>k__BackingField'], 'Boolean');
      if (data.hasOwnProperty('<ServerViewCount>k__BackingField'))
        obj.serverViewCountkBackingField = ApiClient.convertToType(data['<ServerViewCount>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<Status>k__BackingField'))
        obj.statuskBackingField = ApiClient.convertToType(data['<Status>k__BackingField'], 'String');
      if (data.hasOwnProperty('<RecordCount>k__BackingField'))
        obj.recordCountkBackingField = ApiClient.convertToType(data['<RecordCount>k__BackingField'], 'Number');
      if (data.hasOwnProperty('<Id>k__BackingField'))
        obj.idkBackingField = ApiClient.convertToType(data['<Id>k__BackingField'], 'String');
      if (data.hasOwnProperty('<Name>k__BackingField'))
        obj.namekBackingField = ApiClient.convertToType(data['<Name>k__BackingField'], 'String');
      if (data.hasOwnProperty('<OwnerName>k__BackingField'))
        obj.ownerNamekBackingField = ApiClient.convertToType(data['<OwnerName>k__BackingField'], 'String');
      if (data.hasOwnProperty('<CreationTime>k__BackingField'))
        obj.creationTimekBackingField = ApiClient.convertToType(data['<CreationTime>k__BackingField'], 'Date');
      if (data.hasOwnProperty('<ModifiedTime>k__BackingField'))
        obj.modifiedTimekBackingField = ApiClient.convertToType(data['<ModifiedTime>k__BackingField'], 'Date');
      if (data.hasOwnProperty('<FolderId>k__BackingField'))
        obj.folderIdkBackingField = ApiClient.convertToType(data['<FolderId>k__BackingField'], 'String');
      if (data.hasOwnProperty('<CurrentUserHasModifyPermission>k__BackingField'))
        obj.currentUserHasModifyPermissionkBackingField = ApiClient.convertToType(data['<CurrentUserHasModifyPermission>k__BackingField'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {String} dataTableIdkBackingField
   */
  exports.prototype.dataTableIdkBackingField = undefined;

  /**
   * @member {String} dataTableLinkingColumnIdkBackingField
   */
  exports.prototype.dataTableLinkingColumnIdkBackingField = undefined;

  /**
   * @member {Boolean} isUniqueColumnSetkBackingField
   */
  exports.prototype.isUniqueColumnSetkBackingField = undefined;

  /**
   * @member {String} spatialSourceColumnkBackingField
   */
  exports.prototype.spatialSourceColumnkBackingField = undefined;

  /**
   * @member {String} spatialTableRefkBackingField
   */
  exports.prototype.spatialTableRefkBackingField = undefined;

  /**
   * @member {String} uniqueIDColumnkBackingField
   */
  exports.prototype.uniqueIDColumnkBackingField = undefined;

  /**
   * @member {String} proj4kBackingField
   */
  exports.prototype.proj4kBackingField = undefined;

  /**
   * @member {module:model/SpatialMetadataDTO.GeometryTypekBackingFieldEnum} geometryTypekBackingField
   */
  exports.prototype.geometryTypekBackingField = undefined;

  /**
   * @member {Number} mapUseCountkBackingField
   */
  exports.prototype.mapUseCountkBackingField = undefined;

  /**
   * @member {Number} minXkBackingField
   */
  exports.prototype.minXkBackingField = undefined;

  /**
   * @member {Number} minYkBackingField
   */
  exports.prototype.minYkBackingField = undefined;

  /**
   * @member {Number} maxXkBackingField
   */
  exports.prototype.maxXkBackingField = undefined;

  /**
   * @member {Number} maxYkBackingField
   */
  exports.prototype.maxYkBackingField = undefined;

  /**
   * @member {Number} sridkBackingField
   */
  exports.prototype.sridkBackingField = undefined;

  /**
   * @member {Boolean} tiledkBackingField
   */
  exports.prototype.tiledkBackingField = undefined;

  /**
   * @member {module:model/SpatialMetadataDTO.VectorQualityTypekBackingFieldEnum} vectorQualityTypekBackingField
   */
  exports.prototype.vectorQualityTypekBackingField = undefined;

  /**
   * @member {Boolean} cacheEnabledkBackingField
   */
  exports.prototype.cacheEnabledkBackingField = undefined;

  /**
   * @member {module:model/ClusterMetadataDTO} clusterMetadatakBackingField
   */
  exports.prototype.clusterMetadatakBackingField = undefined;

  /**
   * @member {String} userFriendlyProjkBackingField
   */
  exports.prototype.userFriendlyProjkBackingField = undefined;

  /**
   * @member {Array.<module:model/PermissionPairComplexDTO>} permissionskBackingField
   */
  exports.prototype.permissionskBackingField = undefined;

  /**
   * @member {Boolean} publicAccesskBackingField
   */
  exports.prototype.publicAccesskBackingField = undefined;

  /**
   * @member {String} identifierkBackingField
   */
  exports.prototype.identifierkBackingField = undefined;

  /**
   * @member {String} pathkBackingField
   */
  exports.prototype.pathkBackingField = undefined;

  /**
   * @member {String} metadatakBackingField
   */
  exports.prototype.metadatakBackingField = undefined;

  /**
   * @member {String} descriptionkBackingField
   */
  exports.prototype.descriptionkBackingField = undefined;

  /**
   * @member {Boolean} isUsedByTerritoryManagerkBackingField
   */
  exports.prototype.isUsedByTerritoryManagerkBackingField = undefined;

  /**
   * @member {Number} serverViewCountkBackingField
   */
  exports.prototype.serverViewCountkBackingField = undefined;

  /**
   * @member {module:model/SpatialMetadataDTO.StatuskBackingFieldEnum} statuskBackingField
   */
  exports.prototype.statuskBackingField = undefined;

  /**
   * @member {Number} recordCountkBackingField
   */
  exports.prototype.recordCountkBackingField = undefined;

  /**
   * @member {String} idkBackingField
   */
  exports.prototype.idkBackingField = undefined;

  /**
   * @member {String} namekBackingField
   */
  exports.prototype.namekBackingField = undefined;

  /**
   * @member {String} ownerNamekBackingField
   */
  exports.prototype.ownerNamekBackingField = undefined;

  /**
   * @member {Date} creationTimekBackingField
   */
  exports.prototype.creationTimekBackingField = undefined;

  /**
   * @member {Date} modifiedTimekBackingField
   */
  exports.prototype.modifiedTimekBackingField = undefined;

  /**
   * @member {String} folderIdkBackingField
   */
  exports.prototype.folderIdkBackingField = undefined;

  /**
   * @member {Boolean} currentUserHasModifyPermissionkBackingField
   */
  exports.prototype.currentUserHasModifyPermissionkBackingField = undefined;


  /**
   * Allowed values for the <code>geometryTypekBackingField</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.GeometryTypekBackingFieldEnum = {
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
    _2: 2,

    /**
     * value: 3
     * @const
     */
    _3: 3
  };


  /**
   * Allowed values for the <code>vectorQualityTypekBackingField</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.VectorQualityTypekBackingFieldEnum = {
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
     * value: 4
     * @const
     */
    _4: 4,

    /**
     * value: 8
     * @const
     */
    _8: 8,

    /**
     * value: 16
     * @const
     */
    _16: 16,

    /**
     * value: 32
     * @const
     */
    _32: 32
  };


  /**
   * Allowed values for the <code>statuskBackingField</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatuskBackingFieldEnum = {
    /**
     * value: "READY"
     * @const
     */
    READY: "READY",

    /**
     * value: "NOT_READY"
     * @const
     */
    NOT_READY: "NOT_READY"
  };

  return exports;

}));
