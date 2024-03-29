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


class Map(object):
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
        'id': 'str',
        'title': 'str',
        'unique_identifier': 'str',
        'description': 'str',
        'language': 'str',
        'status': 'int',
        'type': 'int',
        'is_map_territory_ready': 'bool',
        'editable': 'bool',
        'seo_title': 'str',
        'seo_description': 'str',
        'seo_custom_html': 'str',
        'scoring_enabled': 'bool'
    }

    attribute_map = {
        'id': 'id',
        'title': 'title',
        'unique_identifier': 'uniqueIdentifier',
        'description': 'description',
        'language': 'language',
        'status': 'status',
        'type': 'type',
        'is_map_territory_ready': 'isMapTerritoryReady',
        'editable': 'editable',
        'seo_title': 'seoTitle',
        'seo_description': 'seoDescription',
        'seo_custom_html': 'seoCustomHTML',
        'scoring_enabled': 'scoringEnabled'
    }

    def __init__(self, id=None, title=None, unique_identifier=None, description=None, language=None, status=None, type=None, is_map_territory_ready=None, editable=None, seo_title=None, seo_description=None, seo_custom_html=None, scoring_enabled=None):  # noqa: E501
        """Map - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._title = None
        self._unique_identifier = None
        self._description = None
        self._language = None
        self._status = None
        self._type = None
        self._is_map_territory_ready = None
        self._editable = None
        self._seo_title = None
        self._seo_description = None
        self._seo_custom_html = None
        self._scoring_enabled = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if title is not None:
            self.title = title
        if unique_identifier is not None:
            self.unique_identifier = unique_identifier
        if description is not None:
            self.description = description
        if language is not None:
            self.language = language
        if status is not None:
            self.status = status
        if type is not None:
            self.type = type
        if is_map_territory_ready is not None:
            self.is_map_territory_ready = is_map_territory_ready
        if editable is not None:
            self.editable = editable
        if seo_title is not None:
            self.seo_title = seo_title
        if seo_description is not None:
            self.seo_description = seo_description
        if seo_custom_html is not None:
            self.seo_custom_html = seo_custom_html
        if scoring_enabled is not None:
            self.scoring_enabled = scoring_enabled

    @property
    def id(self):
        """Gets the id of this Map.  # noqa: E501


        :return: The id of this Map.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Map.


        :param id: The id of this Map.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def title(self):
        """Gets the title of this Map.  # noqa: E501


        :return: The title of this Map.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this Map.


        :param title: The title of this Map.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def unique_identifier(self):
        """Gets the unique_identifier of this Map.  # noqa: E501


        :return: The unique_identifier of this Map.  # noqa: E501
        :rtype: str
        """
        return self._unique_identifier

    @unique_identifier.setter
    def unique_identifier(self, unique_identifier):
        """Sets the unique_identifier of this Map.


        :param unique_identifier: The unique_identifier of this Map.  # noqa: E501
        :type: str
        """

        self._unique_identifier = unique_identifier

    @property
    def description(self):
        """Gets the description of this Map.  # noqa: E501


        :return: The description of this Map.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Map.


        :param description: The description of this Map.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def language(self):
        """Gets the language of this Map.  # noqa: E501


        :return: The language of this Map.  # noqa: E501
        :rtype: str
        """
        return self._language

    @language.setter
    def language(self, language):
        """Sets the language of this Map.


        :param language: The language of this Map.  # noqa: E501
        :type: str
        """
        allowed_values = ["fr", "en", "es", "de", "pt", "it", "tr"]  # noqa: E501
        if language not in allowed_values:
            raise ValueError(
                "Invalid value for `language` ({0}), must be one of {1}"  # noqa: E501
                .format(language, allowed_values)
            )

        self._language = language

    @property
    def status(self):
        """Gets the status of this Map.  # noqa: E501


        :return: The status of this Map.  # noqa: E501
        :rtype: int
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Map.


        :param status: The status of this Map.  # noqa: E501
        :type: int
        """
        allowed_values = [0, 1, 2, 3, 1000]  # noqa: E501
        if status not in allowed_values:
            raise ValueError(
                "Invalid value for `status` ({0}), must be one of {1}"  # noqa: E501
                .format(status, allowed_values)
            )

        self._status = status

    @property
    def type(self):
        """Gets the type of this Map.  # noqa: E501


        :return: The type of this Map.  # noqa: E501
        :rtype: int
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this Map.


        :param type: The type of this Map.  # noqa: E501
        :type: int
        """
        allowed_values = [1, 2]  # noqa: E501
        if type not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

    @property
    def is_map_territory_ready(self):
        """Gets the is_map_territory_ready of this Map.  # noqa: E501


        :return: The is_map_territory_ready of this Map.  # noqa: E501
        :rtype: bool
        """
        return self._is_map_territory_ready

    @is_map_territory_ready.setter
    def is_map_territory_ready(self, is_map_territory_ready):
        """Sets the is_map_territory_ready of this Map.


        :param is_map_territory_ready: The is_map_territory_ready of this Map.  # noqa: E501
        :type: bool
        """

        self._is_map_territory_ready = is_map_territory_ready

    @property
    def editable(self):
        """Gets the editable of this Map.  # noqa: E501


        :return: The editable of this Map.  # noqa: E501
        :rtype: bool
        """
        return self._editable

    @editable.setter
    def editable(self, editable):
        """Sets the editable of this Map.


        :param editable: The editable of this Map.  # noqa: E501
        :type: bool
        """

        self._editable = editable

    @property
    def seo_title(self):
        """Gets the seo_title of this Map.  # noqa: E501


        :return: The seo_title of this Map.  # noqa: E501
        :rtype: str
        """
        return self._seo_title

    @seo_title.setter
    def seo_title(self, seo_title):
        """Sets the seo_title of this Map.


        :param seo_title: The seo_title of this Map.  # noqa: E501
        :type: str
        """

        self._seo_title = seo_title

    @property
    def seo_description(self):
        """Gets the seo_description of this Map.  # noqa: E501


        :return: The seo_description of this Map.  # noqa: E501
        :rtype: str
        """
        return self._seo_description

    @seo_description.setter
    def seo_description(self, seo_description):
        """Sets the seo_description of this Map.


        :param seo_description: The seo_description of this Map.  # noqa: E501
        :type: str
        """

        self._seo_description = seo_description

    @property
    def seo_custom_html(self):
        """Gets the seo_custom_html of this Map.  # noqa: E501


        :return: The seo_custom_html of this Map.  # noqa: E501
        :rtype: str
        """
        return self._seo_custom_html

    @seo_custom_html.setter
    def seo_custom_html(self, seo_custom_html):
        """Sets the seo_custom_html of this Map.


        :param seo_custom_html: The seo_custom_html of this Map.  # noqa: E501
        :type: str
        """

        self._seo_custom_html = seo_custom_html

    @property
    def scoring_enabled(self):
        """Gets the scoring_enabled of this Map.  # noqa: E501


        :return: The scoring_enabled of this Map.  # noqa: E501
        :rtype: bool
        """
        return self._scoring_enabled

    @scoring_enabled.setter
    def scoring_enabled(self, scoring_enabled):
        """Sets the scoring_enabled of this Map.


        :param scoring_enabled: The scoring_enabled of this Map.  # noqa: E501
        :type: bool
        """

        self._scoring_enabled = scoring_enabled

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
        if issubclass(Map, dict):
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
        if not isinstance(other, Map):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
