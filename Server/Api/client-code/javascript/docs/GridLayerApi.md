# CartoVistaserverapiv1.GridLayerApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gridLayerAddGridSource**](GridLayerApi.md#gridLayerAddGridSource) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSources | Add a grid source to an existing grid layer.
[**gridLayerCreateGridLayer**](GridLayerApi.md#gridLayerCreateGridLayer) | **POST** /api/v1/GridLayer | Create a grid layer with the specified parameters.
[**gridLayerDeleteGridLayer**](GridLayerApi.md#gridLayerDeleteGridLayer) | **DELETE** /api/v1/GridLayer/{gridLayerId} | Delete an existing grid layer.
[**gridLayerDeleteGridSource**](GridLayerApi.md#gridLayerDeleteGridSource) | **DELETE** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Delete an existing grid source.
[**gridLayerGetData**](GridLayerApi.md#gridLayerGetData) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/getData | 
[**gridLayerGetGridLayerById**](GridLayerApi.md#gridLayerGetGridLayerById) | **GET** /api/v1/GridLayer/{gridLayerId} | Get a grid layer by identifier.
[**gridLayerGetGridLayers**](GridLayerApi.md#gridLayerGetGridLayers) | **GET** /api/v1/GridLayers | Get the list of all grid layers.
[**gridLayerGetGridSource**](GridLayerApi.md#gridLayerGetGridSource) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Get a grid source by identifier.
[**gridLayerGetGridSourcesForGridLayer**](GridLayerApi.md#gridLayerGetGridSourcesForGridLayer) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSources | Get all the grid sources associated with the grid layer.
[**gridLayerGetMapsByGridLayer**](GridLayerApi.md#gridLayerGetMapsByGridLayer) | **GET** /api/v1/GridLayer/{gridLayerId}/maps | 
[**gridLayerRender**](GridLayerApi.md#gridLayerRender) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/render | Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.
[**gridLayerUpdateGridLayer**](GridLayerApi.md#gridLayerUpdateGridLayer) | **PATCH** /api/v1/GridLayer/{gridLayerId} | Update the properties of an existing grid layer.
[**gridLayerUpdateGridSource**](GridLayerApi.md#gridLayerUpdateGridSource) | **PATCH** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Update the properties of an existing grid source.
[**gridLayerUpdateGridSourceGeotiff**](GridLayerApi.md#gridLayerUpdateGridSourceGeotiff) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}/updateGeotiff | Update the geoTIFF of an existing grid source.


<a name="gridLayerAddGridSource"></a>
# **gridLayerAddGridSource**
> GridSource gridLayerAddGridSource(gridLayerId, bandNumber, file)

Add a grid source to an existing grid layer.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.

var bandNumber = 56; // Number | The band number to select. Starts at 1.

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerAddGridSource(gridLayerId, bandNumber, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 
 **bandNumber** | **Number**| The band number to select. Starts at 1. | 
 **file** | **File**| Upload file | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="gridLayerCreateGridLayer"></a>
# **gridLayerCreateGridLayer**
> GridLayer gridLayerCreateGridLayer(createParameters)

Create a grid layer with the specified parameters.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var createParameters = new CartoVistaserverapiv1.GridLayerCreateParameters(); // GridLayerCreateParameters | The parameters used to create the grid layer.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerCreateGridLayer(createParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createParameters** | [**GridLayerCreateParameters**](GridLayerCreateParameters.md)| The parameters used to create the grid layer. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="gridLayerDeleteGridLayer"></a>
# **gridLayerDeleteGridLayer**
> gridLayerDeleteGridLayer(gridLayerId)

Delete an existing grid layer.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.gridLayerDeleteGridLayer(gridLayerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="gridLayerDeleteGridSource"></a>
# **gridLayerDeleteGridSource**
> gridLayerDeleteGridSource(gridLayerId, gridSourceId)

Delete an existing grid source.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.

var gridSourceId = "gridSourceId_example"; // String | The grid source system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.gridLayerDeleteGridSource(gridLayerId, gridSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 
 **gridSourceId** | **String**| The grid source system identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="gridLayerGetData"></a>
# **gridLayerGetData**
> Object gridLayerGetData(gridLayerId, gridSourceId)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | 

var gridSourceId = "gridSourceId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerGetData(gridLayerId, gridSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**|  | 
 **gridSourceId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="gridLayerGetGridLayerById"></a>
# **gridLayerGetGridLayerById**
> GridLayer gridLayerGetGridLayerById(gridLayerId)

Get a grid layer by identifier.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerGetGridLayerById(gridLayerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="gridLayerGetGridLayers"></a>
# **gridLayerGetGridLayers**
> [GridLayer] gridLayerGetGridLayers()

Get the list of all grid layers.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerGetGridLayers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[GridLayer]**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="gridLayerGetGridSource"></a>
# **gridLayerGetGridSource**
> GridSource gridLayerGetGridSource(gridLayerId, gridSourceId)

Get a grid source by identifier.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.

var gridSourceId = "gridSourceId_example"; // String | The grid source system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerGetGridSource(gridLayerId, gridSourceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 
 **gridSourceId** | **String**| The grid source system identifier. | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="gridLayerGetGridSourcesForGridLayer"></a>
# **gridLayerGetGridSourcesForGridLayer**
> [GridSource] gridLayerGetGridSourcesForGridLayer(gridLayerId)

Get all the grid sources associated with the grid layer.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerGetGridSourcesForGridLayer(gridLayerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 

### Return type

[**[GridSource]**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="gridLayerGetMapsByGridLayer"></a>
# **gridLayerGetMapsByGridLayer**
> [MapDTO] gridLayerGetMapsByGridLayer(gridLayerId)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerGetMapsByGridLayer(gridLayerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**|  | 

### Return type

[**[MapDTO]**](MapDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="gridLayerRender"></a>
# **gridLayerRender**
> Object gridLayerRender(gridLayerId, gridSourceId, param)

Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | 

var gridSourceId = "gridSourceId_example"; // String | 

var param = new CartoVistaserverapiv1.GridSourceRenderParameter(); // GridSourceRenderParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerRender(gridLayerId, gridSourceId, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**|  | 
 **gridSourceId** | **String**|  | 
 **param** | [**GridSourceRenderParameter**](GridSourceRenderParameter.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="gridLayerUpdateGridLayer"></a>
# **gridLayerUpdateGridLayer**
> GridLayer gridLayerUpdateGridLayer(gridLayerId, updateParameters)

Update the properties of an existing grid layer.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.

var updateParameters = new CartoVistaserverapiv1.GridLayerUpdateParameters(); // GridLayerUpdateParameters | The parameters to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerUpdateGridLayer(gridLayerId, updateParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 
 **updateParameters** | [**GridLayerUpdateParameters**](GridLayerUpdateParameters.md)| The parameters to update. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="gridLayerUpdateGridSource"></a>
# **gridLayerUpdateGridSource**
> GridSource gridLayerUpdateGridSource(gridLayerId, gridSourceId, updateParameters)

Update the properties of an existing grid source.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.

var gridSourceId = "gridSourceId_example"; // String | The grid source system identifier.

var updateParameters = new CartoVistaserverapiv1.GridSourceUpdateParameters(); // GridSourceUpdateParameters | The parameters to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerUpdateGridSource(gridLayerId, gridSourceId, updateParameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 
 **gridSourceId** | **String**| The grid source system identifier. | 
 **updateParameters** | [**GridSourceUpdateParameters**](GridSourceUpdateParameters.md)| The parameters to update. | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="gridLayerUpdateGridSourceGeotiff"></a>
# **gridLayerUpdateGridSourceGeotiff**
> GridSource gridLayerUpdateGridSourceGeotiff(gridLayerId, gridSourceId, bandNumber, file)

Update the geoTIFF of an existing grid source.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.GridLayerApi();

var gridLayerId = "gridLayerId_example"; // String | The grid layer system identifier.

var gridSourceId = "gridSourceId_example"; // String | The grid source system identifier.

var bandNumber = 56; // Number | The band number to select. Starts at 1.

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.gridLayerUpdateGridSourceGeotiff(gridLayerId, gridSourceId, bandNumber, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **String**| The grid layer system identifier. | 
 **gridSourceId** | **String**| The grid source system identifier. | 
 **bandNumber** | **Number**| The band number to select. Starts at 1. | 
 **file** | **File**| Upload file | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

