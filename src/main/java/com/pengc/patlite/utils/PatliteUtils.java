package com.pengc.patlite.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pengc.common.utils.CommonConfig;

@Component
public class PatliteUtils {

	@Autowired
	public CommonConfig commonConfig;

	private PatliteFlashType redlite;
	private PatliteFlashType yellowlite;
	private PatliteFlashType greenlite;
	private PatliteFlashType alerm;
	private AlarmPatlite alarmPatlite;

	public Boolean setLightOn() {
		return alarmPatlite.redOn(redlite) && alarmPatlite.greenOn(greenlite) && alarmPatlite.yellowOn(yellowlite)
				&& alarmPatlite.buzzerOn(alerm);
	}

	public Boolean setLightOff() {
		return alarmPatlite.redOff() && alarmPatlite.greenOff() && alarmPatlite.yellowOff() && alarmPatlite.buzzerOff();
	}

	public void initPatlite(String ipAddress) {
		alerm = PatliteFlashType.valueOf(commonConfig.getAlerm());
		redlite = PatliteFlashType.valueOf(commonConfig.getRedLite());
		yellowlite = PatliteFlashType.valueOf(commonConfig.getYellowLite());
		greenlite = PatliteFlashType.valueOf(commonConfig.getGreenLite());
		alarmPatlite = new AlarmPatlite(ipAddress, commonConfig.getPatitePort(), null);
	}

	public void main(String[] args) {
		initPatlite(null);
		alarmPatlite.greenOn(PatliteFlashType.On);
		alarmPatlite.greenOff();
		setLightOn();
		setLightOff();
	}

	public Boolean start(String ipAddress) {
		initPatlite(ipAddress);
		return setLightOn();
	}

	public Boolean stopAll() {
		return setLightOff();
	}

}
