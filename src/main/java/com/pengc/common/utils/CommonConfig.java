package com.pengc.common.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CommonConfig {

	@Value("${Alerm}")
	public String alerm;

	@Value("${RedLite}")
	public String redLite;

	@Value("${YellowLite}")
	public String yellowLite;

	@Value("${GreenLite}")
	public String greenLite;

	@Value("${PatitePort}")
	public String patitePort;

	public String getAlerm() {
		return alerm;
	}

	public String getRedLite() {
		return redLite;
	}

	public String getYellowLite() {
		return yellowLite;
	}

	public String getGreenLite() {
		return greenLite;
	}

	public String getPatitePort() {
		return patitePort;
	}

}
