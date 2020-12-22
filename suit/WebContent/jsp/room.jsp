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
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<script src="<%=basePath%>/js/jquery.min.js" type="text/javascript"></script>
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
<script src="<%=basePath%>/js/vendor/jquery.ui.widget.js"></script>
<script src="<%=basePath%>/js/jquery.iframe-transport.js" type="text/javascript"></script>
<script src="<%=basePath%>/js/jquery.fileupload.js" type="text/javascript"></script>
<script src="<%=basePath%>/js/main.js" type="text/javascript"></script>
<title></title>
</head>
<style>
		* {
			padding: 0;
			margin: 0;
		}
		
		.body {
			width: 100%;
			height: 200px;
		}
		
		.divmain {
			width: 100%;
			background-color: royalblue;
			position: relative;
		}
		
		.divA {
			width: 45%;
			/*background-color: #394a6d;*/
			height: 100%;
			position: absolute;
			left: 3%;
			float: left;
		}
		
		.divB {
			width: 530px;

			position: absolute;
			left: 45%;
			float: left;
			padding-top: 5%;
			/*background: url(<%=basePath%>/images/ui/ground.png);
			background-position: center bottom;
			background-repeat: no-repeat;
			background-attachment: scroll;
			background-size: 100% auto;*/
			/*padding-bottom: 5%;*/
			text-align: center;
		}
		
		.divC {
			width: 20%;
			position: absolute;
			right: 0%;
			padding: 0;
		}
		.divshow{
			
			
			width: 530px;
			height: 800px;
			position: relative;
			
			background: url(<%=basePath%>/images/ui/ground.png);
			background-position: center bottom;
			background-repeat: no-repeat;
			background-attachment: scroll;
			background-size:100% auto ;
		}
		
		.main-formuser {
			
			background-color: #000;
			opacity: 0.5;
			border-radius: 5px;
  			box-shadow: 5px 5px 10px #000;
		}
		
		.main-form1 {
			width: 80%;
			padding: 25px 40px;
			paddong-top:20px;
		}
		
		.divline {
			width: 100%;
			height: 24px;
			display: flex;
		}
		
		.suitinput {
			display: block;
			width: 70%;
			height: 24px;
			font-size: 12px;
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
			width: 60px;
			font-size: 18px;
			line-height: 1.4;
			color: #fff;
			background-color: transparent;
			text-align: left;
		}
		
		.divN {
			width: 40%;
			float: left;
			padding: 20px;
			margin-top: 20px;
		}
		
		.divtop {}
		
		.divmain1 {
			float: left;
			width: 100%;
			
		}
		
		#suitAddContainer {
			width: 280px;
			position: fixed;
			right: 40px;
			top: 40px;
			z-index: 3;
		}
		/*显示衣服的盒子*/
		
		.addDivClass {
			width: 100%;
			height: 500px;
			background-image: url(<%=basePath%>/images/ui/glass.png);
			background-repeat: no-repeat;
			background-size: cover;
		}
		
		#money{
	width:80px;
	height: 40px;
	position: absolute;
	bottom: 8%;
	right: 0;
	text-align: center;
	border-radius: 10px;
	border: 2px solid brown;
}
#moneyTitle{
	width: 100%;
	height: 20px;
	font-family: arial;
	line-height: 20px;
	font-size: 15px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: #6886c5;
	color: white;
}
#moneyCount{
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	width: 100%;
	height: 20px;
	font-family: "微软雅黑" ;
	font-size: 13px;
	line-height: 20px;
	background-color: #FAACA8;
	color: white;
}
		.infoText1 {
		padding-left: 10px;
		    width: 150px;
			font-family: "微软雅黑";
			color:cornsilk;
			opacity: 1;
			font-size: 18px;
			background-color: #fc7978;
			border-radius: 2px;
		}
		
		.infoText2 {
			padding-left: 10px;
		    width: 150px;
			font-family: "微软雅黑";
			color: cornsilk;
			font-size: 18px;
			background-color: #6886c5;
			border-radius: 2px;
		}
		
		.infoText3 {
		padding-left: 10px;
		    width: 150px;
			font-family: "微软雅黑";
			color: white;
			font-size: 18px;
			background-color: aqua;
			border-radius: 2px;
		}
		#categoryChooseContainer{
		border: 1px solid #798089;
			
			border-right: none;
			border-top: none;
	width: 100%;
	height: 30px;
	position: fixed;
	float:left;
}
.selectLabel{
	font-size: 20px;
	line-height: 30px;
	width: 100px;
	height: 100%;
	padding:5px;
	font-family: "微软雅黑";
	
	
	
}
.selectForCategory{
	width: 150px;
	height: 30px;
	background-color: #798089;
	text-align: center;
	font-size: 16px;
	border: none;
			
	
}

