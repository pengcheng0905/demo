package com.pengc.listeners.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pengc.common.controller.ListenersController;

@Controller
@RequestMapping(value = "/apache")
public class ApacheListenersController extends ListenersController {

	public final static String APACHE_PAGE = "/apache/apacheList";

	@RequestMapping(value = "")
	public String list() {
		return APACHE_PAGE;
	}

}