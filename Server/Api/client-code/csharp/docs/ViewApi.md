# IO.Swagger.Api.ViewApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ViewCreateViewByExpression**](ViewApi.md#viewcreateviewbyexpression) | **POST** /api/v1/Layer/{layerId}/views/createByExpression | Create a view based on an expression.
[**ViewCreateViewsFromColumn**](ViewApi.md#viewcreateviewsfromcolumn) | **POST** /api/v1/Layer/{layerId}/views/createByColumn | Create views based on a layer column. This will generate one view for each unique value of the selected column.
[**ViewDeleteViews**](ViewApi.md#viewdeleteviews) | **DELETE** /api/v1/Layer/{layerId}/views | Delete all the views associated with the layer.
[**ViewGetView**](ViewApi.md#viewgetview) | **GET** /api/v1/Layer/{layerId}/views/{viewId} | Get a specific view by id.
[**ViewGetViews**](ViewApi.md#viewgetviews) | **GET** /api/v1/Layer/{layerId}/views | Get the list of views associated with a layer.
[**ViewUpdateView**](ViewApi.md#viewupdateview) | **PATCH** /api/v1/Layer/{layerId}/views/{viewId} | Update the view parameters.
[**ViewUpdateViewPermissions**](ViewApi.md#viewupdateviewpermissions) | **PATCH** /api/v1/Layer/{layerId}/views/{viewId}/permissions | Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.


<a name="viewcreateviewbyexpression"></a>
# **ViewCreateViewByExpression**
> View ViewCreateViewByExpression (Guid? layerId, CreateViewByExpressionParameters param)

Create a view based on an expression.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewCreateViewByExpressionExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.
            var param = new CreateViewByExpressionParameters(); // CreateViewByExpressionParameters | The parameters to create the view.

            try
            {
                // Create a view based on an expression.
                View result = apiInstance.ViewCreateViewByExpression(layerId, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewCreateViewByExpression: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 
 **param** | [**CreateViewByExpressionParameters**](CreateViewByExpressionParameters.md)| The parameters to create the view. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="viewcreateviewsfromcolumn"></a>
# **ViewCreateViewsFromColumn**
> List<View> ViewCreateViewsFromColumn (Guid? layerId, Guid? columnId)

Create views based on a layer column. This will generate one view for each unique value of the selected column.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewCreateViewsFromColumnExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.
            var columnId = ;  // Guid? | The column system identifier.

            try
            {
                // Create views based on a layer column. This will generate one view for each unique value of the selected column.
                List&lt;View&gt; result = apiInstance.ViewCreateViewsFromColumn(layerId, columnId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewCreateViewsFromColumn: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 
 **columnId** | **Guid?**| The column system identifier. | 

### Return type

[**List<View>**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="viewdeleteviews"></a>
# **ViewDeleteViews**
> void ViewDeleteViews (Guid? layerId)

Delete all the views associated with the layer.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewDeleteViewsExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.

            try
            {
                // Delete all the views associated with the layer.
                apiInstance.ViewDeleteViews(layerId);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewDeleteViews: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="viewgetview"></a>
# **ViewGetView**
> View ViewGetView (Guid? layerId, Guid? viewId)

Get a specific view by id.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewGetViewExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.
            var viewId = new Guid?(); // Guid? | The view system identifier.

            try
            {
                // Get a specific view by id.
                View result = apiInstance.ViewGetView(layerId, viewId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewGetView: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 
 **viewId** | [**Guid?**](Guid?.md)| The view system identifier. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="viewgetviews"></a>
# **ViewGetViews**
> List<View> ViewGetViews (Guid? layerId)

Get the list of views associated with a layer.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewGetViewsExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.

            try
            {
                // Get the list of views associated with a layer.
                List&lt;View&gt; result = apiInstance.ViewGetViews(layerId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewGetViews: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 

### Return type

[**List<View>**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="viewupdateview"></a>
# **ViewUpdateView**
> View ViewUpdateView (Guid? layerId, Guid? viewId, UpdateViewParameter param)

Update the view parameters.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewUpdateViewExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.
            var viewId = new Guid?(); // Guid? | The view system identifier.
            var param = new UpdateViewParameter(); // UpdateViewParameter | The parameters to update.

            try
            {
                // Update the view parameters.
                View result = apiInstance.ViewUpdateView(layerId, viewId, param);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewUpdateView: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 
 **viewId** | [**Guid?**](Guid?.md)| The view system identifier. | 
 **param** | [**UpdateViewParameter**](UpdateViewParameter.md)| The parameters to update. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="viewupdateviewpermissions"></a>
# **ViewUpdateViewPermissions**
> View ViewUpdateViewPermissions (Guid? layerId, Guid? viewId, List<ViewReadPermission> permissions)

Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ViewUpdateViewPermissionsExample
    {
        public void main()
        {
            var apiInstance = new ViewApi();
            var layerId = new Guid?(); // Guid? | The layer system identifier.
            var viewId = new Guid?(); // Guid? | The view system identifier.
            var permissions = new List<ViewReadPermission>(); // List<ViewReadPermission> | The list of permissions to assign to the view.

            try
            {
                // Update the view permissions.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.
                View result = apiInstance.ViewUpdateViewPermissions(layerId, viewId, permissions);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ViewApi.ViewUpdateViewPermissions: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layerId** | [**Guid?**](Guid?.md)| The layer system identifier. | 
 **viewId** | [**Guid?**](Guid?.md)| The view system identifier. | 
 **permissions** | [**List&lt;ViewReadPermission&gt;**](ViewReadPermission.md)| The list of permissions to assign to the view. | 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

