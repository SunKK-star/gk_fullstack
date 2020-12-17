package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity  
@Table(name = "t_suit")
@NamedQueries({  
    @NamedQuery(name = "Suit.findByusername",   
    query = "SELECT suit FROM Suit  suit where suit.username= :username"),
    @NamedQuery(name = "Suit.findByclothesNum",   
    query = "SELECT suit FROM Suit  suit where suit.clothesNum=:clothesNum"),
    @NamedQuery(name = "Suit.findByUsAndClothes",   
    query = "SELECT suit FROM Suit  suit where suit.username= :username and suit.clothesNum=:clothesNum")
}) 
 
public class Suit extends IdEntity{
	
	    //用户账号
		private String username;
		
		//衣服编号
		private String clothesNum;
		
		private int zindex;

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

		public int getZindex() {
			return zindex;
		}

		public void setZindex(int zindex) {
			this.zindex = zindex;
		}
		
		
		
		
		
		
}
