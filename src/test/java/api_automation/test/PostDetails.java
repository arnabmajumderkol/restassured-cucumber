package api_automation.test;

import static org.testng.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import api_automation.model.Post;
import api_automation.utils.Helpers;

public class PostDetails {

	Post[] posts;
	
	public ArrayList<Post> getPostDetailsByUserId(String url, String api_details, int id) {
		ArrayList<Post> postResponse = new ArrayList<Post>();
		posts = Helpers.getAPIusingQuery(url,api_details,id,"userId").jsonPath().getObject("", Post[].class);
	
		for(Post post : posts) {
			postResponse.add(post);
		}
		return postResponse;
	}
	
	public void validateBlankFieldsinPost(String fieldname) {
			if(fieldname == "" || fieldname == null) {
				assertTrue(false, fieldname+ " is empty!");
			}
	}
	
}
