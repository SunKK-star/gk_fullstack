<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="net.sf.json.JSON"%>
<!DOCTYPE html>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<html>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/base.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/icon.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/user.css" />
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery.main.js"></script>


<body  onload="doInit()">
<div id="user" class="main">
<div class="user">
		<div class="user-wrapper">
			<div class="content_title">
				<h1>用户信息</h1>
			</div>

			<div class="field">
				<input id="username" class="form-input border" type="text" autocomplete="off" disabled="disabled"/>
				<i class="iconfont icon-zhanghao"></i>
			</div>

			<div class="field">
				<input id="realname" type="text" placeholder="用户实名">
				<i class="iconfont icon-gerenzhanghu"></i>
			</div>

			<div class="field">
				<input id="password" class="form-input border" type="password" placeholder="密码（若不修改置为空）" autocomplete="off" />
				<i class="iconfont icon-mima"></i>
			</div>

			<div class="field">
				<input id="password2" class="form-input border" type="password" placeholder="密码确认（若不修改置为空）" autocomplete="off" />
				<i class="iconfont icon-querenmima"></i>
			</div>

			<div class="radio_button">
				<label>性别：</label>
				<label><input name="sex" type="radio" value="1" disabled="disabled" autocomplete="off" />男 </label>
				<label><input name="sex" type="radio" value="0" disabled="disabled" autocomplete="off" />女 </label>
			</div>
			<input id="sex" type="hidden" autocomplete="off" />
			<div class="selectbutton">
				<button>模型选择</button>
			</div>
			<input id="model" type="hidden" autocomplete="off" />
			<div class="selectmodel" >
					<div id="manModel" style="display: none;">
						<input id="manModelA" class="click model manModelA" type="button" value="" />
						<input id="manModelB" class="click model manModelB" type="button" value="" />
					</div>
					<div id="womanModel" style="display: none;">
						<input id="womanModelA" class="click model womanModelA" type="button" value=""/>
						<input id="womanModelB" class="click model womanModelB" type="button" value="" />
					</div>
			</div>
			
			<input name="mx" id="model" type="hidden" value=" " autocomplete="off" />
			
			<button class="saveMessage" onclick="doUpdate()">保存信息</button>
		</div>
	</div>
</body>

<script>

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
			$('#model').val("wheadB");
			}
		if($(this).hasClass('click')) {
			$(this).removeClass('click');
			return 'clicked';
			} else {
				$(this).removeClass('clicked');
				return 'click';}
		});
});

var id;
var sex;
var isadmin;

function doInit(){
	request("POST","<%=basePath%>/user/getUser",{},userView,serverError,true);
}

function doSearch(){
	var user = {};
	user.username = $("#username").val();
	request("POST","<%=basePath%>/user/listByUserName",user,userView,serverError,true);
}

function doUpdate(){
	var user = {};
	user.password = $("#password").val();
	if(user.password != $("#password2").val()){
		alert("两次密码不一致");
		$("#password").val("");
		$("#password2").val("");
		return;
	}
	user.id = id;
	user.username = $("#username").val();
	user.realname = $("#realname").val();
	user.model = $("#model").val();
	user.sex = sex;
	user.isadmin = isadmin;
	request("POST","<%=basePath%>/user/update",user,doSearch,serverError,true);
	$("#password").val("");
	$("#password2").val("");
}

function userView(responseData){
	//showMessage(responseData);
	if(responseData < 0){
		return ;
	}
	var user = responseData.data;
	
	var model = user.model;
	id = user.id;
	sex = user.sex;
	isadmin = user.isadmin;

	$("#username").val(user.username);
	$("#realname").val(user.realname);
	$("#model").val(model);
	
	if(sex == 1){
		$("input[name='sex'][value=1]").prop("checked",true);
		$("#manModel").css("display","block");
		if(model == "mheadA"){
			$("#manModelA").removeClass('click').addClass('clicked');
			$("#manModelB").removeClass('clicked').addClass('click');
		}else{
			$("#manModelA").removeClass('clicked').addClass('click');
			$("#manModelB").removeClass('click').addClass('clicked');
		}
	}else {
		$("input[name='sex'][value=0]").prop("checked",true);
		$("#womanModel").css("display","block");
		if(model == "wheadA"){
			$("#womanModelA").removeClass('click').addClass('clicked');
			$("#womanModelB").removeClass('clicked').addClass('click');
		}else{
			$("#womanModelA").removeClass('clicked').addClass('click');
			$("#womanModelB").removeClass('click').addClass('clicked');
			}
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
</html>