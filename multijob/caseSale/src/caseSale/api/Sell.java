package caseSale.api;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import caseSale.entity.Result;
import caseSale.repository.GoodsRepository;

@Path("sale")
public class Sell {
	
	private GoodsRepository goodsRepository = new GoodsRepository();
	private static Map resultMap = new HashMap<Integer,String>();
	static {
		resultMap.put(-100,"金额不足,全额退款");
		resultMap.put(-200,"商品库存不足");
		resultMap.put(-300,"无此商品售卖，全额退款");
		resultMap.put(0, "售卖成功");
	}
	
	@GET
	@Produces("application/json;charset=UTF-8")
	@Path("/act/{id}/{num}")
	public Result sell( @PathParam("id") int id,
			            @PathParam("num") int num,
			            @QueryParam("pay") double pay
			) {
		Result result = new Result();
		if(goodsRepository.has(id)) {  //判断物品是否存在
			if(id == 7) {      //判断物品是否为铅笔（即是否有库存）
				result.setAmount(num);
				result.setChange(pay);
				result.setName(goodsRepository.findById(id).getName());
				result.setResultCode(-200);
				result.setResultText((String)resultMap.get(-300));
			}
			else if(goodsRepository.findById(id).getPrice()*num > pay) {
				result.setAmount(num);
				result.setChange(pay);
				result.setName(goodsRepository.findById(id).getName());
				result.setResultCode(-100);
				result.setResultText((String)resultMap.get(-100));
			}
			else {
				result.setAmount(num);
				result.setChange(pay-goodsRepository.findById(id).getPrice()*num);
				result.setName(goodsRepository.findById(id).getName());
				result.setResultCode(0);
				result.setResultText((String)resultMap.get(0));
			}
			
		}else {     //不存在的商品
			result.setAmount(num);
			result.setChange(pay);
			result.setName("未注册商品");
			result.setResultCode(-300);
			result.setResultText((String)resultMap.get(-300));
		}
		return result;
	}
	
}
