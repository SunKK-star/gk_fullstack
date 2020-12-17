package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity  
@Table(name = "t_clothes")
@NamedQueries({  
    @NamedQuery(name = "Clothes.findAll",
    		query = "SELECT clothes FROM Clothes clothes"),
    @NamedQuery(name = "Clothes.findByClothesNum",   
    query = "SELECT clothes FROM Clothes  clothes where clothes.clothesNum= :clothesNum"),
    @NamedQuery(name = "Clothes.findByTypeAndSex",   
    query = "SELECT clothes FROM Clothes  clothes where clothes.sex= :sex and clothes.typeNum=:typeNum")
}) 


public class Clothes extends IdEntity{
	private static final long serialVersionUID = 1L;
	private String clothesNum;
	private String name;
	private int price;
	private int sex;
	private String typeNum;
	private String imgSrc;
	
	public Clothes() {
	}
	
	public Clothes(String clothesNum, String name, int price, int sex, String typeNum, String imgSrc) {
		this.clothesNum = clothesNum;
		this.name = name;
		this.price = price;
		this.sex = sex;
		this.typeNum = typeNum;
		this.imgSrc = imgSrc;
	}
	public String getClothesNum() {
		return clothesNum;
	}
	public void setClothesNum(String clothesNum) {
		this.clothesNum = clothesNum;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public String getTypeNum() {
		return typeNum;
	}
	public void setTypeNum(String typeNum) {
		this.typeNum = typeNum;
	}
	public String getImgSrc() {
		return imgSrc;
	}
	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}
	
}

