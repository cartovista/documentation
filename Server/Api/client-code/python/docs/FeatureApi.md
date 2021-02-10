# swagger_client.FeatureApi

All URIs are relative to *https://pcigeomatics.cartovista.com/Portal/maps/WebPortalServices*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feature_create_features_from_geo_json**](FeatureApi.md#feature_create_features_from_geo_json) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromGeoJSON | 
[**feature_create_features_from_long_lat**](FeatureApi.md#feature_create_features_from_long_lat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromLongLat | 
[**feature_create_features_from_wkt**](FeatureApi.md#feature_create_features_from_wkt) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createFromWKT | 
[**feature_create_update_features_from_geo_json**](FeatureApi.md#feature_create_update_features_from_geo_json) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromGeoJSON | 
[**feature_create_update_features_from_long_lat**](FeatureApi.md#feature_create_update_features_from_long_lat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromLongLat | 
[**feature_create_update_features_from_wkt**](FeatureApi.md#feature_create_update_features_from_wkt) | **POST** /api/v1/Layer/{layerIdentifier}/Features/createUpdateFromWKT | 
[**feature_delete_feature**](FeatureApi.md#feature_delete_feature) | **DELETE** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier} | 
[**feature_delete_features**](FeatureApi.md#feature_delete_features) | **DELETE** /api/v1/Layer/{layerIdentifier}/Features | 
[**feature_get_feature_in_geo_json**](FeatureApi.md#feature_get_feature_in_geo_json) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/GeoJSON | 
[**feature_get_feature_in_long_lat**](FeatureApi.md#feature_get_feature_in_long_lat) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/LongLat | 
[**feature_get_feature_in_wkt**](FeatureApi.md#feature_get_feature_in_wkt) | **GET** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/WKT | 
[**feature_get_features**](FeatureApi.md#feature_get_features) | **POST** /api/v1/Layer/{layerIdentifier}/Features | 
[**feature_get_features_in_geo_json**](FeatureApi.md#feature_get_features_in_geo_json) | **POST** /api/v1/Layer/{layerIdentifier}/Features/GeoJSON | 
[**feature_get_features_in_long_lat**](FeatureApi.md#feature_get_features_in_long_lat) | **POST** /api/v1/Layer/{layerIdentifier}/Features/LongLat | 
[**feature_get_features_in_wkt**](FeatureApi.md#feature_get_features_in_wkt) | **POST** /api/v1/Layer/{layerIdentifier}/Features/WKT | 
[**feature_update_from_geo_json**](FeatureApi.md#feature_update_from_geo_json) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateFromGeoJSON | 
[**feature_update_from_long_lat**](FeatureApi.md#feature_update_from_long_lat) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateFromLongLat | 
[**feature_update_geometry_from_wkt**](FeatureApi.md#feature_update_geometry_from_wkt) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateGeometryFromWKT | 
[**feature_update_values**](FeatureApi.md#feature_update_values) | **POST** /api/v1/Layer/{layerIdentifier}/Feature/{featureIdentifier}/updateValues | 


# **feature_create_features_from_geo_json**
> ApiInsertReport feature_create_features_from_geo_json(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = [swagger_client.FeatureGeoJSONCreateParameter()] # list[FeatureGeoJSONCreateParameter] | 

try:
    api_response = api_instance.feature_create_features_from_geo_json(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_create_features_from_geo_json: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**list[FeatureGeoJSONCreateParameter]**](FeatureGeoJSONCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_create_features_from_long_lat**
> ApiInsertReport feature_create_features_from_long_lat(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = [swagger_client.FeatureLongLatCreateParameter()] # list[FeatureLongLatCreateParameter] | 

try:
    api_response = api_instance.feature_create_features_from_long_lat(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_create_features_from_long_lat: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**list[FeatureLongLatCreateParameter]**](FeatureLongLatCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_create_features_from_wkt**
> ApiInsertReport feature_create_features_from_wkt(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = [swagger_client.FeatureWKTCreateParameter()] # list[FeatureWKTCreateParameter] | 

try:
    api_response = api_instance.feature_create_features_from_wkt(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_create_features_from_wkt: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**list[FeatureWKTCreateParameter]**](FeatureWKTCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_create_update_features_from_geo_json**
> ApiInsertReport feature_create_update_features_from_geo_json(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = [swagger_client.FeatureGeoJSONCreateParameter()] # list[FeatureGeoJSONCreateParameter] | 

try:
    api_response = api_instance.feature_create_update_features_from_geo_json(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_create_update_features_from_geo_json: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**list[FeatureGeoJSONCreateParameter]**](FeatureGeoJSONCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_create_update_features_from_long_lat**
> ApiInsertReport feature_create_update_features_from_long_lat(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = [swagger_client.FeatureLongLatCreateParameter()] # list[FeatureLongLatCreateParameter] | 

try:
    api_response = api_instance.feature_create_update_features_from_long_lat(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_create_update_features_from_long_lat: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**list[FeatureLongLatCreateParameter]**](FeatureLongLatCreateParameter.md)|  | 

### Return type

[**ApiInsertReport**](ApiInsertReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_create_update_features_from_wkt**
> ApiCreateUpdateReport feature_create_update_features_from_wkt(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = [swagger_client.FeatureWKTCreateParameter()] # list[FeatureWKTCreateParameter] | 

try:
    api_response = api_instance.feature_create_update_features_from_wkt(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_create_update_features_from_wkt: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**list[FeatureWKTCreateParameter]**](FeatureWKTCreateParameter.md)|  | 

### Return type

[**ApiCreateUpdateReport**](ApiCreateUpdateReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_delete_feature**
> ApiDeleteReport feature_delete_feature(layer_identifier, feature_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 

try:
    api_response = api_instance.feature_delete_feature(layer_identifier, feature_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_delete_feature: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 

### Return type

[**ApiDeleteReport**](ApiDeleteReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_delete_features**
> ApiDeleteReport feature_delete_features(layer_identifier, feature_identifiers)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifiers = [swagger_client.list[str]()] # list[str] | 

try:
    api_response = api_instance.feature_delete_features(layer_identifier, feature_identifiers)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_delete_features: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifiers** | **list[str]**|  | 

### Return type

[**ApiDeleteReport**](ApiDeleteReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_feature_in_geo_json**
> FeatureGeoJSON feature_get_feature_in_geo_json(layer_identifier, feature_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 

try:
    api_response = api_instance.feature_get_feature_in_geo_json(layer_identifier, feature_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_feature_in_geo_json: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 

### Return type

[**FeatureGeoJSON**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_feature_in_long_lat**
> FeatureLongLat feature_get_feature_in_long_lat(layer_identifier, feature_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 

try:
    api_response = api_instance.feature_get_feature_in_long_lat(layer_identifier, feature_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_feature_in_long_lat: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 

### Return type

[**FeatureLongLat**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_feature_in_wkt**
> FeatureWKT feature_get_feature_in_wkt(layer_identifier, feature_identifier)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 

try:
    api_response = api_instance.feature_get_feature_in_wkt(layer_identifier, feature_identifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_feature_in_wkt: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 

### Return type

[**FeatureWKT**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_features**
> list[DataRow] feature_get_features(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = swagger_client.FeaturesGetParameters() # FeaturesGetParameters | 

try:
    api_response = api_instance.feature_get_features(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_features: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**list[DataRow]**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_features_in_geo_json**
> list[FeatureGeoJSON] feature_get_features_in_geo_json(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = swagger_client.FeaturesGetParameters() # FeaturesGetParameters | 

try:
    api_response = api_instance.feature_get_features_in_geo_json(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_features_in_geo_json: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**list[FeatureGeoJSON]**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_features_in_long_lat**
> list[FeatureLongLat] feature_get_features_in_long_lat(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = swagger_client.FeaturesGetParameters() # FeaturesGetParameters | 

try:
    api_response = api_instance.feature_get_features_in_long_lat(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_features_in_long_lat: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**list[FeatureLongLat]**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_get_features_in_wkt**
> list[FeatureWKT] feature_get_features_in_wkt(layer_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
param = swagger_client.FeaturesGetParameters() # FeaturesGetParameters | 

try:
    api_response = api_instance.feature_get_features_in_wkt(layer_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_get_features_in_wkt: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **param** | [**FeaturesGetParameters**](FeaturesGetParameters.md)|  | 

### Return type

[**list[FeatureWKT]**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_update_from_geo_json**
> FeatureGeoJSON feature_update_from_geo_json(layer_identifier, feature_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 
param = swagger_client.FeatureGeoJSONUpdateParameter() # FeatureGeoJSONUpdateParameter | 

try:
    api_response = api_instance.feature_update_from_geo_json(layer_identifier, feature_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_update_from_geo_json: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 
 **param** | [**FeatureGeoJSONUpdateParameter**](FeatureGeoJSONUpdateParameter.md)|  | 

### Return type

[**FeatureGeoJSON**](FeatureGeoJSON.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_update_from_long_lat**
> FeatureLongLat feature_update_from_long_lat(layer_identifier, feature_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 
param = swagger_client.FeatureLongLatUpdateParameter() # FeatureLongLatUpdateParameter | 

try:
    api_response = api_instance.feature_update_from_long_lat(layer_identifier, feature_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_update_from_long_lat: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 
 **param** | [**FeatureLongLatUpdateParameter**](FeatureLongLatUpdateParameter.md)|  | 

### Return type

[**FeatureLongLat**](FeatureLongLat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_update_geometry_from_wkt**
> FeatureWKT feature_update_geometry_from_wkt(layer_identifier, feature_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 
param = swagger_client.FeatureWKTUpdateParameter() # FeatureWKTUpdateParameter | 

try:
    api_response = api_instance.feature_update_geometry_from_wkt(layer_identifier, feature_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_update_geometry_from_wkt: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 
 **param** | [**FeatureWKTUpdateParameter**](FeatureWKTUpdateParameter.md)|  | 

### Return type

[**FeatureWKT**](FeatureWKT.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **feature_update_values**
> DataRow feature_update_values(layer_identifier, feature_identifier, param)



### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FeatureApi()
layer_identifier = 'layer_identifier_example' # str | 
feature_identifier = 'feature_identifier_example' # str | 
param = swagger_client.DataRowUpdateParameter() # DataRowUpdateParameter | 

try:
    api_response = api_instance.feature_update_values(layer_identifier, feature_identifier, param)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FeatureApi->feature_update_values: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **layer_identifier** | **str**|  | 
 **feature_identifier** | **str**|  | 
 **param** | [**DataRowUpdateParameter**](DataRowUpdateParameter.md)|  | 

### Return type

[**DataRow**](DataRow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

