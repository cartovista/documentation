# swagger_client.UserApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_create_user**](UserApi.md#user_create_user) | **POST** /api/v1/User/create | 
[**user_delete_user**](UserApi.md#user_delete_user) | **DELETE** /api/v1/User/{UserIdentifier} | 
[**user_get_user**](UserApi.md#user_get_user) | **GET** /api/v1/User/{UserIdentifier} | 
[**user_get_users**](UserApi.md#user_get_users) | **GET** /api/v1/Users | 
[**user_update_user**](UserApi.md#user_update_user) | **POST** /api/v1/User/{UserIdentifier}/update | 


# **user_create_user**
> User user_create_user(param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()
param = swagger_client.UserCreateParameter() # UserCreateParameter | 

try:
    api_response = api_instance.user_create_user(param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_create_user: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **param** | [**UserCreateParameter**](UserCreateParameter.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_delete_user**
> user_delete_user(user_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()
user_identifier = 'user_identifier_example' # str | 

try:
    api_instance.user_delete_user(user_identifier)
except ApiException as e:
    print("Exception when calling UserApi->user_delete_user: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_identifier** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_get_user**
> User user_get_user(user_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()
user_identifier = 'user_identifier_example' # str | 

try:
    api_response = api_instance.user_get_user(user_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_get_user: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_identifier** | **str**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_get_users**
> list[User] user_get_users()



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()

try:
    api_response = api_instance.user_get_users()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_get_users: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_update_user**
> User user_update_user(user_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.UserApi()
user_identifier = 'user_identifier_example' # str | 
param = swagger_client.UserUpdateParameter() # UserUpdateParameter | 

try:
    api_response = api_instance.user_update_user(user_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UserApi->user_update_user: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_identifier** | **str**|  | 
 **param** | [**UserUpdateParameter**](UserUpdateParameter.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

