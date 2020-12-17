package restful.api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import restful.annotation.LogoPower;
import restful.bean.Result;
import restful.database.EM;
import restful.entity.Type;

@Path("/type")
public class TypeAPI {
	//code为0存在该账户
	//code为-1的时候密码错误
	//code为1 的无该账户
	//code200为添加成功
	
	@POST
	@Path("/typeFindAll")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	public Result typeList()  {
	 List<Type> typeList=EM.getEntityManager()  
             .createNamedQuery("Type.findAll", Type.class)  
             .getResultList();
	 if(typeList.size() > 0) {
		return new Result(0,"查询成功",typeList,"");
	 }else {
		return new Result(1,"查询失败","","");
	 }
	}
	
	@POST
	@Path("/typeFindAll4")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	
	public Result typeList4()  {
	 List<Type> typeList=EM.getEntityManager()  
             .createNamedQuery("Type.findAll", Type.class)  
             .getResultList();
	 if(typeList.size() > 0) {
		return new Result(0,"查询成功",typeList,"");
	 }else {
		return new Result(1,"查询失败","","");
	 }
	}
	

	@POST
	@Path("/addType")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	
	public Result addType(Type type)  {	
		 List<Type> typeList = EM.getEntityManager()  
	                .createNamedQuery("Type.findByTypeNum", Type.class)
	                .setParameter("typeNum", type.getTypeNum())  
	                .getResultList();
		if(typeList.size()>0) {
			return new Result(0,"该类型已存在!","","");
		}else {
			EM.getEntityManager().persist(EM.getEntityManager().merge(type));  
	        EM.getEntityManager().getTransaction().commit(); 
			return new Result(200,"添加成功",type,"");
		}
		
	}
	
	@POST
	@Path("/updateType")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	
	public Result updateType(Type type)  {
		EM.getEntityManager().persist(EM.getEntityManager().merge(type));  
        EM.getEntityManager().getTransaction().commit(); 
		return new Result(200,"保存成功",type,"");
	}
	
	@POST
	@Path("/deleteType")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	
	public Result deleteType(Type type)  {
		EM.getEntityManager().remove(EM.getEntityManager().merge(type));  
	    EM.getEntityManager().getTransaction().commit();
		return new Result(200,"删除成功","","");
	}
}
