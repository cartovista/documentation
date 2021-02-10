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
    /// FeatureGeoJSONUpdateParameter
    /// </summary>
    [DataContract]
    public partial class FeatureGeoJSONUpdateParameter :  IEquatable<FeatureGeoJSONUpdateParameter>, IValidatableObject
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
        /// Initializes a new instance of the <see cref="FeatureGeoJSONUpdateParameter" /> class.
        /// </summary>
        /// <param name="geoJSON">geoJSON.</param>
        /// <param name="proj4">proj4.</param>
        public FeatureGeoJSONUpdateParameter(string geoJSON = default(string), string proj4 = default(string))
        {
            this.GeoJSON = geoJSON;
            this.Proj4 = proj4;
        }
        
        /// <summary>
        /// Gets or Sets GeoJSON
        /// </summary>
        [DataMember(Name="GeoJSON", EmitDefaultValue=false)]
        public string GeoJSON { get; set; }


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
            sb.Append("class FeatureGeoJSONUpdateParameter {\n");
            sb.Append("  GeoJSON: ").Append(GeoJSON).Append("\n");
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
            return this.Equals(input as FeatureGeoJSONUpdateParameter);
        }

        /// <summary>
        /// Returns true if FeatureGeoJSONUpdateParameter instances are equal
        /// </summary>
        /// <param name="input">Instance of FeatureGeoJSONUpdateParameter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FeatureGeoJSONUpdateParameter input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.GeoJSON == input.GeoJSON ||
                    (this.GeoJSON != null &&
                    this.GeoJSON.Equals(input.GeoJSON))
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
                if (this.GeoJSON != null)
                    hashCode = hashCode * 59 + this.GeoJSON.GetHashCode();
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
