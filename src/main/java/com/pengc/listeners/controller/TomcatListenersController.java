package com.pengc.listeners.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pengc.common.controller.CommonController;
import com.pengc.common.utils.Xml2JsonUtil;
import com.pengc.listeners.service.TomcatService;

@Controller
@RequestMapping(value = "/tomcat")
public class TomcatListenersController extends CommonController {

	@Autowired
	public TomcatService tomcatService;
	public final static String TOMCAT_PAGE = "/tomcat/tomcatList";
	public final static String TOMCAT_URL = "http://localhost:8080/manager/status?XML=true";
	public final static String TOMCAT_USERNAME = "admin";
	public final static String TOMCAT_PASSWORD = "123456";

	@RequestMapping(value = "")
	public String list() {
		return TOMCAT_PAGE;
	}

	@RequestMapping(value = "data")
	@ResponseBody
	public String getData() {
		StringBuffer sb = tomcatService.getTomcatInfo(TOMCAT_USERNAME, TOMCAT_PASSWORD, TOMCAT_URL);
		JSONObject data = new JSONObject();
		data.put("datas", Xml2JsonUtil.xml2JSON(sb.toString()));
		return data.toString();
	}
}