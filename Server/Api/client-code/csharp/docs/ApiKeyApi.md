# IO.Swagger.Api.ApiKeyApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiKeyGenerateApiKey**](ApiKeyApi.md#apikeygenerateapikey) | **POST** /api/v1/User/{UserIdentifier}/generateApiKey | 


<a name="apikeygenerateapikey"></a>
# **ApiKeyGenerateApiKey**
> string ApiKeyGenerateApiKey (string userIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ApiKeyGenerateApiKeyExample
    {
        public void main()
        {
            var apiInstance = new ApiKeyApi();
            var userIdentifier = userIdentifier_example;  // string | 

            try
            {
                string result = apiInstance.ApiKeyGenerateApiKey(userIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiKeyApi.ApiKeyGenerateApiKey: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentifier** | **string**|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

