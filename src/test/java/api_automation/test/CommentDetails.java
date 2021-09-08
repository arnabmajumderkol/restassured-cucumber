package api_automation.test;

import java.util.ArrayList;

import api_automation.model.Comment;
import api_automation.utils.Helpers;

public class CommentDetails {

	
	Comment[] comments;
	
	public void getCommentDetailsByPostId(String url, String api_details, int id) {
		ArrayList<String> commentEmails = new ArrayList<String>();
		comments = Helpers.getAPIusingQuery(url,api_details,id,"postId").jsonPath().getObject("", Comment[].class);
	
		for(Comment comment : comments) {
			//System.out.println("Emails : "+comment.getEmail());
			Helpers.emailValidation(comment.getEmail());
		}
		
	}
}
