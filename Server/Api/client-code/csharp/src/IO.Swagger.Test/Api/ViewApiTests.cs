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
    ///  Class for testing ViewApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class ViewApiTests
    {
        private ViewApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new ViewApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of ViewApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' ViewApi
            //Assert.IsInstanceOfType(typeof(ViewApi), instance, "instance is a ViewApi");
        }

        
        /// <summary>
        /// Test ViewCreateViewByExpression
        /// </summary>
        [Test]
        public void ViewCreateViewByExpressionTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //CreateViewByExpressionParameters param = null;
            //var response = instance.ViewCreateViewByExpression(layerId, param);
            //Assert.IsInstanceOf<View> (response, "response is View");
        }
        
        /// <summary>
        /// Test ViewCreateViewsFromColumn
        /// </summary>
        [Test]
        public void ViewCreateViewsFromColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //Guid? columnId = null;
            //var response = instance.ViewCreateViewsFromColumn(layerId, columnId);
            //Assert.IsInstanceOf<List<View>> (response, "response is List<View>");
        }
        
        /// <summary>
        /// Test ViewDeleteViews
        /// </summary>
        [Test]
        public void ViewDeleteViewsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //instance.ViewDeleteViews(layerId);
            
        }
        
        /// <summary>
        /// Test ViewGetView
        /// </summary>
        [Test]
        public void ViewGetViewTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //Guid? viewId = null;
            //var response = instance.ViewGetView(layerId, viewId);
            //Assert.IsInstanceOf<View> (response, "response is View");
        }
        
        /// <summary>
        /// Test ViewGetViews
        /// </summary>
        [Test]
        public void ViewGetViewsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //var response = instance.ViewGetViews(layerId);
            //Assert.IsInstanceOf<List<View>> (response, "response is List<View>");
        }
        
        /// <summary>
        /// Test ViewUpdateView
        /// </summary>
        [Test]
        public void ViewUpdateViewTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //Guid? viewId = null;
            //UpdateViewParameter param = null;
            //var response = instance.ViewUpdateView(layerId, viewId, param);
            //Assert.IsInstanceOf<View> (response, "response is View");
        }
        
        /// <summary>
        /// Test ViewUpdateViewPermissions
        /// </summary>
        [Test]
        public void ViewUpdateViewPermissionsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Guid? layerId = null;
            //Guid? viewId = null;
            //List<ViewReadPermission> permissions = null;
            //var response = instance.ViewUpdateViewPermissions(layerId, viewId, permissions);
            //Assert.IsInstanceOf<View> (response, "response is View");
        }
        
    }

}
