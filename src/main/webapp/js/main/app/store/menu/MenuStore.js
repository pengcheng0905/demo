Ext.define('Play.store.menu.MenuStore', {
	extend : 'Ext.data.TreeStore',
	root : {
		expanded : true,
		children : [ {
			text : 'User List',
			leaf : true,
			url : '/user/list',
			id : 'userList'
		}, {
			text : 'VIEW',
			expanded : true,
			children : [ {
				text : 'TOMCAT',
				url : '/tomcat',
				leaf : true,
				id : 'tomcat'
			}, {
				text : 'APACHE',
				leaf : true,
				url : '/apache',
				id : 'apache'
			} ]
		}, {
			text : 'buy lottery tickets',
			leaf : true
		} ]
	}
});