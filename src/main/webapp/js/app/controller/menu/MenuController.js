Ext.define('Play.controller.menu.MenuController', {
	extend : 'Ext.app.Controller',
	views : [ 'menu.MainMenu' ],
	stores : [ 'menu.MenuStore' ],
	model : [ 'menu.MenuModel' ],

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