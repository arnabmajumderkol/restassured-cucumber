package api_automation.test;

import java.util.ArrayList;
import java.util.List;

import api_automation.model.Post;
import api_automation.utils.Helpers;

public class PostDetails {

	Post[] posts;
	
	public ArrayList<Integer> getPostDetailsByUserId(String url, String api_details, int id) {
		ArrayList<Integer> postIds = new ArrayList<Integer>();
		posts = Helpers.getAPIusingQuery(url,api_details,id,"userId").jsonPath().getObject("", Post[].class);
	
		for(Post post : posts) {
			postIds.add(post.getId());
		}
		return postIds;
	}
	
}
