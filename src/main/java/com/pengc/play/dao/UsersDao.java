package com.pengc.play.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.pengc.common.dao.EntityDao;
import com.pengc.play.model.Users;

@Transactional
@Repository
public class UsersDao extends EntityDao<Users> {
}
