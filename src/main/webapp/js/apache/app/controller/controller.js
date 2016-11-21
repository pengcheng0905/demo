Ext.define('Apache.controller.controller', {
	extend : 'Ext.app.Controller',
	views : [ 'list' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			}
		});
	},
	refs : [],
	onPanelRendered : function() {
		console.log('The login window was rendered');
	},

});