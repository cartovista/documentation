# IO.Swagger.Api.MapApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MapCreateMap**](MapApi.md#mapcreatemap) | **POST** /api/v1/maps | Create a map based on the provided parameters.
[**MapDeleteMap**](MapApi.md#mapdeletemap) | **DELETE** /api/v1/maps/{mapId} | Delete a map by map id or a friendly identifier.
[**MapGetGridLayersByMap**](MapApi.md#mapgetgridlayersbymap) | **GET** /api/v1/maps/{mapId}/gridLayers | Get the list of grid layers used in a map.
[**MapGetLayersByMap**](MapApi.md#mapgetlayersbymap) | **GET** /api/v1/maps/{mapId}/layers | Get the list of Layers used in a map.
[**MapGetMap**](MapApi.md#mapgetmap) | **GET** /api/v1/maps/{mapId} | Get a map based on the map id or a friendly identifier.
[**MapGetMaps**](MapApi.md#mapgetmaps) | **GET** /api/v1/maps | Get all maps the requesting user has access to.
[**MapUpdateMap**](MapApi.md#mapupdatemap) | **PATCH** /api/v1/maps/{mapId} | Update a map properties based on the given parameters.


<a name="mapcreatemap"></a>
# **MapCreateMap**
> Dictionary MapCreateMap (MapCreateParameter param)

Create a map based on the provided parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapCreateMapExample
    {
        public void main()
        {
            var apiInstance = new MapApi();
            var param = new MapCreateParameter(); // MapCreateParameter | Parameters used to create the map.

            try
            {
                // Create a map based on the provided parameters.
                Dictionary result = apiInstance.MapCreateMap(param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapCreateMap: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**MapCreateParameter**](MapCreateParameter.md)| Parameters used to create the map. | 

### Return type

**Dictionary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mapdeletemap"></a>
# **MapDeleteMap**
> void MapDeleteMap (string mapId)

Delete a map by map id or a friendly identifier.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapDeleteMapExample
    {
        public void main()
        {
            var apiInstance = new MapApi();
            var mapId = mapId_example;  // string | Map id or a friendly identifier.

            try
            {
                // Delete a map by map id or a friendly identifier.
                apiInstance.MapDeleteMap(mapId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapDeleteMap: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **string**| Map id or a friendly identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mapgetgridlayersbymap"></a>
# **MapGetGridLayersByMap**
> List<GridLayer> MapGetGridLayersByMap (string mapId)

Get the list of grid layers used in a map.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapGetGridLayersByMapExample
    {
        public void main()
        {
            var apiInstance = new MapApi();
            var mapId = mapId_example;  // string | Map id or a friendly identifier.

            try
            {
                // Get the list of grid layers used in a map.
                List&lt;GridLayer&gt; result = apiInstance.MapGetGridLayersByMap(mapId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapGetGridLayersByMap: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **string**| Map id or a friendly identifier. | 

### Return type

[**List<GridLayer>**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mapgetlayersbymap"></a>
# **MapGetLayersByMap**
> List<Layer> MapGetLayersByMap (string mapId)

Get the list of Layers used in a map.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapGetLayersByMapExample
    {
        public void main()
        {
            var apiInstance = new MapApi();
            var mapId = mapId_example;  // string | Map id or a friendly identifier.

            try
            {
                // Get the list of Layers used in a map.
                List&lt;Layer&gt; result = apiInstance.MapGetLayersByMap(mapId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapGetLayersByMap: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **string**| Map id or a friendly identifier. | 

### Return type

[**List<Layer>**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mapgetmap"></a>
# **MapGetMap**
> Dictionary MapGetMap (string mapId)

Get a map based on the map id or a friendly identifier.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapGetMapExample
    {
        public void main()
        {
            var apiInstance = new MapApi();
            var mapId = mapId_example;  // string | Map id or a friendly identifier.

            try
            {
                // Get a map based on the map id or a friendly identifier.
                Dictionary result = apiInstance.MapGetMap(mapId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapGetMap: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **string**| Map id or a friendly identifier. | 

### Return type

**Dictionary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mapgetmaps"></a>
# **MapGetMaps**
> List<Dictionary> MapGetMaps ()

Get all maps the requesting user has access to.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapGetMapsExample
    {
        public void main()
        {
            var apiInstance = new MapApi();

            try
            {
                // Get all maps the requesting user has access to.
                List&lt;Dictionary&gt; result = apiInstance.MapGetMaps();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapGetMaps: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<Dictionary>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="mapupdatemap"></a>
# **MapUpdateMap**
> Dictionary MapUpdateMap (string mapId, MapUpdateParameter param)

Update a map properties based on the given parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class MapUpdateMapExample
    {
        public void main()
        {
            var apiInstance = new MapApi();
            var mapId = mapId_example;  // string | Map id or a friendly identifier.
            var param = new MapUpdateParameter(); // MapUpdateParameter | Parameters used to update the map.

            try
            {
                // Update a map properties based on the given parameters.
                Dictionary result = apiInstance.MapUpdateMap(mapId, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling MapApi.MapUpdateMap: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **string**| Map id or a friendly identifier. | 
 **param** | [**MapUpdateParameter**](MapUpdateParameter.md)| Parameters used to update the map. | 

### Return type

**Dictionary**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

