Ext.define('User.store.UserStore', {
	extend : 'Ext.data.Store',
	model : 'User.model.UserModel',
	proxy : {
		type : 'ajax',
		url : '/users/data',
		reader : {
			type : 'json',
			rootProperty : 'datas'
		}
	},
	autoLoad : true
});