package com.pengc.common.utils;

public class CommonUtils {
	public static void main(String[] args) {
		for (ApacheServerInfo s : ApacheServerInfo.values())
			System.out.println(s.getText());
	}
}