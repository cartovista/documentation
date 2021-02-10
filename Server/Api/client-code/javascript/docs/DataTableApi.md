# CartoVistaserverapiv1.DataTableApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataTableCreateDataTable**](DataTableApi.md#dataTableCreateDataTable) | **POST** /api/v1/createDataTable | 
[**dataTableCreateFromCSV**](DataTableApi.md#dataTableCreateFromCSV) | **POST** /api/v1/DataTable/createFromCSV | 
[**dataTableCreateFromExcel**](DataTableApi.md#dataTableCreateFromExcel) | **POST** /api/v1/DataTable/createFromExcel | 
[**dataTableCreateFromExcelSheetName**](DataTableApi.md#dataTableCreateFromExcelSheetName) | **POST** /api/v1/DataTable/createFromExcel/{sheetName} | 
[**dataTableDeleteDataTable**](DataTableApi.md#dataTableDeleteDataTable) | **DELETE** /api/v1/DataTable/{dataTableIdentifier} | 
[**dataTableGetDataTableByIdentifier**](DataTableApi.md#dataTableGetDataTableByIdentifier) | **GET** /api/v1/DataTable/{dataTableIdentifier} | 
[**dataTableGetDataTables**](DataTableApi.md#dataTableGetDataTables) | **GET** /api/v1/DataTables | 
[**dataTableSetDataColumnUniqueId**](DataTableApi.md#dataTableSetDataColumnUniqueId) | **POST** /api/v1/DataTable/{dataTableIdentifier}/setDataColumnUniqueId | 
[**dataTableSetUniqueIdentifier**](DataTableApi.md#dataTableSetUniqueIdentifier) | **POST** /api/v1/DataTable/{dataTableIdentifier}/setUniqueIdentifier | 
[**dataTableUpdateDataTable**](DataTableApi.md#dataTableUpdateDataTable) | **POST** /api/v1/DataTable/{dataTableIdentifier}/update | 
[**dataTableUpdateFromCSV**](DataTableApi.md#dataTableUpdateFromCSV) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromCSV | 
[**dataTableUpdateFromExcel**](DataTableApi.md#dataTableUpdateFromExcel) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromExcel | 
[**dataTableUpdateFromExcelSheetName**](DataTableApi.md#dataTableUpdateFromExcelSheetName) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromExcel/{sheetName} | 


<a name="dataTableCreateDataTable"></a>
# **dataTableCreateDataTable**
> DataTable dataTableCreateDataTable(parameters)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var parameters = new CartoVistaserverapiv1.DataTableCreateParameter(); // DataTableCreateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableCreateDataTable(parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**DataTableCreateParameter**](DataTableCreateParameter.md)|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataTableCreateFromCSV"></a>
# **dataTableCreateFromCSV**
> DataTable dataTableCreateFromCSV(file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableCreateFromCSV(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="dataTableCreateFromExcel"></a>
# **dataTableCreateFromExcel**
> DataTable dataTableCreateFromExcel(file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableCreateFromExcel(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="dataTableCreateFromExcelSheetName"></a>
# **dataTableCreateFromExcelSheetName**
> DataTable dataTableCreateFromExcelSheetName(sheetName, file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var sheetName = "sheetName_example"; // String | 

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableCreateFromExcelSheetName(sheetName, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sheetName** | **String**|  | 
 **file** | **File**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="dataTableDeleteDataTable"></a>
# **dataTableDeleteDataTable**
> dataTableDeleteDataTable(dataTableIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dataTableDeleteDataTable(dataTableIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="dataTableGetDataTableByIdentifier"></a>
# **dataTableGetDataTableByIdentifier**
> DataTable dataTableGetDataTableByIdentifier(dataTableIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableGetDataTableByIdentifier(dataTableIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataTableGetDataTables"></a>
# **dataTableGetDataTables**
> [DataTable] dataTableGetDataTables()



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableGetDataTables(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DataTable]**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataTableSetDataColumnUniqueId"></a>
# **dataTableSetDataColumnUniqueId**
> DataTable dataTableSetDataColumnUniqueId(dataTableIdentifier, dataColumnIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var dataColumnIdentifier = "dataColumnIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableSetDataColumnUniqueId(dataTableIdentifier, dataColumnIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **dataColumnIdentifier** | **String**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataTableSetUniqueIdentifier"></a>
# **dataTableSetUniqueIdentifier**
> DataTable dataTableSetUniqueIdentifier(dataTableIdentifier, newIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var newIdentifier = "newIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableSetUniqueIdentifier(dataTableIdentifier, newIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **newIdentifier** | **String**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="dataTableUpdateDataTable"></a>
# **dataTableUpdateDataTable**
> DataTable dataTableUpdateDataTable(dataTableIdentifier, parameters)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var parameters = new CartoVistaserverapiv1.DataTableUpdateParameter(); // DataTableUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableUpdateDataTable(dataTableIdentifier, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **parameters** | [**DataTableUpdateParameter**](DataTableUpdateParameter.md)|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="dataTableUpdateFromCSV"></a>
# **dataTableUpdateFromCSV**
> DataTable dataTableUpdateFromCSV(dataTableIdentifier, file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableUpdateFromCSV(dataTableIdentifier, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **file** | **File**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="dataTableUpdateFromExcel"></a>
# **dataTableUpdateFromExcel**
> DataTable dataTableUpdateFromExcel(dataTableIdentifier, file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableUpdateFromExcel(dataTableIdentifier, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **file** | **File**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

<a name="dataTableUpdateFromExcelSheetName"></a>
# **dataTableUpdateFromExcelSheetName**
> DataTable dataTableUpdateFromExcelSheetName(dataTableIdentifier, sheetName, file)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.DataTableApi();

var dataTableIdentifier = "dataTableIdentifier_example"; // String | 

var sheetName = "sheetName_example"; // String | 

var file = "/path/to/file.txt"; // File | Upload file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dataTableUpdateFromExcelSheetName(dataTableIdentifier, sheetName, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **String**|  | 
 **sheetName** | **String**|  | 
 **file** | **File**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

