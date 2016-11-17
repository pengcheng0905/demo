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
			},
			'loginwindow textfield[id=verificationCode]' : {
				afterrender : this.buildVerificationCode
			},
			'loginwindow textfield[id=verificationCode]' : {
				click : this.buildVerificationCode
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
	},
	buildVerificationCode : function() {
		var code = "";
		debugger;
		var codeLength = 6;// 验证码的长度
		var checkCode = document.getElementById("checkCode");
		var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C',
				'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
				'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');// 所有候选组成验证码的字符，当然也可以用中文的

		for (var i = 0; i < codeLength; i++) {
			var charIndex = Math.floor(Math.random() * 36);
			code += selectChar[charIndex];
		}
		// alert(code);
		if (checkCode) {
			checkCode.className = "verificationCode";
			checkCode.value = code;
		}
	}
});