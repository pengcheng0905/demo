<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!-- EXTJS 6.0 -->
<script type="text/javascript" src="/resources/ext-6.0.0/build/ext-all-debug.js"></script>
<!-- <script type="text/javascript" src="/resources/ext-6.0.0/build/classic/locale/locale-zh_CN-debug.js"></script> -->
<script type="text/javascript" src="/resources/ext-6.0.0/build/classic/theme-neptune/theme-neptune-debug.js"></script>
<link rel="stylesheet" href="/resources/ext-6.0.0/build/classic/theme-neptune/resources/theme-neptune-all-debug.css"></link>

<!-- GANTT -->
<script type="text/javascript" src="/resources/extgantt/js/gantt-all-debug.js"></script>
<link rel="stylesheet" href="/resources/extgantt/css/sch-gantt-neptune-all.css"></link>
<script type="text/javascript">
	Ext.Loader.setConfig({
		enabled : true,
		paths : {
			'common' : '/js/common'
		}
	});
	Ext.require([ 'common.ListGrid',
	              'common.Popup' ]);
</script>