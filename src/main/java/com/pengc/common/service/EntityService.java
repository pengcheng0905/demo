package com.pengc.common.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pengc.common.dao.EntityDao;

@Service
//@Transactional(readOnly = false)
public class EntityService {

	@Autowired
	private EntityDao EntityDao;

	public EntityDao getEntityDao() {
		return EntityDao;
	}

}