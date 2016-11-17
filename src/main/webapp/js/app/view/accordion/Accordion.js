Ext.define('Play.view.accordion.Accordion', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.accordionview',
	title : "菜单",
	layout : "accordion",
	layoutConfig : {
		animate : true
	},
	width : 250,
	minWidth : 90,
	region : "west", // 设置方位
	split : true,
	collapsible : true,
	items : [ {
		xtype : 'mainmenu'
	}, {
		title : "2",
		html : "2",
		iconCls : "search"
	}, {
		title : "3",
		html : "3",
		iconCls : "back"
	}, {
		title : "4",
		html : "4",
		iconCls : "12"
	} ]
});