/*添加衣服容器*/
#suitAddContainer{
	width: 200px;
	/*position: fixed;
	right: 40px;
	top: 40px;*/
	float: right;
	margin-right: 40px;
	margin-top: 40px;
}
#addBtn{
	width: 25%;
	float: right;
}
/*衣服图片*/
#suitImg{
	width: 100%;
	float: left;
	text-align: center;
}  
	</style>

	<body class="body" onload="doInit()" style="display:none" id="body">
		<div class="divmain">
			<div class="divA">
				<div id="boxProto" class="divN" style="display:none">

					<form action="#" class="main-form1 main-formuser" style="float: left;">

						<div style="width: 100%; float: left;">
							<div class="divline"><p class="suitp">编号：</p><div id="suitcode_box" class="infoText1">1</div></div><br>
							<div class="divline"><p class="suitp">名称：</p><div id="suitname_box" class="infoText2">2</div></div><br>
						    <div class="divline"><p class="suitp">价格：</p><div id="price_box" class="infoText3">3</div></div><br>
						</div>
						<div style="width: 100%; float:left;position: relative;">
							<div class="divline">
								<table>
									<tr style="width: 100%;position: absolute;top: -8px;">
										<th style="width: 30%;"></th>
										<th style="width: 16%;"><img src="<%=basePath%>/images/ui/zIndex.png" width="100%"></th>
										<th style="width: 6%; font-size: 14px;"><div id="index_box">0</div></th>
										<th style="width: 16%;"><img name="up" src="<%=basePath%>/images/ui/up.png" width="100%"></th>
										<th style="width: 16%;"><img name="down" src="<%=basePath%>/images/ui/down.png" width="100%"></th>
										<th style="width: 16%;"><img name="remove" src="<%=basePath%>/images/ui/remove.png" width="100%"></th>
									</tr>
								</table>
							</div>
						</div>
					</form>
				</div>
				
			</div>
			<div class="divB">
				<div class="divshow">
					<div id="img_box" style="z-index: 0; position: absolute; left:70px;"><img id="model_img" height="700px" ></div>
				</div>
			<div id="money">
				<div id="moneyTitle" value="0">总价</div>
				<div id="moneyCount">0</div>
			</div>
			</div>
			<div class="divC">
				<div class="divtop" style="float: left;">
					<div id="categoryChooseContainer">
			              <span class="selectLabel">选择分类:</span>
			              <select id="categoryChoose" class="selectForCategory"></select>
		            </div>

					
				</div>
				<div class="divmain1" style="float: left;width: 100%;height:800px;overflow:auto;">
					<div id="suitProto" class="divN" style="width:90%;padding: 5%;display:none;">
						<form action="#" class="main-form1 main-formuser" style="float: left;padding: 0;width: 100%; background-color:rgba(0,0,0,0.8);">

							<div id="addBtn"><img id="addSuit" src="<%=basePath%>/images/data/suits/add.png" width="100%"></div>
				            <div id="suitImg"><img src="<%=basePath%>/images/data/suits/mJean01.png" width="50%"></div>

							<div style="width: 100%; float: left; margin-left: 20px;">
								<div class="divline"><p class="suitp">编号： </p><span id="suitcode" class="infoText1">1</span></div><br>
							    <div class="divline"><p class="suitp">名称： </p><span id="suitname" class="infoText2">1</span></div><br>
						        <div class="divline"><p class="suitp">价格： </p><span id="price" class="infoText3">1</span></div><br>
							</div>

						</form>

					</div>

				</div>

			</div>
		</div>
	</body>
<script type="text/javascript">
var sex;
var usercode;

