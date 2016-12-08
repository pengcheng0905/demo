Ext.define('Play.view.main.MainView', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.mainview',
	region : 'center',
	margins : '0 5 0 0',
	activeTab : 0,
	id : 'mainTabPanel',
	tools : [{
				type : 'help',
				callback : function() {
					// show help here
				}
			}, {
				itemId : 'refresh',
				type : 'refresh',
				hidden : true,
				callback : function() {
					// do refresh
				}
			},{
				xtype : 'combobox',
				id : 'themeCombobox',
				valueField : 'value',
				displayField : 'text',
				store : Ext.create('Ext.data.Store', {
					fields : [ 'value', 'text' ],
					data : [ {
						"text" : "Classic",
						"value" : "classic"
					}, {
						"text" : "Classic Sandbox",
						"value" : "classic-sandbox"
					}, {
						"text" : "Neptune",
						"value" : "neptune"
					}, {
						"text" : "Triton",
						"value" : "triton"
					} ]
				}),
				listeners : {
					change : function(combo, newValue, oldValue, eOpts) {
						var path = '/resources/ext-6.0.0/build/classic/theme-' + newValue + '/resources/theme-' + newValue + '-all-debug.css';
						Ext.util.CSS.swapStyleSheet('theme', path);
					}
				}
			} ]

});