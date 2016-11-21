Ext.define('Play.controller.accordion.AccordionController', {
	extend : 'Ext.app.Controller',
	views : [ 'accordion.Accordion' ],

	init : function() {
		this.control({
			'viewport > panel' : {
				render : this.onPanelRendered
			}
		});
	},

	onPanelRendered : function() {
		console.log('The panel was rendered');
	}
});