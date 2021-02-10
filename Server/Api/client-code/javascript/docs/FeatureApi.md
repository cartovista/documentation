# CartoVistaserverapiv1.FeatureApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featureCreateFeaturesFromGeoJSON**](FeatureApi.md#featureCreateFeaturesFromGeoJSON) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromGeoJSON | 
[**featureCreateFeaturesFromLongLat**](FeatureApi.md#featureCreateFeaturesFromLongLat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromLongLat | 
[**featureCreateFeaturesFromWKT**](FeatureApi.md#featureCreateFeaturesFromWKT) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromWKT | 
[**featureCreateUpdateFeaturesFromGeoJSON**](FeatureApi.md#featureCreateUpdateFeaturesFromGeoJSON) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromGeoJSON | 
[**featureCreateUpdateFeaturesFromLongLat**](FeatureApi.md#featureCreateUpdateFeaturesFromLongLat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromLongLat | 
[**featureCreateUpdateFeaturesFromWKT**](FeatureApi.md#featureCreateUpdateFeaturesFromWKT) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromWKT | 
[**featureDeleteFeature**](FeatureApi.md#featureDeleteFeature) | **DELETE** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier} | 
[**featureDeleteFeatures**](FeatureApi.md#featureDeleteFeatures) | **DELETE** /api/v1/Layer/{layerIdentifier}/Features | 
[**featureGetFeatureInGeoJSON**](FeatureApi.md#featureGetFeatureInGeoJSON) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/GeoJSON | 
[**featureGetFeatureInLongLat**](FeatureApi.md#featureGetFeatureInLongLat) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/LongLat | 
[**featureGetFeatureInWKT**](FeatureApi.md#featureGetFeatureInWKT) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/WKT | 
[**featureGetFeatures**](FeatureApi.md#featureGetFeatures) | **POST** /api/v1/Layer/{layerIdentifier}/Features | 
[**featureGetFeaturesInGeoJSON**](FeatureApi.md#featureGetFeaturesInGeoJSON) | **POST** /api/v1/Layer/{layerIdentifier}/Features/GeoJSON | 
[**featureGetFeaturesInLongLat**](FeatureApi.md#featureGetFeaturesInLongLat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/LongLat | 
[**featureGetFeaturesInWKT**](FeatureApi.md#featureGetFeaturesInWKT) | **POST** /api/v1/Layer/{layerIdentifier}/Features/WKT | 
[**featureUpdateFromGeoJSON**](FeatureApi.md#featureUpdateFromGeoJSON) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateFromGeoJSON | 
[**featureUpdateFromLongLat**](FeatureApi.md#featureUpdateFromLongLat) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateFromLongLat | 
[**featureUpdateGeometryFromWKT**](FeatureApi.md#featureUpdateGeometryFromWKT) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateGeometryFromWKT | 
[**featureUpdateValues**](FeatureApi.md#featureUpdateValues) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateValues | 


<a name="featureCreateFeaturesFromGeoJSON"></a>
# **featureCreateFeaturesFromGeoJSON**
> ApiInsertReport featureCreateFeaturesFromGeoJSON(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.FeatureGeoJSONCreateParameter()]; // [FeatureGeoJSONCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureCreateFeaturesFromGeoJSON(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**[FeatureGeoJSONCreateParameter]**](FeatureGeoJSONCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureCreateFeaturesFromLongLat"></a>
# **featureCreateFeaturesFromLongLat**
> ApiInsertReport featureCreateFeaturesFromLongLat(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.FeatureLongLatCreateParameter()]; // [FeatureLongLatCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureCreateFeaturesFromLongLat(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**[FeatureLongLatCreateParameter]**](FeatureLongLatCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureCreateFeaturesFromWKT"></a>
# **featureCreateFeaturesFromWKT**
> ApiInsertReport featureCreateFeaturesFromWKT(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.FeatureWKTCreateParameter()]; // [FeatureWKTCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureCreateFeaturesFromWKT(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**[FeatureWKTCreateParameter]**](FeatureWKTCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureCreateUpdateFeaturesFromGeoJSON"></a>
# **featureCreateUpdateFeaturesFromGeoJSON**
> ApiInsertReport featureCreateUpdateFeaturesFromGeoJSON(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.FeatureGeoJSONCreateParameter()]; // [FeatureGeoJSONCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureCreateUpdateFeaturesFromGeoJSON(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**[FeatureGeoJSONCreateParameter]**](FeatureGeoJSONCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureCreateUpdateFeaturesFromLongLat"></a>
# **featureCreateUpdateFeaturesFromLongLat**
> ApiInsertReport featureCreateUpdateFeaturesFromLongLat(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.FeatureLongLatCreateParameter()]; // [FeatureLongLatCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureCreateUpdateFeaturesFromLongLat(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**[FeatureLongLatCreateParameter]**](FeatureLongLatCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureCreateUpdateFeaturesFromWKT"></a>
# **featureCreateUpdateFeaturesFromWKT**
> ApiCreateUpdateReport featureCreateUpdateFeaturesFromWKT(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.FeatureWKTCreateParameter()]; // [FeatureWKTCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureCreateUpdateFeaturesFromWKT(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**[FeatureWKTCreateParameter]**](FeatureWKTCreateParameter.md)|  | 

### Return type

[**ApiCreateUpdateReport**](ApiCreateUpdateReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureDeleteFeature"></a>
# **featureDeleteFeature**
> ApiDeleteReport featureDeleteFeature(layerIdentifier, featureIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureDeleteFeature(layerIdentifier, featureIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 

### Return type

[**ApiDeleteReport**](ApiDeleteReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="featureDeleteFeatures"></a>
# **featureDeleteFeatures**
> ApiDeleteReport featureDeleteFeatures(layerIdentifier, featureIdentifiers)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifiers = [new CartoVistaserverapiv1.[String]()]; // [String] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureDeleteFeatures(layerIdentifier, featureIdentifiers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifiers** | **[String]**|  | 

### Return type

[**ApiDeleteReport**](ApiDeleteReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureGetFeatureInGeoJSON"></a>
# **featureGetFeatureInGeoJSON**
> FeatureGeoJSON featureGetFeatureInGeoJSON(layerIdentifier, featureIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeatureInGeoJSON(layerIdentifier, featureIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 

### Return type

[**FeatureGeoJSON**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="featureGetFeatureInLongLat"></a>
# **featureGetFeatureInLongLat**
> FeatureLongLat featureGetFeatureInLongLat(layerIdentifier, featureIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeatureInLongLat(layerIdentifier, featureIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 

### Return type

[**FeatureLongLat**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="featureGetFeatureInWKT"></a>
# **featureGetFeatureInWKT**
> FeatureWKT featureGetFeatureInWKT(layerIdentifier, featureIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeatureInWKT(layerIdentifier, featureIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 

### Return type

[**FeatureWKT**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="featureGetFeatures"></a>
# **featureGetFeatures**
> [DataRow] featureGetFeatures(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeaturesGetParameters(); // FeaturesGetParameters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeatures(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**[DataRow]**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureGetFeaturesInGeoJSON"></a>
# **featureGetFeaturesInGeoJSON**
> [FeatureGeoJSON] featureGetFeaturesInGeoJSON(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeaturesGetParameters(); // FeaturesGetParameters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeaturesInGeoJSON(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**[FeatureGeoJSON]**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureGetFeaturesInLongLat"></a>
# **featureGetFeaturesInLongLat**
> [FeatureLongLat] featureGetFeaturesInLongLat(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeaturesGetParameters(); // FeaturesGetParameters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeaturesInLongLat(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**[FeatureLongLat]**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureGetFeaturesInWKT"></a>
# **featureGetFeaturesInWKT**
> [FeatureWKT] featureGetFeaturesInWKT(layerIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeaturesGetParameters(); // FeaturesGetParameters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureGetFeaturesInWKT(layerIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**[FeatureWKT]**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureUpdateFromGeoJSON"></a>
# **featureUpdateFromGeoJSON**
> FeatureGeoJSON featureUpdateFromGeoJSON(layerIdentifier, featureIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeatureGeoJSONUpdateParameter(); // FeatureGeoJSONUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureUpdateFromGeoJSON(layerIdentifier, featureIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 
 **param** | [**FeatureGeoJSONUpdateParameter**](FeatureGeoJSONUpdateParameter.md)|  | 

### Return type

[**FeatureGeoJSON**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureUpdateFromLongLat"></a>
# **featureUpdateFromLongLat**
> FeatureLongLat featureUpdateFromLongLat(layerIdentifier, featureIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeatureLongLatUpdateParameter(); // FeatureLongLatUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureUpdateFromLongLat(layerIdentifier, featureIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 
 **param** | [**FeatureLongLatUpdateParameter**](FeatureLongLatUpdateParameter.md)|  | 

### Return type

[**FeatureLongLat**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureUpdateGeometryFromWKT"></a>
# **featureUpdateGeometryFromWKT**
> FeatureWKT featureUpdateGeometryFromWKT(layerIdentifier, featureIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.FeatureWKTUpdateParameter(); // FeatureWKTUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureUpdateGeometryFromWKT(layerIdentifier, featureIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 
 **param** | [**FeatureWKTUpdateParameter**](FeatureWKTUpdateParameter.md)|  | 

### Return type

[**FeatureWKT**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="featureUpdateValues"></a>
# **featureUpdateValues**
> DataRow featureUpdateValues(layerIdentifier, featureIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.FeatureApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var featureIdentifier = "featureIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.DataRowUpdateParameter(); // DataRowUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featureUpdateValues(layerIdentifier, featureIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **featureIdentifier** | **String**|  | 
 **param** | [**DataRowUpdateParameter**](DataRowUpdateParameter.md)|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

