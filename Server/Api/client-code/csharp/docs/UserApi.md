# IO.Swagger.Api.UserApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**UserCreateUser**](UserApi.md#usercreateuser) | **POST** /api/v1/User/create | 
[**UserDeleteUser**](UserApi.md#userdeleteuser) | **DELETE** /api/v1/User/{UserIdentifier} | 
[**UserGetUser**](UserApi.md#usergetuser) | **GET** /api/v1/User/{UserIdentifier} | 
[**UserGetUsers**](UserApi.md#usergetusers) | **GET** /api/v1/Users | 
[**UserUpdateUser**](UserApi.md#userupdateuser) | **POST** /api/v1/User/{UserIdentifier}/update | 


<a name="usercreateuser"></a>
# **UserCreateUser**
> User UserCreateUser (UserCreateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserCreateUserExample
    {
        public void main()
        {
            var apiInstance = new UserApi();
            var param = new UserCreateParameter(); // UserCreateParameter | 

            try
            {
                User result = apiInstance.UserCreateUser(param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UserApi.UserCreateUser: " + e.Message );
            }
        }
    }
}
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

<a name="userdeleteuser"></a>
# **UserDeleteUser**
> void UserDeleteUser (string userIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserDeleteUserExample
    {
        public void main()
        {
            var apiInstance = new UserApi();
            var userIdentifier = userIdentifier_example;  // string | 

            try
            {
                apiInstance.UserDeleteUser(userIdentifier);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UserApi.UserDeleteUser: " + e.Message );
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usergetuser"></a>
# **UserGetUser**
> User UserGetUser (string userIdentifier)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserGetUserExample
    {
        public void main()
        {
            var apiInstance = new UserApi();
            var userIdentifier = userIdentifier_example;  // string | 

            try
            {
                User result = apiInstance.UserGetUser(userIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UserApi.UserGetUser: " + e.Message );
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="usergetusers"></a>
# **UserGetUsers**
> List<User> UserGetUsers ()



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserGetUsersExample
    {
        public void main()
        {
            var apiInstance = new UserApi();

            try
            {
                List&lt;User&gt; result = apiInstance.UserGetUsers();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UserApi.UserGetUsers: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<User>**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="userupdateuser"></a>
# **UserUpdateUser**
> User UserUpdateUser (string userIdentifier, UserUpdateParameter param)



### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UserUpdateUserExample
    {
        public void main()
        {
            var apiInstance = new UserApi();
            var userIdentifier = userIdentifier_example;  // string | 
            var param = new UserUpdateParameter(); // UserUpdateParameter | 

            try
            {
                User result = apiInstance.UserUpdateUser(userIdentifier, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UserApi.UserUpdateUser: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentifier** | **string**|  | 
 **param** | [**UserUpdateParameter**](UserUpdateParameter.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

