package restful.api;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.Suits;

@Path("/suits")
public class SuitsApi {
	@POST
	@Path("/listAll")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result listAll() {
		List<Suits> result = EM.getEntityManager().createNamedQuery("Suits.findAll", Suits.class).getResultList();
		return new Result(11, "suits查询成功", result, "");
	}

	@POST
	@Path("/search")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result search(Suits suits) {
		List<Suits> result = EM.getEntityManager().createNamedQuery("Suits.findAllBySexAndType", Suits.class)
				.setParameter("sex", suits.getSex()).setParameter("suittype", suits.getSuittype()).getResultList();
		return new Result(11, "suits搜索成功", result, "");
	}
	
	@POST
	@Path("/addSuits")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result add(Suits suits) {
		List<Suits> result = EM.getEntityManager().createNamedQuery("Suits.findAllByCode", Suits.class)
				.setParameter("code", suits.getCode()).getResultList();
		if (result.size() > 0) {
			return new Result(-20, "code已存在", suits, "");
		} else {
			suits.setId(0);
			suits = EM.getEntityManager().merge(suits);
			EM.getEntityManager().persist(suits);
			EM.getEntityManager().getTransaction().commit();
			return new Result(20, "suit添加成功", suits, "");
		}
	}

	@POST
	@Path("/updateSuits")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result update(Suits suits) {
		EM.getEntityManager().persist(EM.getEntityManager().merge(suits));
		EM.getEntityManager().getTransaction().commit();
		return new Result(30, "suit修改成功", null, "");
	}

	@POST
	@Path("/deleteSuits")
	@Consumes("application/json;charset=UTF-8")
	@Produces("application/json;charset=UTF-8")
	public Result delete(Suits suits) {
		EM.getEntityManager().remove(EM.getEntityManager().merge(suits));
		EM.getEntityManager().getTransaction().commit();
		return new Result(40, "suit删除成功", null, "");
	}

	@POST
	@Path("/uploadImage")
	@Produces("application/json;charset=UTF-8")
	public Result uploadImage(@Context HttpServletRequest request,@QueryParam("code") String oldCode)
			throws FileUploadException {

		DiskFileItemFactory factory = new DiskFileItemFactory();// 创建一个解析器工厂
		factory.setSizeThreshold(1024 * 1024);// 设置工厂的内存缓冲区大小，默认是10K //
		factory.setRepository(new File("D:\\suitEmpty\\WebContent\\images\\data\\uploadBuffer\\"));
		// 设置工厂的临时文件目录：当上传文件的大小大于缓冲区大小时，将使用临时文件目录缓存上传的文件

		ServletFileUpload upload = new ServletFileUpload(factory);// 文件上传解析器

		upload.setHeaderEncoding("UTF-8");// 设置编码格式
		
		upload.setSizeMax(10240 * 10240);// 设置所有上传数据的最大值，单位字节long 10M

		upload.setFileSizeMax(5120 * 5120);// 设置单个文件上传的最大值5m
		
		String src = "D:\\suitEmpty\\WebContent\\images\\data\\suits\\";

		try {
			List<FileItem> itemList=upload.parseRequest(request);
			for (FileItem item : itemList) {
				if (item.isFormField()) {
//					String name = item.getFieldName();
//					String value = item.getString("UTF-8");
				} else {
					String fileName = item.getName();
					
					item.write(new File(src + fileName));
					
					Suits suits = (EM.getEntityManager().createNamedQuery("Suits.findAllByCode", Suits.class)
							.setParameter("code", oldCode).getResultList()).get(0);
					suits.setCode(fileName.substring(0,fileName.length()-4));
					
					EM.getEntityManager().persist(EM.getEntityManager().merge(suits));
					EM.getEntityManager().getTransaction().commit();

					System.out.println("oldCode : "+oldCode);
					System.out.println("filename : "+fileName);
					System.out.println("newCode : "+suits.getCode());
					return new Result(100,suits.getCode(), null, "");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(-1, "服务器文件解析错误", null, "");
		}
		return new Result(-1, "未发现可供服务保存的数据", null, "");
	}
}
