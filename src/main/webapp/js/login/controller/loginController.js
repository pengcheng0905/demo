Ext.define('Login.controller.loginController', {
	extend : 'Ext.app.Controller',
	alias : 'controller.loginController',
	models : [ 'loginModel' ],
	stores : [ 'loginStore' ],
//	views : [ 'Panel', 'Grid' ],

	init : function() {
		Ext.create('Login.view.Panel', {
			layout : 'fit',
			height : 300,
			width : 500,

			items : {
				xtype : 'textfield'
			},

			renderTo : document.body
		});

//		Ext.create('USERS.view.Grid').show();
	}
});