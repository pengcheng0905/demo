Ext.define('Tomcat.controller.TomcatController', {
	extend : 'Ext.app.Controller',
	views : [ 'TomcatList' ],
	stores : [ 'TomcatStore' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			}
		});
	},
	refs : [],
	onPanelRendered : function() {
		console.log('The Apache listeners was rendered');
	},

});