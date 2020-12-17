package restful.entity;
//视图：clothes和suit的视图
public class Mysuit extends IdEntity{
	
	//用户账号
	 private String username;
	 
	 //衣服编号
     private String clothesNum;
     
     //衣服名称
     private String name;
     
     //价格
     private int price;
     
     private int zindex;
     
     private String imgSrc;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public int getZindex() {
		return zindex;
	}

	public void setZindex(int zindex) {
		this.zindex = zindex;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}
     
}
