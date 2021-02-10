# swagger_client.MapApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**map_create_map**](MapApi.md#map_create_map) | **POST** /api/v1/maps | Create a map based on the provided parameters.
[**map_delete_map**](MapApi.md#map_delete_map) | **DELETE** /api/v1/maps/{mapId} | Delete a map by map id or a friendly identifier.
[**map_get_grid_layers_by_map**](MapApi.md#map_get_grid_layers_by_map) | **GET** /api/v1/maps/{mapId}/gridLayers | Get the list of grid layers used in a map.
[**map_get_layers_by_map**](MapApi.md#map_get_layers_by_map) | **GET** /api/v1/maps/{mapId}/layers | Get the list of Layers used in a map.
[**map_get_map**](MapApi.md#map_get_map) | **GET** /api/v1/maps/{mapId} | Get a map based on the map id or a friendly identifier.
[**map_get_maps**](MapApi.md#map_get_maps) | **GET** /api/v1/maps | Get all maps the requesting user has access to.
[**map_update_map**](MapApi.md#map_update_map) | **PATCH** /api/v1/maps/{mapId} | Update a map properties based on the given parameters.


# **map_create_map**
> Map map_create_map(param)

Create a map based on the provided parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()
param = swagger_client.MapCreateParameter() # MapCreateParameter | Parameters used to create the map.

try:
    # Create a map based on the provided parameters.
    api_response = api_instance.map_create_map(param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MapApi->map_create_map: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**MapCreateParameter**](MapCreateParameter.md)| Parameters used to create the map. | 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **map_delete_map**
> map_delete_map(map_id)

Delete a map by map id or a friendly identifier.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()
map_id = 'map_id_example' # str | Map id or a friendly identifier.

try:
    # Delete a map by map id or a friendly identifier.
    api_instance.map_delete_map(map_id)
except ApiException as e:
    print("Exception when calling MapApi->map_delete_map: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **str**| Map id or a friendly identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **map_get_grid_layers_by_map**
> list[GridLayer] map_get_grid_layers_by_map(map_id)

Get the list of grid layers used in a map.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()
map_id = 'map_id_example' # str | Map id or a friendly identifier.

try:
    # Get the list of grid layers used in a map.
    api_response = api_instance.map_get_grid_layers_by_map(map_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MapApi->map_get_grid_layers_by_map: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **str**| Map id or a friendly identifier. | 

### Return type

[**list[GridLayer]**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **map_get_layers_by_map**
> list[Layer] map_get_layers_by_map(map_id)

Get the list of Layers used in a map.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()
map_id = 'map_id_example' # str | Map id or a friendly identifier.

try:
    # Get the list of Layers used in a map.
    api_response = api_instance.map_get_layers_by_map(map_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MapApi->map_get_layers_by_map: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **str**| Map id or a friendly identifier. | 

### Return type

[**list[Layer]**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **map_get_map**
> Map map_get_map(map_id)

Get a map based on the map id or a friendly identifier.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()
map_id = 'map_id_example' # str | Map id or a friendly identifier.

try:
    # Get a map based on the map id or a friendly identifier.
    api_response = api_instance.map_get_map(map_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MapApi->map_get_map: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **str**| Map id or a friendly identifier. | 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **map_get_maps**
> list[Map] map_get_maps()

Get all maps the requesting user has access to.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()

try:
    # Get all maps the requesting user has access to.
    api_response = api_instance.map_get_maps()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MapApi->map_get_maps: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[Map]**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **map_update_map**
> Map map_update_map(map_id, param)

Update a map properties based on the given parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.MapApi()
map_id = 'map_id_example' # str | Map id or a friendly identifier.
param = swagger_client.MapUpdateParameter() # MapUpdateParameter | Parameters used to update the map.

try:
    # Update a map properties based on the given parameters.
    api_response = api_instance.map_update_map(map_id, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MapApi->map_update_map: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **str**| Map id or a friendly identifier. | 
 **param** | [**MapUpdateParameter**](MapUpdateParameter.md)| Parameters used to update the map. | 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

