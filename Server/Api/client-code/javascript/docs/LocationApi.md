# CartoVistaserverapiv1.LocationApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationGeocode**](LocationApi.md#locationGeocode) | **GET** /api/v1/Location/geocode/{address} | 
[**locationGetRouteSummary**](LocationApi.md#locationGetRouteSummary) | **GET** /api/v1/Location/route/summary | 
[**locationIsochrone**](LocationApi.md#locationIsochrone) | **POST** /api/v1/Location/isochrone | 
[**locationReverseGeocode**](LocationApi.md#locationReverseGeocode) | **POST** /api/v1/Location/reversegeocode | 


<a name="locationGeocode"></a>
# **locationGeocode**
> [GeocodedLocation] locationGeocode(address)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LocationApi();

var address = "address_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locationGeocode(address, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 

### Return type

[**[GeocodedLocation]**](GeocodedLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="locationGetRouteSummary"></a>
# **locationGetRouteSummary**
> RouteSummary locationGetRouteSummary(opts)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LocationApi();

var opts = { 
  'paramOriginLatitude': 1.2, // Number | 
  'paramOriginLongitude': 1.2, // Number | 
  'paramDestinationLatitude': 1.2, // Number | 
  'paramDestinationLongitude': 1.2 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locationGetRouteSummary(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paramOriginLatitude** | **Number**|  | [optional] 
 **paramOriginLongitude** | **Number**|  | [optional] 
 **paramDestinationLatitude** | **Number**|  | [optional] 
 **paramDestinationLongitude** | **Number**|  | [optional] 

### Return type

[**RouteSummary**](RouteSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="locationIsochrone"></a>
# **locationIsochrone**
> Isochrone locationIsochrone(param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LocationApi();

var param = new CartoVistaserverapiv1.IsochroneParams(); // IsochroneParams | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locationIsochrone(param, callback);
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

<a name="locationReverseGeocode"></a>
# **locationReverseGeocode**
> [GeocodedLocation] locationReverseGeocode(param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.LocationApi();

var param = new CartoVistaserverapiv1.ReverseGeocodeParams(); // ReverseGeocodeParams | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.locationReverseGeocode(param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**ReverseGeocodeParams**](ReverseGeocodeParams.md)|  | 

### Return type

[**[GeocodedLocation]**](GeocodedLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

