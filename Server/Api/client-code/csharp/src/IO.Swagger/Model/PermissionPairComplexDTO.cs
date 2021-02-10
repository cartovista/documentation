/* 
 * CartoVista.Server.API.v1
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// PermissionPairComplexDTO
    /// </summary>
    [DataContract]
    public partial class PermissionPairComplexDTO :  IEquatable<PermissionPairComplexDTO>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PermissionPairComplexDTO" /> class.
        /// </summary>
        /// <param name="user">user.</param>
        /// <param name="permissionName">permissionName.</param>
        /// <param name="secureObjectGuid">secureObjectGuid.</param>
        public PermissionPairComplexDTO(SecurityIdentityDTO user = default(SecurityIdentityDTO), string permissionName = default(string), Guid? secureObjectGuid = default(Guid?))
        {
            this.User = user;
            this.PermissionName = permissionName;
            this.SecureObjectGuid = secureObjectGuid;
        }
        
        /// <summary>
        /// Gets or Sets User
        /// </summary>
        [DataMember(Name="user", EmitDefaultValue=false)]
        public SecurityIdentityDTO User { get; set; }

        /// <summary>
        /// Gets or Sets PermissionName
        /// </summary>
        [DataMember(Name="permissionName", EmitDefaultValue=false)]
        public string PermissionName { get; set; }

        /// <summary>
        /// Gets or Sets SecureObjectGuid
        /// </summary>
        [DataMember(Name="secureObjectGuid", EmitDefaultValue=false)]
        public Guid? SecureObjectGuid { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PermissionPairComplexDTO {\n");
            sb.Append("  User: ").Append(User).Append("\n");
            sb.Append("  PermissionName: ").Append(PermissionName).Append("\n");
            sb.Append("  SecureObjectGuid: ").Append(SecureObjectGuid).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as PermissionPairComplexDTO);
        }

        /// <summary>
        /// Returns true if PermissionPairComplexDTO instances are equal
        /// </summary>
        /// <param name="input">Instance of PermissionPairComplexDTO to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PermissionPairComplexDTO input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.User == input.User ||
                    (this.User != null &&
                    this.User.Equals(input.User))
                ) && 
                (
                    this.PermissionName == input.PermissionName ||
                    (this.PermissionName != null &&
                    this.PermissionName.Equals(input.PermissionName))
                ) && 
                (
                    this.SecureObjectGuid == input.SecureObjectGuid ||
                    (this.SecureObjectGuid != null &&
                    this.SecureObjectGuid.Equals(input.SecureObjectGuid))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.User != null)
                    hashCode = hashCode * 59 + this.User.GetHashCode();
                if (this.PermissionName != null)
                    hashCode = hashCode * 59 + this.PermissionName.GetHashCode();
                if (this.SecureObjectGuid != null)
                    hashCode = hashCode * 59 + this.SecureObjectGuid.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
