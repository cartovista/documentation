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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing FeatureApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class FeatureApiTests
    {
        private FeatureApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new FeatureApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of FeatureApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' FeatureApi
            //Assert.IsInstanceOfType(typeof(FeatureApi), instance, "instance is a FeatureApi");
        }

        
        /// <summary>
        /// Test FeatureCreateFeaturesFromGeoJSON
        /// </summary>
        [Test]
        public void FeatureCreateFeaturesFromGeoJSONTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<FeatureGeoJSONCreateParameter> param = null;
            //var response = instance.FeatureCreateFeaturesFromGeoJSON(layerIdentifier, param);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test FeatureCreateFeaturesFromLongLat
        /// </summary>
        [Test]
        public void FeatureCreateFeaturesFromLongLatTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<FeatureLongLatCreateParameter> param = null;
            //var response = instance.FeatureCreateFeaturesFromLongLat(layerIdentifier, param);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test FeatureCreateFeaturesFromWKT
        /// </summary>
        [Test]
        public void FeatureCreateFeaturesFromWKTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<FeatureWKTCreateParameter> param = null;
            //var response = instance.FeatureCreateFeaturesFromWKT(layerIdentifier, param);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test FeatureCreateUpdateFeaturesFromGeoJSON
        /// </summary>
        [Test]
        public void FeatureCreateUpdateFeaturesFromGeoJSONTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<FeatureGeoJSONCreateParameter> param = null;
            //var response = instance.FeatureCreateUpdateFeaturesFromGeoJSON(layerIdentifier, param);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test FeatureCreateUpdateFeaturesFromLongLat
        /// </summary>
        [Test]
        public void FeatureCreateUpdateFeaturesFromLongLatTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<FeatureLongLatCreateParameter> param = null;
            //var response = instance.FeatureCreateUpdateFeaturesFromLongLat(layerIdentifier, param);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test FeatureCreateUpdateFeaturesFromWKT
        /// </summary>
        [Test]
        public void FeatureCreateUpdateFeaturesFromWKTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<FeatureWKTCreateParameter> param = null;
            //var response = instance.FeatureCreateUpdateFeaturesFromWKT(layerIdentifier, param);
            //Assert.IsInstanceOf<ApiCreateUpdateReport> (response, "response is ApiCreateUpdateReport");
        }
        
        /// <summary>
        /// Test FeatureDeleteFeature
        /// </summary>
        [Test]
        public void FeatureDeleteFeatureTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //var response = instance.FeatureDeleteFeature(layerIdentifier, featureIdentifier);
            //Assert.IsInstanceOf<ApiDeleteReport> (response, "response is ApiDeleteReport");
        }
        
        /// <summary>
        /// Test FeatureDeleteFeatures
        /// </summary>
        [Test]
        public void FeatureDeleteFeaturesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<string> featureIdentifiers = null;
            //var response = instance.FeatureDeleteFeatures(layerIdentifier, featureIdentifiers);
            //Assert.IsInstanceOf<ApiDeleteReport> (response, "response is ApiDeleteReport");
        }
        
        /// <summary>
        /// Test FeatureGetFeatureInGeoJSON
        /// </summary>
        [Test]
        public void FeatureGetFeatureInGeoJSONTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //var response = instance.FeatureGetFeatureInGeoJSON(layerIdentifier, featureIdentifier);
            //Assert.IsInstanceOf<FeatureGeoJSON> (response, "response is FeatureGeoJSON");
        }
        
        /// <summary>
        /// Test FeatureGetFeatureInLongLat
        /// </summary>
        [Test]
        public void FeatureGetFeatureInLongLatTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //var response = instance.FeatureGetFeatureInLongLat(layerIdentifier, featureIdentifier);
            //Assert.IsInstanceOf<FeatureLongLat> (response, "response is FeatureLongLat");
        }
        
        /// <summary>
        /// Test FeatureGetFeatureInWKT
        /// </summary>
        [Test]
        public void FeatureGetFeatureInWKTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //var response = instance.FeatureGetFeatureInWKT(layerIdentifier, featureIdentifier);
            //Assert.IsInstanceOf<FeatureWKT> (response, "response is FeatureWKT");
        }
        
        /// <summary>
        /// Test FeatureGetFeatures
        /// </summary>
        [Test]
        public void FeatureGetFeaturesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //FeaturesGetParameters param = null;
            //var response = instance.FeatureGetFeatures(layerIdentifier, param);
            //Assert.IsInstanceOf<List<DataRow>> (response, "response is List<DataRow>");
        }
        
        /// <summary>
        /// Test FeatureGetFeaturesInGeoJSON
        /// </summary>
        [Test]
        public void FeatureGetFeaturesInGeoJSONTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //FeaturesGetParameters param = null;
            //var response = instance.FeatureGetFeaturesInGeoJSON(layerIdentifier, param);
            //Assert.IsInstanceOf<List<FeatureGeoJSON>> (response, "response is List<FeatureGeoJSON>");
        }
        
        /// <summary>
        /// Test FeatureGetFeaturesInLongLat
        /// </summary>
        [Test]
        public void FeatureGetFeaturesInLongLatTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //FeaturesGetParameters param = null;
            //var response = instance.FeatureGetFeaturesInLongLat(layerIdentifier, param);
            //Assert.IsInstanceOf<List<FeatureLongLat>> (response, "response is List<FeatureLongLat>");
        }
        
        /// <summary>
        /// Test FeatureGetFeaturesInWKT
        /// </summary>
        [Test]
        public void FeatureGetFeaturesInWKTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //FeaturesGetParameters param = null;
            //var response = instance.FeatureGetFeaturesInWKT(layerIdentifier, param);
            //Assert.IsInstanceOf<List<FeatureWKT>> (response, "response is List<FeatureWKT>");
        }
        
        /// <summary>
        /// Test FeatureUpdateFromGeoJSON
        /// </summary>
        [Test]
        public void FeatureUpdateFromGeoJSONTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //FeatureGeoJSONUpdateParameter param = null;
            //var response = instance.FeatureUpdateFromGeoJSON(layerIdentifier, featureIdentifier, param);
            //Assert.IsInstanceOf<FeatureGeoJSON> (response, "response is FeatureGeoJSON");
        }
        
        /// <summary>
        /// Test FeatureUpdateFromLongLat
        /// </summary>
        [Test]
        public void FeatureUpdateFromLongLatTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //FeatureLongLatUpdateParameter param = null;
            //var response = instance.FeatureUpdateFromLongLat(layerIdentifier, featureIdentifier, param);
            //Assert.IsInstanceOf<FeatureLongLat> (response, "response is FeatureLongLat");
        }
        
        /// <summary>
        /// Test FeatureUpdateGeometryFromWKT
        /// </summary>
        [Test]
        public void FeatureUpdateGeometryFromWKTTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //FeatureWKTUpdateParameter param = null;
            //var response = instance.FeatureUpdateGeometryFromWKT(layerIdentifier, featureIdentifier, param);
            //Assert.IsInstanceOf<FeatureWKT> (response, "response is FeatureWKT");
        }
        
        /// <summary>
        /// Test FeatureUpdateValues
        /// </summary>
        [Test]
        public void FeatureUpdateValuesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string featureIdentifier = null;
            //DataRowUpdateParameter param = null;
            //var response = instance.FeatureUpdateValues(layerIdentifier, featureIdentifier, param);
            //Assert.IsInstanceOf<DataRow> (response, "response is DataRow");
        }
        
    }

}
