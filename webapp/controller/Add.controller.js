sap.ui.define([
	"modi/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageAPI, StatusMessage) {
	"use strict";

	return Controller.extend("modi.controller.Add", {
	 
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.view.View2
		 */
	/*	onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis, this);
			var jsonData = {
				"productData": {
					"ProductId": "Enter your product id here",
				    "TypeCode": "PR",
				    "Category": "Notebooks",
				    "Name": "",
				    "Description": "",
				    "SupplierId": "100000046",
				    "SupplierName": "SAP",
				    "TaxTarifCode": 1,
				    "MeasureUnit": "EA",
				    "WeightMeasure": "4.200",
				    "WeightUnit": "KG",
				    "Price": "0",
				    "CurrencyCode": "INR",
				    "Width": "30.000",
				    "Depth": "18.000",
				    "Height": "3.000",
				    "DimUnit": "CM",
				    "ProductPicUrl": "/sap/public/bc/NWDEMO_MODEL/IMAGES/",
				    "HmMime": "",
				    "Mimetype": "",
				    "SmimeType": ""
				}
			};
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(jsonData);
			debugger;
			this.getView().setModel(oModel, "local");
		},
		herculis: function(oParams){
			
		},
		onSave: function(){
			debugger;
			var payload = this.getView().getModel("local").getProperty("/productData");
			//payload.PRODUCT_PIC_URL = payload.PRODUCT_PIC_URL + PRODUCT_PIC_URL/PRODUCT_ID + ".jpg";
			var oDataModel = this.getView().getModel();
			oDataModel.create("/ProductSet", payload,{
				success: function(){
					StatusMessage.show("This was an amazing session, Miss you all@!");
				},
				error: function(oError){
					MessageAPI.error(JSON.parse(oError.responseText).error.message.value);
				}
			});
		},
		onFMCall: function(){
				var oDataModel = this.getView().getModel();
				var that = this;
				oDataModel.callFunction("/GetMostExpensiveProduct",{
					success: function(response){
						that.getView().getModel("local").setProperty("/productData", response);
					},
					error: function(oError){
						debugger;
					}
				});
		},
		onBack: function(){
			//Step 1: get the app object from base class method
			//Step 2: navigate to view1 - idView1
			this.getAppObject().to("idView1");
		}  */

	}); 
}); 