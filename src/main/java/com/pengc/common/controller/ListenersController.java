package com.pengc.common.controller;

import org.apache.log4j.Logger;

import javassist.bytecode.stackmap.TypeData.ClassName;

public class ListenersController {
	public static Logger logger = Logger.getLogger(ClassName.class);
	static {
		logger.info(null);
	}
}