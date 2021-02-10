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
    /// DataColumnUpdateParameter
    /// </summary>
    [DataContract]
    public partial class DataColumnUpdateParameter :  IEquatable<DataColumnUpdateParameter>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataColumnUpdateParameter" /> class.
        /// </summary>
        /// <param name="cartoVistaDataType">cartoVistaDataType.</param>
        /// <param name="name">name.</param>
        /// <param name="description">description.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="units">units.</param>
        /// <param name="aggregationType">aggregationType.</param>
        /// <param name="mappable">mappable.</param>
        /// <param name="precision">precision.</param>
        /// <param name="roundToPrecision">roundToPrecision.</param>
        /// <param name="timeStamp">timeStamp.</param>
        /// <param name="timeStampAccuracy">timeStampAccuracy.</param>
        /// <param name="notAvailableValues">notAvailableValues.</param>
        /// <param name="valueToConvert">valueToConvert.</param>
        public DataColumnUpdateParameter(string cartoVistaDataType = default(string), string name = default(string), string description = default(string), string metadata = default(string), string units = default(string), string aggregationType = default(string), bool? mappable = default(bool?), int? precision = default(int?), bool? roundToPrecision = default(bool?), Object timeStamp = default(Object), Object timeStampAccuracy = default(Object), bool? notAvailableValues = default(bool?), double? valueToConvert = default(double?))
        {
            this.CartoVistaDataType = cartoVistaDataType;
            this.Name = name;
            this.Description = description;
            this.Metadata = metadata;
            this.Units = units;
            this.AggregationType = aggregationType;
            this.Mappable = mappable;
            this.Precision = precision;
            this.RoundToPrecision = roundToPrecision;
            this.TimeStamp = timeStamp;
            this.TimeStampAccuracy = timeStampAccuracy;
            this.NotAvailableValues = notAvailableValues;
            this.ValueToConvert = valueToConvert;
        }
        
        /// <summary>
        /// Gets or Sets CartoVistaDataType
        /// </summary>
        [DataMember(Name="CartoVistaDataType", EmitDefaultValue=false)]
        public string CartoVistaDataType { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="Name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name="Description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="Metadata", EmitDefaultValue=false)]
        public string Metadata { get; set; }

        /// <summary>
        /// Gets or Sets Units
        /// </summary>
        [DataMember(Name="Units", EmitDefaultValue=false)]
        public string Units { get; set; }

        /// <summary>
        /// Gets or Sets AggregationType
        /// </summary>
        [DataMember(Name="AggregationType", EmitDefaultValue=false)]
        public string AggregationType { get; set; }

        /// <summary>
        /// Gets or Sets Mappable
        /// </summary>
        [DataMember(Name="Mappable", EmitDefaultValue=false)]
        public bool? Mappable { get; set; }

        /// <summary>
        /// Gets or Sets Precision
        /// </summary>
        [DataMember(Name="Precision", EmitDefaultValue=false)]
        public int? Precision { get; set; }

        /// <summary>
        /// Gets or Sets RoundToPrecision
        /// </summary>
        [DataMember(Name="RoundToPrecision", EmitDefaultValue=false)]
        public bool? RoundToPrecision { get; set; }

        /// <summary>
        /// Gets or Sets TimeStamp
        /// </summary>
        [DataMember(Name="TimeStamp", EmitDefaultValue=false)]
        public Object TimeStamp { get; set; }

        /// <summary>
        /// Gets or Sets TimeStampAccuracy
        /// </summary>
        [DataMember(Name="TimeStampAccuracy", EmitDefaultValue=false)]
        public Object TimeStampAccuracy { get; set; }

        /// <summary>
        /// Gets or Sets NotAvailableValues
        /// </summary>
        [DataMember(Name="NotAvailableValues", EmitDefaultValue=false)]
        public bool? NotAvailableValues { get; set; }

        /// <summary>
        /// Gets or Sets ValueToConvert
        /// </summary>
        [DataMember(Name="ValueToConvert", EmitDefaultValue=false)]
        public double? ValueToConvert { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DataColumnUpdateParameter {\n");
            sb.Append("  CartoVistaDataType: ").Append(CartoVistaDataType).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Units: ").Append(Units).Append("\n");
            sb.Append("  AggregationType: ").Append(AggregationType).Append("\n");
            sb.Append("  Mappable: ").Append(Mappable).Append("\n");
            sb.Append("  Precision: ").Append(Precision).Append("\n");
            sb.Append("  RoundToPrecision: ").Append(RoundToPrecision).Append("\n");
            sb.Append("  TimeStamp: ").Append(TimeStamp).Append("\n");
            sb.Append("  TimeStampAccuracy: ").Append(TimeStampAccuracy).Append("\n");
            sb.Append("  NotAvailableValues: ").Append(NotAvailableValues).Append("\n");
            sb.Append("  ValueToConvert: ").Append(ValueToConvert).Append("\n");
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
            return this.Equals(input as DataColumnUpdateParameter);
        }

        /// <summary>
        /// Returns true if DataColumnUpdateParameter instances are equal
        /// </summary>
        /// <param name="input">Instance of DataColumnUpdateParameter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DataColumnUpdateParameter input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CartoVistaDataType == input.CartoVistaDataType ||
                    (this.CartoVistaDataType != null &&
                    this.CartoVistaDataType.Equals(input.CartoVistaDataType))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
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
                    this.Units == input.Units ||
                    (this.Units != null &&
                    this.Units.Equals(input.Units))
                ) && 
                (
                    this.AggregationType == input.AggregationType ||
                    (this.AggregationType != null &&
                    this.AggregationType.Equals(input.AggregationType))
                ) && 
                (
                    this.Mappable == input.Mappable ||
                    (this.Mappable != null &&
                    this.Mappable.Equals(input.Mappable))
                ) && 
                (
                    this.Precision == input.Precision ||
                    (this.Precision != null &&
                    this.Precision.Equals(input.Precision))
                ) && 
                (
                    this.RoundToPrecision == input.RoundToPrecision ||
                    (this.RoundToPrecision != null &&
                    this.RoundToPrecision.Equals(input.RoundToPrecision))
                ) && 
                (
                    this.TimeStamp == input.TimeStamp ||
                    (this.TimeStamp != null &&
                    this.TimeStamp.Equals(input.TimeStamp))
                ) && 
                (
                    this.TimeStampAccuracy == input.TimeStampAccuracy ||
                    (this.TimeStampAccuracy != null &&
                    this.TimeStampAccuracy.Equals(input.TimeStampAccuracy))
                ) && 
                (
                    this.NotAvailableValues == input.NotAvailableValues ||
                    (this.NotAvailableValues != null &&
                    this.NotAvailableValues.Equals(input.NotAvailableValues))
                ) && 
                (
                    this.ValueToConvert == input.ValueToConvert ||
                    (this.ValueToConvert != null &&
                    this.ValueToConvert.Equals(input.ValueToConvert))
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
                if (this.CartoVistaDataType != null)
                    hashCode = hashCode * 59 + this.CartoVistaDataType.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Units != null)
                    hashCode = hashCode * 59 + this.Units.GetHashCode();
                if (this.AggregationType != null)
                    hashCode = hashCode * 59 + this.AggregationType.GetHashCode();
                if (this.Mappable != null)
                    hashCode = hashCode * 59 + this.Mappable.GetHashCode();
                if (this.Precision != null)
                    hashCode = hashCode * 59 + this.Precision.GetHashCode();
                if (this.RoundToPrecision != null)
                    hashCode = hashCode * 59 + this.RoundToPrecision.GetHashCode();
                if (this.TimeStamp != null)
                    hashCode = hashCode * 59 + this.TimeStamp.GetHashCode();
                if (this.TimeStampAccuracy != null)
                    hashCode = hashCode * 59 + this.TimeStampAccuracy.GetHashCode();
                if (this.NotAvailableValues != null)
                    hashCode = hashCode * 59 + this.NotAvailableValues.GetHashCode();
                if (this.ValueToConvert != null)
                    hashCode = hashCode * 59 + this.ValueToConvert.GetHashCode();
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
