package restful.api;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import restful.annotation.LogoPower;
import restful.bean.Result;
import restful.database.EM;
import restful.entity.User;;

@Path("/logo") 
public class LogoAPI {
	
	@Context HttpServletRequest request;
	@Context HttpServletResponse response;

	//code为0的时候说明账号密码正确
	//code为-1的时候密码错误
	//code为1 的无该账户
	
	@POST
	@Path("/byname")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	
	public Result listByName(User user) {
		
		List<User> result = EM.getEntityManager()
				.createNamedQuery("User.findByName", User.class)
				.setParameter("username", user.getUsername()).getResultList();
		
		if (result.size()>0) {
			if (result.get(0).getPassword().equals(user.getPassword())) {
				
				request.getSession().setAttribute("user", result.get(0));
				request.getSession().setAttribute("power", Byte.toString(result.get(0).getIsAdmin()));
				
				return new Result(0, "登录成功", result.get(0), "");
			} else {
				return new Result(-1, "密码错误", null, "");
			}
		} else {
			return new Result(1, "无该账户,请注册", null, "");
		}
	}

	@POST
	@Path("/findByName")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	
	public Result findByName(User user) {
		List<User> result = EM.getEntityManager()
				.createNamedQuery("User.findByName", User.class)
				.setParameter("username", user.getUsername()).getResultList();
		return new Result(0, "查询成功", result, "");
	}

	@POST
	@Path("/add")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	
	public Result add(User user) {
		
		//判断用户数据是否存在为空
		if (user.getUsername() != null || user.getPassword() != null) {
			//判断数据库里面是否用户存在
			List<User> result = EM.getEntityManager()
					.createNamedQuery("User.findByName", User.class)
					.setParameter("username", user.getUsername()).getResultList();
			if (result.isEmpty()) {
				//判断用户名是否合法
				if (panduan(user.getUsername())) {
					return new Result(-1, "注册失败，用户名不合法", null, "");
				} else {
					user.setId(0);
					
					user = EM.getEntityManager().merge(user);
					EM.getEntityManager().persist(user);
					EM.getEntityManager().getTransaction().commit();
					return new Result(0, "注册成功", null, "");
				}

			} else {
				System.out.println("dada");
				for (User user2 : result) {
					System.out.println(user2.toString());
				}
				return new Result(-1, "注册失败，用户存在", null, "");
			}
		}
		return new Result(-1, "注册失败", null, "");
	}

	@POST
	@Path("/findall")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	
	public Result findall() {
		List<User> result = EM.getEntityManager()
				.createNamedQuery("User.findAll", User.class)
				.getResultList();
		return new Result(0, "", result, "");
	}

	//判断用户名是否合法
	public boolean panduan(String string) {
		String string2 = "!,@,#,$,%,^,&,*,(),_,+,-,?,>,<,:,{,},[,],";
		for (int i = 0; i < string.length(); i++) {
			if (string2.contains(String.valueOf(i))) {
				return true;
			}
		}

		return false;

	}
}




