package api_automation.test;

import java.util.List;
import java.util.Map;

import org.testng.Assert;



import api_automation.model.User;
import api_automation.responses.UserResponseDetails;
import api_automation.utils.Helpers;


/*
 * Created By : Arnab Majumder
 * This class is to call API to get User details
 */
public class UserDetails {

	User[] users;
	
	
	public void getAllUserDetails(String url, String api_details) {
		
		users = Helpers.getAPIV1(url, api_details).jsonPath().getObject("", User[].class);

	}
/*
 * Validating Username to GET the details for that particular user
 */
	public int getUserDetailsByUsername(String username) {
		int userId = 0;
		for (User user : users) {
			if(user.getUsername().equalsIgnoreCase(username)) {
				userId = user.getId();
				break;
			}
		}
		return userId;
	}
}
