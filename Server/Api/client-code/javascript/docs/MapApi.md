# CartoVistaserverapiv1.MapApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapCreateMap**](MapApi.md#mapCreateMap) | **POST** /api/v1/maps | Create a map based on the provided parameters.
[**mapDeleteMap**](MapApi.md#mapDeleteMap) | **DELETE** /api/v1/maps/{mapId} | Delete a map by map id or a friendly identifier.
[**mapGetGridLayersByMap**](MapApi.md#mapGetGridLayersByMap) | **GET** /api/v1/maps/{mapId}/gridLayers | Get the list of grid layers used in a map.
[**mapGetLayersByMap**](MapApi.md#mapGetLayersByMap) | **GET** /api/v1/maps/{mapId}/layers | Get the list of Layers used in a map.
[**mapGetMap**](MapApi.md#mapGetMap) | **GET** /api/v1/maps/{mapId} | Get a map based on the map id or a friendly identifier.
[**mapGetMaps**](MapApi.md#mapGetMaps) | **GET** /api/v1/maps | Get all maps the requesting user has access to.
[**mapUpdateMap**](MapApi.md#mapUpdateMap) | **PATCH** /api/v1/maps/{mapId} | Update a map properties based on the given parameters.


<a name="mapCreateMap"></a>
# **mapCreateMap**
> Map mapCreateMap(param)

Create a map based on the provided parameters.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var param = new CartoVistaserverapiv1.MapCreateParameter(); // MapCreateParameter | Parameters used to create the map.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapCreateMap(param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**MapCreateParameter**](MapCreateParameter.md)| Parameters used to create the map. | 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="mapDeleteMap"></a>
# **mapDeleteMap**
> mapDeleteMap(mapId)

Delete a map by map id or a friendly identifier.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var mapId = "mapId_example"; // String | Map id or a friendly identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mapDeleteMap(mapId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **String**| Map id or a friendly identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mapGetGridLayersByMap"></a>
# **mapGetGridLayersByMap**
> [GridLayer] mapGetGridLayersByMap(mapId)

Get the list of grid layers used in a map.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var mapId = "mapId_example"; // String | Map id or a friendly identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapGetGridLayersByMap(mapId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **String**| Map id or a friendly identifier. | 

### Return type

[**[GridLayer]**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="mapGetLayersByMap"></a>
# **mapGetLayersByMap**
> [Layer] mapGetLayersByMap(mapId)

Get the list of Layers used in a map.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var mapId = "mapId_example"; // String | Map id or a friendly identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapGetLayersByMap(mapId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **String**| Map id or a friendly identifier. | 

### Return type

[**[Layer]**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="mapGetMap"></a>
# **mapGetMap**
> Map mapGetMap(mapId)

Get a map based on the map id or a friendly identifier.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var mapId = "mapId_example"; // String | Map id or a friendly identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapGetMap(mapId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **String**| Map id or a friendly identifier. | 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="mapGetMaps"></a>
# **mapGetMaps**
> [Map] mapGetMaps()

Get all maps the requesting user has access to.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapGetMaps(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Map]**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="mapUpdateMap"></a>
# **mapUpdateMap**
> Map mapUpdateMap(mapId, param)

Update a map properties based on the given parameters.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.MapApi();

var mapId = "mapId_example"; // String | Map id or a friendly identifier.

var param = new CartoVistaserverapiv1.MapUpdateParameter(); // MapUpdateParameter | Parameters used to update the map.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mapUpdateMap(mapId, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **String**| Map id or a friendly identifier. | 
 **param** | [**MapUpdateParameter**](MapUpdateParameter.md)| Parameters used to update the map. | 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

