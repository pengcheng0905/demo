Ext.application({
	name : 'Apache',
	appFolder : 'js/listeners/app',
	controllers : [ 'user.UserController',
	                'accordion.AccordionController',
	                'main.MainController',
	                'menu.MenuController',
	                'login.LoginController'],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			items : [/* {
				xtype : 'loginwindow'
			}, */{
				xtype : 'accordionview'
			}, {
				xtype : 'mainview'
			} ]
		});
	}
});