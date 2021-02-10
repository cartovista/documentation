# CartoVistaserverapiv1.LayerApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**layerCreateLayer**](LayerApi.md#layerCreateLayer) | **POST** /api/v1/createLayer | 
[**layerCreateLayerFromZip**](LayerApi.md#layerCreateLayerFromZip) | **POST** /api/v1/Layer/createFromZip | 
[**layerDeleteLayerById**](LayerApi.md#layerDeleteLayerById) | **DELETE** /api/v1/Layer/{layerIdentifier} | 
[**layerGetLayerById**](LayerApi.md#layerGetLayerById) | **GET** /api/v1/Layer/{layerIdentifier} | 
[**layerGetLayers**](LayerApi.md#layerGetLayers) | **GET** /api/v1/Layers | 
[**layerSetDataColumnUniqueId**](LayerApi.md#layerSetDataColumnUniqueId) | **POST** /api/v1/Layer/{layerIdentifier}/setDataColumnUniqueId | 
[**layerSetUniqueIdentifier**](LayerApi.md#layerSetUniqueIdentifier) | **POST** /api/v1/Layer/{layerIdentifier}/setUniqueIdentifier | 
[**layerUpdateLayer**](LayerApi.md#layerUpdateLayer) | **POST** /api/v1/Layer/{layerIdentifier}/update | 
[**layerUpdateLayerFromZip**](LayerApi.md#layerUpdateLayerFromZip) | **POST** /api/v1/Layer/{layerIdentifier}/updateFromZip | 


<a name="layerCreateLayer"></a>
# **layerCreateLayer**
> Layer layerCreateLayer(parameters)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var parameters = new CartoVistaserverapiv1.LayerCreateParameter(); // LayerCreateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerCreateLayer(parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**LayerCreateParameter**](LayerCreateParameter.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="layerCreateLayerFromZip"></a>
# **layerCreateLayerFromZip**
> Layer layerCreateLayerFromZip(file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerCreateLayerFromZip(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Upload file | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="layerDeleteLayerById"></a>
# **layerDeleteLayerById**
> layerDeleteLayerById(layerIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var layerIdentifier = "layerIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.layerDeleteLayerById(layerIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="layerGetLayerById"></a>
# **layerGetLayerById**
> Layer layerGetLayerById(layerIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var layerIdentifier = "layerIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerGetLayerById(layerIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="layerGetLayers"></a>
# **layerGetLayers**
> [Layer] layerGetLayers()



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerGetLayers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Layer]**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="layerSetDataColumnUniqueId"></a>
# **layerSetDataColumnUniqueId**
> Layer layerSetDataColumnUniqueId(layerIdentifier, dataColumnIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerSetDataColumnUniqueId(layerIdentifier, dataColumnIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="layerSetUniqueIdentifier"></a>
# **layerSetUniqueIdentifier**
> Layer layerSetUniqueIdentifier(layerIdentifier, newIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var newIdentifier = "newIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerSetUniqueIdentifier(layerIdentifier, newIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **newIdentifier** | **String**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="layerUpdateLayer"></a>
# **layerUpdateLayer**
> Layer layerUpdateLayer(layerIdentifier, parameters)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var parameters = new CartoVistaserverapiv1.LayerUpdateParameter(); // LayerUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerUpdateLayer(layerIdentifier, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **parameters** | [**LayerUpdateParameter**](LayerUpdateParameter.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="layerUpdateLayerFromZip"></a>
# **layerUpdateLayerFromZip**
> Layer layerUpdateLayerFromZip(layerIdentifier, file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LayerApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.layerUpdateLayerFromZip(layerIdentifier, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **file** | **File**| Upload file | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

