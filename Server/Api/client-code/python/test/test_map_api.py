# coding: utf-8

"""
    CartoVista.Server.API.v1

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import swagger_client
from swagger_client.api.map_api import MapApi  # noqa: E501
from swagger_client.rest import ApiException


class TestMapApi(unittest.TestCase):
    """MapApi unit test stubs"""

    def setUp(self):
        self.api = swagger_client.api.map_api.MapApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_map_create_map(self):
        """Test case for map_create_map

        Create a map based on the provided parameters.  # noqa: E501
        """
        pass

    def test_map_delete_map(self):
        """Test case for map_delete_map

        Delete a map by map id or a friendly identifier.  # noqa: E501
        """
        pass

    def test_map_get_grid_layers_by_map(self):
        """Test case for map_get_grid_layers_by_map

        Get the list of grid layers used in a map.  # noqa: E501
        """
        pass

    def test_map_get_layers_by_map(self):
        """Test case for map_get_layers_by_map

        Get the list of Layers used in a map.  # noqa: E501
        """
        pass

    def test_map_get_map(self):
        """Test case for map_get_map

        Get a map based on the map id or a friendly identifier.  # noqa: E501
        """
        pass

    def test_map_get_maps(self):
        """Test case for map_get_maps

        Get all maps the requesting user has access to.  # noqa: E501
        """
        pass

    def test_map_update_map(self):
        """Test case for map_update_map

        Update a map properties based on the given parameters.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
