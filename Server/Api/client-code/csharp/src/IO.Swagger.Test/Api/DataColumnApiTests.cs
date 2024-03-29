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
    ///  Class for testing DataColumnApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class DataColumnApiTests
    {
        private DataColumnApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new DataColumnApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of DataColumnApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' DataColumnApi
            //Assert.IsInstanceOfType(typeof(DataColumnApi), instance, "instance is a DataColumnApi");
        }

        
        /// <summary>
        /// Test DataColumnCreateDataTableDataColumns
        /// </summary>
        [Test]
        public void DataColumnCreateDataTableDataColumnsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //List<DataColumnCreateParameter> parameters = null;
            //var response = instance.DataColumnCreateDataTableDataColumns(dataTableIdentifier, parameters);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test DataColumnCreateLayerDataColumns
        /// </summary>
        [Test]
        public void DataColumnCreateLayerDataColumnsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //List<DataColumnCreateParameter> parameters = null;
            //var response = instance.DataColumnCreateLayerDataColumns(layerIdentifier, parameters);
            //Assert.IsInstanceOf<ApiInsertReport> (response, "response is ApiInsertReport");
        }
        
        /// <summary>
        /// Test DataColumnDeleteDataTableDataColumn
        /// </summary>
        [Test]
        public void DataColumnDeleteDataTableDataColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string dataColumnIdentifier = null;
            //instance.DataColumnDeleteDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier);
            
        }
        
        /// <summary>
        /// Test DataColumnDeleteLayerDataColumn
        /// </summary>
        [Test]
        public void DataColumnDeleteLayerDataColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string dataColumnIdentifier = null;
            //instance.DataColumnDeleteLayerDataColumn(layerIdentifier, dataColumnIdentifier);
            
        }
        
        /// <summary>
        /// Test DataColumnGetDataTableDataColumn
        /// </summary>
        [Test]
        public void DataColumnGetDataTableDataColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string dataColumnIdentifier = null;
            //var response = instance.DataColumnGetDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier);
            //Assert.IsInstanceOf<DataColumn> (response, "response is DataColumn");
        }
        
        /// <summary>
        /// Test DataColumnGetDataTableDataColumns
        /// </summary>
        [Test]
        public void DataColumnGetDataTableDataColumnsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //var response = instance.DataColumnGetDataTableDataColumns(dataTableIdentifier);
            //Assert.IsInstanceOf<List<DataColumn>> (response, "response is List<DataColumn>");
        }
        
        /// <summary>
        /// Test DataColumnGetLayerDataColumn
        /// </summary>
        [Test]
        public void DataColumnGetLayerDataColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string dataColumnIdentifier = null;
            //var response = instance.DataColumnGetLayerDataColumn(layerIdentifier, dataColumnIdentifier);
            //Assert.IsInstanceOf<DataColumn> (response, "response is DataColumn");
        }
        
        /// <summary>
        /// Test DataColumnGetLayerDataColumns
        /// </summary>
        [Test]
        public void DataColumnGetLayerDataColumnsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //var response = instance.DataColumnGetLayerDataColumns(layerIdentifier);
            //Assert.IsInstanceOf<List<DataColumn>> (response, "response is List<DataColumn>");
        }
        
        /// <summary>
        /// Test DataColumnSetDataTableColumnUniqueIdentifier
        /// </summary>
        [Test]
        public void DataColumnSetDataTableColumnUniqueIdentifierTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string dataColumnIdentifier = null;
            //string newIdentifier = null;
            //var response = instance.DataColumnSetDataTableColumnUniqueIdentifier(dataTableIdentifier, dataColumnIdentifier, newIdentifier);
            //Assert.IsInstanceOf<DataColumn> (response, "response is DataColumn");
        }
        
        /// <summary>
        /// Test DataColumnSetLayerColumnUniqueIdentifier
        /// </summary>
        [Test]
        public void DataColumnSetLayerColumnUniqueIdentifierTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string dataColumnIdentifier = null;
            //string newIdentifier = null;
            //var response = instance.DataColumnSetLayerColumnUniqueIdentifier(layerIdentifier, dataColumnIdentifier, newIdentifier);
            //Assert.IsInstanceOf<DataColumn> (response, "response is DataColumn");
        }
        
        /// <summary>
        /// Test DataColumnUpdateDataTableDataColumn
        /// </summary>
        [Test]
        public void DataColumnUpdateDataTableDataColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string dataColumnIdentifier = null;
            //DataColumnUpdateParameter param = null;
            //var response = instance.DataColumnUpdateDataTableDataColumn(dataTableIdentifier, dataColumnIdentifier, param);
            //Assert.IsInstanceOf<DataColumn> (response, "response is DataColumn");
        }
        
        /// <summary>
        /// Test DataColumnUpdateLayerDataColumn
        /// </summary>
        [Test]
        public void DataColumnUpdateLayerDataColumnTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string layerIdentifier = null;
            //string dataColumnIdentifier = null;
            //DataColumnUpdateParameter param = null;
            //var response = instance.DataColumnUpdateLayerDataColumn(layerIdentifier, dataColumnIdentifier, param);
            //Assert.IsInstanceOf<DataColumn> (response, "response is DataColumn");
        }
        
    }

}
