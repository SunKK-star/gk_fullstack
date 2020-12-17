package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity  
@Table(name = "t_type")
@NamedQueries({  
    @NamedQuery(name = "Type.findAll",
    		query = "SELECT type FROM Type type"),
    @NamedQuery(name = "Type.findByTypeNum",   
    query = "SELECT type FROM Type type where type.typeNum= :typeNum")
}) 

public class Type extends IdEntity{
	
    private String typeNum;
    private String name;
     
	public String getTypeNum() {
		return typeNum;
	}
	public void setTypeNum(String typeNum) {
		this.typeNum = typeNum;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "INSERT INTO `suit`.`t_type` (`name`, `typenum`) VALUES ('" + name + "','" + typeNum + "');";
	}
     
	
     
}
