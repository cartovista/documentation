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


class ErrorDetail(object):
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
        'error_type': 'int',
        'error_code': 'str',
        'description': 'str'
    }

    attribute_map = {
        'error_type': 'ErrorType',
        'error_code': 'ErrorCode',
        'description': 'Description'
    }

    def __init__(self, error_type=None, error_code=None, description=None):  # noqa: E501
        """ErrorDetail - a model defined in Swagger"""  # noqa: E501

        self._error_type = None
        self._error_code = None
        self._description = None
        self.discriminator = None

        if error_type is not None:
            self.error_type = error_type
        if error_code is not None:
            self.error_code = error_code
        if description is not None:
            self.description = description

    @property
    def error_type(self):
        """Gets the error_type of this ErrorDetail.  # noqa: E501


        :return: The error_type of this ErrorDetail.  # noqa: E501
        :rtype: int
        """
        return self._error_type

    @error_type.setter
    def error_type(self, error_type):
        """Sets the error_type of this ErrorDetail.


        :param error_type: The error_type of this ErrorDetail.  # noqa: E501
        :type: int
        """
        allowed_values = [0, 1, 2]  # noqa: E501
        if error_type not in allowed_values:
            raise ValueError(
                "Invalid value for `error_type` ({0}), must be one of {1}"  # noqa: E501
                .format(error_type, allowed_values)
            )

        self._error_type = error_type

    @property
    def error_code(self):
        """Gets the error_code of this ErrorDetail.  # noqa: E501


        :return: The error_code of this ErrorDetail.  # noqa: E501
        :rtype: str
        """
        return self._error_code

    @error_code.setter
    def error_code(self, error_code):
        """Sets the error_code of this ErrorDetail.


        :param error_code: The error_code of this ErrorDetail.  # noqa: E501
        :type: str
        """

        self._error_code = error_code

    @property
    def description(self):
        """Gets the description of this ErrorDetail.  # noqa: E501


        :return: The description of this ErrorDetail.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this ErrorDetail.


        :param description: The description of this ErrorDetail.  # noqa: E501
        :type: str
        """

        self._description = description

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
        if issubclass(ErrorDetail, dict):
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
        if not isinstance(other, ErrorDetail):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
