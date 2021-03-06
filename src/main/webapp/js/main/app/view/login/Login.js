Ext.define('Play.view.login.Login', {
	extend : 'Ext.window.Window',
	alias : 'widget.loginwindow',
	title : 'Login',
	id : 'loginWin',
	autoShow : true,
	modal : true,
	bodyPadding : 5,
	closable : false,
	resizable : false,
	draggable : false,
	items : [ {
		xtype : 'form',
		url : '/login/checkUser',
		name : 'loginForm',
		items : [ {
			xtype : 'textfield',
			labelWidth : 50,
			fieldLabel : '帐号',
			name : 'username'
		}, {
			xtype : 'textfield',
			labelWidth : 50,
			fieldLabel : '密码',
			inputType : 'password',
			name : 'password'
		}, {
			xtype : 'container',
			layout : 'column',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '验证码',
				labelWidth : 50,
				width : 150
			}, {
				xtype : 'displayfield',
				fieldLabel : '验证码',
				id : 'verificationCode',
				width : 50,
				hideLabel : true
			} ]
		}, {
			xtype : 'panel',
			html : '<a href="second.js">注册</a>',
		} ]
	} ],
	buttons : [ {
		text : '登录',
		action : "login"
	}, {
		text : '重置',
		action : 'reset'
	} ]

});