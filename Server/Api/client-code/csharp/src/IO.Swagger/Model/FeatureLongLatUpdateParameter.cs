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
    /// FeatureLongLatUpdateParameter
    /// </summary>
    [DataContract]
    public partial class FeatureLongLatUpdateParameter :  IEquatable<FeatureLongLatUpdateParameter>, IValidatableObject
    {
        /// <summary>
        /// Defines FeatureType
        /// </summary>
        public enum FeatureTypeEnum
        {
            
            /// <summary>
            /// Enum NUMBER_0 for value: 0
            /// </summary>
            
            NUMBER_0 = 0,
            
            /// <summary>
            /// Enum NUMBER_1 for value: 1
            /// </summary>
            
            NUMBER_1 = 1,
            
            /// <summary>
            /// Enum NUMBER_2 for value: 2
            /// </summary>
            
            NUMBER_2 = 2,
            
            /// <summary>
            /// Enum NUMBER_3 for value: 3
            /// </summary>
            
            NUMBER_3 = 3
        }

        /// <summary>
        /// Gets or Sets FeatureType
        /// </summary>
        [DataMember(Name="FeatureType", EmitDefaultValue=false)]
        public FeatureTypeEnum? FeatureType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="FeatureLongLatUpdateParameter" /> class.
        /// </summary>
        /// <param name="longitude">longitude.</param>
        /// <param name="latitude">latitude.</param>
        /// <param name="proj4">proj4.</param>
        public FeatureLongLatUpdateParameter(double? longitude = default(double?), double? latitude = default(double?), string proj4 = default(string))
        {
            this.Longitude = longitude;
            this.Latitude = latitude;
            this.Proj4 = proj4;
        }
        
        /// <summary>
        /// Gets or Sets Longitude
        /// </summary>
        [DataMember(Name="Longitude", EmitDefaultValue=false)]
        public double? Longitude { get; set; }

        /// <summary>
        /// Gets or Sets Latitude
        /// </summary>
        [DataMember(Name="Latitude", EmitDefaultValue=false)]
        public double? Latitude { get; set; }


        /// <summary>
        /// Gets or Sets Proj4
        /// </summary>
        [DataMember(Name="Proj4", EmitDefaultValue=false)]
        public string Proj4 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class FeatureLongLatUpdateParameter {\n");
            sb.Append("  Longitude: ").Append(Longitude).Append("\n");
            sb.Append("  Latitude: ").Append(Latitude).Append("\n");
            sb.Append("  FeatureType: ").Append(FeatureType).Append("\n");
            sb.Append("  Proj4: ").Append(Proj4).Append("\n");
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
            return this.Equals(input as FeatureLongLatUpdateParameter);
        }

        /// <summary>
        /// Returns true if FeatureLongLatUpdateParameter instances are equal
        /// </summary>
        /// <param name="input">Instance of FeatureLongLatUpdateParameter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FeatureLongLatUpdateParameter input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Longitude == input.Longitude ||
                    (this.Longitude != null &&
                    this.Longitude.Equals(input.Longitude))
                ) && 
                (
                    this.Latitude == input.Latitude ||
                    (this.Latitude != null &&
                    this.Latitude.Equals(input.Latitude))
                ) && 
                (
                    this.FeatureType == input.FeatureType ||
                    (this.FeatureType != null &&
                    this.FeatureType.Equals(input.FeatureType))
                ) && 
                (
                    this.Proj4 == input.Proj4 ||
                    (this.Proj4 != null &&
                    this.Proj4.Equals(input.Proj4))
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
                if (this.Longitude != null)
                    hashCode = hashCode * 59 + this.Longitude.GetHashCode();
                if (this.Latitude != null)
                    hashCode = hashCode * 59 + this.Latitude.GetHashCode();
                if (this.FeatureType != null)
                    hashCode = hashCode * 59 + this.FeatureType.GetHashCode();
                if (this.Proj4 != null)
                    hashCode = hashCode * 59 + this.Proj4.GetHashCode();
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
