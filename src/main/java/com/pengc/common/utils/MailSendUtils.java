package com.pengc.common.utils;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailSendUtils {
	public static final String HOST = "smtp.gmail.com";
	public static final String FORM_USER = "pengchenggo@gmail.com";
	public static final String FORM_USER_PASSWORD = "pengcheng";
	public static final String PORT = "587";
	public static final String[] TO_EMAILS = { "pengc_2012@126.com" };
	// TITLE
	public static final String SUBJECT = "Java Email";
	// BODY
	public static final String BODY = "This is an email sent by <b>おはようございます！！！！</b> api.";

	Properties properties;
	Session session;
	MimeMessage message;

	public static void main(String args[]) {
		MailSendUtils javaEmail = new MailSendUtils();
		javaEmail.setMailServerProperties();
		try {
			javaEmail.createEmailMessage();
			javaEmail.sendEmail();
		} catch (AddressException e) {
			System.out.println("Address Exception:" + e.getMessage());
			e.printStackTrace();
		} catch (MessagingException e) {
			System.out.println("Message Exception:" + e.getMessage());
			e.printStackTrace();
		}
	}

	public void setMailServerProperties() {
		properties = System.getProperties();
		properties.put("mail.smtp.port", PORT);
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");
	}

	public void createEmailMessage() throws AddressException, MessagingException {
		session = Session.getDefaultInstance(properties, null);
		message = new MimeMessage(session);
		for (String address : TO_EMAILS) {
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(address));
		}
		message.setSubject(SUBJECT);
		message.setContent(BODY, "text/html;charset=utf-8");

	}

	public void sendEmail() throws AddressException, MessagingException {
		Transport transport = session.getTransport("smtp");
		transport.connect(HOST, FORM_USER, FORM_USER_PASSWORD);
		transport.sendMessage(message, message.getAllRecipients());
		transport.close();
		System.out.println("Email sent successfully.");
	}

}