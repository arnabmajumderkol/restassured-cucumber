package api_automation.utils;

import static org.testng.Assert.assertEquals;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.testng.Assert;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Helpers {

	public static Response getAPIV1(String url, String path) {

		RestAssured.baseURI = url;

		RequestSpecification httpRequest = RestAssured.given();

		Response response = httpRequest.request(Method.GET, "/" + path);

		int statusCode = response.getStatusCode();

		// Assert that correct status code is returned.
		Assert.assertEquals(statusCode, 200, "Correct status code returned");

		return response;
	}

	public static Response getAPIusingQuery(String url, String path, int id, String queryName) {

		RestAssured.baseURI = url;

		RequestSpecification httpRequest = RestAssured.given();

		Response response = httpRequest.queryParam(queryName, id).get("/" + path);

		int statusCode = response.getStatusCode();

		// Assert that correct status code is returned.
		Assert.assertEquals(statusCode, 200, "Correct status code returned");

		return response;
	}

	public static void emailValidation(String email) {
		String regex = "^(.+)@(.+)$";
		Pattern pattern = Pattern.compile(regex);

		Matcher matcher = pattern.matcher(email);
		//System.out.println(email + " : " + matcher.matches() + "\n");
		assertEquals(matcher.matches(), true,"Email:"+ email +" pattern is not valid!");
	}
}
