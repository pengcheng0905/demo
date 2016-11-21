Ext.define('Apache.store.store', {
	extend : 'Ext.data.Store',
	model : 'Apache.model.model',
	proxy : {
		type : 'ajax',
		url : '/apache/data',
		reader : {
			type : 'json',
			rootProperty : 'users'
		}
	},
	autoLoad : true
});