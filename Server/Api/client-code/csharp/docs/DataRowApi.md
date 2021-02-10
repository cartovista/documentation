# IO.Swagger.Api.DataRowApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DataRowCreateDataRows**](DataRowApi.md#datarowcreatedatarows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createDataRows | 
[**DataRowCreateUpdateDataRows**](DataRowApi.md#datarowcreateupdatedatarows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createUpdateDataRows | 
[**DataRowDeleteDatarow**](DataRowApi.md#datarowdeletedatarow) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier} | 
[**DataRowDeleteDatarows**](DataRowApi.md#datarowdeletedatarows) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataRows | 
[**DataRowGetDataRow**](DataRowApi.md#datarowgetdatarow) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier} | 
[**DataRowGetDataRows**](DataRowApi.md#datarowgetdatarows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataRows | 
[**DataRowUpdateDataRow**](DataRowApi.md#datarowupdatedatarow) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier}/update | 


<a name="datarowcreatedatarows"></a>
# **DataRowCreateDataRows**
> ApiInsertReport DataRowCreateDataRows (string dataTableIdentifier, List<DataRowCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowCreateDataRowsExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var param = new List<DataRowCreateParameter>(); // List<DataRowCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.DataRowCreateDataRows(dataTableIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowCreateDataRows: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **param** | [**List&lt;DataRowCreateParameter&gt;**](DataRowCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datarowcreateupdatedatarows"></a>
# **DataRowCreateUpdateDataRows**
> ApiCreateUpdateReport DataRowCreateUpdateDataRows (string dataTableIdentifier, List<DataRowCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowCreateUpdateDataRowsExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var param = new List<DataRowCreateParameter>(); // List<DataRowCreateParameter> | 

            try
            {
                ApiCreateUpdateReport result = apiInstance.DataRowCreateUpdateDataRows(dataTableIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowCreateUpdateDataRows: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **param** | [**List&lt;DataRowCreateParameter&gt;**](DataRowCreateParameter.md)|  | 

### Return type

[**ApiCreateUpdateReport**](ApiCreateUpdateReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datarowdeletedatarow"></a>
# **DataRowDeleteDatarow**
> void DataRowDeleteDatarow (string dataTableIdentifier, string dataRowIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowDeleteDatarowExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataRowIdentifier = dataRowIdentifier_example;  // string | 

            try
            {
                apiInstance.DataRowDeleteDatarow(dataTableIdentifier, dataRowIdentifier);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowDeleteDatarow: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **dataRowIdentifier** | **string**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datarowdeletedatarows"></a>
# **DataRowDeleteDatarows**
> void DataRowDeleteDatarows (string dataTableIdentifier, List<string> dataRowIdentifiers)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowDeleteDatarowsExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataRowIdentifiers = ;  // List<string> | 

            try
            {
                apiInstance.DataRowDeleteDatarows(dataTableIdentifier, dataRowIdentifiers);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowDeleteDatarows: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **dataRowIdentifiers** | **List&lt;string&gt;**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datarowgetdatarow"></a>
# **DataRowGetDataRow**
> DataRow DataRowGetDataRow (string dataTableIdentifier, string dataRowIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowGetDataRowExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataRowIdentifier = dataRowIdentifier_example;  // string | 

            try
            {
                DataRow result = apiInstance.DataRowGetDataRow(dataTableIdentifier, dataRowIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowGetDataRow: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **dataRowIdentifier** | **string**|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datarowgetdatarows"></a>
# **DataRowGetDataRows**
> List<DataRow> DataRowGetDataRows (string dataTableIdentifier, DataRowsGetParameters param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowGetDataRowsExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var param = new DataRowsGetParameters(); // DataRowsGetParameters | 

            try
            {
                List&lt;DataRow&gt; result = apiInstance.DataRowGetDataRows(dataTableIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowGetDataRows: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **param** | [**DataRowsGetParameters**](DataRowsGetParameters.md)|  | 

### Return type

[**List<DataRow>**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="datarowupdatedatarow"></a>
# **DataRowUpdateDataRow**
> DataRow DataRowUpdateDataRow (string dataTableIdentifier, string dataRowIdentifier, DataRowUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DataRowUpdateDataRowExample
    {
        public void main()
        {
            var apiInstance = new DataRowApi();
            var dataTableIdentifier = dataTableIdentifier_example;  // string | 
            var dataRowIdentifier = dataRowIdentifier_example;  // string | 
            var param = new DataRowUpdateParameter(); // DataRowUpdateParameter | 

            try
            {
                DataRow result = apiInstance.DataRowUpdateDataRow(dataTableIdentifier, dataRowIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DataRowApi.DataRowUpdateDataRow: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataTableIdentifier** | **string**|  | 
 **dataRowIdentifier** | **string**|  | 
 **param** | [**DataRowUpdateParameter**](DataRowUpdateParameter.md)|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

