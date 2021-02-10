# CartoVistaserverapiv1.ViewApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewCreateViewByExpression**](ViewApi.md#viewCreateViewByExpression) | **POST** /api/v1/Layer/{layerId}/views/createByExpression | Create a view based on an expression.
[**viewCreateViewsFromColumn**](ViewApi.md#viewCreateViewsFromColumn) | **POST** /api/v1/Layer/{layerId}/views/createByColumn | Create views based on a layer column. This will generate one view for each unique value of the selected column.
[**viewDeleteViews**](ViewApi.md#viewDeleteViews) | **DELETE** /api/v1/Layer/{layerId}/views | Delete all the views associated with the layer.
[**viewGetView**](ViewApi.md#viewGetView) | **GET** /api/v1/Layer/{layerId}/views/{viewId} | Get a specific view by id.
[**viewGetViews**](ViewApi.md#viewGetViews) | **GET** /api/v1/Layer/{layerId}/views | Get the list of views associated with a layer.
[**viewUpdateView**](ViewApi.md#viewUpdateView) | **PATCH** /api/v1/Layer/{layerId}/views/{viewId} | Update the view parameters.
[**viewUpdateViewPermissions**](ViewApi.md#viewUpdateViewPermissions) | **PATCH** /api/v1/Layer/{layerId}/views/{viewId}/permissions | Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.


<a name="viewCreateViewByExpression"></a>
# **viewCreateViewByExpression**
> View viewCreateViewByExpression(layerId, param)

Create a view based on an expression.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.

var param = new CartoVistaserverapiv1.CreateViewByExpressionParameters(); // CreateViewByExpressionParameters | The parameters to create the view.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewCreateViewByExpression(layerId, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 
 **param** | [**CreateViewByExpressionParameters**](CreateViewByExpressionParameters.md)| The parameters to create the view. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="viewCreateViewsFromColumn"></a>
# **viewCreateViewsFromColumn**
> [View] viewCreateViewsFromColumn(layerId, columnId)

Create views based on a layer column. This will generate one view for each unique value of the selected column.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.

var columnId = "columnId_example"; // String | The column system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewCreateViewsFromColumn(layerId, columnId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 
 **columnId** | **String**| The column system identifier. | 

### Return type

[**[View]**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="viewDeleteViews"></a>
# **viewDeleteViews**
> viewDeleteViews(layerId)

Delete all the views associated with the layer.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.viewDeleteViews(layerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="viewGetView"></a>
# **viewGetView**
> View viewGetView(layerId, viewId)

Get a specific view by id.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.

var viewId = "viewId_example"; // String | The view system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewGetView(layerId, viewId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 
 **viewId** | [**String**](.md)| The view system identifier. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="viewGetViews"></a>
# **viewGetViews**
> [View] viewGetViews(layerId)

Get the list of views associated with a layer.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewGetViews(layerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 

### Return type

[**[View]**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

<a name="viewUpdateView"></a>
# **viewUpdateView**
> View viewUpdateView(layerId, viewId, param)

Update the view parameters.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.

var viewId = "viewId_example"; // String | The view system identifier.

var param = new CartoVistaserverapiv1.UpdateViewParameter(); // UpdateViewParameter | The parameters to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewUpdateView(layerId, viewId, param, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 
 **viewId** | [**String**](.md)| The view system identifier. | 
 **param** | [**UpdateViewParameter**](UpdateViewParameter.md)| The parameters to update. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

<a name="viewUpdateViewPermissions"></a>
# **viewUpdateViewPermissions**
> View viewUpdateViewPermissions(layerId, viewId, permissions)

Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.

### Example
```javascript
var CartoVistaserverapiv1 = require('carto_vistaserverapiv1');

var apiInstance = new CartoVistaserverapiv1.ViewApi();

var layerId = "layerId_example"; // String | The layer system identifier.

var viewId = "viewId_example"; // String | The view system identifier.

var permissions = [new CartoVistaserverapiv1.ViewReadPermission()]; // [ViewReadPermission] | The list of permissions to assign to the view.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewUpdateViewPermissions(layerId, viewId, permissions, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**String**](.md)| The layer system identifier. | 
 **viewId** | [**String**](.md)| The view system identifier. | 
 **permissions** | [**[ViewReadPermission]**](ViewReadPermission.md)| The list of permissions to assign to the view. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

