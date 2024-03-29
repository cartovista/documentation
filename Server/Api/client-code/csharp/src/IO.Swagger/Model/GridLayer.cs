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
    /// GridLayer
    /// </summary>
    [DataContract]
    public partial class GridLayer :  IEquatable<GridLayer>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GridLayer" /> class.
        /// </summary>
        /// <param name="uniqueIdentifier">uniqueIdentifier.</param>
        /// <param name="description">description.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="proj4">proj4.</param>
        /// <param name="units">units.</param>
        /// <param name="precision">precision.</param>
        /// <param name="gridSourceCount">gridSourceCount.</param>
        /// <param name="name">name.</param>
        /// <param name="creationTime">creationTime.</param>
        /// <param name="modifiedTime">modifiedTime.</param>
        /// <param name="systemIdentifier">systemIdentifier.</param>
        public GridLayer(string uniqueIdentifier = default(string), string description = default(string), string metadata = default(string), string proj4 = default(string), string units = default(string), int? precision = default(int?), int? gridSourceCount = default(int?), string name = default(string), DateTime? creationTime = default(DateTime?), DateTime? modifiedTime = default(DateTime?), Guid? systemIdentifier = default(Guid?))
        {
            this.UniqueIdentifier = uniqueIdentifier;
            this.Description = description;
            this.Metadata = metadata;
            this.Proj4 = proj4;
            this.Units = units;
            this.Precision = precision;
            this.GridSourceCount = gridSourceCount;
            this.Name = name;
            this.CreationTime = creationTime;
            this.ModifiedTime = modifiedTime;
            this.SystemIdentifier = systemIdentifier;
        }
        
        /// <summary>
        /// Gets or Sets UniqueIdentifier
        /// </summary>
        [DataMember(Name="uniqueIdentifier", EmitDefaultValue=false)]
        public string UniqueIdentifier { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public string Metadata { get; set; }

        /// <summary>
        /// Gets or Sets Proj4
        /// </summary>
        [DataMember(Name="proj4", EmitDefaultValue=false)]
        public string Proj4 { get; set; }

        /// <summary>
        /// Gets or Sets Units
        /// </summary>
        [DataMember(Name="units", EmitDefaultValue=false)]
        public string Units { get; set; }

        /// <summary>
        /// Gets or Sets Precision
        /// </summary>
        [DataMember(Name="precision", EmitDefaultValue=false)]
        public int? Precision { get; set; }

        /// <summary>
        /// Gets or Sets GridSourceCount
        /// </summary>
        [DataMember(Name="gridSourceCount", EmitDefaultValue=false)]
        public int? GridSourceCount { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets CreationTime
        /// </summary>
        [DataMember(Name="creationTime", EmitDefaultValue=false)]
        public DateTime? CreationTime { get; set; }

        /// <summary>
        /// Gets or Sets ModifiedTime
        /// </summary>
        [DataMember(Name="modifiedTime", EmitDefaultValue=false)]
        public DateTime? ModifiedTime { get; set; }

        /// <summary>
        /// Gets or Sets SystemIdentifier
        /// </summary>
        [DataMember(Name="systemIdentifier", EmitDefaultValue=false)]
        public Guid? SystemIdentifier { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GridLayer {\n");
            sb.Append("  UniqueIdentifier: ").Append(UniqueIdentifier).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Proj4: ").Append(Proj4).Append("\n");
            sb.Append("  Units: ").Append(Units).Append("\n");
            sb.Append("  Precision: ").Append(Precision).Append("\n");
            sb.Append("  GridSourceCount: ").Append(GridSourceCount).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  CreationTime: ").Append(CreationTime).Append("\n");
            sb.Append("  ModifiedTime: ").Append(ModifiedTime).Append("\n");
            sb.Append("  SystemIdentifier: ").Append(SystemIdentifier).Append("\n");
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
            return this.Equals(input as GridLayer);
        }

        /// <summary>
        /// Returns true if GridLayer instances are equal
        /// </summary>
        /// <param name="input">Instance of GridLayer to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GridLayer input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.UniqueIdentifier == input.UniqueIdentifier ||
                    (this.UniqueIdentifier != null &&
                    this.UniqueIdentifier.Equals(input.UniqueIdentifier))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    (this.Metadata != null &&
                    this.Metadata.Equals(input.Metadata))
                ) && 
                (
                    this.Proj4 == input.Proj4 ||
                    (this.Proj4 != null &&
                    this.Proj4.Equals(input.Proj4))
                ) && 
                (
                    this.Units == input.Units ||
                    (this.Units != null &&
                    this.Units.Equals(input.Units))
                ) && 
                (
                    this.Precision == input.Precision ||
                    (this.Precision != null &&
                    this.Precision.Equals(input.Precision))
                ) && 
                (
                    this.GridSourceCount == input.GridSourceCount ||
                    (this.GridSourceCount != null &&
                    this.GridSourceCount.Equals(input.GridSourceCount))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.CreationTime == input.CreationTime ||
                    (this.CreationTime != null &&
                    this.CreationTime.Equals(input.CreationTime))
                ) && 
                (
                    this.ModifiedTime == input.ModifiedTime ||
                    (this.ModifiedTime != null &&
                    this.ModifiedTime.Equals(input.ModifiedTime))
                ) && 
                (
                    this.SystemIdentifier == input.SystemIdentifier ||
                    (this.SystemIdentifier != null &&
                    this.SystemIdentifier.Equals(input.SystemIdentifier))
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
                if (this.UniqueIdentifier != null)
                    hashCode = hashCode * 59 + this.UniqueIdentifier.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Proj4 != null)
                    hashCode = hashCode * 59 + this.Proj4.GetHashCode();
                if (this.Units != null)
                    hashCode = hashCode * 59 + this.Units.GetHashCode();
                if (this.Precision != null)
                    hashCode = hashCode * 59 + this.Precision.GetHashCode();
                if (this.GridSourceCount != null)
                    hashCode = hashCode * 59 + this.GridSourceCount.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.CreationTime != null)
                    hashCode = hashCode * 59 + this.CreationTime.GetHashCode();
                if (this.ModifiedTime != null)
                    hashCode = hashCode * 59 + this.ModifiedTime.GetHashCode();
                if (this.SystemIdentifier != null)
                    hashCode = hashCode * 59 + this.SystemIdentifier.GetHashCode();
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
