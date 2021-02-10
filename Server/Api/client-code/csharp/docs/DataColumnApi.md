# IO.Swagger.Api.DataColumnApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DataColumnCreateDataTableDataColumns**](DataColumnApi.md#datacolumncreatedatatabledatacolumns) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createDataColumns | 
[**DataColumnCreateLayerDataColumns**](DataColumnApi.md#datacolumncreatelayerdatacolumns) | **POST** /api/v1/Layer/{layerIdentifier}/createDataColumns | 
[**DataColumnDeleteDataTableDataColumn**](DataColumnApi.md#datacolumndeletedatatabledatacolumn) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**DataColumnDeleteLayerDataColumn**](DataColumnApi.md#datacolumndeletelayerdatacolumn) | **DELETE** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**DataColumnGetDataTableDataColumn**](DataColumnApi.md#datacolumngetdatatabledatacolumn) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**DataColumnGetDataTableDataColumns**](DataColumnApi.md#datacolumngetdatatabledatacolumns) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataColumns | 
[**DataColumnGetLayerDataColumn**](DataColumnApi.md#datacolumngetlayerdatacolumn) | **GET** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**DataColumnGetLayerDataColumns**](DataColumnApi.md#datacolumngetlayerdatacolumns) | **GET** /api/v1/Layer/{layerIdentifier}/DataColumns | 
[**DataColumnSetDataTableColumnUniqueIdentifier**](DataColumnApi.md#datacolumnsetdatatablecolumnuniqueidentifier) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier | 
[**DataColumnSetLayerColumnUniqueIdentifier**](DataColumnApi.md#datacolumnsetlayercolumnuniqueidentifier) | **POST** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier | 
[**DataColumnUpdateDataTableDataColumn**](DataColumnApi.md#datacolumnupdatedatatabledatacolumn) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/update | 
[**DataColumnUpdateLayerDataColumn**](DataColumnApi.md#datacolumnupdatelayerdatacolumn) | **POST** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/update | 


<a name="datacolumncreatedatatabledatacolumns"></a>
# **DataColumnCreateDataTableDataColumns**
> ApiInsertReport DataColumnCreateDataTableDataColumns (string dataTableIdentifier, List<DataColumnCreateParameter> parameters)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnCreateDataTableDataColumnsExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var parameters = new List<DataColumnCreateParameter>(); // List<DataColumnCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.DataColumnCreateDataTableDataColumns(dataTableIdentifier, parameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnCreateDataTableDataColumns: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **parameters** | [**List&lt;DataColumnCreateParameter&gt;**](DataColumnCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumncreatelayerdatacolumns"></a>
# **DataColumnCreateLayerDataColumns**
> ApiInsertReport DataColumnCreateLayerDataColumns (string layerIdentifier, List<DataColumnCreateParameter> parameters)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnCreateLayerDataColumnsExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var parameters = new List<DataColumnCreateParameter>(); // List<DataColumnCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.DataColumnCreateLayerDataColumns(layerIdentifier, parameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnCreateLayerDataColumns: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **parameters** | [**List&lt;DataColumnCreateParameter&gt;**](DataColumnCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumndeletedatatabledatacolumn"></a>
# **DataColumnDeleteDataTableDataColumn**
> void DataColumnDeleteDataTableDataColumn (string dataTableIdentifier, string dataColumnIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnDeleteDataTableDataColumnExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 

            try
            {
                apiInstance.DataColumnDeleteDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnDeleteDataTableDataColumn: " + e.Message );
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumndeletelayerdatacolumn"></a>
# **DataColumnDeleteLayerDataColumn**
> void DataColumnDeleteLayerDataColumn (string layerIdentifier, string dataColumnIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnDeleteLayerDataColumnExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 

            try
            {
                apiInstance.DataColumnDeleteLayerDataColumn(layerIdentifier, dataColumnIdentifier);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnDeleteLayerDataColumn: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **dataColumnIdentifier** | **string**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumngetdatatabledatacolumn"></a>
# **DataColumnGetDataTableDataColumn**
> DataColumn DataColumnGetDataTableDataColumn (string dataTableIdentifier, string dataColumnIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnGetDataTableDataColumnExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 

            try
            {
                DataColumn result = apiInstance.DataColumnGetDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnGetDataTableDataColumn: " + e.Message );
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

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumngetdatatabledatacolumns"></a>
# **DataColumnGetDataTableDataColumns**
> List<DataColumn> DataColumnGetDataTableDataColumns (string dataTableIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnGetDataTableDataColumnsExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 

            try
            {
                List&lt;DataColumn&gt; result = apiInstance.DataColumnGetDataTableDataColumns(dataTableIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnGetDataTableDataColumns: " + e.Message );
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

[**List<DataColumn>**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumngetlayerdatacolumn"></a>
# **DataColumnGetLayerDataColumn**
> DataColumn DataColumnGetLayerDataColumn (string layerIdentifier, string dataColumnIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnGetLayerDataColumnExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 

            try
            {
                DataColumn result = apiInstance.DataColumnGetLayerDataColumn(layerIdentifier, dataColumnIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnGetLayerDataColumn: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **dataColumnIdentifier** | **string**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumngetlayerdatacolumns"></a>
# **DataColumnGetLayerDataColumns**
> List<DataColumn> DataColumnGetLayerDataColumns (string layerIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnGetLayerDataColumnsExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var layerIdentifier = layerIdentifier_example;  // string | 

            try
            {
                List&lt;DataColumn&gt; result = apiInstance.DataColumnGetLayerDataColumns(layerIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnGetLayerDataColumns: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 

### Return type

[**List<DataColumn>**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumnsetdatatablecolumnuniqueidentifier"></a>
# **DataColumnSetDataTableColumnUniqueIdentifier**
> DataColumn DataColumnSetDataTableColumnUniqueIdentifier (string dataTableIdentifier, string dataColumnIdentifier, string newIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnSetDataTableColumnUniqueIdentifierExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 
            var newIdentifier = newIdentifier_example;  // string | 

            try
            {
                DataColumn result = apiInstance.DataColumnSetDataTableColumnUniqueIdentifier(dataTableIdentifier, dataColumnIdentifier, newIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnSetDataTableColumnUniqueIdentifier: " + e.Message );
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
 **newIdentifier** | **string**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumnsetlayercolumnuniqueidentifier"></a>
# **DataColumnSetLayerColumnUniqueIdentifier**
> DataColumn DataColumnSetLayerColumnUniqueIdentifier (string layerIdentifier, string dataColumnIdentifier, string newIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnSetLayerColumnUniqueIdentifierExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 
            var newIdentifier = newIdentifier_example;  // string | 

            try
            {
                DataColumn result = apiInstance.DataColumnSetLayerColumnUniqueIdentifier(layerIdentifier, dataColumnIdentifier, newIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnSetLayerColumnUniqueIdentifier: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **dataColumnIdentifier** | **string**|  | 
 **newIdentifier** | **string**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumnupdatedatatabledatacolumn"></a>
# **DataColumnUpdateDataTableDataColumn**
> DataColumn DataColumnUpdateDataTableDataColumn (string dataTableIdentifier, string dataColumnIdentifier, DataColumnUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnUpdateDataTableDataColumnExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 
            var param = new DataColumnUpdateParameter(); // DataColumnUpdateParameter | 

            try
            {
                DataColumn result = apiInstance.DataColumnUpdateDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnUpdateDataTableDataColumn: " + e.Message );
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
 **param** | [**DataColumnUpdateParameter**](DataColumnUpdateParameter.md)|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datacolumnupdatelayerdatacolumn"></a>
# **DataColumnUpdateLayerDataColumn**
> DataColumn DataColumnUpdateLayerDataColumn (string layerIdentifier, string dataColumnIdentifier, DataColumnUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataColumnUpdateLayerDataColumnExample
    {
        public void main()
        {
            var apiInstance = new DataColumnApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 
            var param = new DataColumnUpdateParameter(); // DataColumnUpdateParameter | 

            try
            {
                DataColumn result = apiInstance.DataColumnUpdateLayerDataColumn(layerIdentifier, dataColumnIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataColumnApi.DataColumnUpdateLayerDataColumn: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **dataColumnIdentifier** | **string**|  | 
 **param** | [**DataColumnUpdateParameter**](DataColumnUpdateParameter.md)|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

