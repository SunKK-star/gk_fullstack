<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="net.sf.json.JSON"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + 
                                      request.getServerName() + ":" +
                                      request.getServerPort() + path;
%>       
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery.main.js"></script>
<title></title>
</head>
<style>
*{     
	padding: 0;
	margin: 0;
	margin-left: 2px;
}

.banner {
	background-color: #a3aab2;
	background-image: url(<%=basePath%>/images/ui/loginWindowBg1920.png);
	height: 100%;		
}
		
.p1 {
	width: 180px;
	height: 46px;
}
		
.p2 {
position: fixed;
  top: 0;
  right: 0;
	height: 46px;
}
		
.p0 {
	width: 100%;
	height: 46px;
	border-bottom: 2px solid #798089;
}
.welcome{
height: 46px;
line-height: 46px;
text-shadow: 5px -5px black, 4px -4px white;
font-weight: bold;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text
}
</style>
<body class="banner" onload="doInit()">
<div class="p0">
	<div class="p1">
		<div id="username" class='welcome'></div>
	</div>
	<div class="p2">
		<img src="<%=basePath%>/images/ui/themeBanner.png" />
	</div>
</div>
</body>
<script type="text/javascript">
function doInit(){
	request("POST","<%=basePath%>/user/getUser",{},showName,serverError,true);
}

function showName(responseData){  
	var user = responseData.data;
	if(user)
	    $("#username").text("当前用户   ：  "+user.username);
	}

function request(method, url, data, successCallBack, errorCallBack, async) {
	$.ajax({
		url : url,
		async : async,
		contentType : "application/json",
		data : JSON.stringify(data),
		method : method,
		success : successCallBack,
		error : errorCallBack
	});
}

function showMessage(responseData) {
	console.log("showMessage", responseData);
	alert(responseData.description);
}

function serverError(XMLHttpRequest, textStatus) {
	console.log("responseText:", XMLHttpRequest.responseText);
	console.log("status:", XMLHttpRequest.status);
	console.log("textStatus:", textStatus);
	console.log("readyState:", XMLHttpRequest.readyState);
	alert("服务器错误，请检查前后台控制台输出！");
}
</script>
</html>
