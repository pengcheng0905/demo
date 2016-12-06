package com.pengc.common.service;

import javax.persistence.Embeddable;

import com.pengc.common.dao.EntityDao;
import com.pengc.common.model.EntityModel;

@Embeddable
public abstract class EntityService<T extends EntityModel> {

	public abstract EntityDao<T> getEntityDao();

}