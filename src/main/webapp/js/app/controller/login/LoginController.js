Ext.define('Play.controller.login.LoginController', {
	extend : 'Ext.app.Controller',
	views : [ 'login.Login' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			},
			'viewport > panel' : {
				afterrender : this.afterPanelRendered
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
			'loginwindow text[name=verificationCode]' : {
				click : this.buildVerificationCode
			}
		});
	},
	control : {

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
	afterPanelRendered : function() {
		this.buildVerificationCode();
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
					var result = action.result;
					if (result.success) {
						Ext.Msg.alert('欢迎', '欢迎您，尊敬的 ' + result.datas[0].username);
						Ext.getCmp('loginWin').close();
					} else {
						Ext.Msg.alert('Failed', '请重试');
					}
				},
				failure : function(form, action) {
					Ext.Msg.alert('Failed', '请重试');
				}
			});
		}
	},
	buildVerificationCode : function() {
		var code = "";
		var codeLength = 6;// 验证码的长度
		var checkCode = Ext.getCmp('verificationCode');
		if (checkCode) {
			var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');// 所有候选组成验证码的字符，当然也可以用中文的

			for (var i = 0; i < codeLength; i++) {
				var charIndex = Math.floor(Math.random() * 36);
				code += selectChar[charIndex];
			}
			checkCode.cls = "verificationCode";
			checkCode.setValue(code);
		}
	}
});