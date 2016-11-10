var myData = [ [ 1, 'gloomyfish', 'bfnh1998@hotmail.com' ],
		[ 2, 'Bob Denoy', 'bobwindy@yahoo.com' ],
		[ 3, 'Rose Kate', 'kittygroup@facebook.com' ] ];

Ext.define('Login.store.Users', {

	extend : 'Ext.data.Store',
	model : 'Login.model.User',
	autoLoad : true,
	data : myData
});