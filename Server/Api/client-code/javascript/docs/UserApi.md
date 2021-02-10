# CartoVistaserverapiv1.UserApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userCreateUser**](UserApi.md#userCreateUser) | **POST** /api/v1/User/create | 
[**userDeleteUser**](UserApi.md#userDeleteUser) | **DELETE** /api/v1/User/{UserIdentifier} | 
[**userGetUser**](UserApi.md#userGetUser) | **GET** /api/v1/User/{UserIdentifier} | 
[**userGetUsers**](UserApi.md#userGetUsers) | **GET** /api/v1/Users | 
[**userUpdateUser**](UserApi.md#userUpdateUser) | **POST** /api/v1/User/{UserIdentifier}/update | 


<a name="userCreateUser"></a>
# **userCreateUser**
> User userCreateUser(param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.UserApi();

var param = new CartoVistaserverapiv1.UserCreateParameter(); // UserCreateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userCreateUser(param, callback);
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

<a name="userDeleteUser"></a>
# **userDeleteUser**
> userDeleteUser(userIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.UserApi();

var userIdentifier = "userIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.userDeleteUser(userIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userGetUser"></a>
# **userGetUser**
> User userGetUser(userIdentifier)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.UserApi();

var userIdentifier = "userIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGetUser(userIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentifier** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="userGetUsers"></a>
# **userGetUsers**
> [User] userGetUsers()



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGetUsers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="userUpdateUser"></a>
# **userUpdateUser**
> User userUpdateUser(userIdentifier, param)



### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.UserApi();

var userIdentifier = "userIdentifier_example"; // String | 

var param = new CartoVistaserverapiv1.UserUpdateParameter(); // UserUpdateParameter | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUpdateUser(userIdentifier, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIdentifier** | **String**|  | 
 **param** | [**UserUpdateParameter**](UserUpdateParameter.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

