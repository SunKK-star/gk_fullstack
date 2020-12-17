package restful.interceptor;

import java.io.IOException;
import java.lang.reflect.Method;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;

import org.jboss.resteasy.core.Headers;
import org.jboss.resteasy.core.ResourceMethodInvoker;
import org.jboss.resteasy.core.ServerResponse;
import org.jboss.resteasy.spi.Failure;
import org.jboss.resteasy.spi.HttpRequest;
import org.jboss.resteasy.spi.interception.PreProcessInterceptor;

import restful.annotation.LogoPower;
import restful.bean.Result;

@SuppressWarnings("deprecation")
public class AuthorityPreProcessInterceptor implements PreProcessInterceptor{

	@Context
	HttpServletRequest request;
	
	@Context
	HttpServletResponse response;
	
	@Override
	public ServerResponse preProcess(HttpRequest httpRequest, ResourceMethodInvoker methodInvoker)
			throws Failure, WebApplicationException {
		
		Method method = methodInvoker.getMethod();
		System.out.println(method.getName());
			if (method.isAnnotationPresent(LogoPower.class)&&
					!request.getSession().getAttribute("power").equals("1")) {
				
				Result result = new Result(99,"权限不足",null,"");
				return new ServerResponse(result, 200,new Headers<Object>());
			}
		return null;
	}
}
