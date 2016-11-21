package com.pengc.listeners.service;

import java.io.BufferedReader;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pengc.common.service.ListenersService;

@Service("ApacheService")
@Transactional(readOnly = false)
public class ApacheService extends ListenersService {

	public Boolean isActived(String url) {
		Boolean active = Boolean.FALSE;
		get(url);
		BufferedReader bufferedReader = getConnectBufferedReader(url);
		readBufferedReader(bufferedReader);
		closeBufferedReader(bufferedReader);
		return active;
	}
}
