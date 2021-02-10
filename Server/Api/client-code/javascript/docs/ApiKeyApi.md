# CartoVistaserverapiv1.ApiKeyApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiKeyGenerateApiKey**](ApiKeyApi.md#apiKeyGenerateApiKey) | **POST** /api/v1/User/{UserIdentifier}/generateApiKey | 


<a name="apiKeyGenerateApiKey"></a>
# **apiKeyGenerateApiKey**
> 'String' apiKeyGenerateApiKey(userIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ApiKeyApi();

var userIdentifier = "userIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiKeyGenerateApiKey(userIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentifier** | **String**|  | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

