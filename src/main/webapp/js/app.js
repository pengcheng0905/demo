Ext.application({
	name : 'Play',
	appFolder : 'js/app',
	controllers : [ 'UserController' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : {
				xtype : 'userlist'
			}
		});
	}
});