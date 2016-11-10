Ext.define('Play.controller.UserController', {
	extend : 'Ext.app.Controller',
	views : [ 'user.UserList' ],
	stores : [ 'UserStore' ],
	model : [ 'UserModel' ],

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