package com.pengc.play.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pengc.common.dao.EntityDao;
import com.pengc.common.service.EntityService;
import com.pengc.play.dao.UsersDao;
import com.pengc.play.model.Users;

@Service
@Transactional(readOnly = false)
public class UsersService extends EntityService<Users> {
	@Autowired
	private UsersDao userDao;

	public boolean registe(Users user) {
		getEntityDao().save(user);
		return false;
	}

	public boolean login(Users user) {
		getEntityDao().findByEntity(user);
		return false;
	}

	@Override
	public EntityDao<Users> getEntityDao() {
		return userDao;
	}
}