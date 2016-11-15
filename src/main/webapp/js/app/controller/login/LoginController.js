Ext.define('Play.controller.login.LoginController', {
	extend : 'Ext.app.Controller',
	views : [ 'login.Login' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			},
			// 别名 + 类型
			'loginwindow button[action=reset]' : {
				click : this.resetFunc
			},
			'loginwindow button[action=login]' : {
				click : this.loginFunc
			}
		});
	},
	refs : [ {
		ref : 'loginForm',// name
		selector : 'form'// 类型
	}, {
		ref : 'loginWin',// name
		selector : 'window'// 类型
	} ],
	onPanelRendered : function() {
		console.log('The login window was rendered');
	},

	resetFunc : function() {
		this.getLoginForm().getForm().reset();
	},
	loginFunc : function() {
		var form = this.getLoginForm().getForm();
		var me = this;
		if (form.isValid()) {
			form.submit({
				success : function(form, action) {
					Ext.Msg.alert('Success', action.result.msg);
					Ext.getCmp('loginWin').close();
				},
				failure : function(form, action) {
					Ext.Msg.alert('Failed', action.result.msg);
				}
			});
		}
	}
});