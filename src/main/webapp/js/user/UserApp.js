Ext.application({
	name : 'User',
	appFolder : 'js/user/app',
	controllers : [ 'UserController' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			items : [ {
				xtype : 'userlist'
			} ]
		});
	}
});