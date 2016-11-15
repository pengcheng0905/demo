Ext.define('Play.controller.user.UserController', {
	extend : 'Ext.app.Controller',
	views : [ 'user.UserList' ],
	stores : [ 'user.UserStore' ],
	model : [ 'user.UserModel' ],

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