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
    ///  Class for testing DataTableApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class DataTableApiTests
    {
        private DataTableApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new DataTableApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of DataTableApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' DataTableApi
            //Assert.IsInstanceOfType(typeof(DataTableApi), instance, "instance is a DataTableApi");
        }

        
        /// <summary>
        /// Test DataTableCreateDataTable
        /// </summary>
        [Test]
        public void DataTableCreateDataTableTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //DataTableCreateParameter parameters = null;
            //var response = instance.DataTableCreateDataTable(parameters);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableCreateFromCSV
        /// </summary>
        [Test]
        public void DataTableCreateFromCSVTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //System.IO.Stream _file = null;
            //var response = instance.DataTableCreateFromCSV(_file);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableCreateFromExcel
        /// </summary>
        [Test]
        public void DataTableCreateFromExcelTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //System.IO.Stream _file = null;
            //var response = instance.DataTableCreateFromExcel(_file);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableCreateFromExcelSheetName
        /// </summary>
        [Test]
        public void DataTableCreateFromExcelSheetNameTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string sheetName = null;
            //System.IO.Stream _file = null;
            //var response = instance.DataTableCreateFromExcelSheetName(sheetName, _file);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableDeleteDataTable
        /// </summary>
        [Test]
        public void DataTableDeleteDataTableTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //instance.DataTableDeleteDataTable(dataTableIdentifier);
            
        }
        
        /// <summary>
        /// Test DataTableGetDataTableByIdentifier
        /// </summary>
        [Test]
        public void DataTableGetDataTableByIdentifierTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //var response = instance.DataTableGetDataTableByIdentifier(dataTableIdentifier);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableGetDataTables
        /// </summary>
        [Test]
        public void DataTableGetDataTablesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.DataTableGetDataTables();
            //Assert.IsInstanceOf<List<DataTable>> (response, "response is List<DataTable>");
        }
        
        /// <summary>
        /// Test DataTableSetDataColumnUniqueId
        /// </summary>
        [Test]
        public void DataTableSetDataColumnUniqueIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string dataColumnIdentifier = null;
            //var response = instance.DataTableSetDataColumnUniqueId(dataTableIdentifier, dataColumnIdentifier);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableSetUniqueIdentifier
        /// </summary>
        [Test]
        public void DataTableSetUniqueIdentifierTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string newIdentifier = null;
            //var response = instance.DataTableSetUniqueIdentifier(dataTableIdentifier, newIdentifier);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableUpdateDataTable
        /// </summary>
        [Test]
        public void DataTableUpdateDataTableTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //DataTableUpdateParameter parameters = null;
            //var response = instance.DataTableUpdateDataTable(dataTableIdentifier, parameters);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableUpdateFromCSV
        /// </summary>
        [Test]
        public void DataTableUpdateFromCSVTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //System.IO.Stream _file = null;
            //var response = instance.DataTableUpdateFromCSV(dataTableIdentifier, _file);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableUpdateFromExcel
        /// </summary>
        [Test]
        public void DataTableUpdateFromExcelTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //System.IO.Stream _file = null;
            //var response = instance.DataTableUpdateFromExcel(dataTableIdentifier, _file);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
        /// <summary>
        /// Test DataTableUpdateFromExcelSheetName
        /// </summary>
        [Test]
        public void DataTableUpdateFromExcelSheetNameTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string dataTableIdentifier = null;
            //string sheetName = null;
            //System.IO.Stream _file = null;
            //var response = instance.DataTableUpdateFromExcelSheetName(dataTableIdentifier, sheetName, _file);
            //Assert.IsInstanceOf<DataTable> (response, "response is DataTable");
        }
        
    }

}
