package com.pengc.listeners.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pengc.common.controller.ListenersController;

@Controller
@RequestMapping(value = "/tomcat")
public class TomcatListenersController extends ListenersController {

	public final static String TOMCAT_PAGE = "/tomcat/tomcatList";

	@RequestMapping(value = "")
	public String list() {
		return TOMCAT_PAGE;
	}
}