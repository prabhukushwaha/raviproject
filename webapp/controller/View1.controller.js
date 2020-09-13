sap.ui.define([
	"modi/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("modi.controller.View1", {

		onNext: function () {
			var oApp = this.getAppObject();
			oApp.to("idView2");
		},

		onPressItem: function (oEvent) {
			// //Here we get the object of the item selected by user
			var oItem = oEvent.getParameter("listItem");
			// //What is the concept called which gives me address of the element - Context
			var sPath = oItem.getBindingContextPath();
			// //Get the object of view 2 and bind this address as ABSOLUTE PATH to second view
		//	  var oApp = this.getAppObject();
	//	var oView2 = oApp.getPages()[1];
		//	 var oView2 = oApp.getDetailPages()[1 ];
	//			oView2.bindElement(sPath);

		//	this.onNext();////

			var sItemIndex = sPath.split("/")[sPath.split("/").length - 1];
			//this.onNext();
		
			//Pass the index of the fruit which was selected by user
		this.oRouter.navTo("spiderman", {
				fruitId: sItemIndex
			});
			console.log(sPath);
		},

onAdd: function(){
			this.oRouter.navTo("addProduct");  },

		onSearch: function (oEvent) {
//
			debugger;
			var queryString = oEvent.getParameter("query");

			var oFilter = new sap.ui.model.Filter("name",
				sap.ui.model.FilterOperator.Contains,

				queryString);
			//var oFilter2 = new sap.ui.model.Filter("benefit",
			//                                   sap.ui.model.FilterOperator.Contains,
			//                               queryString);
			//	var oMainFilter = new sap.ui.model.Filter({
			//	filters: [oFilter],
			//	and: false
			//	});
			//	var aFilter = [oMainFilter];
			var aFilter = [oFilter];
			var oList = this.getView().byId("hanuman");
			oList.getBinding("items").filter(aFilter);
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modi.view.View1
		 */
		onInit: function () {
			this.anubhav = 30;
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		//	this.oRouter = this.getOwnerComponent().getRouter();

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modi.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf modi.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf modi.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});