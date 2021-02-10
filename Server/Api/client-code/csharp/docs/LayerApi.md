# IO.Swagger.Api.LayerApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**LayerCreateLayer**](LayerApi.md#layercreatelayer) | **POST** /api/v1/createLayer | 
[**LayerCreateLayerFromZip**](LayerApi.md#layercreatelayerfromzip) | **POST** /api/v1/Layer/createFromZip | 
[**LayerDeleteLayerById**](LayerApi.md#layerdeletelayerbyid) | **DELETE** /api/v1/Layer/{layerIdentifier} | 
[**LayerGetLayerById**](LayerApi.md#layergetlayerbyid) | **GET** /api/v1/Layer/{layerIdentifier} | 
[**LayerGetLayers**](LayerApi.md#layergetlayers) | **GET** /api/v1/Layers | 
[**LayerSetDataColumnUniqueId**](LayerApi.md#layersetdatacolumnuniqueid) | **POST** /api/v1/Layer/{layerIdentifier}/setDataColumnUniqueId | 
[**LayerSetUniqueIdentifier**](LayerApi.md#layersetuniqueidentifier) | **POST** /api/v1/Layer/{layerIdentifier}/setUniqueIdentifier | 
[**LayerUpdateLayer**](LayerApi.md#layerupdatelayer) | **POST** /api/v1/Layer/{layerIdentifier}/update | 
[**LayerUpdateLayerFromZip**](LayerApi.md#layerupdatelayerfromzip) | **POST** /api/v1/Layer/{layerIdentifier}/updateFromZip | 


<a name="layercreatelayer"></a>
# **LayerCreateLayer**
> Layer LayerCreateLayer (LayerCreateParameter parameters)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerCreateLayerExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var parameters = new LayerCreateParameter(); // LayerCreateParameter | 

            try
            {
                Layer result = apiInstance.LayerCreateLayer(parameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerCreateLayer: " + e.Message );
            }
        }
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layercreatelayerfromzip"></a>
# **LayerCreateLayerFromZip**
> Layer LayerCreateLayerFromZip (System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerCreateLayerFromZipExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                Layer result = apiInstance.LayerCreateLayerFromZip(_file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerCreateLayerFromZip: " + e.Message );
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

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layerdeletelayerbyid"></a>
# **LayerDeleteLayerById**
> void LayerDeleteLayerById (string layerIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerDeleteLayerByIdExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var layerIdentifier = layerIdentifier_example;  // string | 

            try
            {
                apiInstance.LayerDeleteLayerById(layerIdentifier);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerDeleteLayerById: " + e.Message );
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layergetlayerbyid"></a>
# **LayerGetLayerById**
> Layer LayerGetLayerById (string layerIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerGetLayerByIdExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var layerIdentifier = layerIdentifier_example;  // string | 

            try
            {
                Layer result = apiInstance.LayerGetLayerById(layerIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerGetLayerById: " + e.Message );
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

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layergetlayers"></a>
# **LayerGetLayers**
> List<Layer> LayerGetLayers ()



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerGetLayersExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();

            try
            {
                List&lt;Layer&gt; result = apiInstance.LayerGetLayers();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerGetLayers: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Layer>**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layersetdatacolumnuniqueid"></a>
# **LayerSetDataColumnUniqueId**
> Layer LayerSetDataColumnUniqueId (string layerIdentifier, string dataColumnIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerSetDataColumnUniqueIdExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var dataColumnIdentifier = dataColumnIdentifier_example;  // string | 

            try
            {
                Layer result = apiInstance.LayerSetDataColumnUniqueId(layerIdentifier, dataColumnIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerSetDataColumnUniqueId: " + e.Message );
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

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layersetuniqueidentifier"></a>
# **LayerSetUniqueIdentifier**
> Layer LayerSetUniqueIdentifier (string layerIdentifier, string newIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerSetUniqueIdentifierExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var newIdentifier = newIdentifier_example;  // string | 

            try
            {
                Layer result = apiInstance.LayerSetUniqueIdentifier(layerIdentifier, newIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerSetUniqueIdentifier: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **newIdentifier** | **string**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layerupdatelayer"></a>
# **LayerUpdateLayer**
> Layer LayerUpdateLayer (string layerIdentifier, LayerUpdateParameter parameters)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerUpdateLayerExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var parameters = new LayerUpdateParameter(); // LayerUpdateParameter | 

            try
            {
                Layer result = apiInstance.LayerUpdateLayer(layerIdentifier, parameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerUpdateLayer: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **parameters** | [**LayerUpdateParameter**](LayerUpdateParameter.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="layerupdatelayerfromzip"></a>
# **LayerUpdateLayerFromZip**
> Layer LayerUpdateLayerFromZip (string layerIdentifier, System.IO.Stream _file)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LayerUpdateLayerFromZipExample
    {
        public void main()
        {
            var apiInstance = new LayerApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                Layer result = apiInstance.LayerUpdateLayerFromZip(layerIdentifier, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LayerApi.LayerUpdateLayerFromZip: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

