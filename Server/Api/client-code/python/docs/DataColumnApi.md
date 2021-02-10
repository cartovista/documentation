# swagger_client.DataColumnApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_column_create_data_table_data_columns**](DataColumnApi.md#data_column_create_data_table_data_columns) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createDataColumns | 
[**data_column_create_layer_data_columns**](DataColumnApi.md#data_column_create_layer_data_columns) | **POST** /api/v1/Layer/{layerIdentifier}/createDataColumns | 
[**data_column_delete_data_table_data_column**](DataColumnApi.md#data_column_delete_data_table_data_column) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**data_column_delete_layer_data_column**](DataColumnApi.md#data_column_delete_layer_data_column) | **DELETE** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**data_column_get_data_table_data_column**](DataColumnApi.md#data_column_get_data_table_data_column) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**data_column_get_data_table_data_columns**](DataColumnApi.md#data_column_get_data_table_data_columns) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataColumns | 
[**data_column_get_layer_data_column**](DataColumnApi.md#data_column_get_layer_data_column) | **GET** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier} | 
[**data_column_get_layer_data_columns**](DataColumnApi.md#data_column_get_layer_data_columns) | **GET** /api/v1/Layer/{layerIdentifier}/DataColumns | 
[**data_column_set_data_table_column_unique_identifier**](DataColumnApi.md#data_column_set_data_table_column_unique_identifier) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier | 
[**data_column_set_layer_column_unique_identifier**](DataColumnApi.md#data_column_set_layer_column_unique_identifier) | **POST** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/setUniqueIdentifier | 
[**data_column_update_data_table_data_column**](DataColumnApi.md#data_column_update_data_table_data_column) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataColumn/{dataColumnIdentifier}/update | 
[**data_column_update_layer_data_column**](DataColumnApi.md#data_column_update_layer_data_column) | **POST** /api/v1/Layer/{layerIdentifier}/DataColumn/{dataColumnIdentifier}/update | 


# **data_column_create_data_table_data_columns**
> ApiInsertReport data_column_create_data_table_data_columns(data_table_identifier, parameters)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
data_table_identifier = 'data_table_identifier_example' # str | 
parameters = [swagger_client.DataColumnCreateParameter()] # list[DataColumnCreateParameter] | 

try:
    api_response = api_instance.data_column_create_data_table_data_columns(data_table_identifier, parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_create_data_table_data_columns: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **parameters** | [**list[DataColumnCreateParameter]**](DataColumnCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_create_layer_data_columns**
> ApiInsertReport data_column_create_layer_data_columns(layer_identifier, parameters)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
layer_identifier = 'layer_identifier_example' # str | 
parameters = [swagger_client.DataColumnCreateParameter()] # list[DataColumnCreateParameter] | 

try:
    api_response = api_instance.data_column_create_layer_data_columns(layer_identifier, parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_create_layer_data_columns: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **parameters** | [**list[DataColumnCreateParameter]**](DataColumnCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_delete_data_table_data_column**
> data_column_delete_data_table_data_column(data_table_identifier, data_column_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 

try:
    api_instance.data_column_delete_data_table_data_column(data_table_identifier, data_column_identifier)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_delete_data_table_data_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_delete_layer_data_column**
> data_column_delete_layer_data_column(layer_identifier, data_column_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
layer_identifier = 'layer_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 

try:
    api_instance.data_column_delete_layer_data_column(layer_identifier, data_column_identifier)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_delete_layer_data_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_get_data_table_data_column**
> DataColumn data_column_get_data_table_data_column(data_table_identifier, data_column_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 

try:
    api_response = api_instance.data_column_get_data_table_data_column(data_table_identifier, data_column_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_get_data_table_data_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_get_data_table_data_columns**
> list[DataColumn] data_column_get_data_table_data_columns(data_table_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
data_table_identifier = 'data_table_identifier_example' # str | 

try:
    api_response = api_instance.data_column_get_data_table_data_columns(data_table_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_get_data_table_data_columns: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 

### Return type

[**list[DataColumn]**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_get_layer_data_column**
> DataColumn data_column_get_layer_data_column(layer_identifier, data_column_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
layer_identifier = 'layer_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 

try:
    api_response = api_instance.data_column_get_layer_data_column(layer_identifier, data_column_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_get_layer_data_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_get_layer_data_columns**
> list[DataColumn] data_column_get_layer_data_columns(layer_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
layer_identifier = 'layer_identifier_example' # str | 

try:
    api_response = api_instance.data_column_get_layer_data_columns(layer_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_get_layer_data_columns: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 

### Return type

[**list[DataColumn]**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_set_data_table_column_unique_identifier**
> DataColumn data_column_set_data_table_column_unique_identifier(data_table_identifier, data_column_identifier, new_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 
new_identifier = 'new_identifier_example' # str | 

try:
    api_response = api_instance.data_column_set_data_table_column_unique_identifier(data_table_identifier, data_column_identifier, new_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_set_data_table_column_unique_identifier: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 
 **new_identifier** | **str**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_set_layer_column_unique_identifier**
> DataColumn data_column_set_layer_column_unique_identifier(layer_identifier, data_column_identifier, new_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
layer_identifier = 'layer_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 
new_identifier = 'new_identifier_example' # str | 

try:
    api_response = api_instance.data_column_set_layer_column_unique_identifier(layer_identifier, data_column_identifier, new_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_set_layer_column_unique_identifier: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 
 **new_identifier** | **str**|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_update_data_table_data_column**
> DataColumn data_column_update_data_table_data_column(data_table_identifier, data_column_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 
param = swagger_client.DataColumnUpdateParameter() # DataColumnUpdateParameter | 

try:
    api_response = api_instance.data_column_update_data_table_data_column(data_table_identifier, data_column_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_update_data_table_data_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 
 **param** | [**DataColumnUpdateParameter**](DataColumnUpdateParameter.md)|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_column_update_layer_data_column**
> DataColumn data_column_update_layer_data_column(layer_identifier, data_column_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataColumnApi()
layer_identifier = 'layer_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 
param = swagger_client.DataColumnUpdateParameter() # DataColumnUpdateParameter | 

try:
    api_response = api_instance.data_column_update_layer_data_column(layer_identifier, data_column_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataColumnApi->data_column_update_layer_data_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 
 **param** | [**DataColumnUpdateParameter**](DataColumnUpdateParameter.md)|  | 

### Return type

[**DataColumn**](DataColumn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

