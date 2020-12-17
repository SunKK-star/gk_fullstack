package restful.test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import restful.entity.Clothes;

public class Ts {

	public static void main(String[] args) {
		File file = new File("C:\\Users\\fdg\\Desktop\\json.txt");
		
		String sql = null;
		
		BufferedReader br = null;
		String content = null;
		String start = "\": \"";
		String end = "\"";
		String tempString = null;

		try {
			
			br = new BufferedReader(new InputStreamReader(new FileInputStream(file),"UTF-8"));
			
			int line = 1;
			
			while ((content = br.readLine()) != null) {
				
				tempString+=content;
				
				if(line%4==0) {
					Class<?> clazz = Class.forName("restful.entity.Type");
					Object obj = clazz.newInstance();
					Field[] fileds = clazz.getDeclaredFields();
					
					int temp = 0;
					
					String regex = start + "(.*?)" + end;
			        Pattern pattern = Pattern.compile(regex);
			        Matcher matcher = pattern.matcher(tempString);
					
			        for(Field filed:fileds) {
			        	filed.setAccessible(true);
			        }
					
					while(matcher.find()){
			            String key = matcher.group(1);
			            if(!key.contains(start) && !key.contains(end)){
			                if(fileds[temp].getType()==Integer.class
			                		||fileds[temp].getType()==int.class) {
								fileds[temp].set(obj,(int)Double.parseDouble(key));
							}else if(fileds[temp].getType()==boolean.class){
								fileds[temp].set(obj, Boolean.parseBoolean(key));
							}else {
								fileds[temp].set(obj, key);
							}
			            }
			            temp++;
			        }
					tempString = null;
					System.out.println(obj.toString());
				}
				line++;
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

}
