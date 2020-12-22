package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "T_User")
@NamedQueries({ @NamedQuery(name = "User.findAll", query = "SELECT user FROM User user"),
		@NamedQuery(name = "User.findAllById", query = "SELECT user FROM User user where user.id = :id"),
		@NamedQuery(name = "User.findAllByUsername", query = "SELECT user FROM User user where user.username = :username")})

public class User extends IdEntity {

	private String username;

	private String password;

	private String realname;
	
	private String sex;
	
	private String isadmin;
	
	private String model;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRealname() {
		return realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getIsadmin() {
		return isadmin;
	}

	public void setIsadmin(String isadmin) {
		this.isadmin = isadmin;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

}
