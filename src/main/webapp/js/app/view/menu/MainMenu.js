Ext.define('Play.view.menu.MainMenu', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.mainmenu',
	title : 'Simple Tree',
	store : [ 'meun.MenuStore' ],
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