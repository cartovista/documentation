# IO.Swagger.Api.LocationApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**LocationGeocode**](LocationApi.md#locationgeocode) | **GET** /api/v1/Location/geocode/{address} | 
[**LocationGetRouteSummary**](LocationApi.md#locationgetroutesummary) | **GET** /api/v1/Location/route/summary | 
[**LocationIsochrone**](LocationApi.md#locationisochrone) | **POST** /api/v1/Location/isochrone | 
[**LocationReverseGeocode**](LocationApi.md#locationreversegeocode) | **POST** /api/v1/Location/reversegeocode | 


<a name="locationgeocode"></a>
# **LocationGeocode**
> List<GeocodedLocation> LocationGeocode (string address)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LocationGeocodeExample
    {
        public void main()
        {
            var apiInstance = new LocationApi();
            var address = address_example;  // string | 

            try
            {
                List&lt;GeocodedLocation&gt; result = apiInstance.LocationGeocode(address);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LocationApi.LocationGeocode: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **string**|  | 

### Return type

[**List<GeocodedLocation>**](GeocodedLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="locationgetroutesummary"></a>
# **LocationGetRouteSummary**
> RouteSummary LocationGetRouteSummary (double? paramOriginLatitude = null, double? paramOriginLongitude = null, double? paramDestinationLatitude = null, double? paramDestinationLongitude = null)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LocationGetRouteSummaryExample
    {
        public void main()
        {
            var apiInstance = new LocationApi();
            var paramOriginLatitude = 1.2;  // double? |  (optional) 
            var paramOriginLongitude = 1.2;  // double? |  (optional) 
            var paramDestinationLatitude = 1.2;  // double? |  (optional) 
            var paramDestinationLongitude = 1.2;  // double? |  (optional) 

            try
            {
                RouteSummary result = apiInstance.LocationGetRouteSummary(paramOriginLatitude, paramOriginLongitude, paramDestinationLatitude, paramDestinationLongitude);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LocationApi.LocationGetRouteSummary: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paramOriginLatitude** | **double?**|  | [optional] 
 **paramOriginLongitude** | **double?**|  | [optional] 
 **paramDestinationLatitude** | **double?**|  | [optional] 
 **paramDestinationLongitude** | **double?**|  | [optional] 

### Return type

[**RouteSummary**](RouteSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="locationisochrone"></a>
# **LocationIsochrone**
> Isochrone LocationIsochrone (IsochroneParams param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LocationIsochroneExample
    {
        public void main()
        {
            var apiInstance = new LocationApi();
            var param = new IsochroneParams(); // IsochroneParams | 

            try
            {
                Isochrone result = apiInstance.LocationIsochrone(param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LocationApi.LocationIsochrone: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**IsochroneParams**](IsochroneParams.md)|  | 

### Return type

[**Isochrone**](Isochrone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="locationreversegeocode"></a>
# **LocationReverseGeocode**
> List<GeocodedLocation> LocationReverseGeocode (ReverseGeocodeParams param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class LocationReverseGeocodeExample
    {
        public void main()
        {
            var apiInstance = new LocationApi();
            var param = new ReverseGeocodeParams(); // ReverseGeocodeParams | 

            try
            {
                List&lt;GeocodedLocation&gt; result = apiInstance.LocationReverseGeocode(param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LocationApi.LocationReverseGeocode: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**ReverseGeocodeParams**](ReverseGeocodeParams.md)|  | 

### Return type

[**List<GeocodedLocation>**](GeocodedLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

