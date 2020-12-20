<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="net.sf.json.JSONObject"%>
<!DOCTYPE html>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="<%=basePath%>/js/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/main.css" />  
<script type="text/javascript" src="<%=basePath%>/js/main.js"></script>

<title></title>
</head>
<style>
		* {
			padding: 0;
			margin: 0;
		}
		
		.divspan {
			background-image: url(../images/ui/subTitle.png);
			text-align: center;
		}
		
		.border {
			background-color: transparent;
			border-top: none;
			border-left: none;
			border-right: none;
			border-color: black;
		}
		
		.divspan {
			background-image: url(../images/ui/subTitle.png);
			text-align: center;
		}
		
		.main-formuser {
			background-image: url(../images/ui/glass.png);
			background-color: #b1b6bf;
		}
		
		table.hovertable {
		width:70%;
		text-align:center;
		font-family: verdana,arial,sans-serif;
		font-size:20px;
		color:#333333;
		border-width: 1px;
		border-color: #666666;
		border-collapse: collapse;
		}
		
		table.hovertable th {
		border-width: 1px;
		padding: 8px;
		border-style: solid;
		border-color: #666666;
		background-color: #dedede;
		}
		
		table.hovertable td {
		border-width: 1px;
		padding: 8px;
		border-style: solid;
		border-color: #666666;
		background-color: #ffffff;
		}
		
		table.hovertable td:hover {
			background-color: #fc9d9d;
			color:#6886c5;
		}
		
		.divN {
			width: 33.3%;
			float: left;
			text-align: center;
			padding: 10px;
		}
		
		.suitTilte {
			background-image: url(../images/ui/subTitle.png);
			background-position: center center;
			background-repeat: no-repeat;
			background-attachment: scroll;
			background-size: 100% 100%;
			text-align: center;
		}
		
		.divline {
			width: 100%;
			height: 34px;
			position: relative;
		}
		
		.suitinput {
			display: block;
			width: 70%;
			height: 34px;
			font-size: 14px;
			line-height: 1.4;
			color: #555;
			background-color: transparent;
			border: 1px solid #000000;
			border-left: none;
			border-right: none;
			border-top: none;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			margin-left: 25%;
		}
		
		.suitp {
			display: block;
			width: 25%;
			font-size: 14px;
			line-height: 1.4;
			color: #000000;
			background-color: transparent;
			float: left;
			text-align: right;
			display: table-cell;
			position: absolute;
			bottom: 0px;
		}
		
		.main-formuser {
			background-image: url(<%=basePath%>/images/ui/glass.png);
			background-color: #b1b6bf;
			border-bottom-left-radius: 5px;
			border-top-left-radius: 5px;
			border-bottom-right-radius: 5px;
			border-top-right-radius: 5px;
		}
		
		.main-form1 {
			width: 100%;
			padding: 20px;
			-webkit-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
			-moz-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
			-o-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
			box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
		}
		
		button {
            height: 40px;
            padding: 0 2em;
            background-color: #dedede;
            border: none;
            outline: none;
            cursor: pointer;
            position: relative;
            transition: all ease 800ms;
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
            background-color: #af8baf;
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

	<body style="position: relative;display:none" onLoad="doInit()" id="body">
		<div onload="showCenter1()">
			<center>
				<!-- Table goes in the document BODY -->
				<table id="listTable" class="hovertable">
					<tr>
						<th>ID</th>
						<th>用户名称</th>
						<th>用户实名</th>
						<th>性别</th>
						<th>模型</th>
						<th>身份</th>
						<th>操作</th>
					</tr>

				</table>
			</center>
		</div>

		<div id="editDialog" style=" width:400px;position: absolute; display:none;float: left;">
			<form action="#" class="main-form1 main-formuser" style="float: left;">
				<div style="width: 100%; float: left;">
					<center>
						<h2>用户信息</h2>
					</center>
					<div class="divline">
						<p class="suitp">用户名称：</p>
						<input id="username" class="suitinput" type="text" autocomplete="off" disabled="disabled"/>
					</div>
					<div class="divline">
						<p class="suitp">用户实名：</p>
						<input id="realname" class="suitinput" type="text" autocomplete="off" />
					</div>
					<div class="divline">
						<p class="suitp">密码：</p>
						<input id="password" class="suitinput" type="password" placeholder="密码（若不修改置为空）" autocomplete="off" />
					</div>
					<div class="divline">
						<p class="suitp">密码确认：</p>
						<input id="password2" class="suitinput" type="password" placeholder="密码确认（若不修改置为空）" autocomplete="off" />
						<br></div>
					<div class="divline">

						<p class="suitp">性别：</p>

						<div class="suitinput" style="border-bottom: none;position: relative;">
							<div style="position:absolute;bottom: 0px;">
								<label><input name="sex" id="man" type="radio" value="1" autocomplete="off" />男</label>
								<label><input name="sex" id="woman" type="radio" value="0" autocomplete="off" />女</label>
							</div>
						</div>
					</div>
					<input id="sex" type="hidden" value=" " autocomplete="off" />
					<div class="suitTilte">模型选择</div>
					<center>
						<div style="width: 180px;">
							<div id="manModel" style="display: none;">
								<input id="manModelA" class="click button-background" type="button" value="" style="background-image: url(<%=basePath%>/images/data/model/mheadA.png);" />
								<input id="manModelB" class="click button-background" type="button" value="" style="background-image: url(<%=basePath%>/images/data/model/mheadB.png);" />

							</div>
							<div id="womanModel" style="display: none;">
								<input id="womanModelA" class="click button-background" type="button" value="" style="background-image: url(<%=basePath%>/images/data/model/wheadA.png);" />
								<input id="womanModelB" class="click button-background" type="button" value="" style="background-image: url(<%=basePath%>/images/data/model/wheadB.png);" />

							</div>
						</div>
					</center>
					<input name="mx" id="model" type="hidden" value=" " autocomplete="off" />
					<div class="divline">
						<p class="suitp">是否管理员：</p>
						<div class="suitinput" style="border-bottom: none;position: relative;">
							<div style="position:absolute;bottom: 0px;">
								<label><input name="isadmin" type="radio" value="1" autocomplete="off" />是</label>
								<label><input name="isadmin" type="radio" value="0" autocomplete="off" />否</label>
							</div>
						</div>
					</div>
					<input name="admin" id="isadmin" type="hidden" value=" " autocomplete="off" />
				</div>
				<div style="width: 100%; float:left;"><br/>
					<center>
						<input type="button" value="保存信息" onclick="doUpdate()" />
						<input type="button" value="关闭窗口" onclick="editDialog.hide();" />
					</center>
				</div>
			</form>
		</div>
	</body>

<script>
	var id;
	var trIndex;
	
	function getTr(element){//获取当前行标
		var tagName = element.tagName;
		if(tagName == "TR")
			return element;
		return getTr(element.parentNode);
	}
	
	function fillAndShowEditor(element) {//打开信息框并初始化
		editDialog.showCenter();
		
		var tr = getTr(element); 
		trIndex = tr.rowIndex;
		var tds = $(tr).find("TD");
		
		id = tds.eq(0).text();
		var sex = tds.find("#_sex").attr("value");
		var model = tds.find("img").attr("value");
		var isadmin = tds.find("#_isadmin").attr("value");;

		$("#username").val(tds.eq(1).text());
		$("#realname").val(tds.eq(2).text());
		$("#sex").val(sex);
		$("#isadmin").val(isadmin);
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
		
		if(isadmin == 1)
			$("input[name='isadmin'][value=1]").prop("checked",true);
		else
			$("input[name='isadmin'][value=0]").prop("checked",true);
		
	}
	
 	function doDelete(element){
		if(confirm("确定删除该记录 ")){
			var tr = getTr(element);
			trIndex = tr.rowIndex;
			var id = $(tr).find("td").eq(0).text();
			var user = {};
			user.id = id;
			request("POST","<%=basePath%>/user/deleteUser", user, updateList,serverError, true);
		}
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
		user.sex = $("#sex").val();
		user.isadmin = $("#isadmin").val();
		request("POST","<%=basePath%>/user/update",user,updateList,serverError,true);
		
		$("#password").val("");
		$("#password2").val("");
		editDialog.hide();
	}
	
 	function initList(responseData){
	    $("#body").css("display","block");
 		if(responseData.code < 0){
			return ;
		}
 		
 		var users = responseData.data;
  		$(users).each(function(index,item){
  			buildTr($("#listTable")[0].insertRow(index+1),item);
  		})
 	}
	
	function doInit(){
		request("POST","<%=basePath%>/user/getUser",{},isAdmin,serverError,true);
	}

	function isAdmin(responseData){  
	    var user = responseData.data;
	    if(user){
	    	if(user.isadmin == 0){
		    	alert("没有权限");
		    	window.open("about:blank","_self").close();
	    	}
	    }
		request("POST","<%=basePath%>/user/listAll",{},initList,serverError,true);
	}
	
	function updateList(responseData){
 		showMessage(responseData);
		if(responseData.code < 0){
			return ;
		}
		
		var table = $("#listTable")[0];
		table.deleteRow(trIndex);
		
		var user = responseData.data;
		if(user === null)
			return ;

		buildTr(table.insertRow(trIndex),user);
	}
	
	function buildTr(tr,item){
		var id = tr.insertCell(0);
		var username = tr.insertCell(1);
		var realname = tr.insertCell(2);
		var sex = tr.insertCell(3);
		var model = tr.insertCell(4);
		var isadmin = tr.insertCell(5);
		var motion = tr.insertCell(6);
		
		id.innerHTML = item.id;
		username.innerHTML = item.username;
		realname.innerHTML = item.realname;
		if(item.sex == 1)
			sex.innerHTML = "<div id='_sex' value='"+item.sex+"' >男</div>";
		else sex.innerHTML = "<div id='_sex' value='"+item.sex+"' >女</div>";
		model.innerHTML = "<img height='54px' value='"+item.model+"' src="+"'<%=basePath%>/images/data/model/"+item.model+".png'>";
		if(item.isadmin == 1)
			isadmin.innerHTML = "<div id='_isadmin' value='"+item.isadmin+"' >管理员</div>";
		else isadmin.innerHTML = "<div id='_isadmin' value='"+item.isadmin+"' >普通用户</div>";
		motion.innerHTML = "<button onclick='fillAndShowEditor(this);'>修改</button><button onclick='return doDelete(this);'>删除</button>";
	}
		
	$("input[name='isadmin']").click(function(){
		if(this.checked){
			$('#isadmin').val($(this).val());
		}
	})
	
	$("input[name='sex']").click(function(){
		if(this.checked) {
			$('#sex').val($(this).val());
			if($(this).attr("id") == "man") {
				$("#manModel").show();
				$("#womanModel").hide();
				}
			if($(this).attr("id") == "woman") {
				$("#manModel").hide();
				$("#womanModel").show();
				}
			}
	})

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

	HTMLDivElement.prototype.showCenter = function() {
		var position = "position:absolute;";
		this.style = position;
		position = "position:absolute;top:"
				+ (window.innerHeight - this.offsetHeight) / 2 + "px;left:"
				+ (window.innerWidth - this.offsetWidth) / 2
				+ "px;display:block";
		this.style = position;
	}

	HTMLDivElement.prototype.hide = function() {
		var position = "position:absolute;display:none;width:"
				+ this.offsetWidth + "px;height:" + this.offsetHeight + "px";
		this.style = position;
	}
</script>
</html>
