Ext.define('User.model.UserModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'createDate',
		type : 'string'
	}, {
		name : 'createBy',
		type : 'string'
	}, {
		name : 'username',
		type : 'string'
	}  ]
});