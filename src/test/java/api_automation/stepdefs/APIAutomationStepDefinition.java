package api_automation.stepdefs;

import static org.testng.Assert.assertFalse;

import java.util.Iterator;

import api_automation.model.Post;
import api_automation.responses.PostResponseDetails;
import api_automation.responses.UserResponseDetails;
import api_automation.test.CommentDetails;
import api_automation.test.PostDetails;
import api_automation.test.UserDetails;
import api_automation.utils.ConfigFileReader;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class APIAutomationStepDefinition {

	//Getting configuration from properties file
	String url = ConfigFileReader.getConfigPropertyVal("api_url");
	
	//User Details
	UserDetails userDetails = new UserDetails();
	UserResponseDetails userResponseDetails = new UserResponseDetails();
	
	//Post Details
	PostDetails postDetails = new PostDetails();
	PostResponseDetails postResponseDetails = new PostResponseDetails();
	
	//Comment Details
	CommentDetails commentDetails = new CommentDetails();
	
	@When("^I hit api to fetch users$")
	public void i_hit_api_to_fetch_users() throws Throwable {
		userDetails.getAllUserDetails(url, "users");
	}
		
	@Then("^I search for \"([^\"]*)\"$")
	public void i_search_for(String username) {
		int userId = userDetails.getUserDetailsByUsername(username);
		if(userId>0) {
			userResponseDetails.setUserId(userId);
		}else {
			assertFalse(false, "Unable to find user by using username");
		}
		
	}

	@Then("^I search post for the mentioned user$")
	public void i_search_post_for_the_mentioned_user(){
		postResponseDetails.setPosts(postDetails.getPostDetailsByUserId(url, "posts", userResponseDetails.getUserId()));
	}
	
	@Then("^I search and fetch the comments for post and validate the emails$")
	public void i_search_and_fetch_the_comments_for_post_and_validate_the_email(){
		Iterator<Post> it = postResponseDetails.getPosts().iterator();
		while(it.hasNext()) {
			commentDetails.getCommentDetailsByPostId(url, "comments", it.next().getId());
		}
		
	}
	
	@Then("^I validate mandatory for the post title and body$")
	public void i_validate_mandatory_for_the_post_title_and_body(){
		Iterator<Post> it = postResponseDetails.getPosts().iterator();
		while(it.hasNext()) {
			//Validating Title & Body
			postDetails.validateBlankFieldsinPost(it.next().getTitle());
			postDetails.validateBlankFieldsinPost(it.next().getBody());
		}
	}
}
