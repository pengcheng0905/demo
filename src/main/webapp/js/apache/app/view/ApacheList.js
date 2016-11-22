Ext.define('Apache.view.ApacheList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.apachelist',
	collapsible : true,

	store : 'ApacheStore',
	initComponent : function() {

		this.columns = [ {
			header : 'Key',
			dataIndex : 'key',
			flex : 0.5
		}, {
			header : 'Status',
			dataIndex : 'value',
			flex : 1
		} ];

		this.callParent(arguments);
	}
});