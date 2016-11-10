package com.pengc.play.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pengc.common.model.ReturnData;
import com.pengc.play.model.Users;
import com.pengc.play.service.UsersService;

@Controller
@RequestMapping(value = "/login")
public class LoginController {

	public final static String LOGIN_PAGE = "/login/login";
	public final static String MAIN_PAGE = "/main/main";

	@Autowired
	private UsersService userService;

	@RequestMapping(value = "")
	public String login() {
		return LOGIN_PAGE;
	}

	@ModelAttribute
	public Users getUser(@RequestParam(required = false) String username,
			@RequestParam(required = false) String password) {
		// userService.
		Users user = new Users();
		user.setUsername(username);
		user.setPassword(password);
		return user;
	}

	@RequestMapping(value = "checkUser")
	@ResponseBody
	public ReturnData<Users> checkUser(@ModelAttribute Users user) {
		ReturnData<Users> returnData = new ReturnData<Users>();
		returnData.setSuccess("123".equals(user.getUsername()) && "123".equals(user.getPassword()));
		return returnData;
	}
}