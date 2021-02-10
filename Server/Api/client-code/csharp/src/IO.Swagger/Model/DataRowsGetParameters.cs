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
    /// DataRowsGetParameters
    /// </summary>
    [DataContract]
    public partial class DataRowsGetParameters :  IEquatable<DataRowsGetParameters>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataRowsGetParameters" /> class.
        /// </summary>
        /// <param name="startAt">startAt.</param>
        /// <param name="rowCount">rowCount.</param>
        public DataRowsGetParameters(int? startAt = default(int?), int? rowCount = default(int?))
        {
            this.StartAt = startAt;
            this.RowCount = rowCount;
        }
        
        /// <summary>
        /// Gets or Sets StartAt
        /// </summary>
        [DataMember(Name="StartAt", EmitDefaultValue=false)]
        public int? StartAt { get; set; }

        /// <summary>
        /// Gets or Sets RowCount
        /// </summary>
        [DataMember(Name="RowCount", EmitDefaultValue=false)]
        public int? RowCount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DataRowsGetParameters {\n");
            sb.Append("  StartAt: ").Append(StartAt).Append("\n");
            sb.Append("  RowCount: ").Append(RowCount).Append("\n");
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
            return this.Equals(input as DataRowsGetParameters);
        }

        /// <summary>
        /// Returns true if DataRowsGetParameters instances are equal
        /// </summary>
        /// <param name="input">Instance of DataRowsGetParameters to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DataRowsGetParameters input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.StartAt == input.StartAt ||
                    (this.StartAt != null &&
                    this.StartAt.Equals(input.StartAt))
                ) && 
                (
                    this.RowCount == input.RowCount ||
                    (this.RowCount != null &&
                    this.RowCount.Equals(input.RowCount))
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
                if (this.StartAt != null)
                    hashCode = hashCode * 59 + this.StartAt.GetHashCode();
                if (this.RowCount != null)
                    hashCode = hashCode * 59 + this.RowCount.GetHashCode();
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
