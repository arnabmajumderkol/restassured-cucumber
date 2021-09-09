package api_automation.responses;

import java.util.ArrayList;

import api_automation.model.Post;


public class PostResponseDetails {
	
	private ArrayList<Post> posts;

	public ArrayList<Post> getPosts() {
		return posts;
	}

	public void setPosts(ArrayList<Post> posts) {
		this.posts = posts;
	}
	
}
