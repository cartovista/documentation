# swagger_client.DataTableApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_table_create_data_table**](DataTableApi.md#data_table_create_data_table) | **POST** /api/v1/createDataTable | 
[**data_table_create_from_csv**](DataTableApi.md#data_table_create_from_csv) | **POST** /api/v1/DataTable/createFromCSV | 
[**data_table_create_from_excel**](DataTableApi.md#data_table_create_from_excel) | **POST** /api/v1/DataTable/createFromExcel | 
[**data_table_create_from_excel_sheet_name**](DataTableApi.md#data_table_create_from_excel_sheet_name) | **POST** /api/v1/DataTable/createFromExcel/{sheetName} | 
[**data_table_delete_data_table**](DataTableApi.md#data_table_delete_data_table) | **DELETE** /api/v1/DataTable/{dataTableIdentifier} | 
[**data_table_get_data_table_by_identifier**](DataTableApi.md#data_table_get_data_table_by_identifier) | **GET** /api/v1/DataTable/{dataTableIdentifier} | 
[**data_table_get_data_tables**](DataTableApi.md#data_table_get_data_tables) | **GET** /api/v1/DataTables | 
[**data_table_set_data_column_unique_id**](DataTableApi.md#data_table_set_data_column_unique_id) | **POST** /api/v1/DataTable/{dataTableIdentifier}/setDataColumnUniqueId | 
[**data_table_set_unique_identifier**](DataTableApi.md#data_table_set_unique_identifier) | **POST** /api/v1/DataTable/{dataTableIdentifier}/setUniqueIdentifier | 
[**data_table_update_data_table**](DataTableApi.md#data_table_update_data_table) | **POST** /api/v1/DataTable/{dataTableIdentifier}/update | 
[**data_table_update_from_csv**](DataTableApi.md#data_table_update_from_csv) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromCSV | 
[**data_table_update_from_excel**](DataTableApi.md#data_table_update_from_excel) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromExcel | 
[**data_table_update_from_excel_sheet_name**](DataTableApi.md#data_table_update_from_excel_sheet_name) | **POST** /api/v1/DataTable/{dataTableIdentifier}/updateFromExcel/{sheetName} | 


# **data_table_create_data_table**
> DataTable data_table_create_data_table(parameters)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
parameters = swagger_client.DataTableCreateParameter() # DataTableCreateParameter | 

try:
    api_response = api_instance.data_table_create_data_table(parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_create_data_table: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**DataTableCreateParameter**](DataTableCreateParameter.md)|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_create_from_csv**
> DataTable data_table_create_from_csv(file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.data_table_create_from_csv(file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_create_from_csv: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **file**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_create_from_excel**
> DataTable data_table_create_from_excel(file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.data_table_create_from_excel(file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_create_from_excel: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **file**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_create_from_excel_sheet_name**
> DataTable data_table_create_from_excel_sheet_name(sheet_name, file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
sheet_name = 'sheet_name_example' # str | 
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.data_table_create_from_excel_sheet_name(sheet_name, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_create_from_excel_sheet_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sheet_name** | **str**|  | 
 **file** | **file**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_delete_data_table**
> data_table_delete_data_table(data_table_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 

try:
    api_instance.data_table_delete_data_table(data_table_identifier)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_delete_data_table: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_get_data_table_by_identifier**
> DataTable data_table_get_data_table_by_identifier(data_table_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 

try:
    api_response = api_instance.data_table_get_data_table_by_identifier(data_table_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_get_data_table_by_identifier: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_get_data_tables**
> list[DataTable] data_table_get_data_tables()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()

try:
    api_response = api_instance.data_table_get_data_tables()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_get_data_tables: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[DataTable]**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_set_data_column_unique_id**
> DataTable data_table_set_data_column_unique_id(data_table_identifier, data_column_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 
data_column_identifier = 'data_column_identifier_example' # str | 

try:
    api_response = api_instance.data_table_set_data_column_unique_id(data_table_identifier, data_column_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_set_data_column_unique_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **data_column_identifier** | **str**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_set_unique_identifier**
> DataTable data_table_set_unique_identifier(data_table_identifier, new_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 
new_identifier = 'new_identifier_example' # str | 

try:
    api_response = api_instance.data_table_set_unique_identifier(data_table_identifier, new_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_set_unique_identifier: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **new_identifier** | **str**|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_update_data_table**
> DataTable data_table_update_data_table(data_table_identifier, parameters)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 
parameters = swagger_client.DataTableUpdateParameter() # DataTableUpdateParameter | 

try:
    api_response = api_instance.data_table_update_data_table(data_table_identifier, parameters)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_update_data_table: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **parameters** | [**DataTableUpdateParameter**](DataTableUpdateParameter.md)|  | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_update_from_csv**
> DataTable data_table_update_from_csv(data_table_identifier, file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.data_table_update_from_csv(data_table_identifier, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_update_from_csv: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **file** | **file**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_update_from_excel**
> DataTable data_table_update_from_excel(data_table_identifier, file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.data_table_update_from_excel(data_table_identifier, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_update_from_excel: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **file** | **file**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_table_update_from_excel_sheet_name**
> DataTable data_table_update_from_excel_sheet_name(data_table_identifier, sheet_name, file)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DataTableApi()
data_table_identifier = 'data_table_identifier_example' # str | 
sheet_name = 'sheet_name_example' # str | 
file = '/path/to/file.txt' # file | Upload file

try:
    api_response = api_instance.data_table_update_from_excel_sheet_name(data_table_identifier, sheet_name, file)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DataTableApi->data_table_update_from_excel_sheet_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_table_identifier** | **str**|  | 
 **sheet_name** | **str**|  | 
 **file** | **file**| Upload file | 

### Return type

[**DataTable**](DataTable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

