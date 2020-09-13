sap.ui.define([
	"modi/controller/BaseController",
	"modi/models/model"

	
], function(Controller, model) {
	"use strict";

	return Controller.extend("modi.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modi.view.App
		 */
		onInit: function () {
        
    //var oModel = model.createFruitModel();
//	this.getView().setModel(oModel);

			
		 var oApp = this.getView().byId("myApp");
	
	/*	var oView1 = new sap.ui.view({
			id:"idView1",
		viewName:"modi.view.View1",
		type: sap.ui.core.mvc.ViewType.XML	 });
			 var oView2 = new sap.ui.view({
			 	id:"idView2",
			viewName:"modi.view.View2",
			type: sap.ui.core.mvc.ViewType.XML
			});
			
			 var oEmpty = new sap.ui.view({
			 	id:"idEmpty",
		 	viewName:"modi.view.Empty",
		 	type: sap.ui.core.mvc.ViewType.XML
			 });
			oApp.addMasterPage(oView1); */
//	oApp.addDetailPage(oEmpty);
//	oApp.addDetailPage(oView2);
			
//	 oApp.setInitialDetail("idEmpty"); 

		
			// oApp.addPage(oView1);
		
	//	 oApp.addPage(oView2);
		 
	
        
		} 

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modi.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf modi.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf modi.view.App
		 */
		//	onExit: function() {
		//
		//	}

 });

});