# swagger_client.ViewApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**view_create_view_by_expression**](ViewApi.md#view_create_view_by_expression) | **POST** /api/v1/Layer/{layerId}/views/createByExpression | Create a view based on an expression.
[**view_create_views_from_column**](ViewApi.md#view_create_views_from_column) | **POST** /api/v1/Layer/{layerId}/views/createByColumn | Create views based on a layer column. This will generate one view for each unique value of the selected column.
[**view_delete_views**](ViewApi.md#view_delete_views) | **DELETE** /api/v1/Layer/{layerId}/views | Delete all the views associated with the layer.
[**view_get_view**](ViewApi.md#view_get_view) | **GET** /api/v1/Layer/{layerId}/views/{viewId} | Get a specific view by id.
[**view_get_views**](ViewApi.md#view_get_views) | **GET** /api/v1/Layer/{layerId}/views | Get the list of views associated with a layer.
[**view_update_view**](ViewApi.md#view_update_view) | **PATCH** /api/v1/Layer/{layerId}/views/{viewId} | Update the view parameters.
[**view_update_view_permissions**](ViewApi.md#view_update_view_permissions) | **PATCH** /api/v1/Layer/{layerId}/views/{viewId}/permissions | Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.


# **view_create_view_by_expression**
> View view_create_view_by_expression(layer_id, param)

Create a view based on an expression.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.
param = swagger_client.CreateViewByExpressionParameters() # CreateViewByExpressionParameters | The parameters to create the view.

try:
    # Create a view based on an expression.
    api_response = api_instance.view_create_view_by_expression(layer_id, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ViewApi->view_create_view_by_expression: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 
 **param** | [**CreateViewByExpressionParameters**](CreateViewByExpressionParameters.md)| The parameters to create the view. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_create_views_from_column**
> list[View] view_create_views_from_column(layer_id, column_id)

Create views based on a layer column. This will generate one view for each unique value of the selected column.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.
column_id = 'column_id_example' # str | The column system identifier.

try:
    # Create views based on a layer column. This will generate one view for each unique value of the selected column.
    api_response = api_instance.view_create_views_from_column(layer_id, column_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ViewApi->view_create_views_from_column: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 
 **column_id** | **str**| The column system identifier. | 

### Return type

[**list[View]**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_delete_views**
> view_delete_views(layer_id)

Delete all the views associated with the layer.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.

try:
    # Delete all the views associated with the layer.
    api_instance.view_delete_views(layer_id)
except ApiException as e:
    print("Exception when calling ViewApi->view_delete_views: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_get_view**
> View view_get_view(layer_id, view_id)

Get a specific view by id.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.
view_id = 'view_id_example' # str | The view system identifier.

try:
    # Get a specific view by id.
    api_response = api_instance.view_get_view(layer_id, view_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ViewApi->view_get_view: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 
 **view_id** | [**str**](.md)| The view system identifier. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_get_views**
> list[View] view_get_views(layer_id)

Get the list of views associated with a layer.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.

try:
    # Get the list of views associated with a layer.
    api_response = api_instance.view_get_views(layer_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ViewApi->view_get_views: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 

### Return type

[**list[View]**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_update_view**
> View view_update_view(layer_id, view_id, param)

Update the view parameters.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.
view_id = 'view_id_example' # str | The view system identifier.
param = swagger_client.UpdateViewParameter() # UpdateViewParameter | The parameters to update.

try:
    # Update the view parameters.
    api_response = api_instance.view_update_view(layer_id, view_id, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ViewApi->view_update_view: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 
 **view_id** | [**str**](.md)| The view system identifier. | 
 **param** | [**UpdateViewParameter**](UpdateViewParameter.md)| The parameters to update. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_update_view_permissions**
> View view_update_view_permissions(layer_id, view_id, permissions)

Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ViewApi()
layer_id = 'layer_id_example' # str | The layer system identifier.
view_id = 'view_id_example' # str | The view system identifier.
permissions = [swagger_client.ViewReadPermission()] # list[ViewReadPermission] | The list of permissions to assign to the view.

try:
    # Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.
    api_response = api_instance.view_update_view_permissions(layer_id, view_id, permissions)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ViewApi->view_update_view_permissions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_id** | [**str**](.md)| The layer system identifier. | 
 **view_id** | [**str**](.md)| The view system identifier. | 
 **permissions** | [**list[ViewReadPermission]**](ViewReadPermission.md)| The list of permissions to assign to the view. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

