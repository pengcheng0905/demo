Ext.Loader.setConfig({
	enabled : true,
	paths : {// '类名前缀':'所在路径'
		'Apache' : 'js/apache/app',
		'UserApp' : 'js/user',
	}
});
Ext.require('UserApp.User');
Ext.application({
	name : 'Play',
	appFolder : 'js/main/app',
	controllers : [ 'accordion.AccordionController',
					'main.MainController',
					'menu.MenuController',
					'login.LoginController' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			items : [/*
						 * { xtype : 'loginwindow' },
						 */{
				xtype : 'accordionview'
			}, {
				xtype : 'mainview'
			} ]
		});
	}
});