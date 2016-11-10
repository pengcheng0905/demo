Ext.application({
	name : 'User',
	appFolder : 'user',
	launch : function() {
		Ext.create('Ext.data.Store', {
			storeId : 'simpsonsStore',
			fields : [ 'name', 'email', 'phone' ],
			data : [ {
				name : 'Lisa',
				email : 'lisa@simpsons.com',
				phone : '555-111-1224'
			}, {
				name : 'Bart',
				email : 'bart@simpsons.com',
				phone : '555-222-1234'
			}, {
				name : 'Homer',
				email : 'homer@simpsons.com',
				phone : '555-222-1244'
			}, {
				name : 'Marge',
				email : 'marge@simpsons.com',
				phone : '555-222-1254'
			} ]
		});

		Ext.create('Ext.container.Viewport', {
			header : "User List",
			defaults : {
				collapsible : true,
				margin : '2 2'
			},
			layout : 'vbox',
			items : [ {
				xtype : 'panel',
				title : 'Search',
				layout : 'column',
				width : '100%',
				bodyPadding : 5,
				items : [ {
					xtype : 'datefield',
					fieldLabel : 'Start date'
				}, {
					xtype : 'datefield',
					fieldLabel : 'End date'
				}, {
					xtype : 'button',
					text : 'Search'
				}, {
					xtype : 'button',
					text : 'Reset'
				} ],
			}, {
				xtype : 'listGrid',
				width : '100%',
				title : 'List',
				bodyPadding : 5,
				store : Ext.data.StoreManager.lookup('simpsonsStore'),
				columns : [ {
					text : 'Name',
					dataIndex : 'name'/*,
					renderer : function(value) {
						return '<a style="background: red;">' + value + '</a>';
					}*/
				}, {
					text : 'Email',
					dataIndex : 'email',
					flex : 1
				}, {
					text : 'Phone',
					dataIndex : 'phone'
				} ],
			} ]
		});
	}
});