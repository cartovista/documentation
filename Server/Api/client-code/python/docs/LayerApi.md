# swagger_client.LayerApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**layer_create_layer**](LayerApi.md#layer_create_layer) | **POST** /api/v1/createLayer | 
[**layer_create_layer_from_zip**](LayerApi.md#layer_create_layer_from_zip) | **POST** /api/v1/Layer/createFromZip | 
[**layer_delete_layer_by_id**](LayerApi.md#layer_delete_layer_by_id) | **DELETE** /api/v1/Layer/{layerIdentifier} | 
[**layer_get_layer_by_id**](LayerApi.md#layer_get_layer_by_id) | **GET** /api/v1/Layer/{layerIdentifier} | 
[**layer_get_layers**](LayerApi.md#layer_get_layers) | **GET** /api/v1/Layers | 
[**layer_set_data_column_unique_id**](LayerApi.md#layer_set_data_column_unique_id) | **POST** /api/v1/Layer/{layerIdentifier}/setDataColumnUniqueId | 
[**layer_set_unique_identifier**](LayerApi.md#layer_set_unique_identifier) | **POST** /api/v1/Layer/{layerIdentifier}/setUniqueIdentifier | 
[**layer_update_layer**](LayerApi.md#layer_update_layer) | **POST** /api/v1/Layer/{layerIdentifier}/update | 
[**layer_update_layer_from_zip**](LayerApi.md#layer_update_layer_from_zip) | **POST** /api/v1/Layer/{layerIdentifier}/updateFromZip | 


# **layer_create_layer**
> Layer layer_create_layer(parameters)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
parameters = swagger_client.LayerCreateParameter() # LayerCreateParameter | 

try:
    api_response = api_instance.layer_create_layer(parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_create_layer: %s\n" % e)
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

# **layer_create_layer_from_zip**
> Layer layer_create_layer_from_zip(file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.layer_create_layer_from_zip(file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_create_layer_from_zip: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **file**| Upload file | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_delete_layer_by_id**
> layer_delete_layer_by_id(layer_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
layer_identifier = 'layer_identifier_example' # str | 

try:
    api_instance.layer_delete_layer_by_id(layer_identifier)
except ApiException as e:
    print("Exception when calling LayerApi->layer_delete_layer_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_get_layer_by_id**
> Layer layer_get_layer_by_id(layer_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
layer_identifier = 'layer_identifier_example' # str | 

try:
    api_response = api_instance.layer_get_layer_by_id(layer_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_get_layer_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_get_layers**
> list[Layer] layer_get_layers()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()

try:
    api_response = api_instance.layer_get_layers()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_get_layers: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[Layer]**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_set_data_column_unique_id**
> Layer layer_set_data_column_unique_id(layer_identifier, data_column_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
layer_identifier = 'layer_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 

try:
    api_response = api_instance.layer_set_data_column_unique_id(layer_identifier, data_column_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_set_data_column_unique_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_set_unique_identifier**
> Layer layer_set_unique_identifier(layer_identifier, new_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
layer_identifier = 'layer_identifier_example' # str | 
new_identifier = 'new_identifier_example' # str | 

try:
    api_response = api_instance.layer_set_unique_identifier(layer_identifier, new_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_set_unique_identifier: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **new_identifier** | **str**|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_update_layer**
> Layer layer_update_layer(layer_identifier, parameters)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
layer_identifier = 'layer_identifier_example' # str | 
parameters = swagger_client.LayerUpdateParameter() # LayerUpdateParameter | 

try:
    api_response = api_instance.layer_update_layer(layer_identifier, parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_update_layer: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **parameters** | [**LayerUpdateParameter**](LayerUpdateParameter.md)|  | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layer_update_layer_from_zip**
> Layer layer_update_layer_from_zip(layer_identifier, file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LayerApi()
layer_identifier = 'layer_identifier_example' # str | 
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.layer_update_layer_from_zip(layer_identifier, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LayerApi->layer_update_layer_from_zip: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **file** | **file**| Upload file | 

### Return type

[**Layer**](Layer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

