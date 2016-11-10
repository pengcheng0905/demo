package com.pengc.play.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pengc.common.service.EntityService;
import com.pengc.play.model.Users;

@Service
@Transactional(readOnly = false)
public class LoginService extends EntityService {

	public boolean login(Users user) {
		getEntityDao().save(user);
		return false;
	}
}