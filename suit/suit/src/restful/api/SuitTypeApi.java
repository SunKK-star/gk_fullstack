package restful.api;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.SuitType;

@Path("/suittype")
public class SuitTypeApi {
	@POST
	@Path("/listAll")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result listAll() {
		List<SuitType> result = EM.getEntityManager().createNamedQuery("SuitType.findAll", SuitType.class).getResultList();
		return new Result(11, "suittype查询成功", result, "");
	}
	
	@POST
	@Path("/addSuitType")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result add(SuitType suittype) {
		List<SuitType> result = EM.getEntityManager().createNamedQuery("SuitType.findAllByCode", SuitType.class)
				.setParameter("code", suittype.getCode()).getResultList();
		if (result.size() > 0) {
			return new Result(-20, "code已存在", suittype, "");
		} else {
			suittype.setId(0);
			suittype = EM.getEntityManager().merge(suittype);
			EM.getEntityManager().persist(suittype);
			EM.getEntityManager().getTransaction().commit();
			return new Result(20, "type添加成功", suittype, "");
		}
	}
	
	@POST
	@Path("/updateSuitType")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result update(SuitType suittype) {
		EM.getEntityManager().persist(EM.getEntityManager().merge(suittype));
		EM.getEntityManager().getTransaction().commit();
		return new Result(30, "type修改成功", null, "");
	}
	
	@POST
	@Path("/deleteSuitType")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result delete(SuitType suittype) {
		EM.getEntityManager().remove(EM.getEntityManager().merge(suittype));
		EM.getEntityManager().getTransaction().commit();
		return new Result(40, "删除成功", null, "");
	}
}
