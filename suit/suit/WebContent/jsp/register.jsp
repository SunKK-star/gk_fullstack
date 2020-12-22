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
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery.main.js"></script>
</head>
<style>
.button {
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

        .button:hover {
            background-color: #fff;
            color: red;
        }

        .button:before, button:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 2px;
            background-color: green;
            transition: all ease 400ms;
        }

        .button:after {
            top: inherit;
            right: inherit;
            left: 0;
            bottom: 0;
        }

        .button:hover:after, button:hover:before {
            width: 100%;
            transition: all ease 800ms;
        }
        .divspan {
			background-image: url(../images/ui/subTitle.png);
			text-align: center;
		}
</style>
<body class="body">
	<div class="container">
		<h1>试衣间</h1>
		<div class="row">
			<div class="main">

				<div class="main-form">
					
					<label for="username" class="form-label">用户名称:</label>
					<input id="username" class="form-input" type="text" placeholder="用户名称" autocomplete="off" />
					<br>
					<label for="username" class="form-label"> 用户实名：</label>
					<input id="realname" class="form-input" type="text" placeholder="用户实名" autocomplete="off" />
					<br>
					<label for="username" class="form-label">密码：</label>
					<input id="password" class="form-input" type="password" placeholder="密码" autocomplete="off" />
					<br>
					<label for="username" class="form-label">确认密码：</label>
					<input id="password2" class="form-input" type="password" placeholder="确认密码" autocomplete="off" />
					<br>
					<label>性别：</label>
					<label>
						<input name="sex" id="m" type="radio" value="1" autocomplete="off" />
						男
					</label>
					<label>
						<input name="sex" id="w" type="radio" value="0" autocomplete="off" />
						女
					</label>
					<br/><br>
					<input id="sex" type="hidden" autocomplete="off" />
					<div class="divspan">模型选择</div>
					<br />
					<input id="model" type="hidden" autocomplete="off" />
					<center>
					<div style="width: 180px;">
						<div id="showdiv1" style="display: none;">
							<input id="manModelA" class="click button-background" type="button" value="" style="background-image: url(../images/data/model/mheadA.png);" />
							<input id="manModelB" class="click button-background" type="button" value="" style="background-image: url(../images/data/model/mheadB.png);" />

						</div>
						<div id="showdiv2" style="display: none;">
							<input id="womanModelA" class="click button-background" type="button" value="" style="background-image: url(../images/data/model/wheadA.png);" />
							<input id="womanModelB" class="click button-background" type="button" value="" style="background-image: url(../images/data/model/wheadB.png);" />

						</div>
					</div>
					</center>
					<div style="width:60%;margin:0 auto;padding-top:30px;">
						<input style="float:left" class="button" type="button" value="点击注册" onclick="doRegister()" />
						<input style="float:right" class="button" type="button" value="返回登录" onclick="window.location='<%=basePath%>/jsp/login.jsp'" />
					</div>
				</div>
			</div>

		</div>
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


