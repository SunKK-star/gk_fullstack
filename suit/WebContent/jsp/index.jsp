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
<title>百变人生</title>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
</head>
<script type="text/javascript">
window.onload = function(){
	request("POST","<%=basePath%>/user/getUser",{},isLogin,serverError,true);
}

function isLogin(responseData){
	var user = responseData.data;
	if(!user){
    	alert("请先登录");
    	window.location.assign("<%=basePath%>/jsp/login.jsp");
    }
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
<frameset rows="48px,*" border="0">
	<frame src="banner.jsp" scrolling="no" frameborder="0"  allowtransparency="true" />
	<frameset cols="160px,*" border="1">
		<frame src="menu.jsp" >
		<frame id="workspace" src="workspace.jsp" name="right" style="background-color:#a3aab2; 
    background-image:url(<%=basePath%>/images/ui/workspace.png);
    background-position: center center;
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-size: 100% auto;"/>
 	</frameset>	
 </frameset>
</html>