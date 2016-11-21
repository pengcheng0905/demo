Ext.define('Apache.controller.ApacheController', {
	extend : 'Ext.app.Controller',
	views : [ 'ApacheList' ],
	stores : [ 'ApacheStore' ],

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