Ext.define('Play.view.user.UserList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',

	title : 'All Users',
	store : [ 'user.UserStore' ],

	initComponent : function() {

		this.columns = [ {
			header : 'id',
			dataIndex : 'id',
			flex : 1
		}, {
			header : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			header : 'Email',
			dataIndex : 'email',
			flex : 1
		} ];

		this.callParent(arguments);
	}
});