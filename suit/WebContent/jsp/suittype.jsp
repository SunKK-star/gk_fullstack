<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path;
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<script src="<%=basePath%>/js/jquery.min.js" type="text/javascript"></script>
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>

<script src="<%=basePath%>/js/vendor/jquery.ui.widget.js"></script>

<script src="<%=basePath%>/js/jquery.iframe-transport.js" type="text/javascript"></script>

<script src="<%=basePath%>/js/jquery.fileupload.js" type="text/javascript"></script>

<script src="<%=basePath%>/js/main.js" type="text/javascript"></script>

<link href="<%=basePath%>/css/main.css" rel="stylesheet" type="text/css">

<link href="<%=basePath%>/css/jquery.fileupload.css" rel="stylesheet" type="text/css">

<link href="<%=basePath%>/css/jquery.fileupload-ui.css" rel="stylesheet" type="text/css">

<link rel="stylesheet" type="text/css" href="<%=basePath%>/common/suittype.css" />

<title></title>
</head>


<body onLoad="doInit()" style="display:none" id="body">
	<div class="divN" id="div1">
		<form action="#" class="main-form1 main-formuser">
			<div class="suitTilte">服饰类别</div>
			<div class="divline">
				<p class="suitp">编号：</p>
				<input id="code" class="suitinput" type="text" autocomplete="off" />
			</div>
			<div class="divline">
				<p class="suitp">名称：</p>
				<input id="typename" class="suitinput" type="text" autocomplete="off" />
			</div>
		
			<div class="changebtn">
			
					<input type="hidden" class="btner" id="update" value="保存" />
					<input type="button" class="btner" id="add" value="添加"/>
					<input type="hidden" class="btner" id="del" value="删除 "/>
					<input id="idvalue" class="btner" type="hidden" autocomplete="off" />
			</div>
		</form>
	</div>

</body>
<script>
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
	request("POST","<%=basePath%>/suittype/listAll",{},showList,serverError, true);
}

function showList(responseData){
    $("#body").css("display","block");
	//showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	var suittypes = responseData.data;
	$(suittypes).each(function(index,item){
		doAdd(item);
	})
}

function doAdd(item){
	var div = $(".divN:first").clone(true);
	$(div).appendTo("body");
	$(div).find("#update").attr("type", "button");
	$(div).find("#add").attr("type", "hidden");
	$(div).find("#del").attr("type", "button");
	
	$(div).find("#idvalue").attr("value",item.id);
	$(div).find("#code").prop("value",item.code);
	$(div).find("#typename").prop("value",item.typename);
}

$('#add').click(function (){
	var suittype = {};
	
	suittype.code = $(".divN:first").find("#code").eq(0).val();
	suittype.typename = $(".divN:first").find("#typename").eq(0).val();
	
	request("POST","<%=basePath%>/suittype/addSuitType", suittype,addSuitType,serverError, true);
	
	$(".divN:first").find("#code").prop("value","");
	$(".divN:first").find("#typename").prop("value","");
});

function addSuitType(responseData){
	showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	doAdd(responseData.data);
}

$('#del').click(function() {
	if(confirm("确定删除该记录 ")){
 		var suittype = {};
 		var div = this.parentNode.parentNode.parentNode.parentNode;
 		
 		suittype.id = $(div).find("#idvalue").eq(0).val();
 		suittype.code = $(div).find("#code").eq(0).val();
 		
 		request("POST","<%=basePath%>/suittype/deleteSuitType", suittype,showMessage,serverError, true);
		div.remove();
	}
});

$('#update').click(function() {
	var suittype = {};
	var div = this.parentNode.parentNode.parentNode.parentNode;
	
	suittype.id = $(div).find("#idvalue").eq(0).val();
	suittype.code = $(div).find("#code").eq(0).val();
	suittype.typename = $(div).find("#typename").eq(0).val();
	
	request("POST","<%=basePath%>/suittype/updateSuitType", suittype,showMessage,serverError, true);
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
</script>
</html>
