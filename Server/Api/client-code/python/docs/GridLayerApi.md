# swagger_client.GridLayerApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**grid_layer_add_grid_source**](GridLayerApi.md#grid_layer_add_grid_source) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSources | Add a grid source to an existing grid layer.
[**grid_layer_create_grid_layer**](GridLayerApi.md#grid_layer_create_grid_layer) | **POST** /api/v1/GridLayer | Create a grid layer with the specified parameters.
[**grid_layer_delete_grid_layer**](GridLayerApi.md#grid_layer_delete_grid_layer) | **DELETE** /api/v1/GridLayer/{gridLayerId} | Delete an existing grid layer.
[**grid_layer_delete_grid_source**](GridLayerApi.md#grid_layer_delete_grid_source) | **DELETE** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Delete an existing grid source.
[**grid_layer_get_data**](GridLayerApi.md#grid_layer_get_data) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/getData | 
[**grid_layer_get_grid_layer_by_id**](GridLayerApi.md#grid_layer_get_grid_layer_by_id) | **GET** /api/v1/GridLayer/{gridLayerId} | Get a grid layer by identifier.
[**grid_layer_get_grid_layers**](GridLayerApi.md#grid_layer_get_grid_layers) | **GET** /api/v1/GridLayers | Get the list of all grid layers.
[**grid_layer_get_grid_source**](GridLayerApi.md#grid_layer_get_grid_source) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Get a grid source by identifier.
[**grid_layer_get_grid_sources_for_grid_layer**](GridLayerApi.md#grid_layer_get_grid_sources_for_grid_layer) | **GET** /api/v1/GridLayer/{gridLayerId}/GridSources | Get all the grid sources associated with the grid layer.
[**grid_layer_get_maps_by_grid_layer**](GridLayerApi.md#grid_layer_get_maps_by_grid_layer) | **GET** /api/v1/GridLayer/{gridLayerId}/maps | 
[**grid_layer_render**](GridLayerApi.md#grid_layer_render) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSource/{gridSourceId}/render | Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in &#x60;Styles&#x60; in the parameters.
[**grid_layer_update_grid_layer**](GridLayerApi.md#grid_layer_update_grid_layer) | **PATCH** /api/v1/GridLayer/{gridLayerId} | Update the properties of an existing grid layer.
[**grid_layer_update_grid_source**](GridLayerApi.md#grid_layer_update_grid_source) | **PATCH** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId} | Update the properties of an existing grid source.
[**grid_layer_update_grid_source_geotiff**](GridLayerApi.md#grid_layer_update_grid_source_geotiff) | **POST** /api/v1/GridLayer/{gridLayerId}/GridSources/{gridSourceId}/updateGeotiff | Update the geoTIFF of an existing grid source.


# **grid_layer_add_grid_source**
> GridSource grid_layer_add_grid_source(grid_layer_id, band_number, file)

Add a grid source to an existing grid layer.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.
band_number = 56 # int | The band number to select. Starts at 1.
file = '/path/to/file.txt' # file | Upload file

try:
    # Add a grid source to an existing grid layer.
    api_response = api_instance.grid_layer_add_grid_source(grid_layer_id, band_number, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_add_grid_source: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 
 **band_number** | **int**| The band number to select. Starts at 1. | 
 **file** | **file**| Upload file | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_create_grid_layer**
> GridLayer grid_layer_create_grid_layer(create_parameters)

Create a grid layer with the specified parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
create_parameters = swagger_client.GridLayerCreateParameters() # GridLayerCreateParameters | The parameters used to create the grid layer.

try:
    # Create a grid layer with the specified parameters.
    api_response = api_instance.grid_layer_create_grid_layer(create_parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_create_grid_layer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_parameters** | [**GridLayerCreateParameters**](GridLayerCreateParameters.md)| The parameters used to create the grid layer. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_delete_grid_layer**
> grid_layer_delete_grid_layer(grid_layer_id)

Delete an existing grid layer.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.

try:
    # Delete an existing grid layer.
    api_instance.grid_layer_delete_grid_layer(grid_layer_id)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_delete_grid_layer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_delete_grid_source**
> grid_layer_delete_grid_source(grid_layer_id, grid_source_id)

Delete an existing grid source.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.
grid_source_id = 'grid_source_id_example' # str | The grid source system identifier.

try:
    # Delete an existing grid source.
    api_instance.grid_layer_delete_grid_source(grid_layer_id, grid_source_id)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_delete_grid_source: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 
 **grid_source_id** | **str**| The grid source system identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_get_data**
> object grid_layer_get_data(grid_layer_id, grid_source_id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | 
grid_source_id = 'grid_source_id_example' # str | 

try:
    api_response = api_instance.grid_layer_get_data(grid_layer_id, grid_source_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_get_data: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**|  | 
 **grid_source_id** | **str**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_get_grid_layer_by_id**
> GridLayer grid_layer_get_grid_layer_by_id(grid_layer_id)

Get a grid layer by identifier.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.

try:
    # Get a grid layer by identifier.
    api_response = api_instance.grid_layer_get_grid_layer_by_id(grid_layer_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_get_grid_layer_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_get_grid_layers**
> list[GridLayer] grid_layer_get_grid_layers()

Get the list of all grid layers.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()

try:
    # Get the list of all grid layers.
    api_response = api_instance.grid_layer_get_grid_layers()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_get_grid_layers: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[GridLayer]**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_get_grid_source**
> GridSource grid_layer_get_grid_source(grid_layer_id, grid_source_id)

Get a grid source by identifier.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.
grid_source_id = 'grid_source_id_example' # str | The grid source system identifier.

try:
    # Get a grid source by identifier.
    api_response = api_instance.grid_layer_get_grid_source(grid_layer_id, grid_source_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_get_grid_source: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 
 **grid_source_id** | **str**| The grid source system identifier. | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_get_grid_sources_for_grid_layer**
> list[GridSource] grid_layer_get_grid_sources_for_grid_layer(grid_layer_id)

Get all the grid sources associated with the grid layer.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.

try:
    # Get all the grid sources associated with the grid layer.
    api_response = api_instance.grid_layer_get_grid_sources_for_grid_layer(grid_layer_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_get_grid_sources_for_grid_layer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 

### Return type

[**list[GridSource]**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_get_maps_by_grid_layer**
> list[MapDTO] grid_layer_get_maps_by_grid_layer(grid_layer_id)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | 

try:
    api_response = api_instance.grid_layer_get_maps_by_grid_layer(grid_layer_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_get_maps_by_grid_layer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**|  | 

### Return type

[**list[MapDTO]**](MapDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_render**
> object grid_layer_render(grid_layer_id, grid_source_id, param)

Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | 
grid_source_id = 'grid_source_id_example' # str | 
param = swagger_client.GridSourceRenderParameter() # GridSourceRenderParameter | 

try:
    # Generates a PNG of the grid source within the extent passed in the parameters and returns it as a byte array.  The inflection points are defined in `Styles` in the parameters.
    api_response = api_instance.grid_layer_render(grid_layer_id, grid_source_id, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_render: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**|  | 
 **grid_source_id** | **str**|  | 
 **param** | [**GridSourceRenderParameter**](GridSourceRenderParameter.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_update_grid_layer**
> GridLayer grid_layer_update_grid_layer(grid_layer_id, update_parameters)

Update the properties of an existing grid layer.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.
update_parameters = swagger_client.GridLayerUpdateParameters() # GridLayerUpdateParameters | The parameters to update.

try:
    # Update the properties of an existing grid layer.
    api_response = api_instance.grid_layer_update_grid_layer(grid_layer_id, update_parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_update_grid_layer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 
 **update_parameters** | [**GridLayerUpdateParameters**](GridLayerUpdateParameters.md)| The parameters to update. | 

### Return type

[**GridLayer**](GridLayer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_update_grid_source**
> GridSource grid_layer_update_grid_source(grid_layer_id, grid_source_id, update_parameters)

Update the properties of an existing grid source.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.
grid_source_id = 'grid_source_id_example' # str | The grid source system identifier.
update_parameters = swagger_client.GridSourceUpdateParameters() # GridSourceUpdateParameters | The parameters to update.

try:
    # Update the properties of an existing grid source.
    api_response = api_instance.grid_layer_update_grid_source(grid_layer_id, grid_source_id, update_parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_update_grid_source: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 
 **grid_source_id** | **str**| The grid source system identifier. | 
 **update_parameters** | [**GridSourceUpdateParameters**](GridSourceUpdateParameters.md)| The parameters to update. | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grid_layer_update_grid_source_geotiff**
> GridSource grid_layer_update_grid_source_geotiff(grid_layer_id, grid_source_id, band_number, file)

Update the geoTIFF of an existing grid source.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.GridLayerApi()
grid_layer_id = 'grid_layer_id_example' # str | The grid layer system identifier.
grid_source_id = 'grid_source_id_example' # str | The grid source system identifier.
band_number = 56 # int | The band number to select. Starts at 1.
file = '/path/to/file.txt' # file | Upload file

try:
    # Update the geoTIFF of an existing grid source.
    api_response = api_instance.grid_layer_update_grid_source_geotiff(grid_layer_id, grid_source_id, band_number, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GridLayerApi->grid_layer_update_grid_source_geotiff: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grid_layer_id** | **str**| The grid layer system identifier. | 
 **grid_source_id** | **str**| The grid source system identifier. | 
 **band_number** | **int**| The band number to select. Starts at 1. | 
 **file** | **file**| Upload file | 

### Return type

[**GridSource**](GridSource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

