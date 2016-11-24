<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<!-- EXTJS 6.0.0 -->
<!-- <script type="text/javascript" src="/resources/ext-6.0.0/build/ext-all-debug.js"></script>
<script type="text/javascript" src="/resources/ext-6.0.0/build/charts-debug.js"></script>
<script type="text/javascript" src="/resources/ext-6.0.0/build/Color.js"></script> -->
<!-- <script type="text/javascript" src="/resources/ext-6.0.0/build/classic/locale/locale-zh_CN-debug.js"></script> -->
<!-- <script type="text/javascript" src="/resources/ext-6.0.0/build/classic/theme-neptune/theme-neptune-debug.js"></script>
<link rel="stylesheet" href="/resources/ext-6.0.0/build/classic/theme-neptune/resources/theme-neptune-all-debug.css"></link> -->

<!-- EXTJS 6.2.0 -->
<script type="text/javascript" src="/resources/ext-6.2.0/build/ext-all-debug.js"></script>

<script type="text/javascript" src="/resources/ext-6.2.0/build/packages/charts/classic/charts-debug.js"></script>

<script type="text/javascript" src="/resources/ext-6.0.0/build/classic/locale/locale-zh_CN-debug.js"></script>
<script type="text/javascript" src="/resources/ext-6.2.0/build/classic/theme-neptune/theme-neptune-debug.js"></script>
<link rel="stylesheet" href="/resources/ext-6.2.0/build/classic/theme-neptune/resources/theme-neptune-all-debug.css"></link>

<!-- GANTT -->
<!-- <script type="text/javascript" src="/resources/ext-6.0.0-gantt/js/gantt-all-debug.js"></script> -->
<script type="text/javascript" >
	Ext.Loader.setConfig({
		enabled : true,
		paths : {
			'Ext.chart' : '/resources/ext-6.2.0/build/packages/charts/classic/src/chart',
			'Ext.draw' : '/resources/ext-6.2.0/build/packages/charts/classic/src/draw'
		}
	});
</script>

<!-- <link rel="stylesheet" href="/resources/ext-6.0.0-gantt/css/sch-gantt-neptune-all.css"></link> -->
<jsp:include page="cssHeader.jsp" />