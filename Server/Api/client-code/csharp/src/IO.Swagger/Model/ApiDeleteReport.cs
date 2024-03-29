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
    /// ApiDeleteReport
    /// </summary>
    [DataContract]
    public partial class ApiDeleteReport :  IEquatable<ApiDeleteReport>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApiDeleteReport" /> class.
        /// </summary>
        /// <param name="deleteCount">deleteCount.</param>
        /// <param name="deletedIdentifiers">deletedIdentifiers.</param>
        /// <param name="errorCount">errorCount.</param>
        /// <param name="errorDetails">errorDetails.</param>
        public ApiDeleteReport(int? deleteCount = default(int?), List<string> deletedIdentifiers = default(List<string>), int? errorCount = default(int?), List<ErrorDetail> errorDetails = default(List<ErrorDetail>))
        {
            this.DeleteCount = deleteCount;
            this.DeletedIdentifiers = deletedIdentifiers;
            this.ErrorCount = errorCount;
            this.ErrorDetails = errorDetails;
        }
        
        /// <summary>
        /// Gets or Sets DeleteCount
        /// </summary>
        [DataMember(Name="DeleteCount", EmitDefaultValue=false)]
        public int? DeleteCount { get; set; }

        /// <summary>
        /// Gets or Sets DeletedIdentifiers
        /// </summary>
        [DataMember(Name="DeletedIdentifiers", EmitDefaultValue=false)]
        public List<string> DeletedIdentifiers { get; set; }

        /// <summary>
        /// Gets or Sets ErrorCount
        /// </summary>
        [DataMember(Name="ErrorCount", EmitDefaultValue=false)]
        public int? ErrorCount { get; set; }

        /// <summary>
        /// Gets or Sets ErrorDetails
        /// </summary>
        [DataMember(Name="ErrorDetails", EmitDefaultValue=false)]
        public List<ErrorDetail> ErrorDetails { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ApiDeleteReport {\n");
            sb.Append("  DeleteCount: ").Append(DeleteCount).Append("\n");
            sb.Append("  DeletedIdentifiers: ").Append(DeletedIdentifiers).Append("\n");
            sb.Append("  ErrorCount: ").Append(ErrorCount).Append("\n");
            sb.Append("  ErrorDetails: ").Append(ErrorDetails).Append("\n");
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
            return this.Equals(input as ApiDeleteReport);
        }

        /// <summary>
        /// Returns true if ApiDeleteReport instances are equal
        /// </summary>
        /// <param name="input">Instance of ApiDeleteReport to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ApiDeleteReport input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DeleteCount == input.DeleteCount ||
                    (this.DeleteCount != null &&
                    this.DeleteCount.Equals(input.DeleteCount))
                ) && 
                (
                    this.DeletedIdentifiers == input.DeletedIdentifiers ||
                    this.DeletedIdentifiers != null &&
                    this.DeletedIdentifiers.SequenceEqual(input.DeletedIdentifiers)
                ) && 
                (
                    this.ErrorCount == input.ErrorCount ||
                    (this.ErrorCount != null &&
                    this.ErrorCount.Equals(input.ErrorCount))
                ) && 
                (
                    this.ErrorDetails == input.ErrorDetails ||
                    this.ErrorDetails != null &&
                    this.ErrorDetails.SequenceEqual(input.ErrorDetails)
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
                if (this.DeleteCount != null)
                    hashCode = hashCode * 59 + this.DeleteCount.GetHashCode();
                if (this.DeletedIdentifiers != null)
                    hashCode = hashCode * 59 + this.DeletedIdentifiers.GetHashCode();
                if (this.ErrorCount != null)
                    hashCode = hashCode * 59 + this.ErrorCount.GetHashCode();
                if (this.ErrorDetails != null)
                    hashCode = hashCode * 59 + this.ErrorDetails.GetHashCode();
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
