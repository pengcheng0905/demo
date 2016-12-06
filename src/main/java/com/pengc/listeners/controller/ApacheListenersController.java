package com.pengc.listeners.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pengc.common.controller.CommonController;
import com.pengc.listeners.service.ApacheService;

@Controller
@RequestMapping(value = "/apache")
public class ApacheListenersController extends CommonController {
	@Autowired
	public ApacheService apacheService;

	public final static String APACHE_PAGE = "/apache/apacheList";
	public final static String APACHE_URL = "http://localhost/server-status";

	@RequestMapping(value = "")
	public String list() {
		logger.info(APACHE_PAGE);
		return APACHE_PAGE;
	}

	@RequestMapping(value = "data")
	@ResponseBody
	public String getData() {
		JSONArray ja = new JSONArray();
		Document html = apacheService.getHtml(APACHE_URL);
		if (html != null) {
			ja = apacheService.getApacheStatusInfo(html);
		}
		JSONObject jo = new JSONObject();
		jo.put("datas", ja);
		return jo.toString();
	}

}