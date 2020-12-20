package restful.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "T_SuitType")
@NamedQueries({ @NamedQuery(name = "SuitType.findAll", query = "SELECT suittype FROM SuitType suittype"),
		@NamedQuery(name = "SuitType.findAllByCode", query = "SELECT suittype FROM SuitType suittype where suittype.code = :code") })

public class SuitType extends IdEntity {
	
	private String code;

	private String typename;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getTypename() {
		return typename;
	}

	public void setTypename(String typename) {
		this.typename = typename;
	}
}
