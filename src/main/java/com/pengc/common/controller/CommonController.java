package com.pengc.common.controller;

import javax.persistence.MappedSuperclass;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ModelAttribute;

import javassist.bytecode.stackmap.TypeData.ClassName;

@MappedSuperclass
public class CommonController {
	public static Logger logger = Logger.getLogger(ClassName.class);
	
	@ModelAttribute
	public void logUrl(){
		logger.info("AAA");
	}
}