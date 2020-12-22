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
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/main.css" />
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

        button:before, button:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 2px;
            background-color: #f6acc8;
            transition: all ease 400ms;
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
<body class="body">

	<div class="container">
		<h1>百变人生</h1>
		<div class="row">
			<div class="main">

				<form action="#" class="main-form" style="text-align:center;">
					
					<div class="form-div">
						<label for="username" class="form-label">USERNAME</label>
						<input id="login_username" type="text" class="form-input" id="username" placeholder="用户名">
					</div>
					<div class="form-div">
						<label for="password" class="form-label">PASSWORD</label>
						<input id="login_password" type="password" class="form-input" id="password" placeholder="密码">
					</div>

					<div class="form-div" style="width:60%;margin:0 auto;padding-top:50px;">
						<button style="float:left" onclick="doLogin()" class="form-button">登录</button>
						<button style="float:right" class="form-button" onclick="window.location='<%=basePath%>/jsp/register.jsp'">注册</button>
					</div>
				</form>
			</div>

		</div>
	</div>
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