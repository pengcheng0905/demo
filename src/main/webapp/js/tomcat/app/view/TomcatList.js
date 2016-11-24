Ext.define('Tomcat.view.TomcatList', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.tomcatlist',
	collapsible : true,

	store : 'TomcatStore',
	layout : "fit",
	initComponent : function() {

		this.items = [ {
			xtype : 'polar',
			theme : 'green',
			interactions : [ 'rotate', 'itemhighlight' ],
			store : {
				fields : [ 'name', 'data1' ],
				data : [ {
					name : 'metric one',
					data1 : 14
				}, {
					name : 'metric two',
					data1 : 16
				}, {
					name : 'metric three',
					data1 : 14
				}, {
					name : 'metric four',
					data1 : 6
				}, {
					name : 'metric five',
					data1 : 36
				} ]
			},
			series : {
				type : 'pie',
				highlight : true,
				angleField : 'data1',
				label : {
					field : 'name',
					display : 'rotate'
				},
				donut : 30
			}
		} ];

		this.callParent(arguments);
	}
});