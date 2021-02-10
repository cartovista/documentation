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
    define(['ApiClient', 'model/GridLayer', 'model/GridLayerCreateParameters', 'model/GridLayerUpdateParameters', 'model/GridSource', 'model/GridSourceRenderParameter', 'model/GridSourceUpdateParameters', 'model/MapDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GridLayer'), require('../model/GridLayerCreateParameters'), require('../model/GridLayerUpdateParameters'), require('../model/GridSource'), require('../model/GridSourceRenderParameter'), require('../model/GridSourceUpdateParameters'), require('../model/MapDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.GridLayerApi = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.GridLayer, root.CartoVistaserverapiv1.GridLayerCreateParameters, root.CartoVistaserverapiv1.GridLayerUpdateParameters, root.CartoVistaserverapiv1.GridSource, root.CartoVistaserverapiv1.GridSourceRenderParameter, root.CartoVistaserverapiv1.GridSourceUpdateParameters, root.CartoVistaserverapiv1.MapDTO);
  }
}(this, function(ApiClient, GridLayer, GridLayerCreateParameters, GridLayerUpdateParameters, GridSource, GridSourceRenderParameter, GridSourceUpdateParameters, MapDTO) {
  'use strict';

  /**
   * GridLayer service.
   * @module api/GridLayerApi
   * @version v1
   */

  /**
   * Constructs a new GridLayerApi. 
   * @alias module:api/GridLayerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the gridLayerAddGridSource operation.
     * @callback module:api/GridLayerApi~gridLayerAddGridSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a grid source to an existing grid layer.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {Number} bandNumber The band number to select. Starts at 1.
     * @param {File} file Upload file
     * @param {module:api/GridLayerApi~gridLayerAddGridSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridSource}
     */
    this.gridLayerAddGridSource = function(gridLayerId, bandNumber, file, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerAddGridSource");
      }

      // verify the required parameter 'bandNumber' is set
      if (bandNumber === undefined || bandNumber === null) {
        throw new Error("Missing the required parameter 'bandNumber' when calling gridLayerAddGridSource");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling gridLayerAddGridSource");
      }


      var pathParams = {
        'gridLayerId': gridLayerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'bandNumber': bandNumber,
        'File': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridSource;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSources', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerCreateGridLayer operation.
     * @callback module:api/GridLayerApi~gridLayerCreateGridLayerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridLayer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a grid layer with the specified parameters.
     * @param {module:model/GridLayerCreateParameters} createParameters The parameters used to create the grid layer.
     * @param {module:api/GridLayerApi~gridLayerCreateGridLayerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridLayer}
     */
    this.gridLayerCreateGridLayer = function(createParameters, callback) {
      var postBody = createParameters;

      // verify the required parameter 'createParameters' is set
      if (createParameters === undefined || createParameters === null) {
        throw new Error("Missing the required parameter 'createParameters' when calling gridLayerCreateGridLayer");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridLayer;

      return this.apiClient.callApi(
        '/api/v1/GridLayer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerDeleteGridLayer operation.
     * @callback module:api/GridLayerApi~gridLayerDeleteGridLayerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing grid layer.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {module:api/GridLayerApi~gridLayerDeleteGridLayerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.gridLayerDeleteGridLayer = function(gridLayerId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerDeleteGridLayer");
      }


      var pathParams = {
        'gridLayerId': gridLayerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerDeleteGridSource operation.
     * @callback module:api/GridLayerApi~gridLayerDeleteGridSourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing grid source.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {String} gridSourceId The grid source system identifier.
     * @param {module:api/GridLayerApi~gridLayerDeleteGridSourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.gridLayerDeleteGridSource = function(gridLayerId, gridSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerDeleteGridSource");
      }

      // verify the required parameter 'gridSourceId' is set
      if (gridSourceId === undefined || gridSourceId === null) {
        throw new Error("Missing the required parameter 'gridSourceId' when calling gridLayerDeleteGridSource");
      }


      var pathParams = {
        'gridLayerId': gridLayerId,
        'gridSourceId': gridSourceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerGetData operation.
     * @callback module:api/GridLayerApi~gridLayerGetDataCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} gridLayerId 
     * @param {String} gridSourceId 
     * @param {module:api/GridLayerApi~gridLayerGetDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.gridLayerGetData = function(gridLayerId, gridSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerGetData");
      }

      // verify the required parameter 'gridSourceId' is set
      if (gridSourceId === undefined || gridSourceId === null) {
        throw new Error("Missing the required parameter 'gridSourceId' when calling gridLayerGetData");
      }


      var pathParams = {
        'gridLayerId': gridLayerId,
        'gridSourceId': gridSourceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/getData', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerGetGridLayerById operation.
     * @callback module:api/GridLayerApi~gridLayerGetGridLayerByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridLayer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a grid layer by identifier.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {module:api/GridLayerApi~gridLayerGetGridLayerByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridLayer}
     */
    this.gridLayerGetGridLayerById = function(gridLayerId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerGetGridLayerById");
      }


      var pathParams = {
        'gridLayerId': gridLayerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridLayer;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerGetGridLayers operation.
     * @callback module:api/GridLayerApi~gridLayerGetGridLayersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GridLayer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of all grid layers.
     * @param {module:api/GridLayerApi~gridLayerGetGridLayersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GridLayer>}
     */
    this.gridLayerGetGridLayers = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [GridLayer];

      return this.apiClient.callApi(
        '/api/v1/GridLayers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerGetGridSource operation.
     * @callback module:api/GridLayerApi~gridLayerGetGridSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a grid source by identifier.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {String} gridSourceId The grid source system identifier.
     * @param {module:api/GridLayerApi~gridLayerGetGridSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridSource}
     */
    this.gridLayerGetGridSource = function(gridLayerId, gridSourceId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerGetGridSource");
      }

      // verify the required parameter 'gridSourceId' is set
      if (gridSourceId === undefined || gridSourceId === null) {
        throw new Error("Missing the required parameter 'gridSourceId' when calling gridLayerGetGridSource");
      }


      var pathParams = {
        'gridLayerId': gridLayerId,
        'gridSourceId': gridSourceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridSource;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerGetGridSourcesForGridLayer operation.
     * @callback module:api/GridLayerApi~gridLayerGetGridSourcesForGridLayerCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GridSource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the grid sources associated with the grid layer.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {module:api/GridLayerApi~gridLayerGetGridSourcesForGridLayerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GridSource>}
     */
    this.gridLayerGetGridSourcesForGridLayer = function(gridLayerId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerGetGridSourcesForGridLayer");
      }


      var pathParams = {
        'gridLayerId': gridLayerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [GridSource];

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSources', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerGetMapsByGridLayer operation.
     * @callback module:api/GridLayerApi~gridLayerGetMapsByGridLayerCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MapDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} gridLayerId 
     * @param {module:api/GridLayerApi~gridLayerGetMapsByGridLayerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MapDTO>}
     */
    this.gridLayerGetMapsByGridLayer = function(gridLayerId, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerGetMapsByGridLayer");
      }


      var pathParams = {
        'gridLayerId': gridLayerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = [MapDTO];

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/maps', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerRender operation.
     * @callback module:api/GridLayerApi~gridLayerRenderCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.
     * @param {String} gridLayerId 
     * @param {String} gridSourceId 
     * @param {module:model/GridSourceRenderParameter} param 
     * @param {module:api/GridLayerApi~gridLayerRenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.gridLayerRender = function(gridLayerId, gridSourceId, param, callback) {
      var postBody = param;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerRender");
      }

      // verify the required parameter 'gridSourceId' is set
      if (gridSourceId === undefined || gridSourceId === null) {
        throw new Error("Missing the required parameter 'gridSourceId' when calling gridLayerRender");
      }

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling gridLayerRender");
      }


      var pathParams = {
        'gridLayerId': gridLayerId,
        'gridSourceId': gridSourceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/render', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerUpdateGridLayer operation.
     * @callback module:api/GridLayerApi~gridLayerUpdateGridLayerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridLayer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the properties of an existing grid layer.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {module:model/GridLayerUpdateParameters} updateParameters The parameters to update.
     * @param {module:api/GridLayerApi~gridLayerUpdateGridLayerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridLayer}
     */
    this.gridLayerUpdateGridLayer = function(gridLayerId, updateParameters, callback) {
      var postBody = updateParameters;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerUpdateGridLayer");
      }

      // verify the required parameter 'updateParameters' is set
      if (updateParameters === undefined || updateParameters === null) {
        throw new Error("Missing the required parameter 'updateParameters' when calling gridLayerUpdateGridLayer");
      }


      var pathParams = {
        'gridLayerId': gridLayerId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridLayer;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerUpdateGridSource operation.
     * @callback module:api/GridLayerApi~gridLayerUpdateGridSourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the properties of an existing grid source.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {String} gridSourceId The grid source system identifier.
     * @param {module:model/GridSourceUpdateParameters} updateParameters The parameters to update.
     * @param {module:api/GridLayerApi~gridLayerUpdateGridSourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridSource}
     */
    this.gridLayerUpdateGridSource = function(gridLayerId, gridSourceId, updateParameters, callback) {
      var postBody = updateParameters;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerUpdateGridSource");
      }

      // verify the required parameter 'gridSourceId' is set
      if (gridSourceId === undefined || gridSourceId === null) {
        throw new Error("Missing the required parameter 'gridSourceId' when calling gridLayerUpdateGridSource");
      }

      // verify the required parameter 'updateParameters' is set
      if (updateParameters === undefined || updateParameters === null) {
        throw new Error("Missing the required parameter 'updateParameters' when calling gridLayerUpdateGridSource");
      }


      var pathParams = {
        'gridLayerId': gridLayerId,
        'gridSourceId': gridSourceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridSource;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gridLayerUpdateGridSourceGeotiff operation.
     * @callback module:api/GridLayerApi~gridLayerUpdateGridSourceGeotiffCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GridSource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the geoTIFF of an existing grid source.
     * @param {String} gridLayerId The grid layer system identifier.
     * @param {String} gridSourceId The grid source system identifier.
     * @param {Number} bandNumber The band number to select. Starts at 1.
     * @param {File} file Upload file
     * @param {module:api/GridLayerApi~gridLayerUpdateGridSourceGeotiffCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GridSource}
     */
    this.gridLayerUpdateGridSourceGeotiff = function(gridLayerId, gridSourceId, bandNumber, file, callback) {
      var postBody = null;

      // verify the required parameter 'gridLayerId' is set
      if (gridLayerId === undefined || gridLayerId === null) {
        throw new Error("Missing the required parameter 'gridLayerId' when calling gridLayerUpdateGridSourceGeotiff");
      }

      // verify the required parameter 'gridSourceId' is set
      if (gridSourceId === undefined || gridSourceId === null) {
        throw new Error("Missing the required parameter 'gridSourceId' when calling gridLayerUpdateGridSourceGeotiff");
      }

      // verify the required parameter 'bandNumber' is set
      if (bandNumber === undefined || bandNumber === null) {
        throw new Error("Missing the required parameter 'bandNumber' when calling gridLayerUpdateGridSourceGeotiff");
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling gridLayerUpdateGridSourceGeotiff");
      }


      var pathParams = {
        'gridLayerId': gridLayerId,
        'gridSourceId': gridSourceId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'bandNumber': bandNumber,
        'File': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json'];
      var returnType = GridSource;

      return this.apiClient.callApi(
        '/api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}/updateGeotiff', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));