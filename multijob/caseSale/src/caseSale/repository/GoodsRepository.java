package caseSale.repository;

import java.util.HashMap;
import java.util.Map;

import caseSale.entity.Goods;

public class GoodsRepository {
	private static Map<Integer,Goods> goodsMap;
	
	static {
		goodsMap = new HashMap<>();
		goodsMap.put(0,new Goods(0,"可乐",3));
		goodsMap.put(1,new Goods(1,"雪碧",3));
		goodsMap.put(2,new Goods(2,"橙汁",2.5));
		goodsMap.put(3,new Goods(3,"玉泉+C",7));
		goodsMap.put(4,new Goods(4,"酱油",14));
		goodsMap.put(5,new Goods(5,"水动乐",4));
		goodsMap.put(6,new Goods(6,"醋",18));
		goodsMap.put(7,new Goods(7,"铅笔",1));
	}
	
	public Goods findById(int id) {
        return goodsMap.get(id);
    }
	
	public Boolean has(int id) {
		return goodsMap.containsKey(id);
	}
	
}
