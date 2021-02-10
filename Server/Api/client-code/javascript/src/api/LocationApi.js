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
    define(['ApiClient', 'model/GeocodedLocation', 'model/Isochrone', 'model/IsochroneParams', 'model/ReverseGeocodeParams', 'model/RouteSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeocodedLocation'), require('../model/Isochrone'), require('../model/IsochroneParams'), require('../model/ReverseGeocodeParams'), require('../model/RouteSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.CartoVistaserverapiv1) {
      root.CartoVistaserverapiv1 = {};
    }
    root.CartoVistaserverapiv1.LocationApi = factory(root.CartoVistaserverapiv1.ApiClient, root.CartoVistaserverapiv1.GeocodedLocation, root.CartoVistaserverapiv1.Isochrone, root.CartoVistaserverapiv1.IsochroneParams, root.CartoVistaserverapiv1.ReverseGeocodeParams, root.CartoVistaserverapiv1.RouteSummary);
  }
}(this, function(ApiClient, GeocodedLocation, Isochrone, IsochroneParams, ReverseGeocodeParams, RouteSummary) {
  'use strict';

  /**
   * Location service.
   * @module api/LocationApi
   * @version v1
   */

  /**
   * Constructs a new LocationApi. 
   * @alias module:api/LocationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the locationGeocode operation.
     * @callback module:api/LocationApi~locationGeocodeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeocodedLocation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} address 
     * @param {module:api/LocationApi~locationGeocodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeocodedLocation>}
     */
    this.locationGeocode = function(address, callback) {
      var postBody = null;

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling locationGeocode");
      }


      var pathParams = {
        'address': address
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
      var returnType = [GeocodedLocation];

      return this.apiClient.callApi(
        '/api/v1/Location/geocode/{address}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the locationGetRouteSummary operation.
     * @callback module:api/LocationApi~locationGetRouteSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RouteSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paramOriginLatitude 
     * @param {Number} opts.paramOriginLongitude 
     * @param {Number} opts.paramDestinationLatitude 
     * @param {Number} opts.paramDestinationLongitude 
     * @param {module:api/LocationApi~locationGetRouteSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RouteSummary}
     */
    this.locationGetRouteSummary = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'param.originLatitude': opts['paramOriginLatitude'],
        'param.originLongitude': opts['paramOriginLongitude'],
        'param.destinationLatitude': opts['paramDestinationLatitude'],
        'param.destinationLongitude': opts['paramDestinationLongitude'],
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
      var returnType = RouteSummary;

      return this.apiClient.callApi(
        '/api/v1/Location/route/summary', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the locationIsochrone operation.
     * @callback module:api/LocationApi~locationIsochroneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Isochrone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/IsochroneParams} param 
     * @param {module:api/LocationApi~locationIsochroneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Isochrone}
     */
    this.locationIsochrone = function(param, callback) {
      var postBody = param;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling locationIsochrone");
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
      var returnType = Isochrone;

      return this.apiClient.callApi(
        '/api/v1/Location/isochrone', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the locationReverseGeocode operation.
     * @callback module:api/LocationApi~locationReverseGeocodeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GeocodedLocation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ReverseGeocodeParams} param 
     * @param {module:api/LocationApi~locationReverseGeocodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GeocodedLocation>}
     */
    this.locationReverseGeocode = function(param, callback) {
      var postBody = param;

      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling locationReverseGeocode");
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
      var returnType = [GeocodedLocation];

      return this.apiClient.callApi(
        '/api/v1/Location/reversegeocode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
