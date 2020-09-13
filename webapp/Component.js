sap.ui.define(
	["sap/ui/core/UIComponent"],
	function (UIComponent) {

		return UIComponent.extend("modi.Component", {

			metadata: {
				"manifest": "json"
			},
			init: function () {
				//Calling the base class constructor
				//Why? - the standard base class creates lots of FREE objects for us
				//Router - will be used for navigation between views
			
				//	var oRouter = this.getRouter();
				//	oRouter.initialize(); 
            
				UIComponent.prototype.init.apply(this);
				var oRouter = this.getRouter();
		       	oRouter.initialize();

			},
	//		createContent: function () {

	//	var oAppView = new sap.ui.view({
	///				id: "idAppView",
	//				viewName: "modi.view.App",
	//			type: sap.ui.core.mvc.ViewType.XML
	////			});

	//	return oAppView; 
	//		},
		
		});

	}
);