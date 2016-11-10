package com.pengc.common.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import org.hibernate.annotations.GenericGenerator;
import org.json.JSONObject;

@MappedSuperclass
public class EntityModel implements Serializable, EntityImpl {

	private static final long serialVersionUID = -3711243327665249087L;
	@Id
	@GenericGenerator(name = "idGenerator", strategy = "uuid")
	@GeneratedValue(generator = "idGenerator")
	private String id;

	private Date createDate;

	private String createBy;

	@Version
	private Integer version;

	public EntityModel() {

	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getCreateBy() {
		return createBy;
	}

	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public JSONObject toJsonObject() {
		JSONObject jo = new JSONObject();
		jo.put("id", getId());
		jo.put("createDate", getCreateDate());
		jo.put("createBy", getCreateBy());
		jo.put("version", getVersion());
		return jo;
	}
}
