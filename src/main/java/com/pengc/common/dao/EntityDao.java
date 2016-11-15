package com.pengc.common.dao;

import java.io.Serializable;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.pengc.common.model.EntityModel;

@Repository
public class EntityDao<T extends EntityModel> {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	public T findById(Class<T> t, Serializable id) {
		return hibernateTemplate.get(t, id);
	}
	
	public List<T> findByEntity(T t) {
		return hibernateTemplate.findByExample(t);
	}

	public List<T> findAll(Class<T> type) {
		return hibernateTemplate.loadAll(type);
	}

	public void save(Object... entities) {
		for (Object entity : entities) {
			hibernateTemplate.save(entity);
		}
	}

	public void saveOrUpdate(Object entity) {
		hibernateTemplate.saveOrUpdate(entity);
	}

	public void update(Object... entities) {
		for (Object entity : entities) {
			hibernateTemplate.update(entity);
		}
	}

	public void delete(Object... entities) {
		for (Object entity : entities) {
			if (entity != null) {
				hibernateTemplate.delete(entity);
			}
		}
	}

	public void deleteById(Class<T> type, Serializable id) {
		if (id == null) {
			return;
		}
		T entity = findById(type, id);
		if (entity == null) {
			return;
		}
		delete(entity);
	}

	public void refresh(Object... entities) {
		for (Object entity : entities) {
			hibernateTemplate.refresh(entity);
		}
	}

	public void flush() {
		hibernateTemplate.flush();
	}
	
	public SessionFactory getSessionFactory(){
		SessionFactory sessionFactory = hibernateTemplate.getSessionFactory();
		return sessionFactory;
	}
}
