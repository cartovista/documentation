
from swagger_client import Configuration
from swagger_client import ApiClient
from swagger_client import models
from swagger_client import api
import sys

###################################################
# Example usage of the swagger generated api client
###################################################

configWithUrl = Configuration()
# Setting base url in configuration
configWithUrl.host = "{absolute_url_to_cartovista_server}/WebPortalServices"
# Initiating api_client to use the configuration above instead of default and adding apiKey to the header of all calls
apiClientWithKey = ApiClient(
    configuration=configWithUrl, header_name="apiKey", header_value="{api_key}")
#apiClientWithKey = ApiClient(configuration=configWithUrl, header_name="apiKey", header_value="{api_key}", secretKey_name="secretKey", secretKey_value="{secretKey}")

###################################################
# Create layer example
###################################################
# Initiating dataTableApi to use the above client instead of the default
layerApi = api.LayerApi(api_client=apiClientWithKey)
layerCreateParams = models.LayerCreateParameter(identifier="MyTestingAPILayer", proj4="", name="MyTestingAPILayer", metadata="", geometry_type="Point", description="description",
                                                vector_tiling=True, system_identifier="", data_table_system_identifier="string", feature_id_column_system_identifier="00000340-0000-0000-0000-005948200000")
layerApi.layer_create_layer(layerCreateParams)

###################################################
# Create dataColumn example
###################################################
dataColumnApi = api.DataColumnApi(api_client=apiClientWithKey)
dataColumnsCreateParams = models.data_column_create_parameter.DataColumnCreateParameter(
    identifier="MyTestingAPIColumn", carto_vista_data_type="Number", name="MyTestingAPIColumn", description="description", metadata="string", units="things", system_identifier="00049370-0000-0000-0000-000000003958")
dataColumnApi.data_column_create_layer_data_columns(
    layer_identifier="MyTestingAPILayer", parameters=[dataColumnsCreateParams])

###################################################
# Delete layer example
###################################################
layerApi.layer_delete_layer_by_id(layer_identifier="MyTestingAPILayer")

###################################################
# Layer create from zip example
###################################################
layerApi.layer_create_layer_from_zip(
    file=r"{absolute_path_to_gis__shapefileOrMapinfoData_zipped}")

###################################################
# Create dataTable example
###################################################
dataTableApi = api.DataTableApi(api_client=apiClientWithKey)
dataTableCreateParam = models.DataTableCreateParameter(identifier="MyTestingAPIDataTable", name="MyTestingAPIDataTable",
                                                       metadata="string", description="description", system_identifier="00000000-0000-0000-0000-000000003958")
dataTableApi.data_table_create_data_table(dataTableCreateParam)

###################################################
# Delete dataTable example
###################################################
dataTableApi.data_table_delete_data_table(
    data_table_identifier="MyTestingAPIDataTable")


###################################################
# DataTable create from Excel example
###################################################
dataTableApi.data_table_create_from_excel(file=r"{absolute_path_to_excel}")
