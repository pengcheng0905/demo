Ext.application({
	name : 'Apache',
	appFolder : 'js/apache/app',
	controllers : [ 'ApacheController' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			items : [ {
				xtype : 'apachelist'
			} ]
		});
	}
});