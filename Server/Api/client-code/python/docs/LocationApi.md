# swagger_client.LocationApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**location_geocode**](LocationApi.md#location_geocode) | **GET** /api/v1/Location/geocode/{address} | 
[**location_get_route_summary**](LocationApi.md#location_get_route_summary) | **GET** /api/v1/Location/route/summary | 
[**location_isochrone**](LocationApi.md#location_isochrone) | **POST** /api/v1/Location/isochrone | 
[**location_reverse_geocode**](LocationApi.md#location_reverse_geocode) | **POST** /api/v1/Location/reversegeocode | 


# **location_geocode**
> list[GeocodedLocation] location_geocode(address)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LocationApi()
address = 'address_example' # str | 

try:
    api_response = api_instance.location_geocode(address)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LocationApi->location_geocode: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**|  | 

### Return type

[**list[GeocodedLocation]**](GeocodedLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **location_get_route_summary**
> RouteSummary location_get_route_summary(param_origin_latitude=param_origin_latitude, param_origin_longitude=param_origin_longitude, param_destination_latitude=param_destination_latitude, param_destination_longitude=param_destination_longitude)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LocationApi()
param_origin_latitude = 1.2 # float |  (optional)
param_origin_longitude = 1.2 # float |  (optional)
param_destination_latitude = 1.2 # float |  (optional)
param_destination_longitude = 1.2 # float |  (optional)

try:
    api_response = api_instance.location_get_route_summary(param_origin_latitude=param_origin_latitude, param_origin_longitude=param_origin_longitude, param_destination_latitude=param_destination_latitude, param_destination_longitude=param_destination_longitude)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LocationApi->location_get_route_summary: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param_origin_latitude** | **float**|  | [optional] 
 **param_origin_longitude** | **float**|  | [optional] 
 **param_destination_latitude** | **float**|  | [optional] 
 **param_destination_longitude** | **float**|  | [optional] 

### Return type

[**RouteSummary**](RouteSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **location_isochrone**
> Isochrone location_isochrone(param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LocationApi()
param = swagger_client.IsochroneParams() # IsochroneParams | 

try:
    api_response = api_instance.location_isochrone(param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LocationApi->location_isochrone: %s\n" % e)
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

# **location_reverse_geocode**
> list[GeocodedLocation] location_reverse_geocode(param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LocationApi()
param = swagger_client.ReverseGeocodeParams() # ReverseGeocodeParams | 

try:
    api_response = api_instance.location_reverse_geocode(param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LocationApi->location_reverse_geocode: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**ReverseGeocodeParams**](ReverseGeocodeParams.md)|  | 

### Return type

[**list[GeocodedLocation]**](GeocodedLocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

