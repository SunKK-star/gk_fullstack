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
<title></title>
</head>
<style>
* {
	padding: 0;
	margin: 0;
}

a.button {
	position: relative;
	color: rgba(255, 255, 255, 1);
	text-decoration: none;
	background-color: rgba(219, 87, 5, 1);
	font-family: 'Yanone Kaffeesatz';
	font-weight: 700;
	font-size: 3em;
	display: block;
	padding: 4px;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
	-webkit-box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px
		rgba(0, 0, 0, .7);
	-moz-box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px
		rgba(0, 0, 0, .7);
	box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px
		rgba(0, 0, 0, .7);
	margin: 100px auto;
	width: 160px;
	text-align: center;
	-webkit-transition: all .1s ease;
	-moz-transition: all .1s ease;
	-ms-transition: all .1s ease;
	-o-transition: all .1s ease;
	transition: all .1s ease;
}

a.button:active {
	-webkit-box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px
		rgba(0, 0, 0, .9);
	-moz-box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px
		rgba(0, 0, 0, .9);
	box-shadow: 0px 3px 0px rgba(219, 31, 5, 1), 0px 3px 6px
		rgba(0, 0, 0, .9);
	position: relative;
	top: 6px;
}

.bodysuits {
	width: 100%;
	height: 100%;
}

.divtop {
	width: 100%;
	height: 3%;
	float: left;
	border: 1px solid #798089;
	border-right: none;
	border-top: none;
	padding: 2%;
}

.divmain {
	width: 100%;
	height: 95%;
	float: left;
}

.divN {
	width: 30%;
	float: left;
	text-align: center;
	padding-top: 5%;
	margin-left: 5%;
}

.suitTilte {
	background-image: url(<%=basePath%>/images/ui/suitTitle.png);
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

.divline p{
color:#6886c5;}
.suitinput {
	display: block;
	width: 70%;
	height: 34px;
	font-size: 18px;
	line-height: 1.4;
	color: #fc7978;
	background-color: transparent;
	border: 1px solid #000000;
	border-left: none;
	border-right: none;
	border-top: none;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	margin-left: 25%;
	text-align: center;
}

.suitp {
	display: block;
	width: 25%;
	font-size: 18px;
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
	width: 80%;
	padding: 20px;
	-webkit-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
	-moz-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
	-o-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
	box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
}

.selectLabel {
	font-size: 20px;
	line-height: 30px;
	width: 100px;
	height: 100%;
	float: left;
	font-family: "微软雅黑";
	text-align: right;
	margin-left: 20px;
}

.type_select {
	width: 70%;
	height: 34px;
	background-color: #D6D3D3;
	text-align: center;
	font-size: 16px;
	border: none;
}

.sex_select {
	width: 70%;
	height: 34px;
	background-color: #D6D3D3;
	text-align: center;
	font-size: 16px;
	border: none;
}

.button {
	height: 35px;
	padding: 0 2em;
	background-color: #dedede;
	border: none;
	outline: none;
	cursor: pointer;
	position: relative;
	transition: all ease 800ms;
}

.button:hover {
	background-color: #fff;
	color: red;
}

.button:before, .button:after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	width: 0;
	height: 2px;
	transition: all ease 400ms;
}

.button:after {
	top: inherit;
	right: inherit;
	left: 0;
	bottom: 0;
}

.button:hover:after, .button:hover:before {
	width: 100%;
	transition: all ease 800ms;
}

#touch:hover{
	cursor:pointer;
	color:red;
}


</style>

<body class="bodysuits" onLoad="doInit()" style="display: none" id="body">

	<div class="divtop" style="float: left;">
		<div style="float: left;">
			<span class="selectLabel" style="float: left; width: 60px;">性别：</span>
			<select style="float: left; width: 100px;" class="sex_select"></select>
		</div>
		<div style="float: left;">
			<span class="selectLabel">服饰类别：</span>
			<select style="float: left; width: 120px;" class="type_select"></select>
		</div>
		<div style="float: left;margin-left:5px">
			<button class="button" onclick="doSearch()">查询</button>
		</div>
	</div>
	<div class="divmain">
		<div class="divN">

			<form class="main-form1 main-formuser" style="float: left;">
				<div class="suitTilte">服饰细目</div>
				<div style="width: 100%; float: left; border-bottom: 1px solid #FFFFFF;">
					<div id="divl" style="width: 100%; float: left;">

						<div class="divline">
							<p class="suitp">编号：</p>
							<input id="code" class="suitinput" autocomplete="off" />
						</div>
						<br>
						<div class="divline">
							<p class="suitp">名称：</p>
							<input id="suitname" class="suitinput" type="text" autocomplete="off" />
						</div>
						<br>
						<div class="divline">
							<p class="suitp">价格：</p>
							<input id="price" class="suitinput" type="text" autocomplete="off" />
						</div>
						<br>
						<div class="divline">
							<p class="suitp">性别：</p>
							<select class="suitinput sex_select">
							</select>
						</div>
						<br>
						<div class="divline">
							<p class="suitp">分类：</p>
							<select class="suitinput type_select">
							</select>
						</div>
						<br>

					</div>
					<div id="divr" style="width: 50%; float: left; display: none">

						<div id="touch"><br>点击添加图片</div>
						<div id="uploaderContainer">
							<input style="display:none" type="file" name="file[]" multiple="multiple">
							<img id="suitImage" src="<%=basePath%>/images/data/suits/add.png" height="170px">
						</div>
					</div>

				</div>

				<div style="float: right;">
					<br />
					<center>
						<input class="button" type="hidden" id="update" value="保存" />
						<input class="button" type="button" id="add" value="添加" />
						<input class="button" type="hidden" id="del" value="删除 " />
						<input id="idvalue" type="hidden" autocomplete="off" />
					</center>
				</div>
			</form>
		</div>
	</div>

