package restful.api;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.User;

@Path("/user")
public class UserApi {
	@Context HttpServletRequest request;
	
	@POST
	@Path("/listByUserName")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result listByUserName(User user) {
		List<User> result = EM.getEntityManager().createNamedQuery("User.findAllByUsername", User.class)
				.setParameter("username", user.getUsername()).getResultList();
		if (result.size() < 1)
			System.out.println("无结果集");
		return new Result(1, "获取成功", result.get(0), "");
	}
	
	@POST
	@Path("/listAll")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result listAll() {
		List<User> result = EM.getEntityManager().createNamedQuery("User.findAll", User.class).getResultList();
		return new Result(11, "查询成功", result, "");
	}
	
	@POST
	@Path("/login")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result login(User user) {
		List<User> result = EM.getEntityManager().createNamedQuery("User.findAllByUsername", User.class)
				.setParameter("username",user.getUsername()).getResultList();
		if (result.size() > 0) {
			if (result.get(0).getPassword().equals(user.getPassword())) {
				user = result.get(0);
				request.getSession().setAttribute("user", user);
				return new Result(10, "登录成功", result.get(0), "");
			}
		} else
			System.out.println("无结果集");

		return new Result(-10, "登录失败", null, "");
	}

	@POST
	@Path("/register")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result register(User user) {
		System.out.println(user.getUsername());
		System.out.println(user.getSex());
		System.out.println(user.getModel());
		List<User> result = EM.getEntityManager().createNamedQuery("User.findAllByUsername", User.class)
				.setParameter("username", user.getUsername()).getResultList();
		if (result.size() > 0) {
			return new Result(-20, "用户名已存在", user, "");
		} else {
			user.setId(0);
			user = EM.getEntityManager().merge(user);
			EM.getEntityManager().persist(user);
			EM.getEntityManager().getTransaction().commit();
			return new Result(20, "注册成功", user, "");
		}
	}

	@POST
	@Path("/getUser")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result getUser(User user) {
		user = (User) request.getSession().getAttribute("user");
		return new Result(30, "获取成功", user, "");
	}
	
	@POST
	@Path("/update")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result update(User user) {
		if(user.getPassword() == "") {
			user.setPassword((EM.getEntityManager().createNamedQuery("User.findAllById", User.class)
				.setParameter("id",user.getId()).getResultList()).get(0).getPassword());
		}
		EM.getEntityManager().persist(EM.getEntityManager().merge(user));
		EM.getEntityManager().getTransaction().commit();
		return new Result(30, "修改成功", user, "");
	}
	
	@POST
	@Path("/deleteUser")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result delete(User user) {
		EM.getEntityManager().remove(EM.getEntityManager().merge(user));
		EM.getEntityManager().getTransaction().commit();
		return new Result(40, "删除成功", null, "");
	}
}
