package com.pengc.patlite.utils;

public interface Alarm {

	// buzzer on
	public boolean buzzerOn(PatliteFlashType type);

	// buzzer off
	public boolean buzzerOff();

	// red LED on
	public boolean redOn(PatliteFlashType type);

	// red LED off
	public boolean redOff();

	// yellow LED on
	public boolean yellowOn(PatliteFlashType type);

	// yellow LED off
	public boolean yellowOff();

	// green LED on
	public boolean greenOn(PatliteFlashType type);

	// green LED off
	public boolean greenOff();

	// turn off everything.
	public boolean setOffAll();

	// set alarm at once
	public boolean setAlarm(boolean red, boolean yellow, boolean green, boolean buzzer);

}