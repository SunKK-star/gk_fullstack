<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<html>

<head>
<meta charset="UTF-8">
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>

<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/base.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/icon.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/login.css" />
<script type="text/javascript" src="<%=basePath%>/js/jquery.main.js"></script>
</head>
<style>
button {
            height: 40px;
            width:100px;
            padding: 0 2em;
            background-color: #dedede;
            border: none;
            outline: none;
            cursor: pointer;
            position: relative;
            transition: all ease 800ms;
            -webkit-border-radius: 15px;
			-moz-border-radius: 15px;
        }

        button:hover {
            background-color: #fff;
            color: #af8baf;
        }

        button:after {
            top: inherit;
            right: inherit;
            left: 0;
            bottom: 0;
        }

        button:hover:after, button:hover:before {
            width: 100%;
            transition: all ease 800ms;
        }
</style>
<body>
	<div class="login">
		<div class="content_title">
			<img src="<%=basePath%>/images/ui/logoWord.png" alt="">
		</div>
		<div class="login-wrapper">
			<div class="title">
				<h1>Hello !</h1>
			</div>
			<div class="container">
				<div class="user">
					<span class="iconfont icon-zhanghao iconsize"></span>
					<input id="login_username" class="user_input" type="text" placeholder="用户名"  autocomplete="off">
				</div>
				<div class="password">
					<span class="iconfont icon-mima iconsize"></span>
					<input id="login_password" class="password_input" type="password" placeholder="密码"  autocomplete="off">
				</div>
				
			</div>
			<div class="remember">
				<input type="checkbox">
				<span>Remember me</span>
			</div>
			<div class="login-btn">
				<button class="login_btn" type="button" onclick="doLogin()">LOGIN</button>
			</div>
			<div class="extra">
				<div class="extra_wrapper">
					<div class="extra_title">还没有账号 ?</div>
					<div class="extra_content">
						<button class="register_btn" type="button" onclick="window.location='<%=basePath%>/jsp/register.jsp'">Register Now!</button>
					</div>
				</div>
			</div>
		</div>
	</div>>
</body>

<script>

function doLogin(){
	var username = $("#login_username");
	var password = $("#login_password");
	var user = {"username":username.val(),"password":password.val()};
	request("POST","<%=basePath%>/user/login",user,turnTo,serverError,true);
}

function turnTo(responseData){  
    showMessage(responseData);  
    if(responseData.code < 0){
        return;  
    }
    window.location.assign("<%=basePath%>/jsp/index.jsp");
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