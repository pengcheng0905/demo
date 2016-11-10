package com.pengc.common.model;

import java.util.List;

public class ReturnData<T extends EntityModel> {
	private Boolean success = true;
	private List<T> datas;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public List<T> getDatas() {
		return datas;
	}

	public void setDatas(List<T> datas) {
		this.datas = datas;
	}

}
