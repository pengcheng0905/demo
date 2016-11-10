package com.pengc.gantt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.pengc.play.service.UsersService;

@Controller
@RequestMapping(value = "/user")
public class GanttController {

	@Autowired
	private UsersService userService;

	@RequestMapping(value = "/registe", method = RequestMethod.GET)
	public String registe() {
		return "index";
	}
}