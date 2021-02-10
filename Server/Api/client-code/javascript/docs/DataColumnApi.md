# CartoVistaserverapiv1.DataColumnApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataColumnCreateDataTableDataColumns**](DataColumnApi.md#dataColumnCreateDataTableDataColumns) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createDataColumns | 
[**dataColumnCreateLayerDataColumns**](DataColumnApi.md#dataColumnCreateLayerDataColumns) | **POST** /api/v1/Layer/{layerIdentifier}/createDataColumns | 
[**dataColumnDeleteDataTableDataColumn**](DataColumnApi.md#dataColumnDeleteDataTableDataColumn) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**dataColumnDeleteLayerDataColumn**](DataColumnApi.md#dataColumnDeleteLayerDataColumn) | **DELETE** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**dataColumnGetDataTableDataColumn**](DataColumnApi.md#dataColumnGetDataTableDataColumn) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**dataColumnGetDataTableDataColumns**](DataColumnApi.md#dataColumnGetDataTableDataColumns) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataColumns | 
[**dataColumnGetLayerDataColumn**](DataColumnApi.md#dataColumnGetLayerDataColumn) | **GET** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**dataColumnGetLayerDataColumns**](DataColumnApi.md#dataColumnGetLayerDataColumns) | **GET** /api/v1/Layer/{layerIdentifier}/DataColumns | 
[**dataColumnSetDataTableColumnUniqueIdentifier**](DataColumnApi.md#dataColumnSetDataTableColumnUniqueIdentifier) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier | 
[**dataColumnSetLayerColumnUniqueIdentifier**](DataColumnApi.md#dataColumnSetLayerColumnUniqueIdentifier) | **POST** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier | 
[**dataColumnUpdateDataTableDataColumn**](DataColumnApi.md#dataColumnUpdateDataTableDataColumn) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/update | 
[**dataColumnUpdateLayerDataColumn**](DataColumnApi.md#dataColumnUpdateLayerDataColumn) | **POST** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/update | 


<a name="dataColumnCreateDataTableDataColumns"></a>
# **dataColumnCreateDataTableDataColumns**
> ApiInsertReport dataColumnCreateDataTableDataColumns(dataTableIdentifier, parameters)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var parameters = [new CartoVistaserverapiv1.DataColumnCreateParameter()]; // [DataColumnCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnCreateDataTableDataColumns(dataTableIdentifier, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **parameters** | [**[DataColumnCreateParameter]**](DataColumnCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataColumnCreateLayerDataColumns"></a>
# **dataColumnCreateLayerDataColumns**
> ApiInsertReport dataColumnCreateLayerDataColumns(layerIdentifier, parameters)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var parameters = [new CartoVistaserverapiv1.DataColumnCreateParameter()]; // [DataColumnCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnCreateLayerDataColumns(layerIdentifier, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **parameters** | [**[DataColumnCreateParameter]**](DataColumnCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataColumnDeleteDataTableDataColumn"></a>
# **dataColumnDeleteDataTableDataColumn**
> dataColumnDeleteDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataColumnDeleteDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dataColumnDeleteLayerDataColumn"></a>
# **dataColumnDeleteLayerDataColumn**
> dataColumnDeleteLayerDataColumn(layerIdentifier, dataColumnIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataColumnDeleteLayerDataColumn(layerIdentifier, dataColumnIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dataColumnGetDataTableDataColumn"></a>
# **dataColumnGetDataTableDataColumn**
> DataColumn dataColumnGetDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnGetDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataColumnGetDataTableDataColumns"></a>
# **dataColumnGetDataTableDataColumns**
> [DataColumn] dataColumnGetDataTableDataColumns(dataTableIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnGetDataTableDataColumns(dataTableIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 

### Return type

[**[DataColumn]**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataColumnGetLayerDataColumn"></a>
# **dataColumnGetLayerDataColumn**
> DataColumn dataColumnGetLayerDataColumn(layerIdentifier, dataColumnIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnGetLayerDataColumn(layerIdentifier, dataColumnIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataColumnGetLayerDataColumns"></a>
# **dataColumnGetLayerDataColumns**
> [DataColumn] dataColumnGetLayerDataColumns(layerIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var layerIdentifier = "layerIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnGetLayerDataColumns(layerIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 

### Return type

[**[DataColumn]**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataColumnSetDataTableColumnUniqueIdentifier"></a>
# **dataColumnSetDataTableColumnUniqueIdentifier**
> DataColumn dataColumnSetDataTableColumnUniqueIdentifier(dataTableIdentifier, dataColumnIdentifier, newIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 

var newIdentifier = "newIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnSetDataTableColumnUniqueIdentifier(dataTableIdentifier, dataColumnIdentifier, newIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 
 **newIdentifier** | **String**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataColumnSetLayerColumnUniqueIdentifier"></a>
# **dataColumnSetLayerColumnUniqueIdentifier**
> DataColumn dataColumnSetLayerColumnUniqueIdentifier(layerIdentifier, dataColumnIdentifier, newIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 

var newIdentifier = "newIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnSetLayerColumnUniqueIdentifier(layerIdentifier, dataColumnIdentifier, newIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 
 **newIdentifier** | **String**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataColumnUpdateDataTableDataColumn"></a>
# **dataColumnUpdateDataTableDataColumn**
> DataColumn dataColumnUpdateDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.DataColumnUpdateParameter(); // DataColumnUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnUpdateDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 
 **param** | [**DataColumnUpdateParameter**](DataColumnUpdateParameter.md)|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataColumnUpdateLayerDataColumn"></a>
# **dataColumnUpdateLayerDataColumn**
> DataColumn dataColumnUpdateLayerDataColumn(layerIdentifier, dataColumnIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataColumnApi();

var layerIdentifier = "layerIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.DataColumnUpdateParameter(); // DataColumnUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataColumnUpdateLayerDataColumn(layerIdentifier, dataColumnIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 
 **param** | [**DataColumnUpdateParameter**](DataColumnUpdateParameter.md)|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

