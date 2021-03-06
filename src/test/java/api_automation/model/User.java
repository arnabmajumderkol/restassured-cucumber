package api_automation.model;

import java.util.List;

import api_automation.model.Address;
import api_automation.model.Company;

/* 
 * Created By @Arnab Majumder
 * Storing User Data
 * Handling User Data
 */
public class User {

	// private Response userReponseBody;
		private int id;
		private String name;
		private String username;
		private String email;
		private String phone;
		private String website;
		private Address address;
		private Company company;
		private Geo geo;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getWebsite() {
			return website;
		}
		public void setWebsite(String website) {
			this.website = website;
		}
		public Address getAddress() {
			return address;
		}
		public void setAddress(Address address) {
			this.address = address;
		}
		public Company getCompany() {
			return company;
		}
		public void setCompany(Company company) {
			this.company = company;
		}
		public Geo getGeo() {
			return geo;
		}
		public void setGeo(Geo geo) {
			this.geo = geo;
		}
		
		

}
