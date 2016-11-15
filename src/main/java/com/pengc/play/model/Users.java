package com.pengc.play.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.json.JSONObject;

import com.pengc.common.model.EntityModel;

@Entity
@Table(name = "users")
public class Users extends EntityModel {

	private static final long serialVersionUID = -3432983318207511802L;

	private String username;
	private String password;

	public Users() {

	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public JSONObject toJsonObject() {
		JSONObject jo = super.toJsonObject();
		jo.put("username", getPassword());
		jo.put("password", getPassword());
		return jo;
	}
}
