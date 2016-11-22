package com.pengc.listeners.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pengc.common.service.ListenersService;
import com.pengc.common.utils.ApacheServerInfo;
import com.pengc.common.utils.ElementUtils;

@Service("ApacheService")
@Transactional(readOnly = false)
public class ApacheService extends ListenersService {

	public JSONArray getApacheStatusInfo(Document html) {
		JSONArray ja = new JSONArray();
		for (ApacheServerInfo info : ApacheServerInfo.values()) {
			String key = info.getText();
			Element e = html.getElementsContainingOwnText(info.getText()).get(0);
			String text = ElementUtils.getTextByKey(e, key);
			JSONObject jo = new JSONObject();
			jo.put("key", key);
			jo.put("value", text);
			ja.put(jo);
		}
		return ja;
	}
}
