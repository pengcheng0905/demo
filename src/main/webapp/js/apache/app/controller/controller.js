Ext.define('Apache.controller.controller', {
	extend : 'Ext.app.Controller',
	views : [ 'list' ],
	stores : [ 'store' ],

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