# CartoVistaserverapiv1.SecurityIdentityDTO

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isAnynomous** | **Boolean** |  | [optional] 
**displayName** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**isGroup** | **Boolean** |  | [optional] 
**lastModificationTime** | **Date** |  | [optional] 
**creationTime** | **Date** |  | [optional] 
**tenantId** | **String** |  | [optional] 
**provider** | **String** |  | [optional] 
**identifier** | **String** |  | [optional] 
**providerStatus** | **String** |  | [optional] 
**path** | **String** |  | [optional] 
**permissions** | **[String]** |  | [optional] 
**secureObjectPermissions** | [**[PermissionPairDTO]**](PermissionPairDTO.md) |  | [optional] 


<a name="ProviderEnum"></a>
## Enum: ProviderEnum


* `cartoVista` (value: `"CartoVista"`)

* `activeDirectory` (value: `"ActiveDirectory"`)




<a name="ProviderStatusEnum"></a>
## Enum: ProviderStatusEnum


* `available` (value: `"Available"`)

* `unavailable` (value: `"Unavailable"`)




