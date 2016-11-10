Ext.application({
	name : 'Main',
	appFolder : 'main',
	launch : function() {
		var tree_include = Ext.create('Ext.data.TreeStore', {
			root : {
				expanded : true,
				children : [ {
					text : "User List",
					leaf : true,
					url : '/userList'
				}, {
					text : "homework",
					expanded : true,
					children : [ {
						text : "book report",
						leaf : true
					}, {
						text : "algebra",
						leaf : true
					} ]
				}, {
					text : "buy lottery tickets",
					leaf : true
				} ]
			}
		});
		var addTab = function(id, title, url) {
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
					html: ' <iframe frameborder="0" width="100%" height="100%" src="'+ url +'"> </iframe>'
				});
				mainTabPanel.add(tab);
			}
			mainTabPanel.setActiveTab(tab);
		}
		var tree = Ext.create('Ext.tree.Panel', {
			title : 'Simple Tree',
			itemId : "treeId",
			store : tree_include,
			rootVisible : false,
			listeners : {
				itemclick : function(tree, record, item, index, e, eOpts) {
					if (record.isLeaf()) {
						var url = record.get('url');
						var id = record.get('id');
						var title = record.get('text');
						addTab(id, title, url);
					}
				}
			}
		});
		var accordion = Ext.create("Ext.panel.Panel", {
			title : "west",
			layout : "accordion",
			layoutConfig : {
				animate : true
			},
			width : 250,
			minWidth : 90,
			region : "west", // 设置方位
			split : true,
			collapsible : true,
			items : [ tree, {
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
		Ext.create('Ext.container.Viewport', {
			title : "Viewport",
			layout : "border",
			defaults : {
				bodyStyle : "background-color: #FFFFFF;",
				frame : true
			},
			items : [ accordion, {
				xtype : 'tabpanel',
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
			} ]
		});
	}
});