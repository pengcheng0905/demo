Ext.define('Play.view.main.MainView', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.mainview',
	region : 'center',
	margins : '0 5 0 0',
	activeTab : 0,
	id : 'mainTabPanel',
	title : 'center',
	tools : [ {
		type : 'refresh',
		tooltip : 'Refresh form Data',
		handler : function(event, toolEl, panelHeader) {
			// refresh logic
		}
	}, {
		type : 'help',
		tooltip : 'Get Help',
		callback : function(panel, tool, event) {
			// show help here
		}
	} ]

});