package com.pengc.listeners.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pengc.common.controller.ListenersController;
import com.pengc.listeners.service.ApacheService;

@Controller
@RequestMapping(value = "/apache")
public class ApacheListenersController extends ListenersController {
	@Autowired
	public ApacheService apacheService;

	public final static String APACHE_PAGE = "/apache/apacheList";
	public final static String APACHE_URL = "http://localhost/server-status";

	@RequestMapping(value = "")
	public String list() {
		return APACHE_PAGE;
	}

	@RequestMapping(value = "data")
	@ResponseBody
	public Boolean getData() {
		return apacheService.isActived(APACHE_URL);
	}

}