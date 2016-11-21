package com.pengc.common.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Embeddable;

import org.codehaus.jackson.JsonNode;
import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@Embeddable
public abstract class ListenersService {

	public BufferedReader getConnectBufferedReader(String url) {

		System.setProperty("sun.net.client.defaultConnectTimeout", "8000");
		System.setProperty("sun.net.client.defaultReadTimeout", "10000");
		try {
			URL urlObj = new URL(url);
			URLConnection con = urlObj.openConnection();
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			con.setConnectTimeout(1000);
			con.setReadTimeout(4000);
			return in;
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	public void closeBufferedReader(BufferedReader bufferedReader) {
		try {
			bufferedReader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void readBufferedReader(BufferedReader bufferedReader) {
		String s;
		try {
			while ((s = bufferedReader.readLine()) != null) {
				 System.out.println(s);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public JSONObject get(String url) {
		Document doc = null;
		Elements tables = null;
		try {
			doc = Jsoup.connect(url).get();
			tables = doc.getElementsByTag("table");
			;
		} catch (IOException e) {
			e.printStackTrace();
		}

		JSONObject tableJo = new JSONObject();
		for (int t = 0; t < tables.size(); t++) {
			Element table = tables.get(t);
			JSONArray tableArr = new JSONArray();
			// tables
			Elements rows = table.getElementsByTag("tr");
			for (int i = 0; i < rows.size(); i++) {
				Elements elements = table.getElementsByTag("th");
				for (int j = 0; j < elements.size(); j++) {
					Element e = elements.get(j);
					JSONObject header = new JSONObject();
					header.put(String.valueOf(j), e.text());
					tableArr.put(header);
				}

			}
			tableJo.put(String.valueOf(t), tableArr);
		}
		return tableJo;
	}
}