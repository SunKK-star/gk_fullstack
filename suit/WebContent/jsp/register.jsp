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
<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/register.css" />
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery.main.js"></script>
</head>
<style>

</style>
<body>
	<div class="register">
		<div class="register-wrapper">
			<div class="content_title">
				<h1>注册表单</h1>
			</div>

			<div class="field">
				<input id="username" type="text" placeholder="用户名称">
				<i class="iconfont icon-zhanghao"></i>
			</div>

			<div class="field">
				<input id="realname" type="text" placeholder="用户实名">
				<i class="iconfont icon-gerenzhanghu"></i>
			</div>

			<div class="field">
				<input id="password" type="password" placeholder="密码">
				<i class="iconfont icon-mima"></i>
			</div>

			<div class="field">
				<input id="password2" type="password" placeholder="确认密码">
				<i class="iconfont icon-querenmima"></i>
			</div>

			<div class="radio_button">
				<label>性别：</label>
				<label>
					<input class="gender_select" name="sex" id="m" type="radio" value="1" autocomplete="off" />
					男
				</label>
				<label>
					<input class="gender_select" name="sex" id="w" type="radio" value="0" autocomplete="off" />
					女
				</label>
			</div>
			<input id="sex" type="hidden" autocomplete="off" />
			<div class="selectbutton">
				<button>模型选择</button>
			</div>
			<input id="model" type="hidden" autocomplete="off" />
			<div class="selectmodel" >
					<div id="showdiv1" style="display: none ">
						<input class="click model manModelA" id="manModelA"  type="button" value=""/>
						<input class="click model manModelB" id="manModelB"  type="button" value=""/>
					</div>
					<div id="showdiv2" style="display: none">
						<input class="click model womanModelA" id="womanModelA" type="button" value=""/>
						<input class="click model womanModelB" id="womanModelB" type="button" value=""/>
					</div>
			</div>

			<div class="register-btn">
				<button class="button" type="button" onclick="doRegister()">点击注册</button>
			</div>

			<div class="login-btn">
				<button class="button" type="button" onclick="window.location='<%=basePath%>/jsp/login.jsp'">返回登录</button>
			</div>
		</div>
	
	</div>

		<div class="bd">
			<img src="<%=basePath%>/images/ui/logoWord.png" alt="">
		</div>

</body>
<script>
$(":radio").click(function() {
	if(this.checked) {
		$('#sex').val($(this).val());
		if($(this).attr("id") == "m") {
			$("#showdiv1").show();
			$("#showdiv2").hide();
			}
		if($(this).attr("id") == "w") {
			$("#showdiv2").show();
			$("#showdiv1").hide();
			}
		}
});
	
$('.click,.clicked').click(function() {
	$('#model').val($(this).val());
	$('.clicked').removeClass('clicked').addClass('click');
	$(this).toggleClass(function() {
		if($(this).attr("id") == "manModelA") {
			$('#model').val("mheadA");
			}
		if($(this).attr("id") == "manModelB") {
			$('#model').val("mheadB");
			}
		if($(this).attr("id") == "womanModelA") {
			$('#model').val("wheadA");
			}
		if($(this).attr("id") == "womanModelB") {
			$('#model').val("wheadA");
			}
		if($(this).hasClass('click')) {
			$(this).removeClass('click');
			return 'clicked';
			} else {
				$(this).removeClass('clicked');
				return 'click';}
		});
});

function doRegister(){
	var user = {};
	user.username = $("#username").val();
	if(user.username == ''){
		alert("账号不能为空");
		return;
	}
	user.password = $("#password").val();
	if(user.password != $("#password2").val()){
		alert("两次密码不一致");
		$("#password").val("");
		$("#password2").val("");
		return;
	}
	user.realname = $("#realname").val();
	user.sex = $("#sex").val();
	user.isadmin = 0;
	user.model = $("#model").val();
	request("POST","<%=basePath%>/user/register", user,showMessage,serverError, true);
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
	if(responseData.code > 0){
		window.location.assign("<%=basePath%>/jsp/login.jsp");
	}
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


