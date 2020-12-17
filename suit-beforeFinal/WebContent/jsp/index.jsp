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
<title>梦想试衣间</title>
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/index.css" />  
<script type="text/javascript" src="<%=basePath%>/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/Utils.js"></script>  
</head>  
<body>

	<div id="main">
		<div id="loginDialogBg">	
			<img src="<%=basePath%>/images/ui/logo.png"/>  
			<span id ="yincang"><input type="text" id="username" name="username" placeholder="用户名"/></span>
			<span id="yincang"><input type="password" id="password" name="password" placeholder="密码"/></span>
			<span id="denglu" type="button" onclick="logo()">我要登录</span>
			<span id="zhuce" type="button" onclick="zhuce()">我要注册</span>
		</div>
		<div id="logoWord"></div>
	</div>
 	  
</body>  

	<script>
	
	function zhuce(){
		location.href="<%=basePath%>/jsp/register.jsp";
	}
	
    function logo(){    
        var username =  $("#username");  
        var password= $("#password");
        var user = {"username":username.val(),
        		"password":password.val()
        };
        request("POST","<%=basePath%>/logo/byname",user,successLogo,serverError,true); 
    }

    function successLogo(responseData){ 
    	
    	showMessage(responseData);
    	
        if(responseData.code==0){
        	location.href="<%=basePath%>/jsp/workspace.jsp";
        	alert("登陆成功");
        }else if(responseData.code==-1){
        	alert("密码错误");
        }else if(responseData.code==1){
        	alert("无该账户，请注册");
        }
                
	}

</script> 
 	
</html>