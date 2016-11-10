Ext.require([ 'common.Popup' ]);

Ext.define('common.ListGrid', {
	alias : 'widget.listGrid',
	extend : 'Ext.grid.Panel',
	tools : [ {
		type : 'button',
		tooltip : 'Add new record',
		handler : function(event, toolEl, panelHeader) {
			Ext.create('top.common.Popup', {
				title : 'New'
			});
		}
	} ],
	listeners : {
		itemdblclick : function(grid, record, item, index, e, eOpts) {
			Ext.create('top.common.Popup', {
				title : record.get('name')
			});
		}
	},
	dockedItems : [ {
		xtype : 'pagingtoolbar',
		store : 'simpsonsStore',
		dock : 'bottom',
		displayInfo : true
	} ]
});
