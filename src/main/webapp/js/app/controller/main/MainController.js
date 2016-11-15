Ext.define('Play.controller.main.MainController', {
	extend : 'Ext.app.Controller',
	views : [ 'main.MainView' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			}
		});
	},

	onPanelRendered : function() {
		console.log('The panel was rendered');
	}
});