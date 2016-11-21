Ext.define('Apache.view.ApacheList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.apachelist',

	store : 'ApacheStore',
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