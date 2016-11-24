Ext.application({
	name : 'Tomcat',
	appFolder : 'js/tomcat/app',
	controllers : [ 'TomcatController' ],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			items : [ {
				xtype : 'tomcatlist'
			} ]
		});
	}
});