</body>

<script>
//parentNode

function uploadFileRequest(suit,urlPrefix,code){
	suit.find("#uploaderContainer input").fileupload({
		    dataType: 'json',
		    url: "<%=basePath%>/suits/uploadImage?code="+code,
		    done: function (e, data) {
		    	if(data.result.code > 0){
		    		suit.find("#uploaderContainer img").attr("src",urlPrefix+data.result.description+".png");
			    	suit.find("#code").attr("value",data.result.description);
		    	}
		    	showMessage({"code":0,"description":data.result.description+"上传成功！"});
		        }
		});
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
	request("POST","<%=basePath%>/suittype/listAll",{},initSelect,serverError, true);
	request("POST","<%=basePath%>/suits/listAll",{},showList,serverError, true);
}

function initSelect(responseData){
    $("#body").css("display","block");
	//showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	
	var suittypes = responseData.data;
	
	$(".sex_select").append("<option value='1'>  男   </option>");
	$(".sex_select").append("<option value='0'>  女   </option>");
	
	$(suittypes).each(function(index,item){
		$(".type_select").append("<option value='"+item.code+"'>"+item.typename+"</option>");
	})
}

function showList(responseData){
	//showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	var suits = responseData.data;
	$(suits).each(function(index,item){
		doAdd(item);
	})
}

function doAdd(item){
	var div = $(".divN:first").clone(true);
	
	$(div).css({width : "45%"});
	$(div).attr("name","clone-div");
	$(div).find("#divl").css({width : "50%"});
	$(div).find("#divr").css({display : "block"});
	
	$(div).appendTo(".divmain");
	$(div).find("#update").attr("type", "button");
	$(div).find("#add").attr("type", "hidden");
	$(div).find("#del").attr("type", "button");
	
	$(div).find("#idvalue").attr("value",item.id);
	$(div).find("#code").prop("value",item.code);
	$(div).find("#suitname").prop("value",item.suitname);
	$(div).find("#price").prop("value",item.price);
	$(div).find("#suitImage").attr("src","<%=basePath%>/images/data/suits/"+item.code+".png");
	$(div).find("#touch").click(function(){
		$(div).find("#uploaderContainer input").click();
	})
	
	var sex = item.sex;
	var suittype = item.suittype;
	$(div).find(".sex_select  option[value='"+item.sex+"']").attr("selected",true);
	$(div).find(".type_select  option[value='"+item.suittype+"']").attr("selected",true);
	uploadFileRequest(div,"<%=basePath%>/images/data/suits/",item.code);
}

function doSearch(){
	var suits = {};
	
	suits.sex = $(".divtop").find(".sex_select option:selected").eq(0).val();
	suits.suittype = $(".divtop").find(".type_select option:selected").eq(0).val();

	$("div[name='clone-div']").remove();
	request("POST","<%=basePath%>/suits/search", suits,showList,serverError, true);
}

$('#add').click(function (){
	var suits = {};
	
	suits.code = $(".divN:first").find("#code").eq(0).val();
	suits.suitname = $(".divN:first").find("#suitname").eq(0).val();
	suits.price = $(".divN:first").find("#price").eq(0).val();
	
	suits.sex = $(".divN:first").find(".sex_select option:selected").eq(0).val();
	suits.suittype = $(".divN:first").find(".type_select option:selected").eq(0).val();
	
	request("POST","<%=basePath%>/suits/addSuits", suits,addSuits,serverError, true);
	
	$(".divN:first").find("#code").prop("value","");
	$(".divN:first").find("#suitname").prop("value","");
	$(".divN:first").find("#price").prop("value","");
});

function addSuits(responseData){
	showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	doAdd(responseData.data);
}

$('#del').click(function() {
	if(confirm("确定删除该记录 ")){
 		var suits = {};
 		var div = this.parentNode.parentNode.parentNode.parentNode;
 		
 		suits.id = $(div).find("#idvalue").eq(0).val();
 		suits.code = $(div).find("#code").eq(0).val();
 		
 		request("POST","<%=basePath%>/suits/deleteSuits", suits,showMessage,serverError, true);
		div.remove();
	}
});

$('#update').click(function() {
	var suits = {};
	var div = this.parentNode.parentNode.parentNode.parentNode;
	
	suits.id = $(div).find("#idvalue").eq(0).val();
	suits.code = $(div).find("#code").eq(0).val();
	suits.suitname = $(div).find("#suitname").eq(0).val();
	suits.price = $(div).find("#price").eq(0).val();
	
	suits.sex = $(div).find(".sex_select option:selected").eq(0).val();
	suits.suittype = $(div).find(".type_select option:selected").eq(0).val();
	
	request("POST","<%=basePath%>/suits/updateSuits", suits,showMessage, serverError, true);
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
