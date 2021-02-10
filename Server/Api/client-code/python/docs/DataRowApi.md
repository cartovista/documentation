# swagger_client.DataRowApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_row_create_data_rows**](DataRowApi.md#data_row_create_data_rows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createDataRows | 
[**data_row_create_update_data_rows**](DataRowApi.md#data_row_create_update_data_rows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/createUpdateDataRows | 
[**data_row_delete_datarow**](DataRowApi.md#data_row_delete_datarow) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier} | 
[**data_row_delete_datarows**](DataRowApi.md#data_row_delete_datarows) | **DELETE** /api/v1/DataTable/{dataTableIdentifier}/DataRows | 
[**data_row_get_data_row**](DataRowApi.md#data_row_get_data_row) | **GET** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier} | 
[**data_row_get_data_rows**](DataRowApi.md#data_row_get_data_rows) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataRows | 
[**data_row_update_data_row**](DataRowApi.md#data_row_update_data_row) | **POST** /api/v1/DataTable/{dataTableIdentifier}/DataRow/{dataRowIdentifier}/update | 


# **data_row_create_data_rows**
> ApiInsertReport data_row_create_data_rows(data_table_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
param = [swagger_client.DataRowCreateParameter()] # list[DataRowCreateParameter] | 

try:
    api_response = api_instance.data_row_create_data_rows(data_table_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_create_data_rows: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **param** | [**list[DataRowCreateParameter]**](DataRowCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_row_create_update_data_rows**
> ApiCreateUpdateReport data_row_create_update_data_rows(data_table_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
param = [swagger_client.DataRowCreateParameter()] # list[DataRowCreateParameter] | 

try:
    api_response = api_instance.data_row_create_update_data_rows(data_table_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_create_update_data_rows: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **param** | [**list[DataRowCreateParameter]**](DataRowCreateParameter.md)|  | 

### Return type

[**ApiCreateUpdateReport**](ApiCreateUpdateReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_row_delete_datarow**
> data_row_delete_datarow(data_table_identifier, data_row_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_row_identifier = 'data_row_identifier_example' # str | 

try:
    api_instance.data_row_delete_datarow(data_table_identifier, data_row_identifier)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_delete_datarow: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_row_identifier** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_row_delete_datarows**
> data_row_delete_datarows(data_table_identifier, data_row_identifiers)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_row_identifiers = [swagger_client.list[str]()] # list[str] | 

try:
    api_instance.data_row_delete_datarows(data_table_identifier, data_row_identifiers)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_delete_datarows: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_row_identifiers** | **list[str]**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_row_get_data_row**
> DataRow data_row_get_data_row(data_table_identifier, data_row_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_row_identifier = 'data_row_identifier_example' # str | 

try:
    api_response = api_instance.data_row_get_data_row(data_table_identifier, data_row_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_get_data_row: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_row_identifier** | **str**|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_row_get_data_rows**
> list[DataRow] data_row_get_data_rows(data_table_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
param = swagger_client.DataRowsGetParameters() # DataRowsGetParameters | 

try:
    api_response = api_instance.data_row_get_data_rows(data_table_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_get_data_rows: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **param** | [**DataRowsGetParameters**](DataRowsGetParameters.md)|  | 

### Return type

[**list[DataRow]**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_row_update_data_row**
> DataRow data_row_update_data_row(data_table_identifier, data_row_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataRowApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_row_identifier = 'data_row_identifier_example' # str | 
param = swagger_client.DataRowUpdateParameter() # DataRowUpdateParameter | 

try:
    api_response = api_instance.data_row_update_data_row(data_table_identifier, data_row_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataRowApi->data_row_update_data_row: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_row_identifier** | **str**|  | 
 **param** | [**DataRowUpdateParameter**](DataRowUpdateParameter.md)|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

