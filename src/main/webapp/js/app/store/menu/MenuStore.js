Ext.define('Play.store.menu.MenuStore', {

	extend : 'Ext.data.TreeStore',
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