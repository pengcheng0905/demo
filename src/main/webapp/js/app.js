Ext.application({
	name : 'Play',
	appFolder : 'js/app',
	controllers : [ 'user.UserController',
	                'accordion.AccordionController',
	                'main.MainController',
	                'menu.MenuController'
	                ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			items : [ {
				xtype : 'accordionview'
			}, {
				xtype : 'mainview'
			} ]
		});
	}
});