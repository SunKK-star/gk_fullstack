package restful.service;

import java.util.List;

import restful.database.EM;
import restful.entity.Clothes;

public class Clothesservice {
	
	public void addClothes(Clothes clothes) {
		EM.getEntityManager().persist(EM.getEntityManager().merge(clothes));  
        EM.getEntityManager().getTransaction().commit();  
	}

	public void deleteClothes(Clothes clothes) {
		// TODO Auto-generated method stub
		EM.getEntityManager().remove(EM.getEntityManager().merge(clothes));  
	    EM.getEntityManager().getTransaction().commit(); 
	}
	
	public List<Clothes> findByTypeAndSex(Clothes clothes){
		System.out.println(clothes.getSex());
		System.out.println(clothes.getTypeNum());
		List<Clothes> result = EM.getEntityManager()  
                .createNamedQuery("Clothes.findByTypeAndSex", Clothes.class)  
                .setParameter("sex", clothes.getSex())
                .setParameter("typeNum",clothes.getTypeNum())
                .getResultList();
		
		if(result.size()>0) {
			return result;
		}else {
			return null;
		}
	}
	//通过clothesNum查找衣服
	public Clothes findByClothesNum(Clothes clothes) {
		// TODO Auto-generated method stub
		List<Clothes> result = EM.getEntityManager()  
                .createNamedQuery("Clothes.findByClothesNum", Clothes.class)
                .setParameter("clothesNum", clothes.getClothesNum())  
                .getResultList();
	 
		if(result.size()>0) {
			 return result.get(0);
		}else {
			return null;
		}
	}
}
