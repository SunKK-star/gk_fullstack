package restful.api;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.springframework.beans.BeanUtils;

import restful.bean.Result;
import restful.database.EM;
import restful.entity.Clothes;
import restful.entity.Mysuit;
import restful.entity.Suit;

@Path("/suitRoom")
public class SuitAPI {
	
		//code为0存在该账户
		//code为-1的时候密码错误
		//code为1 的无该账户
		//code200为添加成功
	 
		//增加个人衣服
	    @POST
		@Path("/addsuit")
	    @Consumes("application/json;charset=UTF-8")
		@Produces("application/json;charset=UTF-8")
	    
		public Result  addMySuit(Suit suit){
	    	//添加suit得有username，clothesNum
	    	if (suit.getUsername().equals("")||suit.getClothesNum().equals("")) {
	    		return new Result(-1,"添加失败","","");	
			}
	    	else {
	    		List<Suit> result = EM.getEntityManager()  
	                    .createNamedQuery("Suit.findByUsAndClothes", Suit.class)  
	                    .setParameter("username", suit.getUsername())
	                    .setParameter("clothesNum",suit.getClothesNum())
	                    .getResultList();
	    		if (result.size()>0) {
	    			return new Result(0,"该类型已存在!","","");
				}
	    		else {
	    			EM.getEntityManager().persist(EM.getEntityManager().merge(suit));  
	    	        EM.getEntityManager().getTransaction().commit();
					return new Result(200,"保存成功",suit,"");	
				}
			}	
	    }
	    
	    //显示所有该用户模特的衣服
	    @POST
		@Path("/ListAllsuit")
	    @Consumes("application/json;charset=UTF-8")
		@Produces("application/json;charset=UTF-8")
	    
		public Result  ListMySuit(Suit suit)  {
	    	List<Suit> result = EM.getEntityManager()  
	                .createNamedQuery("Suit.findByusername", Suit.class)
	                .setParameter("username", suit.getUsername())  
	                .getResultList();
			 //新建mysuitList的表
			 List<Mysuit> mysuit=new ArrayList<>();
			 if(result.size()>0) {
				 //suit信息遍历
				for(Suit s:result) {
					Mysuit my=new Mysuit();
					//直接将Suit的已经存在的值给Mysuit，则mysuit中已经知道zidnex，username，clothesNum
					BeanUtils.copyProperties(s, my);
					//新建clothes表
					Clothes clothes=new Clothes();
					clothes.setClothesNum(s.getClothesNum());
					//根据衣服编号查找衣服clothes
					List<Clothes> resultclothes = EM.getEntityManager()  
			                .createNamedQuery("Clothes.findByClothesNum", Clothes.class)
			                .setParameter("clothesNum", clothes.getClothesNum())  
			                .getResultList();
		            //再把clothes的price,name,imgsrc的值给my
					BeanUtils.copyProperties(resultclothes.get(0),my);
					mysuit.add(my);
				}
	    	
	    	return new Result(0,"查询成功",mysuit,"");
	   	 }
		 else {
			 return new Result(0,"查询失败","","");
		}
	    }
	    
	    //删除suit
	    @POST
		@Path("/deleteMysuit")
	    @Consumes("application/json;charset=UTF-8")
		@Produces("application/json;charset=UTF-8")
	    public Result  DeleteSuit(Suit suit){
	    	List<Suit> result = EM.getEntityManager()  
	                .createNamedQuery("Suit.findByclothesNum", Suit.class)  
	                .setParameter("clothesNum",suit.getClothesNum())
	                .getResultList();
	    	EM.getEntityManager().remove(EM.getEntityManager().merge(result.get(0)));  
		    EM.getEntityManager().getTransaction().commit();
			return new Result(200,"删除成功","","");		
	    }
	    
	    //更新个人衣服
	    @POST
		@Path("/updatesuit")
	    @Consumes("application/json;charset=UTF-8")
		@Produces("application/json;charset=UTF-8")

	    public Result  updateMySuit(Suit suit){
	    	//添加suit得有username，clothesNum
	    	if (suit.getUsername().equals("")||suit.getClothesNum().equals("")) {
	    		return new Result(-1,"添加失败","","");	
			}
	    	else {
	    		   List<Suit> suits= EM.getEntityManager()  
	   	                .createNamedQuery("Suit.findByclothesNum", Suit.class)  
		                .setParameter("clothesNum",suit.getClothesNum())
		                .getResultList();
	    		   suit.setId(suits.get(0).getId());
	    		   //System.out.println(suit);
	    		   EM.getEntityManager().persist(EM.getEntityManager().merge(suit));  
	    	       EM.getEntityManager().getTransaction().commit();
				   return new Result(200,"保存成功","","");	
			}	
	    }
	   
}
