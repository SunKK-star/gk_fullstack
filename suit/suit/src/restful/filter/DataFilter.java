package restful.filter;

import java.io.IOException;
import java.net.URI;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import restful.bean.Result;

public class DataFilter implements ContainerRequestFilter, ContainerResponseFilter {

	private @Context HttpServletRequest request;

	private URI invalidatedURI = URI.create("/invalidated");

	@Override
	public void filter(ContainerRequestContext containerRequestContext,
			ContainerResponseContext containerResponseContext) throws IOException {
		
		
	}

	@Override
	public void filter(ContainerRequestContext containerRequestContext) throws IOException {
		
		String url = containerRequestContext.getUriInfo().getPath();

		System.out.println(url);

		authoration(containerRequestContext);

	}

	private boolean authoration(ContainerRequestContext containerRequestContext) {
		String url = containerRequestContext.getUriInfo().getPath();

		
		return true;
	}

}
