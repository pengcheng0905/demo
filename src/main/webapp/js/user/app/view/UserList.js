Ext.define('User.view.UserList', {
	extend : 'Ext.grid.Panel',

	alias : 'widget.userlist',
	collapsible : true,
	store : 'UserStore',
	initComponent : function() {

		this.columns = [ {
			header : 'USERNAME',
			dataIndex : 'username',
			flex : 0.5
		}, {
			header : 'CREATEBY',
			dataIndex : 'createBy',
			flex : 0.5
		}, {
			header : 'CREATEDATE',
			dataIndex : 'createDate',
			xtype : 'datecolumn',
			flex : 1
		} ];

		this.tools = [ {
			type : 'plus',
			tooltip : 'ADD RECORD',
			// hidden:true,
			handler : function(event, toolEl, panelHeader) {
				// refresh logic
			}
		}, {
			type : 'minus',
			callback : function(panel, tool, event) {
				// show help here
			}
		} ]
		this.callParent(arguments);
	}
});