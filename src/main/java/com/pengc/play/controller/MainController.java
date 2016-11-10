package com.pengc.play.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pengc.play.model.Users;
import com.pengc.play.service.UsersService;

@Controller
@RequestMapping(value = "/main")
public class MainController {

	@Autowired
	private UsersService userService;

	@RequestMapping(value = "")
	public String login() {
		return "/main/main";
	}

	@ModelAttribute
	public Users getUser() {
		// userService.
		Users user = new Users();
		return user;
	}
}