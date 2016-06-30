sap.ui.controller("demo.xx", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demo.xx
*/
	onInit: function() {
		var frm = this.getView().byId('sf');

		  frm.addContent(new sap.m.Label({
			    text: 'dfdfdsfsdf'
		  }));
		  frm.addContent(new sap.m.Input({
				    placeholder: '0'
			  }));
		  this.getView().byId('hb').addItem(frm);
		/*var oSimpleForm = new sap.ui.layout.form.SimpleForm();
		this.getView().byId('pagel').insertContent(oSimpleForm);
		oSimpleForm.addContent( new sap.m.Label({ text: "Phone:" }) );*/
		//var oSimpleForm = this.getView().byId('sf');
		//oSimpleForm.insertContent(new sap.m.Label({text:"hi"}),2)
	},
	onPress: function() {
		//var oSimpleForm = this.getView().byId('sf');
	//	oSimpleForm.insertContent( new sap.m.Label({ text: "Phone:" }) ,3);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf demo.xx
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf demo.xx
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf demo.xx
*/
//	onExit: function() {
//
//	}

});