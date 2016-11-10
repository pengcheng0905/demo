package com.pengc.play.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pengc.play.service.UsersService;

@Controller
@RequestMapping(value = "/userList")
public class UserListController {

	public final static String PAGE_PATH = "/user/userList";

	@Autowired
	private UsersService userService;

	@RequestMapping(value = "")
	public String list() {
		return PAGE_PATH;
	}

}