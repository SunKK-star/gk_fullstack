package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "T_Suits")
@NamedQueries({ @NamedQuery(name = "Suits.findAll", query = "SELECT suits FROM Suits suits"),
		@NamedQuery(name = "Suits.findAllByCode", query = "SELECT suits FROM Suits suits where suits.code = :code"),
		@NamedQuery(name = "Suits.findAllBySexAndType", query = "SELECT suits FROM Suits suits where suits.sex = :sex and suits.suittype = :suittype")})

public class Suits extends IdEntity {
	private String code;

	private String suitname;

	private String price;

	private String sex;

	private String suittype;

	public String getSuittype() {
		return suittype;
	}

	public void setSuittype(String suittype) {
		this.suittype = suittype;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
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

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}
}
