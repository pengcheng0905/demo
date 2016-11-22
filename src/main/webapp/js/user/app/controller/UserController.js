Ext.define('User.controller.UserController', {
	extend : 'Ext.app.Controller',
	views : [ 'UserList' ],
	stores : [ 'UserStore' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			}
		});
	},
	onPanelRendered : function() {
		console.log('The User was rendered');
	},

});