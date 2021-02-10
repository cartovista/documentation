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
    /// UpdateViewParameter
    /// </summary>
    [DataContract]
    public partial class UpdateViewParameter :  IEquatable<UpdateViewParameter>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateViewParameter" /> class.
        /// </summary>
        /// <param name="title">The new view title..</param>
        /// <param name="permissions">The list of permissions to assign to the view.  Note: We need to list all the permissions on the view as the missing permissions will be deleted..</param>
        public UpdateViewParameter(string title = default(string), List<ViewReadPermission> permissions = default(List<ViewReadPermission>))
        {
            this.Title = title;
            this.Permissions = permissions;
        }
        
        /// <summary>
        /// The new view title.
        /// </summary>
        /// <value>The new view title.</value>
        [DataMember(Name="title", EmitDefaultValue=false)]
        public string Title { get; set; }

        /// <summary>
        /// The list of permissions to assign to the view.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.
        /// </summary>
        /// <value>The list of permissions to assign to the view.  Note: We need to list all the permissions on the view as the missing permissions will be deleted.</value>
        [DataMember(Name="permissions", EmitDefaultValue=false)]
        public List<ViewReadPermission> Permissions { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateViewParameter {\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Permissions: ").Append(Permissions).Append("\n");
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
            return this.Equals(input as UpdateViewParameter);
        }

        /// <summary>
        /// Returns true if UpdateViewParameter instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateViewParameter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateViewParameter input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
                ) && 
                (
                    this.Permissions == input.Permissions ||
                    this.Permissions != null &&
                    this.Permissions.SequenceEqual(input.Permissions)
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
                if (this.Title != null)
                    hashCode = hashCode * 59 + this.Title.GetHashCode();
                if (this.Permissions != null)
                    hashCode = hashCode * 59 + this.Permissions.GetHashCode();
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
