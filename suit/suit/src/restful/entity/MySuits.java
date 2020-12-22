package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "T_MySuits")
@NamedQueries({ @NamedQuery(name = "MySuits.findAll", query = "SELECT mysuits FROM MySuits mysuits"),
		@NamedQuery(name = "MySuits.findAllByCode", query = "SELECT mysuits FROM MySuits mysuits where"
				+ " mysuits.usercode = :usercode") })

public class MySuits extends IdEntity {
	private String usercode;

	private String suitname;

	private String price;

	private String zindex;

	private String suitcode;

	public String getUsercode() {
		return usercode;
	}

	public void setUsercode(String usercode) {
		this.usercode = usercode;
	}

	public String getSuitname() {
		return suitname;
	}

	public void setSuitname(String suitname) {
		this.suitname = suitname;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getZindex() {
		return zindex;
	}

	public void setZindex(String zindex) {
		this.zindex = zindex;
	}

	public String getSuitcode() {
		return suitcode;
	}

	public void setSuitcode(String suitcode) {
		this.suitcode = suitcode;
	}
}
