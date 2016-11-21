package com.pengc.listeners.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLConnection;
import java.util.Date;

public class TomcatService {

	public static String tomcat_pid = null;
	public static final String TOMCAT_HOST = "8080";
	public static final String TOMCAT_PATH = "C:/unialm/tomcat/bin/";
	public static final String PROJECT_REQUEST_URL = "http://localhost:8080/center/iot/";

	public static final String TOMCAT_STARTUP_BAT = "startup.bat";
	public static final String TOMCAT_SHUTDOWN_BAT = "shutdown.bat";
	public static final String DOS_STARTUP_TOMCAT = "cmd /c " + TOMCAT_PATH + TOMCAT_STARTUP_BAT;
	public static final String DOS_SHUTDOWN_TOMCAT = "cmd /c " + TOMCAT_PATH + TOMCAT_SHUTDOWN_BAT;

	// public static final String DOS_FIND_TOMCAT_TASK_BY_HOST = "cmd /c netstat
	// -ano|findstr " + TOMCAT_HOST + ".*LISTENING";
	// public static final String DOS_KILL_TOMCAT_TASK = "cmd /c tskill ";

	public static void main(String[] args) {
		if (!isTomcatAlive()) {
			start();
		} else {
			stop();
		}
	}

	public static void start() {
		cmdExec(DOS_STARTUP_TOMCAT);
		System.out.println("<" + new Date() + "> Tomcat was started");
	}

	public static void stop() {
		// cmdExec(DOS_FIND_TOMCAT_TASK_BY_HOST, "getPid");
		cmdExec(DOS_SHUTDOWN_TOMCAT);

		if (tomcat_pid == null) {
			return;
		} else {
			// cmdExec(DOS_KILL_TOMCAT_TASK + tomcat_pid);

			// System.out.println("<" + new Date() + "> Tomcat is stoped! <->PID
			// : " + tomcat_pid);
			System.out.println("<" + new Date() + "> Tomcat is stoped!");
		}

	}

	public static void getPid(BufferedReader in) throws IOException {
		String s;
		while ((s = in.readLine()) != null) {
			String[] taksInfo = s.split(" ");
			tomcat_pid = taksInfo[taksInfo.length - 1];
			System.out.println(tomcat_pid);
			break;
		}

	}

	/**
	 *
	 * @param args[0]
	 *            cmd commend
	 * @param args[1]
	 *            CallBackfunction
	 */
	public static void cmdExec(String... args) {
		try {
			Process p = Runtime.getRuntime().exec(args[0]);
			BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));
			if (args.length > 1) {
				Method method = TomcatService.class.getMethod(args[1], BufferedReader.class);
				method.invoke(new TomcatService(), input);
			} else {
				String line;
				while ((line = input.readLine()) != null) {
					System.out.println(line);
				}
			}
			input.close();
		} catch (Exception err) {
			err.printStackTrace();
		}
	}

	private static Boolean isTomcatAlive() {

		Boolean taskAlive = Boolean.FALSE;
		System.setProperty("sun.net.client.defaultConnectTimeout", "8000");
		System.setProperty("sun.net.client.defaultReadTimeout", "10000");
		try {
			URL url = new URL(PROJECT_REQUEST_URL);
			URLConnection con = url.openConnection();
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			con.setConnectTimeout(1000);
			con.setReadTimeout(4000);
			String s;
			while ((s = in.readLine()) != null) {
				if (s.length() > 0) {
					taskAlive = Boolean.TRUE;
					return taskAlive;
				}
			}
			in.close();
		} catch (Exception ex) {
			// ex.printStackTrace();
		}
		return taskAlive;
	}

}
