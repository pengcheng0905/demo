package com.pengc.listeners.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pengc.common.service.ListenersService;

import sun.misc.BASE64Encoder;

@Service("TomcatService")
@Transactional(readOnly = false)
public class TomcatService extends ListenersService {
	public StringBuffer getTomcatInfo(String username, String password, String operateURL) {

		StringBuffer sb = new StringBuffer();
		URL url = null;
		try {
			url = new URL(operateURL);
			URLConnection conn = (URLConnection) url.openConnection();

			String configuration = username + ":" + password;
			String encodedPassword = new BASE64Encoder().encode(configuration.getBytes());
			conn.setRequestProperty("Authorization", "Basic " + encodedPassword);
			// URL授权访问 -- End

			InputStream is = conn.getInputStream();
			BufferedReader bufreader = new BufferedReader(new InputStreamReader(is));
			String line = null;
			while ((line = bufreader.readLine()) != null) {
				sb.append(line);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sb;
	}
}
