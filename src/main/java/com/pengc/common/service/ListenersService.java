package com.pengc.common.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import javax.persistence.Embeddable;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

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

	public StringBuffer readBufferedReader(BufferedReader bufferedReader) {
		StringBuffer sb = new StringBuffer();
		String s;
		try {
			while ((s = bufferedReader.readLine()) != null) {
				System.out.println(s);
				sb.append(s);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb;
	}

	public Document getHtml(String url) {
		Document doc = null;
		try {
			doc = Jsoup.connect(url).get();
		} catch (IOException e) {
			// e.printStackTrace();
		}
		return doc;
	}
}