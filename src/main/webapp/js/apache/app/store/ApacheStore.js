Ext.define('Apache.store.ApacheStore', {
	extend : 'Ext.data.Store',
	model : 'Apache.model.ApacheModel',
	proxy : {
		type : 'ajax',
		url : '/apache/data',
		reader : {
			type : 'json',
			rootProperty : 'datas'
		}
	},
	autoLoad : true
});