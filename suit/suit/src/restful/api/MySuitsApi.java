package restful.api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.MySuits;

@Path("/mysuits")
public class MySuitsApi {
	@POST
	@Path("/listAll")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result listAll(MySuits mysuits) {
		List<MySuits> result = EM.getEntityManager().createNamedQuery("MySuits.findAllByCode", MySuits.class)
				.setParameter("usercode", mysuits.getUsercode()).getResultList();
		return new Result(11, "查询成功", result, "");
	}

	@POST
	@Path("/addMySuits")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result add(MySuits mysuits) {
		mysuits.setId(0);
		mysuits = EM.getEntityManager().merge(mysuits);
		EM.getEntityManager().persist(mysuits);
		EM.getEntityManager().getTransaction().commit();
		return new Result(20, "添加成功", mysuits, "");
	}

	@POST
	@Path("/updateMySuits")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result update(MySuits mysuits) {
		EM.getEntityManager().persist(EM.getEntityManager().merge(mysuits));
		EM.getEntityManager().getTransaction().commit();
		return new Result(30, "修改成功", null, "");
	}

	@POST
	@Path("/deleteMySuits")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result delete(MySuits mysuits) {
		EM.getEntityManager().remove(EM.getEntityManager().merge(mysuits));
		EM.getEntityManager().getTransaction().commit();
		return new Result(40, "删除成功", null, "");
	}
}
