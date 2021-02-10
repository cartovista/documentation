# IO.Swagger.Api.DataTableApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DataTableCreateDataTable**](DataTableApi.md#datatablecreatedatatable) | **POST** /api/v1/createDataTable | 
[**DataTableCreateFromCSV**](DataTableApi.md#datatablecreatefromcsv) | **POST** /api/v1/DataTable/createFromCSV | 
[**DataTableCreateFromExcel**](DataTableApi.md#datatablecreatefromexcel) | **POST** /api/v1/DataTable/createFromExcel | 
[**DataTableCreateFromExcelSheetName**](DataTableApi.md#datatablecreatefromexcelsheetname) | **POST** /api/v1/DataTable/createFromExcel/{sheetName} | 
[**DataTableDeleteDataTable**](DataTableApi.md#datatabledeletedatatable) | **DELETE** /api/v1/DataTable/{dataTableIdentifier} | 
[**DataTableGetDataTableByIdentifier**](DataTableApi.md#datatablegetdatatablebyidentifier) | **GET** /api/v1/DataTable/{dataTableIdentifier} | 
[**DataTableGetDataTables**](DataTableApi.md#datatablegetdatatables) | **GET** /api/v1/DataTables | 
[**DataTableSetDataColumnUniqueId**](DataTableApi.md#datatablesetdatacolumnuniqueid) | **POST** /api/v1/DataTable/{dataTableIdentifier}/setDataColumnUniqueId | 
[**DataTableSetUniqueIdentifier**](DataTableApi.md#datatablesetuniqueidentifier) | **POST** /api/v1/DataTable/{dataTableIdentifier}/setUniqueIdentifier | 
[**DataTableUpdateDataTable**](DataTableApi.md#datatableupdatedatatable) | **POST** /api/v1/DataTable/{dataTableIdentifier}/update | 
[**DataTableUpdateFromCSV**](DataTableApi.md#datatableupdatefromcsv) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromCSV | 
[**DataTableUpdateFromExcel**](DataTableApi.md#datatableupdatefromexcel) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromExcel | 
[**DataTableUpdateFromExcelSheetName**](DataTableApi.md#datatableupdatefromexcelsheetname) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromExcel/{sheetName} | 


<a name="datatablecreatedatatable"></a>
# **DataTableCreateDataTable**
> DataTable DataTableCreateDataTable (DataTableCreateParameter parameters)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableCreateDataTableExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var parameters = new DataTableCreateParameter(); // DataTableCreateParameter | 

            try
            {
                DataTable result = apiInstance.DataTableCreateDataTable(parameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableCreateDataTable: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablecreatefromcsv"></a>
# **DataTableCreateFromCSV**
> DataTable DataTableCreateFromCSV (System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableCreateFromCSVExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                DataTable result = apiInstance.DataTableCreateFromCSV(_file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableCreateFromCSV: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablecreatefromexcel"></a>
# **DataTableCreateFromExcel**
> DataTable DataTableCreateFromExcel (System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableCreateFromExcelExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                DataTable result = apiInstance.DataTableCreateFromExcel(_file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableCreateFromExcel: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablecreatefromexcelsheetname"></a>
# **DataTableCreateFromExcelSheetName**
> DataTable DataTableCreateFromExcelSheetName (string sheetName, System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableCreateFromExcelSheetNameExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var sheetName = sheetName_example;  // string | 
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                DataTable result = apiInstance.DataTableCreateFromExcelSheetName(sheetName, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableCreateFromExcelSheetName: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sheetName** | **string**|  | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatabledeletedatatable"></a>
# **DataTableDeleteDataTable**
> void DataTableDeleteDataTable (string dataTableIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableDeleteDataTableExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 

            try
            {
                apiInstance.DataTableDeleteDataTable(dataTableIdentifier);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableDeleteDataTable: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablegetdatatablebyidentifier"></a>
# **DataTableGetDataTableByIdentifier**
> DataTable DataTableGetDataTableByIdentifier (string dataTableIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableGetDataTableByIdentifierExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 

            try
            {
                DataTable result = apiInstance.DataTableGetDataTableByIdentifier(dataTableIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableGetDataTableByIdentifier: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablegetdatatables"></a>
# **DataTableGetDataTables**
> List<DataTable> DataTableGetDataTables ()



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableGetDataTablesExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();

            try
            {
                List&lt;DataTable&gt; result = apiInstance.DataTableGetDataTables();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableGetDataTables: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<DataTable>**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablesetdatacolumnuniqueid"></a>
# **DataTableSetDataColumnUniqueId**
> DataTable DataTableSetDataColumnUniqueId (string dataTableIdentifier, string dataColumnIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableSetDataColumnUniqueIdExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 

            try
            {
                DataTable result = apiInstance.DataTableSetDataColumnUniqueId(dataTableIdentifier, dataColumnIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableSetDataColumnUniqueId: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **dataColumnIdentifier** | **string**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatablesetuniqueidentifier"></a>
# **DataTableSetUniqueIdentifier**
> DataTable DataTableSetUniqueIdentifier (string dataTableIdentifier, string newIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableSetUniqueIdentifierExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var newIdentifier = newIdentifier_example;  // string | 

            try
            {
                DataTable result = apiInstance.DataTableSetUniqueIdentifier(dataTableIdentifier, newIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableSetUniqueIdentifier: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **newIdentifier** | **string**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatableupdatedatatable"></a>
# **DataTableUpdateDataTable**
> DataTable DataTableUpdateDataTable (string dataTableIdentifier, DataTableUpdateParameter parameters)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableUpdateDataTableExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var parameters = new DataTableUpdateParameter(); // DataTableUpdateParameter | 

            try
            {
                DataTable result = apiInstance.DataTableUpdateDataTable(dataTableIdentifier, parameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableUpdateDataTable: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **parameters** | [**DataTableUpdateParameter**](DataTableUpdateParameter.md)|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatableupdatefromcsv"></a>
# **DataTableUpdateFromCSV**
> DataTable DataTableUpdateFromCSV (string dataTableIdentifier, System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableUpdateFromCSVExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                DataTable result = apiInstance.DataTableUpdateFromCSV(dataTableIdentifier, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableUpdateFromCSV: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatableupdatefromexcel"></a>
# **DataTableUpdateFromExcel**
> DataTable DataTableUpdateFromExcel (string dataTableIdentifier, System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableUpdateFromExcelExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                DataTable result = apiInstance.DataTableUpdateFromExcel(dataTableIdentifier, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableUpdateFromExcel: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datatableupdatefromexcelsheetname"></a>
# **DataTableUpdateFromExcelSheetName**
> DataTable DataTableUpdateFromExcelSheetName (string dataTableIdentifier, string sheetName, System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataTableUpdateFromExcelSheetNameExample
    {
        public void main()
        {
            var apiInstance = new DataTableApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var sheetName = sheetName_example;  // string | 
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                DataTable result = apiInstance.DataTableUpdateFromExcelSheetName(dataTableIdentifier, sheetName, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataTableApi.DataTableUpdateFromExcelSheetName: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **sheetName** | **string**|  | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

