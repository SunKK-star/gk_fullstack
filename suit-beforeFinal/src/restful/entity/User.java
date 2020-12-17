 package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "T_User")
@NamedQueries({
    @NamedQuery(name = "User.findByName", query = "SELECT user FROM User user where user.username =:username"),
    @NamedQuery(name = "User.findAll",query = "SELECT user FROM User user"),
    @NamedQuery(name = "User.findByPage",query = "FROM User user")
})

public class User extends IdEntity{
	private static final long serialVersionUID = 1L;
	private String username;
	private String realname;
	private String password;
	private byte sex;
	private String model;
	private byte isAdmin;
	public byte getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(byte isAdmin) {
		this.isAdmin = isAdmin;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public byte getSex() {
		return sex;
	}
	public void setSex(byte sex) {
		this.sex = sex;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	
}
