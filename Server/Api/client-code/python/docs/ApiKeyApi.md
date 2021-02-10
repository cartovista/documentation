# swagger_client.ApiKeyApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_key_generate_api_key**](ApiKeyApi.md#api_key_generate_api_key) | **POST** /api/v1/User/{UserIdentifier}/generateApiKey | 


# **api_key_generate_api_key**
> str api_key_generate_api_key(user_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiKeyApi()
user_identifier = 'user_identifier_example' # str | 

try:
    api_response = api_instance.api_key_generate_api_key(user_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiKeyApi->api_key_generate_api_key: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_identifier** | **str**|  | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