function addSuitBox(item){
	var div = $("#boxProto").clone(true);
	$(div).appendTo(".divA");
	
	$(div).attr("id",item.suitcode);
	$(div).css({display : "block"});
	
	$(div).find("#suitcode_box").text(item.suitcode);
	$(div).find("#suitname_box").text(item.suitname);
	$(div).find("#price_box").text(Number(item.price).formatMoney(2,"¥",",","."));
	$(div).find("#index_box").text(item.zindex);
	
	var img_box = $("#img_box").clone(true);
	$(img_box).find("img").attr("src","<%=basePath%>/images/data/suits/"+item.suitcode+".png");
	$(img_box).css("z-index",item.zindex);
	$(img_box).appendTo(".divshow");
	
	$(div).find("img[name='up']").click(function(){
		var index = $(div).find("#index_box").text();
		$(div).find("#index_box").text(index-1+2);
		$(img_box).css("z-index",index-1+2);
		item.zindex = index-1+2;
		request("POST","<%=basePath%>/mysuits/updateMySuits",item,showSuits,serverError, true);
	});
	
	$(div).find("img[name='down']").click(function(){
		var index = $(div).find("#index_box").text();
		$(div).find("#index_box").text(index-1);
		$(img_box).css("z-index",index-1);
		item.zindex = index-1;
		request("POST","<%=basePath%>/mysuits/updateMySuits",item,showSuits,serverError, true);
	});
	
	$(div).find("img[name='remove']").click(function(){
		div.remove();
		img_box.remove();
		var moneyCount = $("#moneyCount").val();
		moneyCount = Number(moneyCount)-Number(item.price);
		$("#moneyCount").val(moneyCount);
		$("#moneyCount").text(moneyCount.formatMoney(2,"¥",",","."));
		request("POST","<%=basePath%>/mysuits/deleteMySuits",item,showSuits,serverError, true);
	});
}

function doAddSuit(item){
	var div = $("#suitProto").clone(true);
	$(div).appendTo(".divmain1");

	$(div).attr("name","clone-suit");
	$(div).css({display : "block"});
	
	$(div).find("#suitcode").text(item.code);
	$(div).find("#suitname").text(item.suitname);
	$(div).find("#price").text(item.price);
	$(div).find("#suitImg img").attr("src","<%=basePath%>/images/data/suits/"+item.code+".png");
	
	$(div).find("#addSuit").click(function(){
		if(($(".divA").find("#"+item.code+"")).length > 0){
			alert("已经加入购物车了呢");
			return;
		}
		var mysuit = {};
		mysuit.usercode = usercode;
		mysuit.suitcode = item.code;
		mysuit.price = item.price;
		mysuit.suitname = item.suitname;
		mysuit.zindex = 0;
		request("POST","<%=basePath%>/mysuits/addMySuits",mysuit,addSuit,serverError, true);
		var moneyCount = $("#moneyCount").val();
		moneyCount = Number(moneyCount)+Number(item.price);
		$("#moneyCount").val(moneyCount);
		$("#moneyCount").text(moneyCount.formatMoney(2,"¥",",","."));
	});
}

function addSuit(responseData){
	if(responseData.code < 0)
		return;
	addSuitBox(responseData.data);
}

function showSuits(responseData){
	//showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	var suits = responseData.data;
	$(suits).each(function(index,item){
		doAddSuit(item);
	})
}

function showBoxs(responseData){
	//showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	var suits = responseData.data;
	$(suits).each(function(index,item){
		var moneyCount = $("#moneyCount").val();
		moneyCount = Number(moneyCount)+Number(item.price);
		$("#moneyCount").val(moneyCount);
		$("#moneyCount").text(moneyCount.formatMoney(2,"¥",",","."));
		addSuitBox(item);
	})
}

function doInit(){
	request("POST","<%=basePath%>/user/getUser",{},isAdmin,serverError,true);
}

function isAdmin(responseData){  
	var user = responseData.data;
//  if(user){
//  	if(user.isadmin == 0){
//	    	alert("没有权限");
//	    	window.open("about:blank","_self").close();
//  	}
//  }
 	sex = user.sex;
 	usercode = user.username;
	$("#model_img").attr("src","<%=basePath%>/images/data/model/"+user.model+"Model.png");
	request("POST","<%=basePath%>/suittype/listAll",{},initSelect,serverError, true);
	var mysuits = {};
	mysuits.usercode = usercode;
	request("POST","<%=basePath%>/mysuits/listAll",mysuits,showBoxs,serverError, true);
}

function initSelect(responseData){
    $("#body").css("display","block");
	//showMessage(responseData);
	if(responseData.code < 0){
		return ;
	}
	
	var suittypes = responseData.data;
	var categoryChoose = $("#categoryChoose");
	
	$(suittypes).each(function(index,item){
		var option = jQuery("<option value='"+item.code+"'>"+item.typename+"</option>");
		$(option).click(function(){
			$("div[name='clone-suit']").remove();
			var suits = {};
			suits.sex = sex;
			suits.suittype = item.code;
			request("POST","<%=basePath%>/suits/search", suits,showSuits,serverError, true);
		});
		categoryChoose.append(option);
	})
}
</script>
</html>
