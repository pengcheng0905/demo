Ext.define('common.Popup', {
	alias : 'widget.popup',
	extend : 'Ext.window.Window',
	modal : true,
	autoShow : true,
	listeners : {
		show : function(win, e) {
			win.maximize();
		}
	},
	fbar : [ {
		xtype : 'button',
		text : 'OK',
		handler : function(button, e) {
			Ext.Msg.alert('MESSAGE', 'OK');
		}
	}, {
		xtype : 'button',
		text : 'CANCEL',
		handler : function(button, e) {
			Ext.Msg.alert('MESSAGE', 'CANCEL');

		}
	} ]
});
