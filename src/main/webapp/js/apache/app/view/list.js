Ext.define('Apache.view.list', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.apachelist',

	store : 'store',
	initComponent : function() {

		this.columns = [ {
			header : 'firstName',
			dataIndex : 'firstName',
			flex : 1
		}, {
			header : 'lastName',
			dataIndex : 'lastName',
			flex : 1
		} ];

		this.callParent(arguments);
	}
});