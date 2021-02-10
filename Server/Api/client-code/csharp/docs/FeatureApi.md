# IO.Swagger.Api.FeatureApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**FeatureCreateFeaturesFromGeoJSON**](FeatureApi.md#featurecreatefeaturesfromgeojson) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromGeoJSON | 
[**FeatureCreateFeaturesFromLongLat**](FeatureApi.md#featurecreatefeaturesfromlonglat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromLongLat | 
[**FeatureCreateFeaturesFromWKT**](FeatureApi.md#featurecreatefeaturesfromwkt) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromWKT | 
[**FeatureCreateUpdateFeaturesFromGeoJSON**](FeatureApi.md#featurecreateupdatefeaturesfromgeojson) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromGeoJSON | 
[**FeatureCreateUpdateFeaturesFromLongLat**](FeatureApi.md#featurecreateupdatefeaturesfromlonglat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromLongLat | 
[**FeatureCreateUpdateFeaturesFromWKT**](FeatureApi.md#featurecreateupdatefeaturesfromwkt) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromWKT | 
[**FeatureDeleteFeature**](FeatureApi.md#featuredeletefeature) | **DELETE** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier} | 
[**FeatureDeleteFeatures**](FeatureApi.md#featuredeletefeatures) | **DELETE** /api/v1/Layer/{layerIdentifier}/Features | 
[**FeatureGetFeatureInGeoJSON**](FeatureApi.md#featuregetfeatureingeojson) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/GeoJSON | 
[**FeatureGetFeatureInLongLat**](FeatureApi.md#featuregetfeatureinlonglat) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/LongLat | 
[**FeatureGetFeatureInWKT**](FeatureApi.md#featuregetfeatureinwkt) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/WKT | 
[**FeatureGetFeatures**](FeatureApi.md#featuregetfeatures) | **POST** /api/v1/Layer/{layerIdentifier}/Features | 
[**FeatureGetFeaturesInGeoJSON**](FeatureApi.md#featuregetfeaturesingeojson) | **POST** /api/v1/Layer/{layerIdentifier}/Features/GeoJSON | 
[**FeatureGetFeaturesInLongLat**](FeatureApi.md#featuregetfeaturesinlonglat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/LongLat | 
[**FeatureGetFeaturesInWKT**](FeatureApi.md#featuregetfeaturesinwkt) | **POST** /api/v1/Layer/{layerIdentifier}/Features/WKT | 
[**FeatureUpdateFromGeoJSON**](FeatureApi.md#featureupdatefromgeojson) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateFromGeoJSON | 
[**FeatureUpdateFromLongLat**](FeatureApi.md#featureupdatefromlonglat) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateFromLongLat | 
[**FeatureUpdateGeometryFromWKT**](FeatureApi.md#featureupdategeometryfromwkt) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateGeometryFromWKT | 
[**FeatureUpdateValues**](FeatureApi.md#featureupdatevalues) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateValues | 


<a name="featurecreatefeaturesfromgeojson"></a>
# **FeatureCreateFeaturesFromGeoJSON**
> ApiInsertReport FeatureCreateFeaturesFromGeoJSON (string layerIdentifier, List<FeatureGeoJSONCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureCreateFeaturesFromGeoJSONExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new List<FeatureGeoJSONCreateParameter>(); // List<FeatureGeoJSONCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.FeatureCreateFeaturesFromGeoJSON(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureCreateFeaturesFromGeoJSON: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**List&lt;FeatureGeoJSONCreateParameter&gt;**](FeatureGeoJSONCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featurecreatefeaturesfromlonglat"></a>
# **FeatureCreateFeaturesFromLongLat**
> ApiInsertReport FeatureCreateFeaturesFromLongLat (string layerIdentifier, List<FeatureLongLatCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureCreateFeaturesFromLongLatExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new List<FeatureLongLatCreateParameter>(); // List<FeatureLongLatCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.FeatureCreateFeaturesFromLongLat(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureCreateFeaturesFromLongLat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**List&lt;FeatureLongLatCreateParameter&gt;**](FeatureLongLatCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featurecreatefeaturesfromwkt"></a>
# **FeatureCreateFeaturesFromWKT**
> ApiInsertReport FeatureCreateFeaturesFromWKT (string layerIdentifier, List<FeatureWKTCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureCreateFeaturesFromWKTExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new List<FeatureWKTCreateParameter>(); // List<FeatureWKTCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.FeatureCreateFeaturesFromWKT(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureCreateFeaturesFromWKT: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**List&lt;FeatureWKTCreateParameter&gt;**](FeatureWKTCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featurecreateupdatefeaturesfromgeojson"></a>
# **FeatureCreateUpdateFeaturesFromGeoJSON**
> ApiInsertReport FeatureCreateUpdateFeaturesFromGeoJSON (string layerIdentifier, List<FeatureGeoJSONCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureCreateUpdateFeaturesFromGeoJSONExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new List<FeatureGeoJSONCreateParameter>(); // List<FeatureGeoJSONCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.FeatureCreateUpdateFeaturesFromGeoJSON(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureCreateUpdateFeaturesFromGeoJSON: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**List&lt;FeatureGeoJSONCreateParameter&gt;**](FeatureGeoJSONCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featurecreateupdatefeaturesfromlonglat"></a>
# **FeatureCreateUpdateFeaturesFromLongLat**
> ApiInsertReport FeatureCreateUpdateFeaturesFromLongLat (string layerIdentifier, List<FeatureLongLatCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureCreateUpdateFeaturesFromLongLatExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new List<FeatureLongLatCreateParameter>(); // List<FeatureLongLatCreateParameter> | 

            try
            {
                ApiInsertReport result = apiInstance.FeatureCreateUpdateFeaturesFromLongLat(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureCreateUpdateFeaturesFromLongLat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**List&lt;FeatureLongLatCreateParameter&gt;**](FeatureLongLatCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featurecreateupdatefeaturesfromwkt"></a>
# **FeatureCreateUpdateFeaturesFromWKT**
> ApiCreateUpdateReport FeatureCreateUpdateFeaturesFromWKT (string layerIdentifier, List<FeatureWKTCreateParameter> param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureCreateUpdateFeaturesFromWKTExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new List<FeatureWKTCreateParameter>(); // List<FeatureWKTCreateParameter> | 

            try
            {
                ApiCreateUpdateReport result = apiInstance.FeatureCreateUpdateFeaturesFromWKT(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureCreateUpdateFeaturesFromWKT: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**List&lt;FeatureWKTCreateParameter&gt;**](FeatureWKTCreateParameter.md)|  | 

### Return type

[**ApiCreateUpdateReport**](ApiCreateUpdateReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuredeletefeature"></a>
# **FeatureDeleteFeature**
> ApiDeleteReport FeatureDeleteFeature (string layerIdentifier, string featureIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureDeleteFeatureExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 

            try
            {
                ApiDeleteReport result = apiInstance.FeatureDeleteFeature(layerIdentifier, featureIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureDeleteFeature: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 

### Return type

[**ApiDeleteReport**](ApiDeleteReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuredeletefeatures"></a>
# **FeatureDeleteFeatures**
> ApiDeleteReport FeatureDeleteFeatures (string layerIdentifier, List<string> featureIdentifiers)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureDeleteFeaturesExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifiers = ;  // List<string> | 

            try
            {
                ApiDeleteReport result = apiInstance.FeatureDeleteFeatures(layerIdentifier, featureIdentifiers);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureDeleteFeatures: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifiers** | **List&lt;string&gt;**|  | 

### Return type

[**ApiDeleteReport**](ApiDeleteReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeatureingeojson"></a>
# **FeatureGetFeatureInGeoJSON**
> FeatureGeoJSON FeatureGetFeatureInGeoJSON (string layerIdentifier, string featureIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeatureInGeoJSONExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 

            try
            {
                FeatureGeoJSON result = apiInstance.FeatureGetFeatureInGeoJSON(layerIdentifier, featureIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeatureInGeoJSON: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 

### Return type

[**FeatureGeoJSON**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeatureinlonglat"></a>
# **FeatureGetFeatureInLongLat**
> FeatureLongLat FeatureGetFeatureInLongLat (string layerIdentifier, string featureIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeatureInLongLatExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 

            try
            {
                FeatureLongLat result = apiInstance.FeatureGetFeatureInLongLat(layerIdentifier, featureIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeatureInLongLat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 

### Return type

[**FeatureLongLat**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeatureinwkt"></a>
# **FeatureGetFeatureInWKT**
> FeatureWKT FeatureGetFeatureInWKT (string layerIdentifier, string featureIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeatureInWKTExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 

            try
            {
                FeatureWKT result = apiInstance.FeatureGetFeatureInWKT(layerIdentifier, featureIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeatureInWKT: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 

### Return type

[**FeatureWKT**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeatures"></a>
# **FeatureGetFeatures**
> List<DataRow> FeatureGetFeatures (string layerIdentifier, FeaturesGetParameters param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeaturesExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new FeaturesGetParameters(); // FeaturesGetParameters | 

            try
            {
                List&lt;DataRow&gt; result = apiInstance.FeatureGetFeatures(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeatures: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**List<DataRow>**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeaturesingeojson"></a>
# **FeatureGetFeaturesInGeoJSON**
> List<FeatureGeoJSON> FeatureGetFeaturesInGeoJSON (string layerIdentifier, FeaturesGetParameters param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeaturesInGeoJSONExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new FeaturesGetParameters(); // FeaturesGetParameters | 

            try
            {
                List&lt;FeatureGeoJSON&gt; result = apiInstance.FeatureGetFeaturesInGeoJSON(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeaturesInGeoJSON: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**List<FeatureGeoJSON>**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeaturesinlonglat"></a>
# **FeatureGetFeaturesInLongLat**
> List<FeatureLongLat> FeatureGetFeaturesInLongLat (string layerIdentifier, FeaturesGetParameters param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeaturesInLongLatExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new FeaturesGetParameters(); // FeaturesGetParameters | 

            try
            {
                List&lt;FeatureLongLat&gt; result = apiInstance.FeatureGetFeaturesInLongLat(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeaturesInLongLat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**List<FeatureLongLat>**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featuregetfeaturesinwkt"></a>
# **FeatureGetFeaturesInWKT**
> List<FeatureWKT> FeatureGetFeaturesInWKT (string layerIdentifier, FeaturesGetParameters param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureGetFeaturesInWKTExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var param = new FeaturesGetParameters(); // FeaturesGetParameters | 

            try
            {
                List&lt;FeatureWKT&gt; result = apiInstance.FeatureGetFeaturesInWKT(layerIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureGetFeaturesInWKT: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**List<FeatureWKT>**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featureupdatefromgeojson"></a>
# **FeatureUpdateFromGeoJSON**
> FeatureGeoJSON FeatureUpdateFromGeoJSON (string layerIdentifier, string featureIdentifier, FeatureGeoJSONUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureUpdateFromGeoJSONExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 
            var param = new FeatureGeoJSONUpdateParameter(); // FeatureGeoJSONUpdateParameter | 

            try
            {
                FeatureGeoJSON result = apiInstance.FeatureUpdateFromGeoJSON(layerIdentifier, featureIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureUpdateFromGeoJSON: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 
 **param** | [**FeatureGeoJSONUpdateParameter**](FeatureGeoJSONUpdateParameter.md)|  | 

### Return type

[**FeatureGeoJSON**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featureupdatefromlonglat"></a>
# **FeatureUpdateFromLongLat**
> FeatureLongLat FeatureUpdateFromLongLat (string layerIdentifier, string featureIdentifier, FeatureLongLatUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureUpdateFromLongLatExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 
            var param = new FeatureLongLatUpdateParameter(); // FeatureLongLatUpdateParameter | 

            try
            {
                FeatureLongLat result = apiInstance.FeatureUpdateFromLongLat(layerIdentifier, featureIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureUpdateFromLongLat: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 
 **param** | [**FeatureLongLatUpdateParameter**](FeatureLongLatUpdateParameter.md)|  | 

### Return type

[**FeatureLongLat**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featureupdategeometryfromwkt"></a>
# **FeatureUpdateGeometryFromWKT**
> FeatureWKT FeatureUpdateGeometryFromWKT (string layerIdentifier, string featureIdentifier, FeatureWKTUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureUpdateGeometryFromWKTExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 
            var param = new FeatureWKTUpdateParameter(); // FeatureWKTUpdateParameter | 

            try
            {
                FeatureWKT result = apiInstance.FeatureUpdateGeometryFromWKT(layerIdentifier, featureIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureUpdateGeometryFromWKT: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 
 **param** | [**FeatureWKTUpdateParameter**](FeatureWKTUpdateParameter.md)|  | 

### Return type

[**FeatureWKT**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="featureupdatevalues"></a>
# **FeatureUpdateValues**
> DataRow FeatureUpdateValues (string layerIdentifier, string featureIdentifier, DataRowUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class FeatureUpdateValuesExample
    {
        public void main()
        {
            var apiInstance = new FeatureApi();
            var layerIdentifier = layerIdentifier_example;  // string | 
            var featureIdentifier = featureIdentifier_example;  // string | 
            var param = new DataRowUpdateParameter(); // DataRowUpdateParameter | 

            try
            {
                DataRow result = apiInstance.FeatureUpdateValues(layerIdentifier, featureIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling FeatureApi.FeatureUpdateValues: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerIdentifier** | **string**|  | 
 **featureIdentifier** | **string**|  | 
 **param** | [**DataRowUpdateParameter**](DataRowUpdateParameter.md)|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

