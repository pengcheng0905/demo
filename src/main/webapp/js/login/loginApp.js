Ext.application({
	name : 'Login',
	appFolder : 'login',
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			header : "Viewport",
			items : [ {
				xtype : 'window',
				autoShow : true,
				title : 'login',
				resizable : false,
				closable : false,
				draggable : false,
				items : [ {
					xtype : 'form',
					id : 'loginForm',
					margin : '5 5',
					items : [ {
						xtype : 'textfield',
						fieldLabel : 'username',
						name : 'username'
					}, {
						xtype : 'textfield',
						fieldLabel : 'password',
						name : 'password'
					} ]
				} ],
				fbar : [ {
					xtype : 'button',
					text : 'submit',
					handler : function() {
						var form = Ext.getCmp('loginForm');
						form.form.submit({
							url : '/login/checkUser',
							waitMsg : 'loging......',
							timeout : 3000,
							success : function(form, action) {
								var result = action.result;
								if (result.success) {
									window.location.href = '/main';
								} else {
									Ext.Msg.alert('Warning', 'Please try again!');
								}
							},
							failure : function(response, opts) {
								Ext.Msg.alert('Warning', 'Please try again!');
							}
						})
					}
				} ]
			} ]
		});
	}
});