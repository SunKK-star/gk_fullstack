<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%  
    String path = request.getContextPath();  
    String basePath = request.getScheme() + "://" +   
                                      request.getServerName() + ":" +  
                                      request.getServerPort() + path;  
%>      
<html>

	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="../css/register.css" />
	</head>

	<body>
		<div id="main">
			<div id="regi">
				<span id="top">注册</span>
				<span id="message">
					用户名称：<input type="text" id="username" name="username"/>
				</span>
				<span id="message">
					用户实名：<input type="text" id="real_name" name="real_name"/>
				</span>
				<span id="message">
					密&emsp;&emsp;码：<input type="password" id="password"name="password"/>
				</span>
				<span id="message">
					密码确认：<input type="password" id="password1"name="password1"/>
				</span>
				<span id="m_or_wm">
					性&emsp;&emsp;别:<input type="radio" id="ij" name="Sex" value="1" />男
					<input type="radio" name="Sex" id="jk"  value="0" />女
				</span>
				<span id="model_selection">
					模型选择
				</span>
				<div id="line"></div>
				<div id="model_img"></div>
				<span id="login_botton">
					<input type="submit" name="login" id="zhuce" value="点击注册" />
					<input type="button" name="regi" id="return_login"value="返回登录" onclick="denlu()" />
				</div>
			</div>
		</div>
		<script src="../js/jquery-3.3.1.js"type="text/javascript">
		</script>
		<script>
			var num = 0;
			function denlu(){
				location.href="<%=basePath%>/jsp/index.jsp";
			}
			$(document).ready(function() {
				//模型选择事件
				$("#m_or_wm").children().click(function(){
					var man=$('input:radio[id="ij"]:checked').val();
					var woman=$('input:radio[id="jk"]:checked').val();
					if(man!=null){
							$("#man_model1").remove();
							$("#man_model2").remove();
							$("#woman_model1").remove();
							$("#woman_model2").remove();
							$("#regi").css("height","400px");
					  		$("#model_img").append('<div id="man_model1" value="mheadA"></div>')
					  		.append('<div id="man_model2" value="mheadB"></div>');
					 		$("#regi").css("height","500px");
					}
					else{
							$("#man_model1").remove();
							$("#man_model2").remove();
							$("#woman_model1").remove();
							$("#woman_model2").remove();
							$("#regi").css("height","400px");
					  		$("#model_img").append('<div id="woman_model1" value="wheadA"></div>')
					  		.append('<div id="woman_model2" value="wheadB"></div>');
					 		$("#regi").css("height","500px");
					 }
					
					
				});
				//点击模型事件
				var model;
				$(document).on('click', '#man_model1 , #man_model2,#woman_model1,#woman_model2', function(){
					$(this).next().css("box-shadow","");
					$(this).prev().css("box-shadow","");
					$(this).css("box-shadow"," 5px 5px 5px #666");
					model=$(this).attr("value");			
				});
				//合法性验证
				$("#zhuce").click(function(){
					var username=$("#username").val();
					var real_name=$("#real_name").val();
					var password=$("#password").val();
					var password1=$("#password1").val();
					if(username==null||real_name==null||password==null||password1==null||model==null){
						alert("信息填写不完整");
					}
					else if(CheckStr(username)==false){
						alert("用户名存在非法字符");
					}
					else if(CheckStr(real_name)==false){
						alert("用户实名存在非法字符");
					}
					else if(password!=password1){
							alert("两次密码填写不同");
						}
					else if(CheckStr(password)==false){
						alert("密码存在非法字符");
					}
					else if(Checkpassword(password)==false){
						alert("密码必须由7位以上的数字和英文字母组成");
					}
					else{
						var sex=$("input:checked");
						var user = {"username":username,
				        		"realname":real_name,
				        		"password":password,
				        		"sex":sex.val(),
				        		"model":model,
				        		"isAdmin":0
				        		};
				        request("POST","<%=basePath%>/logo/add",user,successAdd,serverError,true);
					}
				});
			});
			function CheckStr(str){
		      var regx=/['"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]/;
		      rs=regx.exec(str);
		      if(rs!=null)
		      {
		         return false;
		      }
		      else
		      {
		         return true ;
		      }
   			}
			function Checkpassword(str){
				if(str.length>=7){
        			if(/([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z])/.exec(str)){
            		return true;
        			}
        			else{
            			return false;
        			}
   				}
					else{
      					return false;
    				}
			}
			function successAdd(responseData){
				alert(responseData.description);
				if(responseData.code!=-1){
					location.href="<%=basePath%>/jsp/index.jsp";
				}	
			}
			
		    function request(method,url,data,successCallBack,errorCallBack,async){  
		        $.ajax({  
		            url: url,  
		            async:async,  
		            contentType: "application/json",  
		            data: JSON.stringify(data),  
		            method: method  
		        }).done(successCallBack).fail(errorCallBack);    
		    }  

		    function showMessage(responseData){  
		        console.log("showMessage",responseData);  
		        alert(responseData.description);  
		    }  
		    function serverError(XMLHttpRequest, textStatus){  
		        console.log("responseText:",XMLHttpRequest.responseText);  
		        console.log("status:",XMLHttpRequest.status);  
		        console.log("textStatus:",textStatus);  
		        console.log("readyState:",XMLHttpRequest.readyState);  
		        alert("服务器错误，请检查前后台控制台输出！");  
		    }  
		</script>
	</body>

</html>