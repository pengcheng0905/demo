package com.pengc.common.utils;

import org.jsoup.nodes.Element;

public class ElementUtils {
	public static String getTextByKey(Element e, String key) {
		String text = e.text();
		String[] eTextArr = text.split(":");
		if (eTextArr.length > 1) {
			text = eTextArr[1].trim();
		}
		return text;
	}
}