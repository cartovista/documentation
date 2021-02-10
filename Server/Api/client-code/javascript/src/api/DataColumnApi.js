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
    define(['ApiClient', 'model/ApiInsertReport', 'model/DataColumn', 'model/DataColumnCreateParameter', 'model/DataColumnUpdateParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiInsertReport'), require('../model/DataColumn'), require('../model/DataColumnCreateParameter'), require('../model/DataColumnUpdateParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.DataColumnApi = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.ApiInsertReport, root.CartoVistaserverapiv1.DataColumn, root.CartoVistaserverapiv1.DataColumnCreateParameter, root.CartoVistaserverapiv1.DataColumnUpdateParameter);
  }
}(this, function(ApiClient, ApiInsertReport, DataColumn, DataColumnCreateParameter, DataColumnUpdateParameter) {
  'use strict';

  /**
   * DataColumn service.
   * @module api/DataColumnApi
   * @version v1
   */

  /**
   * Constructs a new DataColumnApi. 
   * @alias module:api/DataColumnApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dataColumnCreateDataTableDataColumns operation.
     * @callback module:api/DataColumnApi~dataColumnCreateDataTableDataColumnsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiInsertReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} dataTableIdentifier 
     * @param {Array.<module:model/DataColumnCreateParameter>} parameters 
     * @param {module:api/DataColumnApi~dataColumnCreateDataTableDataColumnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiInsertReport}
     */
    this.dataColumnCreateDataTableDataColumns = function(dataTableIdentifier, parameters, callback) {
      var postBody = parameters;

      // verify the required parameter 'dataTableIdentifier' is set
      if (dataTableIdentifier === undefined || dataTableIdentifier === null) {
        throw new Error("Missing the required parameter 'dataTableIdentifier' when calling dataColumnCreateDataTableDataColumns");
      }

      // verify the required parameter 'parameters' is set
      if (parameters === undefined || parameters === null) {
        throw new Error("Missing the required parameter 'parameters' when calling dataColumnCreateDataTableDataColumns");
      }


      var pathParams = {
        'dataTableIdentifier': dataTableIdentifier
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
      var returnType = ApiInsertReport;

      return this.apiClient.callApi(
        '/api/v1/DataTable/{dataTableIdentifier}/createDataColumns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnCreateLayerDataColumns operation.
     * @callback module:api/DataColumnApi~dataColumnCreateLayerDataColumnsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiInsertReport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} layerIdentifier 
     * @param {Array.<module:model/DataColumnCreateParameter>} parameters 
     * @param {module:api/DataColumnApi~dataColumnCreateLayerDataColumnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiInsertReport}
     */
    this.dataColumnCreateLayerDataColumns = function(layerIdentifier, parameters, callback) {
      var postBody = parameters;

      // verify the required parameter 'layerIdentifier' is set
      if (layerIdentifier === undefined || layerIdentifier === null) {
        throw new Error("Missing the required parameter 'layerIdentifier' when calling dataColumnCreateLayerDataColumns");
      }

      // verify the required parameter 'parameters' is set
      if (parameters === undefined || parameters === null) {
        throw new Error("Missing the required parameter 'parameters' when calling dataColumnCreateLayerDataColumns");
      }


      var pathParams = {
        'layerIdentifier': layerIdentifier
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
      var returnType = ApiInsertReport;

      return this.apiClient.callApi(
        '/api/v1/Layer/{layerIdentifier}/createDataColumns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnDeleteDataTableDataColumn operation.
     * @callback module:api/DataColumnApi~dataColumnDeleteDataTableDataColumnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} dataTableIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {module:api/DataColumnApi~dataColumnDeleteDataTableDataColumnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.dataColumnDeleteDataTableDataColumn = function(dataTableIdentifier, dataColumnIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'dataTableIdentifier' is set
      if (dataTableIdentifier === undefined || dataTableIdentifier === null) {
        throw new Error("Missing the required parameter 'dataTableIdentifier' when calling dataColumnDeleteDataTableDataColumn");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnDeleteDataTableDataColumn");
      }


      var pathParams = {
        'dataTableIdentifier': dataTableIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
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
        '/api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnDeleteLayerDataColumn operation.
     * @callback module:api/DataColumnApi~dataColumnDeleteLayerDataColumnCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} layerIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {module:api/DataColumnApi~dataColumnDeleteLayerDataColumnCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.dataColumnDeleteLayerDataColumn = function(layerIdentifier, dataColumnIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'layerIdentifier' is set
      if (layerIdentifier === undefined || layerIdentifier === null) {
        throw new Error("Missing the required parameter 'layerIdentifier' when calling dataColumnDeleteLayerDataColumn");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnDeleteLayerDataColumn");
      }


      var pathParams = {
        'layerIdentifier': layerIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
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
        '/api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnGetDataTableDataColumn operation.
     * @callback module:api/DataColumnApi~dataColumnGetDataTableDataColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} dataTableIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {module:api/DataColumnApi~dataColumnGetDataTableDataColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataColumn}
     */
    this.dataColumnGetDataTableDataColumn = function(dataTableIdentifier, dataColumnIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'dataTableIdentifier' is set
      if (dataTableIdentifier === undefined || dataTableIdentifier === null) {
        throw new Error("Missing the required parameter 'dataTableIdentifier' when calling dataColumnGetDataTableDataColumn");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnGetDataTableDataColumn");
      }


      var pathParams = {
        'dataTableIdentifier': dataTableIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
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
      var returnType = DataColumn;

      return this.apiClient.callApi(
        '/api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnGetDataTableDataColumns operation.
     * @callback module:api/DataColumnApi~dataColumnGetDataTableDataColumnsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataColumn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} dataTableIdentifier 
     * @param {module:api/DataColumnApi~dataColumnGetDataTableDataColumnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataColumn>}
     */
    this.dataColumnGetDataTableDataColumns = function(dataTableIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'dataTableIdentifier' is set
      if (dataTableIdentifier === undefined || dataTableIdentifier === null) {
        throw new Error("Missing the required parameter 'dataTableIdentifier' when calling dataColumnGetDataTableDataColumns");
      }


      var pathParams = {
        'dataTableIdentifier': dataTableIdentifier
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
      var returnType = [DataColumn];

      return this.apiClient.callApi(
        '/api/v1/DataTable/{dataTableIdentifier}/DataColumns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnGetLayerDataColumn operation.
     * @callback module:api/DataColumnApi~dataColumnGetLayerDataColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} layerIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {module:api/DataColumnApi~dataColumnGetLayerDataColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataColumn}
     */
    this.dataColumnGetLayerDataColumn = function(layerIdentifier, dataColumnIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'layerIdentifier' is set
      if (layerIdentifier === undefined || layerIdentifier === null) {
        throw new Error("Missing the required parameter 'layerIdentifier' when calling dataColumnGetLayerDataColumn");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnGetLayerDataColumn");
      }


      var pathParams = {
        'layerIdentifier': layerIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
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
      var returnType = DataColumn;

      return this.apiClient.callApi(
        '/api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnGetLayerDataColumns operation.
     * @callback module:api/DataColumnApi~dataColumnGetLayerDataColumnsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataColumn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} layerIdentifier 
     * @param {module:api/DataColumnApi~dataColumnGetLayerDataColumnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataColumn>}
     */
    this.dataColumnGetLayerDataColumns = function(layerIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'layerIdentifier' is set
      if (layerIdentifier === undefined || layerIdentifier === null) {
        throw new Error("Missing the required parameter 'layerIdentifier' when calling dataColumnGetLayerDataColumns");
      }


      var pathParams = {
        'layerIdentifier': layerIdentifier
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
      var returnType = [DataColumn];

      return this.apiClient.callApi(
        '/api/v1/Layer/{layerIdentifier}/DataColumns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnSetDataTableColumnUniqueIdentifier operation.
     * @callback module:api/DataColumnApi~dataColumnSetDataTableColumnUniqueIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} dataTableIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {String} newIdentifier 
     * @param {module:api/DataColumnApi~dataColumnSetDataTableColumnUniqueIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataColumn}
     */
    this.dataColumnSetDataTableColumnUniqueIdentifier = function(dataTableIdentifier, dataColumnIdentifier, newIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'dataTableIdentifier' is set
      if (dataTableIdentifier === undefined || dataTableIdentifier === null) {
        throw new Error("Missing the required parameter 'dataTableIdentifier' when calling dataColumnSetDataTableColumnUniqueIdentifier");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnSetDataTableColumnUniqueIdentifier");
      }

      // verify the required parameter 'newIdentifier' is set
      if (newIdentifier === undefined || newIdentifier === null) {
        throw new Error("Missing the required parameter 'newIdentifier' when calling dataColumnSetDataTableColumnUniqueIdentifier");
      }


      var pathParams = {
        'dataTableIdentifier': dataTableIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
      };
      var queryParams = {
        'newIdentifier': newIdentifier,
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
      var returnType = DataColumn;

      return this.apiClient.callApi(
        '/api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnSetLayerColumnUniqueIdentifier operation.
     * @callback module:api/DataColumnApi~dataColumnSetLayerColumnUniqueIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} layerIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {String} newIdentifier 
     * @param {module:api/DataColumnApi~dataColumnSetLayerColumnUniqueIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataColumn}
     */
    this.dataColumnSetLayerColumnUniqueIdentifier = function(layerIdentifier, dataColumnIdentifier, newIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'layerIdentifier' is set
      if (layerIdentifier === undefined || layerIdentifier === null) {
        throw new Error("Missing the required parameter 'layerIdentifier' when calling dataColumnSetLayerColumnUniqueIdentifier");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnSetLayerColumnUniqueIdentifier");
      }

      // verify the required parameter 'newIdentifier' is set
      if (newIdentifier === undefined || newIdentifier === null) {
        throw new Error("Missing the required parameter 'newIdentifier' when calling dataColumnSetLayerColumnUniqueIdentifier");
      }


      var pathParams = {
        'layerIdentifier': layerIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
      };
      var queryParams = {
        'newIdentifier': newIdentifier,
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
      var returnType = DataColumn;

      return this.apiClient.callApi(
        '/api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnUpdateDataTableDataColumn operation.
     * @callback module:api/DataColumnApi~dataColumnUpdateDataTableDataColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} dataTableIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {module:model/DataColumnUpdateParameter} param 
     * @param {module:api/DataColumnApi~dataColumnUpdateDataTableDataColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataColumn}
     */
    this.dataColumnUpdateDataTableDataColumn = function(dataTableIdentifier, dataColumnIdentifier, param, callback) {
      var postBody = param;

      // verify the required parameter 'dataTableIdentifier' is set
      if (dataTableIdentifier === undefined || dataTableIdentifier === null) {
        throw new Error("Missing the required parameter 'dataTableIdentifier' when calling dataColumnUpdateDataTableDataColumn");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnUpdateDataTableDataColumn");
      }

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling dataColumnUpdateDataTableDataColumn");
      }


      var pathParams = {
        'dataTableIdentifier': dataTableIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
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
      var returnType = DataColumn;

      return this.apiClient.callApi(
        '/api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataColumnUpdateLayerDataColumn operation.
     * @callback module:api/DataColumnApi~dataColumnUpdateLayerDataColumnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataColumn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} layerIdentifier 
     * @param {String} dataColumnIdentifier 
     * @param {module:model/DataColumnUpdateParameter} param 
     * @param {module:api/DataColumnApi~dataColumnUpdateLayerDataColumnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataColumn}
     */
    this.dataColumnUpdateLayerDataColumn = function(layerIdentifier, dataColumnIdentifier, param, callback) {
      var postBody = param;

      // verify the required parameter 'layerIdentifier' is set
      if (layerIdentifier === undefined || layerIdentifier === null) {
        throw new Error("Missing the required parameter 'layerIdentifier' when calling dataColumnUpdateLayerDataColumn");
      }

      // verify the required parameter 'dataColumnIdentifier' is set
      if (dataColumnIdentifier === undefined || dataColumnIdentifier === null) {
        throw new Error("Missing the required parameter 'dataColumnIdentifier' when calling dataColumnUpdateLayerDataColumn");
      }

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling dataColumnUpdateLayerDataColumn");
      }


      var pathParams = {
        'layerIdentifier': layerIdentifier,
        'dataColumnIdentifier': dataColumnIdentifier
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
      var returnType = DataColumn;

      return this.apiClient.callApi(
        '/api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));