Ext.define('Play.store.UserStore', {

	extend : 'Ext.data.Store',
	// fields : [ 'id', 'name', 'email' ]
	autoLoad : true,
	data : [ [ 1, 'gloomyfish', 'bfnh1998@hotmail.com' ], [ 2, 'Bob Denoy', 'bobwindy@yahoo.com' ], [ 3, 'Rose Kate', 'kittygroup@facebook.com' ] ],
	idProperty : 'id'
});