Ext.application({
	name : 'Apache',
	appFolder : 'js/apache/app',
	controllers : [ 'controller' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			items : [ {
				xtype : 'apachelist'
			} ]
		});
	}
});