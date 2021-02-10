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


class ViewReadPermission(object):
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
        'view_id': 'str',
        'identity_id': 'str',
        'is_group': 'bool'
    }

    attribute_map = {
        'view_id': 'viewId',
        'identity_id': 'identityId',
        'is_group': 'isGroup'
    }

    def __init__(self, view_id=None, identity_id=None, is_group=None):  # noqa: E501
        """ViewReadPermission - a model defined in Swagger"""  # noqa: E501

        self._view_id = None
        self._identity_id = None
        self._is_group = None
        self.discriminator = None

        if view_id is not None:
            self.view_id = view_id
        if identity_id is not None:
            self.identity_id = identity_id
        if is_group is not None:
            self.is_group = is_group

    @property
    def view_id(self):
        """Gets the view_id of this ViewReadPermission.  # noqa: E501


        :return: The view_id of this ViewReadPermission.  # noqa: E501
        :rtype: str
        """
        return self._view_id

    @view_id.setter
    def view_id(self, view_id):
        """Sets the view_id of this ViewReadPermission.


        :param view_id: The view_id of this ViewReadPermission.  # noqa: E501
        :type: str
        """

        self._view_id = view_id

    @property
    def identity_id(self):
        """Gets the identity_id of this ViewReadPermission.  # noqa: E501


        :return: The identity_id of this ViewReadPermission.  # noqa: E501
        :rtype: str
        """
        return self._identity_id

    @identity_id.setter
    def identity_id(self, identity_id):
        """Sets the identity_id of this ViewReadPermission.


        :param identity_id: The identity_id of this ViewReadPermission.  # noqa: E501
        :type: str
        """

        self._identity_id = identity_id

    @property
    def is_group(self):
        """Gets the is_group of this ViewReadPermission.  # noqa: E501


        :return: The is_group of this ViewReadPermission.  # noqa: E501
        :rtype: bool
        """
        return self._is_group

    @is_group.setter
    def is_group(self, is_group):
        """Sets the is_group of this ViewReadPermission.


        :param is_group: The is_group of this ViewReadPermission.  # noqa: E501
        :type: bool
        """

        self._is_group = is_group

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
        if issubclass(ViewReadPermission, dict):
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
        if not isinstance(other, ViewReadPermission):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
