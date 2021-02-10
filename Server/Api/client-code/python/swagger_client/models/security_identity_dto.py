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


class SecurityIdentityDTO(object):
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
        'is_anynomous': 'bool',
        'display_name': 'str',
        'name': 'str',
        'id': 'str',
        'is_group': 'bool',
        'last_modification_time': 'datetime',
        'creation_time': 'datetime',
        'tenant_id': 'str',
        'provider': 'str',
        'identifier': 'str',
        'provider_status': 'str',
        'path': 'str',
        'permissions': 'list[str]',
        'secure_object_permissions': 'list[PermissionPairDTO]'
    }

    attribute_map = {
        'is_anynomous': 'isAnynomous',
        'display_name': 'displayName',
        'name': 'name',
        'id': 'id',
        'is_group': 'isGroup',
        'last_modification_time': 'lastModificationTime',
        'creation_time': 'creationTime',
        'tenant_id': 'tenantId',
        'provider': 'provider',
        'identifier': 'identifier',
        'provider_status': 'providerStatus',
        'path': 'path',
        'permissions': 'permissions',
        'secure_object_permissions': 'secureObjectPermissions'
    }

    def __init__(self, is_anynomous=None, display_name=None, name=None, id=None, is_group=None, last_modification_time=None, creation_time=None, tenant_id=None, provider=None, identifier=None, provider_status=None, path=None, permissions=None, secure_object_permissions=None):  # noqa: E501
        """SecurityIdentityDTO - a model defined in Swagger"""  # noqa: E501

        self._is_anynomous = None
        self._display_name = None
        self._name = None
        self._id = None
        self._is_group = None
        self._last_modification_time = None
        self._creation_time = None
        self._tenant_id = None
        self._provider = None
        self._identifier = None
        self._provider_status = None
        self._path = None
        self._permissions = None
        self._secure_object_permissions = None
        self.discriminator = None

        if is_anynomous is not None:
            self.is_anynomous = is_anynomous
        if display_name is not None:
            self.display_name = display_name
        if name is not None:
            self.name = name
        if id is not None:
            self.id = id
        if is_group is not None:
            self.is_group = is_group
        if last_modification_time is not None:
            self.last_modification_time = last_modification_time
        if creation_time is not None:
            self.creation_time = creation_time
        if tenant_id is not None:
            self.tenant_id = tenant_id
        if provider is not None:
            self.provider = provider
        if identifier is not None:
            self.identifier = identifier
        if provider_status is not None:
            self.provider_status = provider_status
        if path is not None:
            self.path = path
        if permissions is not None:
            self.permissions = permissions
        if secure_object_permissions is not None:
            self.secure_object_permissions = secure_object_permissions

    @property
    def is_anynomous(self):
        """Gets the is_anynomous of this SecurityIdentityDTO.  # noqa: E501


        :return: The is_anynomous of this SecurityIdentityDTO.  # noqa: E501
        :rtype: bool
        """
        return self._is_anynomous

    @is_anynomous.setter
    def is_anynomous(self, is_anynomous):
        """Sets the is_anynomous of this SecurityIdentityDTO.


        :param is_anynomous: The is_anynomous of this SecurityIdentityDTO.  # noqa: E501
        :type: bool
        """

        self._is_anynomous = is_anynomous

    @property
    def display_name(self):
        """Gets the display_name of this SecurityIdentityDTO.  # noqa: E501


        :return: The display_name of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._display_name

    @display_name.setter
    def display_name(self, display_name):
        """Sets the display_name of this SecurityIdentityDTO.


        :param display_name: The display_name of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """

        self._display_name = display_name

    @property
    def name(self):
        """Gets the name of this SecurityIdentityDTO.  # noqa: E501


        :return: The name of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this SecurityIdentityDTO.


        :param name: The name of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def id(self):
        """Gets the id of this SecurityIdentityDTO.  # noqa: E501


        :return: The id of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SecurityIdentityDTO.


        :param id: The id of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_group(self):
        """Gets the is_group of this SecurityIdentityDTO.  # noqa: E501


        :return: The is_group of this SecurityIdentityDTO.  # noqa: E501
        :rtype: bool
        """
        return self._is_group

    @is_group.setter
    def is_group(self, is_group):
        """Sets the is_group of this SecurityIdentityDTO.


        :param is_group: The is_group of this SecurityIdentityDTO.  # noqa: E501
        :type: bool
        """

        self._is_group = is_group

    @property
    def last_modification_time(self):
        """Gets the last_modification_time of this SecurityIdentityDTO.  # noqa: E501


        :return: The last_modification_time of this SecurityIdentityDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._last_modification_time

    @last_modification_time.setter
    def last_modification_time(self, last_modification_time):
        """Sets the last_modification_time of this SecurityIdentityDTO.


        :param last_modification_time: The last_modification_time of this SecurityIdentityDTO.  # noqa: E501
        :type: datetime
        """

        self._last_modification_time = last_modification_time

    @property
    def creation_time(self):
        """Gets the creation_time of this SecurityIdentityDTO.  # noqa: E501


        :return: The creation_time of this SecurityIdentityDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._creation_time

    @creation_time.setter
    def creation_time(self, creation_time):
        """Sets the creation_time of this SecurityIdentityDTO.


        :param creation_time: The creation_time of this SecurityIdentityDTO.  # noqa: E501
        :type: datetime
        """

        self._creation_time = creation_time

    @property
    def tenant_id(self):
        """Gets the tenant_id of this SecurityIdentityDTO.  # noqa: E501


        :return: The tenant_id of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._tenant_id

    @tenant_id.setter
    def tenant_id(self, tenant_id):
        """Sets the tenant_id of this SecurityIdentityDTO.


        :param tenant_id: The tenant_id of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """

        self._tenant_id = tenant_id

    @property
    def provider(self):
        """Gets the provider of this SecurityIdentityDTO.  # noqa: E501


        :return: The provider of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._provider

    @provider.setter
    def provider(self, provider):
        """Sets the provider of this SecurityIdentityDTO.


        :param provider: The provider of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """
        allowed_values = ["CartoVista", "ActiveDirectory"]  # noqa: E501
        if provider not in allowed_values:
            raise ValueError(
                "Invalid value for `provider` ({0}), must be one of {1}"  # noqa: E501
                .format(provider, allowed_values)
            )

        self._provider = provider

    @property
    def identifier(self):
        """Gets the identifier of this SecurityIdentityDTO.  # noqa: E501


        :return: The identifier of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._identifier

    @identifier.setter
    def identifier(self, identifier):
        """Sets the identifier of this SecurityIdentityDTO.


        :param identifier: The identifier of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """

        self._identifier = identifier

    @property
    def provider_status(self):
        """Gets the provider_status of this SecurityIdentityDTO.  # noqa: E501


        :return: The provider_status of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._provider_status

    @provider_status.setter
    def provider_status(self, provider_status):
        """Sets the provider_status of this SecurityIdentityDTO.


        :param provider_status: The provider_status of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """
        allowed_values = ["Available", "Unavailable"]  # noqa: E501
        if provider_status not in allowed_values:
            raise ValueError(
                "Invalid value for `provider_status` ({0}), must be one of {1}"  # noqa: E501
                .format(provider_status, allowed_values)
            )

        self._provider_status = provider_status

    @property
    def path(self):
        """Gets the path of this SecurityIdentityDTO.  # noqa: E501


        :return: The path of this SecurityIdentityDTO.  # noqa: E501
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this SecurityIdentityDTO.


        :param path: The path of this SecurityIdentityDTO.  # noqa: E501
        :type: str
        """

        self._path = path

    @property
    def permissions(self):
        """Gets the permissions of this SecurityIdentityDTO.  # noqa: E501


        :return: The permissions of this SecurityIdentityDTO.  # noqa: E501
        :rtype: list[str]
        """
        return self._permissions

    @permissions.setter
    def permissions(self, permissions):
        """Sets the permissions of this SecurityIdentityDTO.


        :param permissions: The permissions of this SecurityIdentityDTO.  # noqa: E501
        :type: list[str]
        """

        self._permissions = permissions

    @property
    def secure_object_permissions(self):
        """Gets the secure_object_permissions of this SecurityIdentityDTO.  # noqa: E501


        :return: The secure_object_permissions of this SecurityIdentityDTO.  # noqa: E501
        :rtype: list[PermissionPairDTO]
        """
        return self._secure_object_permissions

    @secure_object_permissions.setter
    def secure_object_permissions(self, secure_object_permissions):
        """Sets the secure_object_permissions of this SecurityIdentityDTO.


        :param secure_object_permissions: The secure_object_permissions of this SecurityIdentityDTO.  # noqa: E501
        :type: list[PermissionPairDTO]
        """

        self._secure_object_permissions = secure_object_permissions

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
        if issubclass(SecurityIdentityDTO, dict):
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
        if not isinstance(other, SecurityIdentityDTO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
