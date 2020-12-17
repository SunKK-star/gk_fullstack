package restful.api;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import restful.annotation.LogoPower;
import restful.bean.Result;
import restful.entity.Clothes;
import restful.service.Clothesservice;

@Path("/clothes")
public class ClothesAPI {
	@Context HttpServletRequest request;
	public Clothesservice clothService = new Clothesservice();
	
	 //图片上传
	@SuppressWarnings("resource")
	@POST
	@Path("/uploadImage")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	public Result uploadImage() {

		// 创建DiskFileItem工厂
		DiskFileItemFactory factory=new DiskFileItemFactory();
		// 设置缓存目录
		factory.setRepository(new File("D:\\test\\"));
		// 设置缓冲区大小,文件体积超出缓冲区大小将保持至缓存目录然后再进行后续处理，这里设置为1M bytes
		factory.setSizeThreshold(1024*1024);
		// 创建文件上传解析对象
		ServletFileUpload upload=new ServletFileUpload(factory);
		// 按照UTF-8编码格式读取
		upload.setHeaderEncoding("UTF-8");
		// 设置每个文件最大为5M
		upload.setFileSizeMax(5*1024*1024);
		// 一共最多能上传10M
		upload.setSizeMax(10*1024*1024);
		// 获取文件保存目录

		String path = request.getContextPath();
	    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
		try {
			List<FileItem> fileItems=upload.parseRequest(request);
			// 解析并保存
			for (FileItem fileItem : fileItems) {
				InputStream inputStream = fileItem.getInputStream();
				String filePath = request.getServletContext().getRealPath("/images/data/suits/");
				//String filePath ="C:\\Users\\于都金洋\\Desktop\\restful大作业\\suit3\\suit (3)\\suit\\WebContent\\WEB-INF\\uploadBuffer";
				File file = new File(filePath);
				System.out.println(filePath);
		        if (!file.exists()){
		            file.mkdir();
		        }
				FileOutputStream fos=new FileOutputStream(filePath+fileItem.getName());
				byte[] buff=new byte[1024];
               int len=0;
               while((len=inputStream.read(buff))>0){
                   fos.write(buff);
               }
				return new Result(0, fileItem.getName(), null, "");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(-1, "服务器文件解析错误", null, "");
		}
		return new Result(-1, "未发现可供服务保存的数据", null, "");
	}
    //code为0存在该账户
  	//code为-1的时候密码错误
  	//code为1 的无该账户
  	//code200为添加成功
    //code100为删除成功
    @POST
	@Path("/ddd")
	@Produces("application/json;charset=UTF-8")
	public Result test( @FormParam("sss") int sss)  {
		return new Result(sss,"添加成功","","");
    }
    @POST
	@Path("/addClothes")
	@Produces("application/json;charset=UTF-8")
    @LogoPower("admin")
	public Result addClothes(Clothes clothes)  {
    	boolean value=true;
    	if (clothes.getName().equals("")||clothes.getClothesNum().equals("")) {
			value=false;
		}
		if (clothes.getPrice()==0) { 
			  value=false;
		}
		if (value) {
			if(clothService.findByClothesNum(clothes)!=null) {
				return new Result(0,"该衣物已存在!","","");
			}
			else {
				clothService.addClothes(clothes);
				return new Result(200,"添加成功",clothes,"");
			}
		}
		else {
			return new Result(-1,"添加失败","","");
		}
		
	}
	
	@POST
	@Path("/updateClothes")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	public Result updateClothes(Clothes clothes){
		boolean value=true;
    	if (clothes.getName().equals("")||clothes.getClothesNum().equals("")) {
			value=false;
		}
		if (clothes.getPrice()==0){ 
			  value=false;
		}
		if (value) {
			clothService.addClothes(clothes);
			return new Result(200,"保存成功","","");
		}
		else {
			return new Result(-1,"保存失败","","");
		}
		
	}
	
	@POST
	@Path("/deleteClothes")
	@Produces("application/json;charset=UTF-8")
	@LogoPower("admin")
	public Result deleteClothes(Clothes clothes)  {
		 clothService.deleteClothes(clothes);
		return new Result(100,"删除成功","","");
	}
	
	//寻找衣服通过type和类型,用于第四阶段的衣服查找
	@POST
	@Path("/findClothes")
	@Produces("application/json;charset=UTF-8")
	public Result findByTypeAndSex(Clothes clothes){
		
		List<Clothes> result=clothService.findByTypeAndSex(clothes);
		return new Result(200,"查找成功",result,"");
	}
    
}
