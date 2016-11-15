package com.pengc.common.service;

import com.pengc.common.dao.EntityDao;
import com.pengc.common.model.EntityModel;

//@Service
//@Transactional(readOnly = false)
public abstract class EntityService<T extends EntityModel> {

	public abstract EntityDao<T> getEntityDao();

}