package restful.api;

import java.util.List;

import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import restful.annotation.LogoPower;
import restful.bean.Page;
import restful.bean.Result;
import restful.database.EM;
import restful.entity.User;

/*
 *className:ManagerAPI
 *author:fdg
 *data:2020/6/8
 */

@Path("/manager")
public class ManagerAPI {

    // By FDG 2020/6/8/22:34
	
    @POST
    @Path("/deleteUser")
    @Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
    @LogoPower("admin")
    
    public Result deleteUser(User user) {
    	
    	String hql =  "DELETE FROM User user where user.username = ?";
    	
    	Query query = EM.getEntityManager().createQuery(hql)
    	.setParameter(1, user.getUsername());
    	
    	int num = query.executeUpdate();
    	
    	EM.getEntityManager().getTransaction().commit();
    	
    	if(num <= 0) {
    		return new Result(-1, "删除失败或不存在此用户", null, "");
    	}else {
    		return new Result(0, "成功删除", null, "");
    	}
    	

    }
    @POST
    @Path("/updateUser")
    @Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
    
    public Result updateUser(User user) {
    	List<User> result = EM.getEntityManager()
				.createNamedQuery("User.findByName", User.class)
				.setParameter("username", user.getUsername()).getResultList();
    	if(result!=null) {
    	if(user.getPassword()=="") {
    		String password=result.get(0).getPassword();
    		user.setPassword(password);
    	}
    	
    	}
        EM.getEntityManager().persist(EM.getEntityManager().merge(user));
        EM.getEntityManager().getTransaction().commit();
        if(user.getId()==0) {
        	 return new Result(0, "添加成功", user, "");
        }
        else
        return new Result(0, "修改成功", user, "");

    }

    @POST
    @Path("/findByPage")
    @Consumes("application/json;charset=UTF-8")
    @Produces("application/json;charset=UTF-8")
    @LogoPower("admin")
    
    public Result findByPage(Page page) {
    	
    	String hql =  "SELECT COUNT(*) FROM User";
    	
    	Query query = EM.getEntityManager().createQuery(hql);
    	
    	long maxNum = (long)query.getSingleResult();

        List<User> result = EM.getEntityManager().createNamedQuery("User.findByPage",User.class)
                .setFirstResult((page.getPageNow()-1)*Page.getPageSize())
                .setMaxResults(Page.getPageSize())
                .getResultList();
        
        return new Result(
        		maxNum%Page.getPageSize()==0 ? maxNum/Page.getPageSize() : maxNum/Page.getPageSize()+1,
        				"查询成功", result, "");
    }
    
}
