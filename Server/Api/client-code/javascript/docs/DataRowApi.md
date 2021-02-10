# CartoVistaserverapiv1.DataRowApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataRowCreateDataRows**](DataRowApi.md#dataRowCreateDataRows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createDataRows | 
[**dataRowCreateUpdateDataRows**](DataRowApi.md#dataRowCreateUpdateDataRows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createUpdateDataRows | 
[**dataRowDeleteDatarow**](DataRowApi.md#dataRowDeleteDatarow) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier} | 
[**dataRowDeleteDatarows**](DataRowApi.md#dataRowDeleteDatarows) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataRows | 
[**dataRowGetDataRow**](DataRowApi.md#dataRowGetDataRow) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier} | 
[**dataRowGetDataRows**](DataRowApi.md#dataRowGetDataRows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataRows | 
[**dataRowUpdateDataRow**](DataRowApi.md#dataRowUpdateDataRow) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier}/update | 


<a name="dataRowCreateDataRows"></a>
# **dataRowCreateDataRows**
> ApiInsertReport dataRowCreateDataRows(dataTableIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.DataRowCreateParameter()]; // [DataRowCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataRowCreateDataRows(dataTableIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **param** | [**[DataRowCreateParameter]**](DataRowCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataRowCreateUpdateDataRows"></a>
# **dataRowCreateUpdateDataRows**
> ApiCreateUpdateReport dataRowCreateUpdateDataRows(dataTableIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var param = [new CartoVistaserverapiv1.DataRowCreateParameter()]; // [DataRowCreateParameter] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataRowCreateUpdateDataRows(dataTableIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **param** | [**[DataRowCreateParameter]**](DataRowCreateParameter.md)|  | 

### Return type

[**ApiCreateUpdateReport**](ApiCreateUpdateReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataRowDeleteDatarow"></a>
# **dataRowDeleteDatarow**
> dataRowDeleteDatarow(dataTableIdentifier, dataRowIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataRowIdentifier = "dataRowIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataRowDeleteDatarow(dataTableIdentifier, dataRowIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataRowIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dataRowDeleteDatarows"></a>
# **dataRowDeleteDatarows**
> dataRowDeleteDatarows(dataTableIdentifier, dataRowIdentifiers)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataRowIdentifiers = [new CartoVistaserverapiv1.[String]()]; // [String] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataRowDeleteDatarows(dataTableIdentifier, dataRowIdentifiers, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataRowIdentifiers** | **[String]**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="dataRowGetDataRow"></a>
# **dataRowGetDataRow**
> DataRow dataRowGetDataRow(dataTableIdentifier, dataRowIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataRowIdentifier = "dataRowIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataRowGetDataRow(dataTableIdentifier, dataRowIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataRowIdentifier** | **String**|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataRowGetDataRows"></a>
# **dataRowGetDataRows**
> [DataRow] dataRowGetDataRows(dataTableIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.DataRowsGetParameters(); // DataRowsGetParameters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataRowGetDataRows(dataTableIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **param** | [**DataRowsGetParameters**](DataRowsGetParameters.md)|  | 

### Return type

[**[DataRow]**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataRowUpdateDataRow"></a>
# **dataRowUpdateDataRow**
> DataRow dataRowUpdateDataRow(dataTableIdentifier, dataRowIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataRowApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataRowIdentifier = "dataRowIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.DataRowUpdateParameter(); // DataRowUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataRowUpdateDataRow(dataTableIdentifier, dataRowIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataRowIdentifier** | **String**|  | 
 **param** | [**DataRowUpdateParameter**](DataRowUpdateParameter.md)|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

