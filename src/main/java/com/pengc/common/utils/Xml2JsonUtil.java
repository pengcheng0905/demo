package com.pengc.common.utils;

import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

import javassist.bytecode.stackmap.TypeData.ClassName;

public class Xml2JsonUtil {
	public static Logger logger = Logger.getLogger(ClassName.class);

	public static JSONObject xml2JSON(String xml) {
		JSONObject jsonObj = null;
		try {
			jsonObj = XML.toJSONObject(xml);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		logger.info(jsonObj.toString(4));
		return jsonObj;
	}

	public static void main(String[] args) {
		System.out.println(Xml2JsonUtil.xml2JSON(
				"<status><jvm><memory free='254596584' total='417857536' max='1849688064'/><memorypool name='PS Eden Space' type='Heap memory' usageInit='32505856' usageCommitted='260046848' usageMax='640679936' usageUsed='122017728'/><memorypool name='PS Old Gen' type='Heap memory' usageInit='87031808' usageCommitted='132120576' usageMax='1387266048' usageUsed='41243224'/><memorypool name='PS Survivor Space' type='Heap memory' usageInit='5242880' usageCommitted='25690112' usageMax='25690112' usageUsed='0'/><memorypool name='Code Cache' type='Non-heap memory' usageInit='2555904' usageCommitted='14024704' usageMax='251658240' usageUsed='13860160'/><memorypool name='Compressed Class Space' type='Non-heap memory' usageInit='0' usageCommitted='5505024' usageMax='1073741824' usageUsed='5219448'/><memorypool name='Metaspace' type='Non-heap memory' usageInit='0' usageCommitted='43474944' usageMax='-1' usageUsed='42629032'/></jvm><connector name=''ajp-nio-8889''><threadInfo  maxThreads='200' currentThreadCount='0' currentThreadsBusy='0' /><requestInfo  maxTime='0' processingTime='0' requestCount='0' errorCount='0' bytesReceived='0' bytesSent='0' /><workers></workers></connector><connector name=''http-nio-8888''><threadInfo  maxThreads='200' currentThreadCount='10' currentThreadsBusy='1' /><requestInfo  maxTime='498' processingTime='2679' requestCount='73' errorCount='5' bytesReceived='0' bytesSent='113628' /><workers><worker  stage='R' requestProcessingTime='0' requestBytesSent='0' requestBytesReceived='0' remoteAddr='&#63;' virtualHost='&#63;' method='&#63;' currentUri='&#63;' currentQueryString='&#63;' protocol='&#63;' /><worker  stage='S' requestProcessingTime='5' requestBytesSent='0' requestBytesReceived='0' remoteAddr='0:0:0:0:0:0:0:1' virtualHost='localhost' method='GET' currentUri='/manager/status' currentQueryString='XML=true' protocol='HTTP/1.1' /><worker  stage='R' requestProcessingTime='0' requestBytesSent='0' requestBytesReceived='0' remoteAddr='&#63;' virtualHost='&#63;' method='&#63;' currentUri='&#63;' currentQueryString='&#63;' protocol='&#63;' /><worker  stage='R' requestProcessingTime='0' requestBytesSent='0' requestBytesReceived='0' remoteAddr='&#63;' virtualHost='&#63;' method='&#63;' currentUri='&#63;' currentQueryString='&#63;' protocol='&#63;' /></workers></connector></status>"));
	}
}