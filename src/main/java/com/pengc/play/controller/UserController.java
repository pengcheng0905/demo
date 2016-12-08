package com.pengc.play.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pengc.common.controller.CommonController;
import com.pengc.common.model.ReturnData;
import com.pengc.patlite.utils.PatliteUtils;
import com.pengc.play.model.Users;
import com.pengc.play.service.UsersService;

@Controller
@RequestMapping(value = "/users")
public class UserController extends CommonController{

	public final static String USERS_PAGE = "user/userList";

	@Autowired
	private UsersService userService;
	
	@Autowired
	public PatliteUtils patliteUtils;

	@RequestMapping(value = "")
	public String login() {
		return USERS_PAGE;
	}

	@ModelAttribute
	public Users getUser(@RequestParam(required = false) String username, @RequestParam(required = false) String password) {
		Users user = new Users();
		user.setUsername(username);
		return user;
	}

	@RequestMapping(value = "data")
	@ResponseBody
	public ReturnData<Users> checkUser(@ModelAttribute Users user) {
		patliteUtils.initPatlite("127.0.0.1");
		ReturnData<Users> returnData = new ReturnData<Users>();
		List<Users> userList = userService.getAll();
		returnData.setDatas(userList);
		return returnData;
	}
}