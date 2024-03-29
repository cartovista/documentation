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
    ///  Class for testing MapApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class MapApiTests
    {
        private MapApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new MapApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of MapApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' MapApi
            //Assert.IsInstanceOfType(typeof(MapApi), instance, "instance is a MapApi");
        }

        
        /// <summary>
        /// Test MapCreateMap
        /// </summary>
        [Test]
        public void MapCreateMapTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //MapCreateParameter param = null;
            //var response = instance.MapCreateMap(param);
            //Assert.IsInstanceOf<Dictionary> (response, "response is Dictionary");
        }
        
        /// <summary>
        /// Test MapDeleteMap
        /// </summary>
        [Test]
        public void MapDeleteMapTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string mapId = null;
            //instance.MapDeleteMap(mapId);
            
        }
        
        /// <summary>
        /// Test MapGetGridLayersByMap
        /// </summary>
        [Test]
        public void MapGetGridLayersByMapTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string mapId = null;
            //var response = instance.MapGetGridLayersByMap(mapId);
            //Assert.IsInstanceOf<List<GridLayer>> (response, "response is List<GridLayer>");
        }
        
        /// <summary>
        /// Test MapGetLayersByMap
        /// </summary>
        [Test]
        public void MapGetLayersByMapTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string mapId = null;
            //var response = instance.MapGetLayersByMap(mapId);
            //Assert.IsInstanceOf<List<Layer>> (response, "response is List<Layer>");
        }
        
        /// <summary>
        /// Test MapGetMap
        /// </summary>
        [Test]
        public void MapGetMapTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string mapId = null;
            //var response = instance.MapGetMap(mapId);
            //Assert.IsInstanceOf<Dictionary> (response, "response is Dictionary");
        }
        
        /// <summary>
        /// Test MapGetMaps
        /// </summary>
        [Test]
        public void MapGetMapsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.MapGetMaps();
            //Assert.IsInstanceOf<List<Dictionary>> (response, "response is List<Dictionary>");
        }
        
        /// <summary>
        /// Test MapUpdateMap
        /// </summary>
        [Test]
        public void MapUpdateMapTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string mapId = null;
            //MapUpdateParameter param = null;
            //var response = instance.MapUpdateMap(mapId, param);
            //Assert.IsInstanceOf<Dictionary> (response, "response is Dictionary");
        }
        
    }

}
