Ext.define('Play.controller.menu.MenuController', {
	extend : 'Ext.app.Controller',
	views : [ 'menu.MainMenu' ],
	model : [ 'menu.MenuModel' ],
	stores : [ 'menu.MenuStore' ],
	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			},
			'mainmenu' : {
				itemclick : this.onItemClick
			}
		});
	},

	onPanelRendered : function() {
		console.log('The panel was rendered');
	},
	onItemClick : function(tree, record, item, index, e, eOpts) {
		var url = record.get('url');
		var id = record.get('id');
		var text = record.get('text');
		this.addTab(id, text, url);
	},
	addTab : function(id, title, url) {
		var mainTabPanel = Ext.getCmp('mainTabPanel');
		var tab = Ext.getCmp(id);
		if (!tab) {
			tab = new Ext.panel.Panel({
				id : id,
				enableTabScroll : true,
				closable : true,
				autoScroll : true,
				layout : 'fit',
				title : title,
				html: ' <iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+ url +'"> </iframe>'
			});
			mainTabPanel.add(tab);
		}
		mainTabPanel.setActiveTab(tab);
	}

});