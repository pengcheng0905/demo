Ext.define('Tomcat.store.TomcatStore', {
	extend : 'Ext.data.Store',
	model : 'Tomcat.model.TomcatModel',
	proxy : {
		type : 'ajax',
		url : '/tomcat/data',
		reader : {
			type : 'json',
			rootProperty : 'datas'
		}
	},
	autoLoad : true
});