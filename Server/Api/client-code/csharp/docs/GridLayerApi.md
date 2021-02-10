# IO.Swagger.Api.GridLayerApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GridLayerAddGridSource**](GridLayerApi.md#gridlayeraddgridsource) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSources | Add a grid source to an existing grid layer.
[**GridLayerCreateGridLayer**](GridLayerApi.md#gridlayercreategridlayer) | **POST** /api/v1/GridLayer | Create a grid layer with the specified parameters.
[**GridLayerDeleteGridLayer**](GridLayerApi.md#gridlayerdeletegridlayer) | **DELETE** /api/v1/GridLayer/{gridLayerId} | Delete an existing grid layer.
[**GridLayerDeleteGridSource**](GridLayerApi.md#gridlayerdeletegridsource) | **DELETE** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Delete an existing grid source.
[**GridLayerGetData**](GridLayerApi.md#gridlayergetdata) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/getData | 
[**GridLayerGetGridLayerById**](GridLayerApi.md#gridlayergetgridlayerbyid) | **GET** /api/v1/GridLayer/{gridLayerId} | Get a grid layer by identifier.
[**GridLayerGetGridLayers**](GridLayerApi.md#gridlayergetgridlayers) | **GET** /api/v1/GridLayers | Get the list of all grid layers.
[**GridLayerGetGridSource**](GridLayerApi.md#gridlayergetgridsource) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Get a grid source by identifier.
[**GridLayerGetGridSourcesForGridLayer**](GridLayerApi.md#gridlayergetgridsourcesforgridlayer) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSources | Get all the grid sources associated with the grid layer.
[**GridLayerGetMapsByGridLayer**](GridLayerApi.md#gridlayergetmapsbygridlayer) | **GET** /api/v1/GridLayer/{gridLayerId}/maps | 
[**GridLayerRender**](GridLayerApi.md#gridlayerrender) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/render | Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in &#x60;Styles&#x60; in the parameters.
[**GridLayerUpdateGridLayer**](GridLayerApi.md#gridlayerupdategridlayer) | **PATCH** /api/v1/GridLayer/{gridLayerId} | Update the properties of an existing grid layer.
[**GridLayerUpdateGridSource**](GridLayerApi.md#gridlayerupdategridsource) | **PATCH** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Update the properties of an existing grid source.
[**GridLayerUpdateGridSourceGeotiff**](GridLayerApi.md#gridlayerupdategridsourcegeotiff) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}/updateGeotiff | Update the geoTIFF of an existing grid source.


<a name="gridlayeraddgridsource"></a>
# **GridLayerAddGridSource**
> GridSource GridLayerAddGridSource (string gridLayerId, int? bandNumber, System.IO.Stream _file)

Add a grid source to an existing grid layer.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerAddGridSourceExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.
            var bandNumber = 56;  // int? | The band number to select. Starts at 1.
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                // Add a grid source to an existing grid layer.
                GridSource result = apiInstance.GridLayerAddGridSource(gridLayerId, bandNumber, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerAddGridSource: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 
 **bandNumber** | **int?**| The band number to select. Starts at 1. | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayercreategridlayer"></a>
# **GridLayerCreateGridLayer**
> GridLayer GridLayerCreateGridLayer (GridLayerCreateParameters createParameters)

Create a grid layer with the specified parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerCreateGridLayerExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var createParameters = new GridLayerCreateParameters(); // GridLayerCreateParameters | The parameters used to create the grid layer.

            try
            {
                // Create a grid layer with the specified parameters.
                GridLayer result = apiInstance.GridLayerCreateGridLayer(createParameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerCreateGridLayer: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createParameters** | [**GridLayerCreateParameters**](GridLayerCreateParameters.md)| The parameters used to create the grid layer. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayerdeletegridlayer"></a>
# **GridLayerDeleteGridLayer**
> void GridLayerDeleteGridLayer (string gridLayerId)

Delete an existing grid layer.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerDeleteGridLayerExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.

            try
            {
                // Delete an existing grid layer.
                apiInstance.GridLayerDeleteGridLayer(gridLayerId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerDeleteGridLayer: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayerdeletegridsource"></a>
# **GridLayerDeleteGridSource**
> void GridLayerDeleteGridSource (string gridLayerId, string gridSourceId)

Delete an existing grid source.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerDeleteGridSourceExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.
            var gridSourceId = gridSourceId_example;  // string | The grid source system identifier.

            try
            {
                // Delete an existing grid source.
                apiInstance.GridLayerDeleteGridSource(gridLayerId, gridSourceId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerDeleteGridSource: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 
 **gridSourceId** | **string**| The grid source system identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayergetdata"></a>
# **GridLayerGetData**
> Object GridLayerGetData (string gridLayerId, string gridSourceId)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerGetDataExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | 
            var gridSourceId = gridSourceId_example;  // string | 

            try
            {
                Object result = apiInstance.GridLayerGetData(gridLayerId, gridSourceId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerGetData: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**|  | 
 **gridSourceId** | **string**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayergetgridlayerbyid"></a>
# **GridLayerGetGridLayerById**
> GridLayer GridLayerGetGridLayerById (string gridLayerId)

Get a grid layer by identifier.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerGetGridLayerByIdExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.

            try
            {
                // Get a grid layer by identifier.
                GridLayer result = apiInstance.GridLayerGetGridLayerById(gridLayerId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerGetGridLayerById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayergetgridlayers"></a>
# **GridLayerGetGridLayers**
> List<GridLayer> GridLayerGetGridLayers ()

Get the list of all grid layers.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerGetGridLayersExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();

            try
            {
                // Get the list of all grid layers.
                List&lt;GridLayer&gt; result = apiInstance.GridLayerGetGridLayers();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerGetGridLayers: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<GridLayer>**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayergetgridsource"></a>
# **GridLayerGetGridSource**
> GridSource GridLayerGetGridSource (string gridLayerId, string gridSourceId)

Get a grid source by identifier.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerGetGridSourceExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.
            var gridSourceId = gridSourceId_example;  // string | The grid source system identifier.

            try
            {
                // Get a grid source by identifier.
                GridSource result = apiInstance.GridLayerGetGridSource(gridLayerId, gridSourceId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerGetGridSource: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 
 **gridSourceId** | **string**| The grid source system identifier. | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayergetgridsourcesforgridlayer"></a>
# **GridLayerGetGridSourcesForGridLayer**
> List<GridSource> GridLayerGetGridSourcesForGridLayer (string gridLayerId)

Get all the grid sources associated with the grid layer.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerGetGridSourcesForGridLayerExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.

            try
            {
                // Get all the grid sources associated with the grid layer.
                List&lt;GridSource&gt; result = apiInstance.GridLayerGetGridSourcesForGridLayer(gridLayerId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerGetGridSourcesForGridLayer: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 

### Return type

[**List<GridSource>**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayergetmapsbygridlayer"></a>
# **GridLayerGetMapsByGridLayer**
> List<MapDTO> GridLayerGetMapsByGridLayer (string gridLayerId)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerGetMapsByGridLayerExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | 

            try
            {
                List&lt;MapDTO&gt; result = apiInstance.GridLayerGetMapsByGridLayer(gridLayerId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerGetMapsByGridLayer: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**|  | 

### Return type

[**List<MapDTO>**](MapDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayerrender"></a>
# **GridLayerRender**
> Object GridLayerRender (string gridLayerId, string gridSourceId, GridSourceRenderParameter param)

Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerRenderExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | 
            var gridSourceId = gridSourceId_example;  // string | 
            var param = new GridSourceRenderParameter(); // GridSourceRenderParameter | 

            try
            {
                // Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.
                Object result = apiInstance.GridLayerRender(gridLayerId, gridSourceId, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerRender: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**|  | 
 **gridSourceId** | **string**|  | 
 **param** | [**GridSourceRenderParameter**](GridSourceRenderParameter.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayerupdategridlayer"></a>
# **GridLayerUpdateGridLayer**
> GridLayer GridLayerUpdateGridLayer (string gridLayerId, GridLayerUpdateParameters updateParameters)

Update the properties of an existing grid layer.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerUpdateGridLayerExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.
            var updateParameters = new GridLayerUpdateParameters(); // GridLayerUpdateParameters | The parameters to update.

            try
            {
                // Update the properties of an existing grid layer.
                GridLayer result = apiInstance.GridLayerUpdateGridLayer(gridLayerId, updateParameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerUpdateGridLayer: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 
 **updateParameters** | [**GridLayerUpdateParameters**](GridLayerUpdateParameters.md)| The parameters to update. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayerupdategridsource"></a>
# **GridLayerUpdateGridSource**
> GridSource GridLayerUpdateGridSource (string gridLayerId, string gridSourceId, GridSourceUpdateParameters updateParameters)

Update the properties of an existing grid source.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerUpdateGridSourceExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.
            var gridSourceId = gridSourceId_example;  // string | The grid source system identifier.
            var updateParameters = new GridSourceUpdateParameters(); // GridSourceUpdateParameters | The parameters to update.

            try
            {
                // Update the properties of an existing grid source.
                GridSource result = apiInstance.GridLayerUpdateGridSource(gridLayerId, gridSourceId, updateParameters);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerUpdateGridSource: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 
 **gridSourceId** | **string**| The grid source system identifier. | 
 **updateParameters** | [**GridSourceUpdateParameters**](GridSourceUpdateParameters.md)| The parameters to update. | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="gridlayerupdategridsourcegeotiff"></a>
# **GridLayerUpdateGridSourceGeotiff**
> GridSource GridLayerUpdateGridSourceGeotiff (string gridLayerId, string gridSourceId, int? bandNumber, System.IO.Stream _file)

Update the geoTIFF of an existing grid source.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GridLayerUpdateGridSourceGeotiffExample
    {
        public void main()
        {
            var apiInstance = new GridLayerApi();
            var gridLayerId = gridLayerId_example;  // string | The grid layer system identifier.
            var gridSourceId = gridSourceId_example;  // string | The grid source system identifier.
            var bandNumber = 56;  // int? | The band number to select. Starts at 1.
            var _file = new System.IO.Stream(); // System.IO.Stream | Upload file

            try
            {
                // Update the geoTIFF of an existing grid source.
                GridSource result = apiInstance.GridLayerUpdateGridSourceGeotiff(gridLayerId, gridSourceId, bandNumber, _file);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GridLayerApi.GridLayerUpdateGridSourceGeotiff: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gridLayerId** | **string**| The grid layer system identifier. | 
 **gridSourceId** | **string**| The grid source system identifier. | 
 **bandNumber** | **int?**| The band number to select. Starts at 1. | 
 **_file** | **System.IO.Stream**| Upload file | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

