# coding: utf-8

"""
    CartoVista.Server.API.v1

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class RouteParams(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'origin_latitude': 'float',
        'origin_longitude': 'float',
        'destination_latitude': 'float',
        'destination_longitude': 'float'
    }

    attribute_map = {
        'origin_latitude': 'originLatitude',
        'origin_longitude': 'originLongitude',
        'destination_latitude': 'destinationLatitude',
        'destination_longitude': 'destinationLongitude'
    }

    def __init__(self, origin_latitude=None, origin_longitude=None, destination_latitude=None, destination_longitude=None):  # noqa: E501
        """RouteParams - a model defined in Swagger"""  # noqa: E501

        self._origin_latitude = None
        self._origin_longitude = None
        self._destination_latitude = None
        self._destination_longitude = None
        self.discriminator = None

        if origin_latitude is not None:
            self.origin_latitude = origin_latitude
        if origin_longitude is not None:
            self.origin_longitude = origin_longitude
        if destination_latitude is not None:
            self.destination_latitude = destination_latitude
        if destination_longitude is not None:
            self.destination_longitude = destination_longitude

    @property
    def origin_latitude(self):
        """Gets the origin_latitude of this RouteParams.  # noqa: E501


        :return: The origin_latitude of this RouteParams.  # noqa: E501
        :rtype: float
        """
        return self._origin_latitude

    @origin_latitude.setter
    def origin_latitude(self, origin_latitude):
        """Sets the origin_latitude of this RouteParams.


        :param origin_latitude: The origin_latitude of this RouteParams.  # noqa: E501
        :type: float
        """

        self._origin_latitude = origin_latitude

    @property
    def origin_longitude(self):
        """Gets the origin_longitude of this RouteParams.  # noqa: E501


        :return: The origin_longitude of this RouteParams.  # noqa: E501
        :rtype: float
        """
        return self._origin_longitude

    @origin_longitude.setter
    def origin_longitude(self, origin_longitude):
        """Sets the origin_longitude of this RouteParams.


        :param origin_longitude: The origin_longitude of this RouteParams.  # noqa: E501
        :type: float
        """

        self._origin_longitude = origin_longitude

    @property
    def destination_latitude(self):
        """Gets the destination_latitude of this RouteParams.  # noqa: E501


        :return: The destination_latitude of this RouteParams.  # noqa: E501
        :rtype: float
        """
        return self._destination_latitude

    @destination_latitude.setter
    def destination_latitude(self, destination_latitude):
        """Sets the destination_latitude of this RouteParams.


        :param destination_latitude: The destination_latitude of this RouteParams.  # noqa: E501
        :type: float
        """

        self._destination_latitude = destination_latitude

    @property
    def destination_longitude(self):
        """Gets the destination_longitude of this RouteParams.  # noqa: E501


        :return: The destination_longitude of this RouteParams.  # noqa: E501
        :rtype: float
        """
        return self._destination_longitude

    @destination_longitude.setter
    def destination_longitude(self, destination_longitude):
        """Sets the destination_longitude of this RouteParams.


        :param destination_longitude: The destination_longitude of this RouteParams.  # noqa: E501
        :type: float
        """

        self._destination_longitude = destination_longitude

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(RouteParams, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, RouteParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
