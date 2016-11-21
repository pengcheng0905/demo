package com.pengc.listeners.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pengc.common.controller.ListenersController;
import com.pengc.common.model.ReturnData;
import com.pengc.play.model.Users;

@Controller
@RequestMapping(value = "/apache")
public class ApacheListenersController extends ListenersController {

	public final static String APACHE_PAGE = "/apache/apacheList";

	@RequestMapping(value = "")
	public String list() {
		return APACHE_PAGE;
	}

	@RequestMapping(value = "data")
	@ResponseBody
	public ReturnData checkUser(@ModelAttribute Users user) {
		ReturnData returnData = new ReturnData();
		return returnData;
	}

}