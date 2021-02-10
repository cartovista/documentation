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
    /// MapUpdateParameter
    /// </summary>
    [DataContract]
    public partial class MapUpdateParameter :  IEquatable<MapUpdateParameter>, IValidatableObject
    {
        /// <summary>
        /// Defines Language
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum LanguageEnum
        {
            
            /// <summary>
            /// Enum Fr for value: fr
            /// </summary>
            [EnumMember(Value = "fr")]
            Fr = 1,
            
            /// <summary>
            /// Enum En for value: en
            /// </summary>
            [EnumMember(Value = "en")]
            En = 2,
            
            /// <summary>
            /// Enum Es for value: es
            /// </summary>
            [EnumMember(Value = "es")]
            Es = 3,
            
            /// <summary>
            /// Enum De for value: de
            /// </summary>
            [EnumMember(Value = "de")]
            De = 4,
            
            /// <summary>
            /// Enum Pt for value: pt
            /// </summary>
            [EnumMember(Value = "pt")]
            Pt = 5,
            
            /// <summary>
            /// Enum It for value: it
            /// </summary>
            [EnumMember(Value = "it")]
            It = 6,
            
            /// <summary>
            /// Enum Tr for value: tr
            /// </summary>
            [EnumMember(Value = "tr")]
            Tr = 7
        }

        /// <summary>
        /// Gets or Sets Language
        /// </summary>
        [DataMember(Name="language", EmitDefaultValue=false)]
        public LanguageEnum? Language { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="MapUpdateParameter" /> class.
        /// </summary>
        /// <param name="title">title.</param>
        /// <param name="uniqueIdentifier">uniqueIdentifier.</param>
        /// <param name="description">description.</param>
        /// <param name="language">language.</param>
        /// <param name="editable">editable.</param>
        /// <param name="seoTitle">seoTitle.</param>
        /// <param name="seoDescription">seoDescription.</param>
        /// <param name="seoCustomHTML">seoCustomHTML.</param>
        /// <param name="scoringEnabled">scoringEnabled.</param>
        public MapUpdateParameter(string title = default(string), string uniqueIdentifier = default(string), string description = default(string), LanguageEnum? language = default(LanguageEnum?), bool? editable = default(bool?), string seoTitle = default(string), string seoDescription = default(string), string seoCustomHTML = default(string), bool? scoringEnabled = default(bool?))
        {
            this.Title = title;
            this.UniqueIdentifier = uniqueIdentifier;
            this.Description = description;
            this.Language = language;
            this.Editable = editable;
            this.SeoTitle = seoTitle;
            this.SeoDescription = seoDescription;
            this.SeoCustomHTML = seoCustomHTML;
            this.ScoringEnabled = scoringEnabled;
        }
        
        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name="title", EmitDefaultValue=false)]
        public string Title { get; set; }

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
        /// Gets or Sets Editable
        /// </summary>
        [DataMember(Name="editable", EmitDefaultValue=false)]
        public bool? Editable { get; set; }

        /// <summary>
        /// Gets or Sets SeoTitle
        /// </summary>
        [DataMember(Name="seoTitle", EmitDefaultValue=false)]
        public string SeoTitle { get; set; }

        /// <summary>
        /// Gets or Sets SeoDescription
        /// </summary>
        [DataMember(Name="seoDescription", EmitDefaultValue=false)]
        public string SeoDescription { get; set; }

        /// <summary>
        /// Gets or Sets SeoCustomHTML
        /// </summary>
        [DataMember(Name="seoCustomHTML", EmitDefaultValue=false)]
        public string SeoCustomHTML { get; set; }

        /// <summary>
        /// Gets or Sets ScoringEnabled
        /// </summary>
        [DataMember(Name="scoringEnabled", EmitDefaultValue=false)]
        public bool? ScoringEnabled { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MapUpdateParameter {\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  UniqueIdentifier: ").Append(UniqueIdentifier).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Language: ").Append(Language).Append("\n");
            sb.Append("  Editable: ").Append(Editable).Append("\n");
            sb.Append("  SeoTitle: ").Append(SeoTitle).Append("\n");
            sb.Append("  SeoDescription: ").Append(SeoDescription).Append("\n");
            sb.Append("  SeoCustomHTML: ").Append(SeoCustomHTML).Append("\n");
            sb.Append("  ScoringEnabled: ").Append(ScoringEnabled).Append("\n");
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
            return this.Equals(input as MapUpdateParameter);
        }

        /// <summary>
        /// Returns true if MapUpdateParameter instances are equal
        /// </summary>
        /// <param name="input">Instance of MapUpdateParameter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MapUpdateParameter input)
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
                    this.Language == input.Language ||
                    (this.Language != null &&
                    this.Language.Equals(input.Language))
                ) && 
                (
                    this.Editable == input.Editable ||
                    (this.Editable != null &&
                    this.Editable.Equals(input.Editable))
                ) && 
                (
                    this.SeoTitle == input.SeoTitle ||
                    (this.SeoTitle != null &&
                    this.SeoTitle.Equals(input.SeoTitle))
                ) && 
                (
                    this.SeoDescription == input.SeoDescription ||
                    (this.SeoDescription != null &&
                    this.SeoDescription.Equals(input.SeoDescription))
                ) && 
                (
                    this.SeoCustomHTML == input.SeoCustomHTML ||
                    (this.SeoCustomHTML != null &&
                    this.SeoCustomHTML.Equals(input.SeoCustomHTML))
                ) && 
                (
                    this.ScoringEnabled == input.ScoringEnabled ||
                    (this.ScoringEnabled != null &&
                    this.ScoringEnabled.Equals(input.ScoringEnabled))
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
                if (this.UniqueIdentifier != null)
                    hashCode = hashCode * 59 + this.UniqueIdentifier.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Language != null)
                    hashCode = hashCode * 59 + this.Language.GetHashCode();
                if (this.Editable != null)
                    hashCode = hashCode * 59 + this.Editable.GetHashCode();
                if (this.SeoTitle != null)
                    hashCode = hashCode * 59 + this.SeoTitle.GetHashCode();
                if (this.SeoDescription != null)
                    hashCode = hashCode * 59 + this.SeoDescription.GetHashCode();
                if (this.SeoCustomHTML != null)
                    hashCode = hashCode * 59 + this.SeoCustomHTML.GetHashCode();
                if (this.ScoringEnabled != null)
                    hashCode = hashCode * 59 + this.ScoringEnabled.GetHashCode();
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
