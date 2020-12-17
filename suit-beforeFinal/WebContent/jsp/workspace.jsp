<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="restful.entity.User"%>
<%  
    String path = request.getContextPath();  
    String basePath = request.getScheme() + "://" +   
                                      request.getServerName() + ":" +  
                                      request.getServerPort() + path;
    User user = (User)session.getAttribute("user");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>梦想试衣间</title>
<link rel="stylesheet" type="text/css" href="../css/workspace.css" />
<link rel="stylesheet" type="text/css" href="../css/workspace_2.css" />
<link rel="stylesheet" type="text/css" href="../css/workspace_3.css" />
<link rel="stylesheet" type="text/css" href="../css/workspace_5.css" />
<script src="<%=basePath%>/js/jquery.min.js" type="text/javascript"></script>  
<script src="<%=basePath%>/js/vendor/jquery.ui.widget.js"></script>  
<script src="<%=basePath%>/js/jquery.iframe-transport.js" type="text/javascript"></script>  
<script src="<%=basePath%>/js/jquery.fileupload.js" type="text/javascript"></script>  
<script src="<%=basePath%>/js/main.js" type="text/javascript"></script>
<link href="<%=basePath%>/css/main.css" rel="stylesheet" type="text/css">  
<link href="<%=basePath%>/css/jquery.fileupload.css" rel="stylesheet" type="text/css">  
<link href="<%=basePath%>/css/jquery.fileupload-ui.css" rel="stylesheet" type="text/css">  
<script type="text/javascript" src="<%=basePath%>/js/Utils.js"></script>
</head>
<body>

	<div id="model_hidden" style="display:none">${user.model }</div>

	<div id=sex_hidden style="display:none">${user.sex }</div>
	
	<div id="username_hidden" style="display:none">${user.username }</div>

	<div id="head">
		<div id="nid">
			<a>当前用户：<span>${user.username }</span></a>
		</div>
		<div id="dream">
	
		</div>
	</div>
	<div id="main">
		<div id="left_main">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li onclick="logoOut()"></li>
			</ul>
		</div>
		<div id="right_main">
			<ul>
				<li id=regi>
					<span id="top">用户信息</span>
					<span id="message">用户名称：<input type="text" id="username" name="username" value="${user.username }"/></span>
					<span id="message">用户实名：<input type="text" id="real_name" name="real_name" value="${user.realname }"/></span>
					<span id="message">密&emsp;&emsp;码：<input type="password" id="password"name="password"/></br><a>密码如果不需要修改请本项留空</a></span>
					<span id="message">密码确认：<input type="password" id="password1"name="password1"/></br><a>密码如果不需要修改请本项留空</a></span>
					<span id="m_or_wm">性&emsp;&emsp;别:<input type="radio" id="ij" name="Sex" value="1" />男<input type="radio" name="Sex" id="jk"  value="0" />女</span>
					<span id="model_selection">模型选择</span>
					<div id="line"></div>
					<div id="model_img"></div>
					<span id="login_botton"><button id="save_info" onclick="saveInfo()">保存信息</button></span>
				</li>
				
				<li>
					<table border="1px solid #ccc" cellspacing="0" cellpadding="0"  id="personInfo">
						<tr id="tableTop">
							<th style="width:50px">id</th>
							<th style="width:150px">用户名称</th>
							<th style="width:150px">用户实名</th>
							<th style="width:50px">性别</th>
							<th style="width:150px">模型选择</th>
							<th style="width:150px">是否管理员</th>
							<th style="width:200px;">操作</th>
						</tr>
					</table>
					<div id=updateUser>
					<span id="top">用户信息</span>
					<span id="message1">用户名称：<input type="text" id="updateUserName" /></span>
					<span id="message1">用户实名：<input type="text" id="updateRealName" /></span>
					<span id="message1">密&emsp;&emsp;码：<input type="password" id="updatePassword" /></br><a>密码如果不需要修改请本项留空</a></span>
					<span id="message1">密码确认：<input type="password" id="updatePassword1" /></br><a>密码如果不需要修改请本项留空</a></span>
					<span id="m_or_wm1">性&emsp;&emsp;别:<input type="radio" id="man" name="sex"value="1" onclick="manClick()" />男<input type="radio" name="sex" id="woman" value="0" onclick="womanClick()" />女</span>
					<span id="model_selection">模型选择</span>
					<div id="line"></div>
					<div id="model_img1"></div>
					<span id="isAdm">是否管理员：<input type="radio" name="radio2" id="yes" value="1" />是<input type="radio" name="radio2" id="no" value="0" />否</span>
					<span id="login_botton"><div id="twoButt">
						<button id="saveUser" class="buttom_2" onclick="addUser()" >保存信息</button>  
						<button id="closeWindow" onclick="closeWindow()" class="buttom_2" >关闭窗口</button></div>
					</span>
				</div>
					<div id="pageNumber">
						当前第<span id="pageNum">1</span>页&nbsp&nbsp&nbsp&nbsp
						共<span id="pageMax">0</span>页
					</div>
	
					<div class="foot">
						<button id="addUser" class="buttom_2" type="button" onclick="showaddUser()">添加</button>
						<button id="prePage" class="buttom_2" type="button" onclick="prePage()">上一页</button>
						<span class="foot_word">跳转到第<input id="page"/>页</span>
						<button id="getPage" class="buttom_2" type="button" onclick="getPage()">跳转</button>
						<button id="nextPage" class="buttom_2" type="button" onclick="nextPage()">下一页</button>
					</div>
	
					<div id="update_hidden" class="hidden_div">
	
					</div>
	
					<div id="add_hidden" class="hidden_div">
	
					</div>
				</li>
				
				<li>
					<div id="clothMod">
					<span id="Clothing_category">服饰类别</span>
					<span id="message">编号 : <input type="text" id="typenum"/></span>
					<span id="message">名称 : <input type="text" id="name"/></span>
					<span id="botton add"><button  id="deleteType" onclick="typeDelete(this)" class="buttom_2">删除</button></span>
					<span id="botton add"><button  id="saveType" onclick="typeSave(this)" class="buttom_2">保存</button></span>
					<span id="botton add"><button  id="addType" onclick="typeAdd(this)" class="buttom_2">添加</button></span>
					</div>
					<div id="cloth">
					<ul>
						<p>
						</p>
					</ul>
					</div>
					<div id="twoButtom">
						<button id="prev" class="buttom_2" onclick="prev()">上一页</button>
						<button id="next" class="buttom_2" onclick="next()">下一页</button>
						<p style="margin-left:50px"></p>
					</div>
				</li>
				<li>
					<div id="suit">
					<div style="width:100%;height:50px">
						<div id="searchBar">
							<div class="auto1">
								<a>性别:&nbsp;</a>
								<select class="dropBox1">
			                        <option value="1" selected>男</option>
			                        <option value="0">女</option>
			                    </select>
								<a>服饰类别:&nbsp;</a>
								<select class="dropBox1" name="allType" ></select>
			                    <button class="button3" id="findClothes" onclick="findClothes()">查询</button>
		                    </div>
						</div>
					</div>	
						<div id="clothes" class="divstyle1">
							<span class="topTitle">服饰细目</span>
							<span class="form1">编号：<input type="text" id="addClothNumber"/></span>
							<span class="form1">名称：<input type="text" id="addClothName"/></span>
							<span class="form1">价格：<input type="text" id="addClothPrice"/></span>
							<span class="form1">性别：<select class="dropBox2">
			                        <option value="1" selected>男</option>
			                        <option value="0">女</option>
			                    </select>
			                 </span>
							<span class="form1">分类：<select class="dropBox2" name="allType" ></select></span>
			                 <span class="line1"></span>
			                 <button id="addClothes" class="buttom_3" type="button" onclick="addClothes()">添加</button>
						</div>
						<div class="clothesMod" value="0">
							<span class="topTitle1">服饰细目</span>
							<span class="form1">编号：<input type="text" class="clothNumber"/></span>
							<span class="form1">名称：<input type="text" class="clothName"/></span>
							<span class="form1">价格：<input type="text" class="clothPrice" /></span>
							<span class="form1">性别：<select class="dropBox2">
			                        <option value="1">男</option>
			                        <option value="0">女</option>
			                    </select>
			                 </span>
							<span class="form1">分类：<select class="dropBox2" name="allType"></select></span>
			                 <div class="clothImg">
			                 <div class="addClothImg">
 									<input class="fileupload" type="file" name="file[]" onclick="uploadFileRequest(this)" data-url="<%=basePath%>/clothes/uploadImage" multiple>
 							  </div>
			                 <div class="imgStyle1"></div>
			                 </div>
			                 <span class="line2"></span>
			                 <button class="deleteClothes" style="margin-top:15px; margin-right:10px" type="button" onclick="deleteClothes(this)">删除</button>
			                 <button class="saveClothes"  type="button" style="margin-top:15px;margin-right:10px" onclick="saveClothes(this)">保存</button>
						</div>
					</div>
				</li>
				<li>
					<div id="closethRoom">
					
						<!-- 模板 -->
						<div id="closethDressedModle">
							<div id="describeWord">
								<div id="word_1">编号：<input type="button" class="buttom_5"/></div>
								<div id="word_2">名称：<input type="button" class="buttom_5"/></div>
								<div id="word_3">单价：<input type="button" class="buttom_5"/></div>
							</div>
							<ul id="closethDressedButton">
								<li onclick="deleteUserClothes(this)" style="cursor:pointer;"></li>
								<li onclick="downzIndex(this)" style="cursor:pointer;"></li>
								<li onclick="upzIndex(this)" style="cursor:pointer;"></li>
								<li id="zIndex"></li>
								<li></li>
							</ul>
						</div>
					
						<!-- 展示已选择衣物 -->					
						<div id="closethDressed">
							
						</div>
						
						<div id="model_imgs_model" class="model_imgs" style="display:none;"></div>
						
						<!-- 展示人物装饰 -->
						<div id="show">
							<div id="model_imgs" class="model_imgs"></div>
							<div id="ground">
							</div>
							<div id="price">
								<div id="describePrice">总价</div>
								<div id="totalPrice">￥<span></span></div>
							</div>
						</div>
						
						<div id="select">
							&nbsp&nbsp 选择分类：
							<select id="closethSelect">
								
							</select>
						</div>
						
						<div id="selectClosethModle">
							<div id="selectClosethModle_div">
								<img id="selectClosethModle_img"/>
								<img id="selectClosethModle_addClothes" alt="add" src="../images/ui/add.png"
									onclick="addUserClothes(this)">
							</div>
						</div>
						
						<!-- 展示可选择衣物 -->
						<div id="selectCloseth">
							
						</div>
						
					</div>
				</li>
				</li>
				<li>5</li>
			</ul>
		</div>
	</div>
</body>
<script>
	$(function() {
		loadPage();
	});
	
	
	<!--第一部分的函数-->
	//=======================================================
	//=======================================================
	function loadPage(){
		
		//界面hover事件
		$("#left_main ul li").hover(function() {
			$(this).css("background-color", "#79BDF2").siblings().css("background-color", "");
		});
		
		//界面切换
		$("#right_main ul li:first").show().siblings().hide();
		
		$("#left_main ul li").click(function() {
			var i = $(this).index(); //获取下标
			
			if(i==1){
				<!--第二部分代码-->
				//管理员加载用户信息
				var page={
					pageNow:$("#pageNum").text()
				};
				request("POST","<%=basePath%>/manager/findByPage",page,successLogo,serverError,true);
			}else if(i==2){
				<!--第三部分代码-->
				//加载clothesType
				request("POST","<%=basePath%>/type/typeFindAll",{},successTypeFind,serverError,true);
			}else if(i==3){
				request("POST","<%=basePath%>/type/typeFindAll",{},successTypeFindIn,serverError,true);
			}else if(i==4){
				<!--第五部分代码-->
				//加载衣物类型数据
				request("POST","<%=basePath%>/type/typeFindAll4",{},successAllClothesTypeLoad,serverError,true);
				
				//加载人物衣物数据
				UserClothesLoad();
			}
			
			
			$("#right_main ul li").eq(i).show().siblings().hide();
		});
		//模型选择事件
		$("#m_or_wm").children().click(function() {
			
			var man = $('input:radio[id="ij"]:checked').val();
			var woman = $('input:radio[id="jk"]:checked').val();
			if(man != null) {
				$("#man_model1").remove();
				$("#man_model2").remove();
				$("#woman_model1").remove();
				$("#woman_model2").remove();
				$("#regi").css("height", "400px");
				$("#model_img").append('<div id="man_model1" value="mheadA" onclick="modelClick(this)" ></div>')
					.append('<div id="man_model2" value="mheadB" onclick="modelClick(this)" ></div>');
				$("#regi").css("height", "500px");
			} else {
				$("#man_model1").remove();
				$("#man_model2").remove();
				$("#woman_model1").remove();
				$("#woman_model2").remove();
				$("#regi").css("height", "400px");
				$("#model_img").append('<div id="woman_model1" value="wheadA" onclick="modelClick(this)"></div>')
					.append('<div id="woman_model2" value="wheadB" onclick="modelClick(this)" ></div>');
				$("#regi").css("height", "500px");
			}
		
		});
		
		//点击模型事件
		
		$("#nid").css("line-height", $("#nid").height() + "px");
	}
	
	var model="";
	<!--第二部分的操作函数-->
	//=======================================================
	//=======================================================
	//=======================================================
		function saveInfo(){
			var name=$("#nid a span").text();
			user={
					"username":name
			}
			request("POST","<%=basePath%>/logo/findByName",user,successuserFind,serverError,true);
		}
		function successuserFind(responseData){
			var userdata=responseData.data;
			var id=userdata[0].id;
			var isAdmin = userdata[0].isAdmin;
			var username = userdata[0].username;
			var realname=$("#real_name").val();
			var password = $("#password").val();
			var password1=$("#password1").val();
			var sex = $("#m_or_wm input:checked").attr("value");
			var user={
					"id":id,
					"username":username,
					"realname":realname,
					"sex":sex,
					"password":password,
					"isAdmin":isAdmin,
					"model":model
			}
			//合法性验证
			if(yanzhen(user,password1)){
			request("POST","<%=basePath%>/manager/updateUser",user,successchange,serverError,true);
			}
		}
		function yanzhen(user,password1){
			var username=user.username;
			var real_name=user.realname;
			var password=user.password;
			var model = user.model;
			if(username==null||real_name==null||model==""){
				alert("信息填写不完整");
				return false;
			}
			else if(CheckStr(username)==false){
				alert("用户名存在非法字符");
				return false;
			}
			else if(CheckStr(real_name)==false){
				alert("用户实名存在非法字符");
				return false;
			}
			else if(password!=password1){
					alert("两次密码填写不同");
					return false;
				}
			else return true;
			}
	function CheckStr(str){
      var regx=/['"#$%&\^*》>,."<《？，。！@#￥%……’”：/；]/;
      rs=regx.exec(str);
      if(rs!=null)
      {
         return false;
      }
      else
      {
         return true ;
      }
		}
	function Checkpassword(str){
		if(str.length>=7){
			if(/([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z])/.exec(str)){
    		return true;
			}
			else{
    			return false;
			}
			}
			else{
					return false;
			}
	}
	var username="";
	function updateUser(obj) {
		//获取用户数据
		var id=$(obj).parent().parent().find("td").eq(0).text();
		username=$(obj).parent().parent().find("td").eq(1).text();
		var realname=$(obj).parent().parent().find("td").eq(2).text();
		var sex=$(obj).parent().parent().find("td").eq(3).text();
		    model=$(obj).parent().parent().find("td").eq(4).find("img").attr("name");
		var isAdmin=$(obj).parent().parent().find("td").eq(5).text();
		$("#updateUser").attr("value",id);
		$("#updateUserName").val(username);
		$("#updateRealName").val(realname);
		var man = $('input:radio[id="ij"]:checked').val();
		var woman = $('input:radio[id="jk"]:checked').val();
		//清除数据
		$("#updatePassword").val("");
		$("#updatePassword1").val("");
		//开始加载数据
		if(sex=="男") {$('input:radio[id="man"]').prop("checked","true");manClick();}
		else if(sex=="女") {$('input:radio[id="woman"]').prop("checked","true");womanClick();}
		if(isAdmin=="是") $('input:radio[id="yes"]').prop("checked","true");
		else if(isAdmin=="否") $('input:radio[id="no"]').prop("checked","true");
		$("#model_img1").find("div").each(function(idx,obj){
			if($(obj).attr("value")==model) modelClick(obj);
		});
		//显示窗口
		$("#updateUser").css("display","block");
		
	}
	function closeWindow(){
		$("#updateUser").css("display","none");
	}
	function modelClick(obj){
		$(obj).next().css("box-shadow", "");
		$(obj).prev().css("box-shadow", "");
		$(obj).css("box-shadow", " 5px 5px 5px #666");
		model = $(obj).attr("value");
	}
	function manClick(){
		$("#man_model3").remove();
		$("#man_model4").remove();
		$("#woman_model3").remove();
		$("#woman_model4").remove();
		$("#updateUser").css("height","570px");
		$("#model_img1").append('<div id="man_model3" value="mheadA" onclick="modelClick(this)"></div>')
			.append('<div id="man_model4" value="mheadB" onclick="modelClick(this)"></div>');
	}
	function womanClick(){
		$("#man_model3").remove();
		$("#man_model4").remove();
		$("#woman_model3").remove();
		$("#woman_model4").remove();
		$("#updateUser").css("height","570px");
		$("#model_img1").append('<div id="woman_model3" value="wheadA" onclick="modelClick(this)"></div>')
			.append('<div id="woman_model4" value="wheadB" onclick="modelClick(this)"></div>');
	}
	
	function showaddUser(){
		reLoad();
		$("#updateUser").attr("value","0").css("height","460px");
		$("#updateUser").css("display","block");
	}
	
	function reLoad(){
		$("#man_model3").remove();
		$("#man_model4").remove();
		$("#woman_model3").remove();
		$("#woman_model4").remove();
		$("#updateUserName").val("");
		$("#updateRealName").val("");
		$("#updatePassword").val("");
		$("#updatePassword1").val("");
	}
	
	function addUser() {
		var id = $("#updateUser").attr("value");
		if(username==""){
			var userName=$("#updateUserName").val();
		}
		else{
			var userName=username;
		}
		
		var realName = $("#updateRealName").val();
		var password = $("#updatePassword").val();
		var password1 = $("#updatePassword1").val();
		var sex = $("#m_or_wm1 input:checked").val();
		var isAdm = $("#isAdm input:checked").val();
		var user={
				"id":id,
				"username":userName,
				"realname":realName,
				"password":password,
				"sex":sex,
				"model":model,
				"isAdmin":isAdm
		}
		if(yanzhen(user,password1)){
			console.log(user);
			request("POST","<%=basePath%>/manager/updateUser",user,successchange,serverError,true);
			}
	}

	function deleteUser(Obj) {
		
		var user = {
				username:$(Obj).parent().parent().find("td").eq(1).text()
		}
		var conf1=confirm("确定要删除"+user.username+"吗？");
		if(conf1==true){
			request("POST","<%=basePath%>/manager/deleteUser",user,successchange,serverError,true);
			
		}
	}
	
	function successchange(responseData) {
		
		var page={
				pageNow:$("#pageNum").text()
			};
		
		if(responseData.code == 0){
			alert(responseData.description);
		}else{
	        alert(responseData.description);
		}
		
	}

	function successUpdate() {
		$("#update_hidden").css("display","block");
	}
	function successAdd() {
		$("#add_hidden").css("display","block");
	}
	
	function prePage() {
		
		var pageNum = parseInt($("#pageNum").text(),10);
		var currentPageNum;
		
		if(pageNum <= 1){
			currentPageNum = 1;
		}else{
			currentPageNum = pageNum - 1;
		}
		
		var page={
			pageNow:currentPageNum
		};
		
		$("#pageNum").text(currentPageNum);
		
		request("POST","<%=basePath%>/manager/findByPage",page,successLogo,serverError,true);
	}

	function nextPage() {
		
		var pageNum = parseInt($("#pageNum").text(),10);
		var pageMax = parseInt($("#pageMax").text(),10);
		var currentPageNum;
		
		if(pageNum == pageMax){
			currentPageNum = pageMax;
		}else{
			currentPageNum = pageNum + 1;
			console.log(currentPageNum);
		}
		
		var page={
			pageNow:currentPageNum
		};
		
		$("#pageNum").text(currentPageNum);
		
		request("POST","<%=basePath%>/manager/findByPage",page,successLogo,serverError,true);
	}
	
	function getPage() {
		
		var pageMax = parseInt($("#pageMax").text(),10);
		var currentPageNum = $("#page").val();
		
		if(currentPageNum >= pageMax){
			currentPageNum = pageMax;
		}if(currentPageNum <= 0){
			currentPageNum = 1;
		}
		
		var page={
			pageNow:currentPageNum
		};
		
		$("#pageNum").text(currentPageNum);
		
		request("POST","<%=basePath%>/manager/findByPage",page,successLogo,serverError,true);
	}
	
	<!--第三部分的操作函数-->
	//=======================================================
	//=======================================================
	//=======================================================
	
	var ye = 0 ;
	var lastye;
		
	//服饰类别查找函数
	function successTypeFind(responseData){
		
		if(responseData.code == 99){
			alert("权限不足");
		}
		
		$("#cloth p").children().remove()
		$("#cloth p").not(":first").remove();
		var typelist=responseData.data;
		showMessage(responseData);
		var cloth = $("#clothMod").clone().css("display","block");
		cloth.find("#saveType").css("display","none");
		cloth.find("#deleteType").css("display","none");
		$("#cloth ul p").append(cloth);
		var x=0;
		$(typelist).each(function(idx, obj) {
			var cloth = $("#clothMod").clone().css("display","block");
			cloth.find("#typenum").val(obj.typeNum);
			cloth.find("#name").val(obj.name);
			cloth.attr("name",obj.id);
			cloth.find("#addType").css("display","none");
			cloth.find("#saveType").css("display","block");
			cloth.find("#deleteType").css("display","block");
			var j=$("#cloth p").eq(x).find("div:last").index();
		    if(j<8){
		    $("#cloth p").eq(x).append(cloth);
		    }
		    else{
		    	x=x+1;
		    	var np=$("<p>").css("display","none");
		    	np.append(cloth);
		    	$("#cloth ul").append(np);
		    	
		    }
		});
		jiazai();
	}
	
	
	function jiazai(){
		lastye = parseInt($("#cloth ul p:last").index(),10);
		$("#cloth ul p").eq(ye).css("display","block");
		$("#twoButtom").find("p").html("当前是第"+parseInt(ye+1,10)+"/"+parseInt(lastye+1,10)+"页");
	}
	
	function typeDelete(obj){
		var name=$(obj).parent().parent().find("input").eq(1);
		var typenum=$(obj).parent().parent().find("input").eq(0);
		var id=$(obj).parent().parent().attr("name");
		var type = {
				"id":id,
				"name":name.val(),
				"typeNum":typenum.val()
		}
		var conf2=confirm("确定要删除"+type.name+"吗？")
		if(conf2==true)
		request("POST","<%=basePath%>/type/deleteType",type,successType,serverError,true);
	}
	
	function typeAdd(obj){
		var name=$(obj).parent().parent().find("input").eq(1);
		var typenum=$(obj).parent().parent().find("input").eq(0);
		var id=$(obj).parent().parent().attr("name");
		var type = {
				"id":id,
				"name":name.val(),
				"typeNum":typenum.val()
		}
		request("POST","<%=basePath%>/type/addType",type,successType,serverError,true);
	}
	
	function typeSave(obj){
		var name=$(obj).parent().parent().find("input").eq(1);
		var typenum=$(obj).parent().parent().find("input").eq(0);
		var id=$(obj).parent().parent().attr("name");
		var type = {
				"id":id,
				"name":name.val(),
				"typeNum":typenum.val()
		}
		request("POST","<%=basePath%>/type/updateType",type,successType,serverError,true);
	}
	
	function prev(){
		if (ye<lastye){
			ye++;
			$("#cloth ul p").eq(ye).css("display","block").siblings().css("display","none");
			$("#twoButtom").find("p").html("当前是第"+parseInt(ye+1,10)+"/"+parseInt(lastye+1,10)+"页");
		}
		else{
			ye=0;
			$("#cloth ul p").eq(ye).css("display","block").siblings().css("display","none");
			$("#twoButtom").find("p").html("当前是第"+parseInt(ye+1,10)+"/"+parseInt(lastye+1,10)+"页");
		}
	}
	
	function next(){
		if (ye>=1){
			ye--;
			$("#cloth ul p").eq(ye).css("display","block").siblings().css("display","none");
			$("#twoButtom").find("p").html("当前是第"+parseInt(ye+1,10)+"/"+parseInt(lastye+1,10)+"页");
		}
		else{
			ye=lastye;
			$("#cloth ul p").eq(ye).css("display","block").siblings().css("display","none");
			$("#twoButtom").find("p").html("当前是第"+parseInt(ye+1,10)+"/"+parseInt(lastye+1,10)+"页");
		}
	}
	
	function successType(responseData){
		showMessage(responseData);
		$("#cloth ul p").not(":first").remove();
		$("#cloth ul p div").remove();
		request("POST","<%=basePath%>/type/typeFindAll",{},successTypeFind,serverError,true);
		alert(responseData.description);
		
	}
	//======================================================
	//======================================================
	//======================================================
		
	//======================================================
	//=======================第四部分==========================
	//======================================================
	function uploadFileRequest(suit){
		$(suit).fileupload({
	        dataType: 'json',
	        done: function (suit, data) {
	        	
	        	$(this).parent().parent().find('.imgStyle1').eq(0).css("background-image","url(../images/data/suits/"+data.result.description+")").attr("value",data.result.description);
	        	showMessage({"code":0,"description":data.result.description+"上传成功！"}); 
	        }
	    });
	}
	function successTypeFindIn(responseData){
		
		if(responseData.code == 99){
			alert("权限不足");
		}
		
		var data=responseData.data;
		$("select[name='allType']").children().remove();
		$(data).each(function(inx,obj){
			var option=$("<option>");
			option.text(obj.name).attr("value",obj.typeNum);
			$("select[name='allType']").append(option);
		});
	}
	function successclothesFind(responseData){
		//初始化界面
		$(".clothesMod:not(:first)").remove();
		$("#addClothNumber").val("");
		$("#addClothName").val("");
		$("#addClothPrice").val("");
		var newSex = $("#searchBar select:eq(0) option:selected").val();
		var newType = $("#searchBar select:eq(1) option:selected").val();
		$("#clothes select:eq(0) option").each(function(idx,obj){
			if($(obj).attr("value")==newSex){
				$(obj).prop("selected","selected").siblings().removeAttr("selected");
			}
		});
		$("#clothes select:eq(1) option").each(function(idx,obj){
			if($(obj).attr("value")==newType){
				$(obj).prop("selected","selected").siblings().removeAttr("selected");
			}
		});
		//加载数据
		var clothes=responseData.data;
		
		$(clothes).each(function(idx,obj){
			
			var clothdiv = $(".clothesMod[value='0']").clone(true);
			
			clothdiv.find(".clothNumber").attr("value",obj.clothesNum);
			clothdiv.find(".clothName").attr("value",obj.name);
			clothdiv.find(".clothPrice").attr("value",obj.price);
			clothdiv.attr("value",obj.id);
			clothdiv.find(".imgStyle1").css("background-image","url('../images/data/suits/"+obj.imgSrc+"')").attr("value",obj.imgSrc);
			clothdiv.find("select").first().find("option").each(function(index,objs){
				if ($(objs).attr("value")==obj.sex){
					$(objs).attr("selected","selected");
				}
			});
			
			clothdiv.find("select").last().find("option").each(function(index,objes){
				if ($(objes).attr("value")==obj.typeNum){
					$(objes).attr("selected","selected");
				}
			});
			
			clothdiv.css("display","block");
			$("#suit").append(clothdiv);
		});
	}
	
	function successclothesUpdate(responseData){
		$("#findClothes").click();
		alert(responseData.description);
	}
	
	function successclothesAdd(responseData){
		$("#findClothes").click();
		alert(responseData.description);
	}
	
	function successclothesDelete(responseData){
		$("#findClothes").click();
		alert(responseData.description);
	}
	
	function findClothes(){
		//获取用户查询的数据
		var clothSex;
		var clothType;
		$("#searchBar").find("select").eq(0).find("option").each(function(idx,obj){
			if(obj.selected){
				clothSex=$(obj).attr("value");
			}
		});
		$("#searchBar").find("select").eq(1).find("option").each(function(idx,obj){
			if(obj.selected){
				clothType=$(obj).attr("value");
			}
			//加载数据
		});
		
		var clothesData={
				"sex":clothSex,
				"typeNum":clothType
				
			}
		request("POST","<%=basePath%>/clothes/findClothes",clothesData,successclothesFind,serverError,true);
		
	}
	function addClothes(){
		var clothNumber = $("#addClothNumber").val();
		var clothName = $("#addClothName").val();
		var clothPrice = $("#addClothPrice").val();
		var clothSex=$("#clothes select:eq(0) option:selected").val();
		var clothType=$("#clothes select:eq(1) option:selected").val();
		var clothData={
				"clothesNum":clothNumber,
				"name":clothName,
				"price":clothPrice,
				"sex":clothSex,
				"typeNum":clothType,
				"imgSrc":0
		}
		request("POST","<%=basePath%>/clothes/addClothes",clothData,successclothesAdd,serverError,true);
	}
	function deleteClothes(obj){
		var id=$(obj).parent().attr("value");
		var clothNumber = $(obj).parent().find(".clothNumber").val();
		var clothName = $(obj).parent().find(".clothName").val();
		var clothPrice = $(obj).parent().find(".clothPrice").val();
		var clothSex=$(obj).parent().find("select:eq(0) option:selected").val();
		var clothType=$(obj).parent().find("select:eq(1) option:selected").val();
		var imgSrc=$(obj).parent().find(".imgStyle1").attr("value");
		var clothData={
				"id":id,
				"clothesNum":clothNumber,
				"name":clothName,
				"price":clothPrice,
				"sex":clothSex,
				"typeNum":clothType,
				"imgSrc":imgSrc
		}
		console.log(clothData);
		request("POST","<%=basePath%>/clothes/deleteClothes",clothData,successclothesDelete,serverError,true);
	}
	function saveClothes(obj){
		var id=$(obj).parent().attr("value");
		var clothNumber = $(obj).parent().find(".clothNumber").val();
		var clothName = $(obj).parent().find(".clothName").val();
		var clothPrice = $(obj).parent().find(".clothPrice").val();
		var clothSex=$(obj).parent().find("select:eq(0) option:selected").val();
		var clothType=$(obj).parent().find("select:eq(1) option:selected").val();
		var imgSrc=$(obj).parent().find(".imgStyle1").attr("value");
		var clothData={
				"id":id,
				"clothesNum":clothNumber,
				"name":clothName,
				"price":clothPrice,
				"sex":clothSex,
				"typeNum":clothType,
				"imgSrc":imgSrc
		}
		request("POST","<%=basePath%>/clothes/updateClothes",clothData,successclothesUpdate,serverError,true);
	}
	//======================================================
	//======================================================
	//======================================================
	
		
	//======================================================
	//=======================第五部分==========================
	//======================================================
	
		
	function UserClothesLoad(){
		
		//加载基础人物模型
		$("#model_imgs")
		.css({
			"background":"url(../images/data/model/"+$("#model_hidden").text()+"Model.png) center center no-repeat",
			"background-size":"100% 100%"
		})
		var name = {
			username:$("#username_hidden").text()
		}
		
		//获取人物全部衣物数据
		request("POST","<%=basePath%>/suitRoom/ListAllsuit",name,successUserClothesTypeLoad,serverError,true);
	}
	
	function successUserClothesTypeLoad(responseData){
		showMessage(responseData);
		
		var priceNum = 0;
		
		$("#closethDressed").children().remove();
		
		$(responseData.data).each(function(idx,obj){
			var closethDressedModle = $("#closethDressedModle").clone().css("display","block").attr("value",obj.id);
			var describe_word = closethDressedModle.find("#describeWord");
			
			describe_word.find("#word_1 input").val(obj.clothesNum);
			describe_word.find("#word_2 input").val(obj.name);
			describe_word.find("#word_3 input").val(obj.price);
			
			//衣物显示
			var div = $("#model_imgs_model").clone().css({
				"display":"block",
				"background":"url(../images/data/suits/"+obj.imgSrc+") center center no-repeat",
				"background-size":"100% 100%",
				"z-index":obj.zindex
			});
			
			div.attr("value",obj.clothesNum);
			
			$("#show").append(div);
			
			priceNum = priceNum + obj.price;
			
			closethDressedModle.find("#zIndex").text(obj.zindex);
			
			$("#closethDressed").append(closethDressedModle);
			
		});
		
		$("#totalPrice span").text(priceNum);
	}
	
	//======
	
	function successAllClothesTypeLoad(responseData){
		
		$(responseData.data).each(function(idx,obj){
			//加载下拉选择框
			var option = $("<option>");
			option.text(obj.name);
			 option.attr("value",obj.typeNum);
			 if(idx==0){
				 option.attr("selected","true");
				}
			$("#closethSelect").append(option);
			$("#closethSelect option").attr("onclick","keepClothesTypeLoad(this)");
		});
		
		clothesTypeLoad();
	}
	
	//=====
	
	function clothesTypeLoad(){
		//根据type和sex加载全部衣物数据
		var data5 = {
				sex:parseInt($("#sex_hidden").text(),10),
				typeNum:$("#closethSelect option:selected").val()
		}
		request("POST","<%=basePath%>/clothes/findClothes",data5,successClothesTypeLoad,serverError,true);
	}
	
	function successClothesTypeLoad(responseData){
		showMessage(responseData);
		
		$("#selectCloseth").children().remove();
		$(responseData.data).each(function(idx,obj){
			var selectClothesModle = $("#selectClosethModle").clone().css("display","block");
			var describe_word = $("#describeWord").clone().css("display","block");
			
			describe_word.find("#word_1 input").val(obj.clothesNum);
			describe_word.find("#word_2 input").val(obj.name);
			describe_word.find("#word_3 input").val(obj.price);
			
			selectClothesModle.find("#selectClosethModle_img").attr("src","../images/data/suits/"+obj.imgSrc);
			
			selectClothesModle.append(describe_word);
			$("#selectCloseth").append(selectClothesModle);
		});
	}
	
	function keepClothesTypeLoad(obj){
		var data5 = {
				sex:parseInt($("#sex_hidden").text(),10),
				typeNum:$(obj).val()
		}
		console.log($("#sex_hidden").text());
		console.log($(obj).val())
		request("POST","<%=basePath%>/clothes/findClothes",data5,successClothesTypeLoad,serverError,true);
	}
	
	function addUserClothes(obj){
		var data5 = {
				username:$("#username_hidden").text(),
				clothesNum:$(obj).parent().siblings().eq(0).find("#word_1 input").val()
		}
		request("POST","<%=basePath%>/suitRoom/addsuit",data5,UserClothesLoad,serverError,true);
	}
	
	function deleteUserClothes(obj){
		var data5 = {
				username:$("#username_hidden").text(),
				clothesNum:$(obj).parent().siblings().eq(0).find("#word_1 input").val()
		}
		request("POST","<%=basePath%>/suitRoom/deleteMysuit",data5,successDeleteUserClothes(obj),serverError,true);
	}
	
	function downzIndex(obj){
		var data5 = {
				username:$("#username_hidden").text(),
				clothesNum:$(obj).parent().siblings().eq(0).find("#word_1 input").val(),
				zindex:parseInt($(obj).siblings().eq(2).text(),10)-1
		}
		request("POST","<%=basePath%>/suitRoom/updatesuit",data5,successDownzIndex(obj),serverError,true);
	}
	
	function upzIndex(obj){
		var data5 = {
				username:$("#username_hidden").text(),
				clothesNum:$(obj).parent().siblings().eq(0).find("#word_1 input").val(),
				zindex:parseInt($(obj).siblings().eq(2).text(),10)+1
		}
		request("POST","<%=basePath%>/suitRoom/updatesuit",data5,successUpzIndex(obj),serverError,true);
	}
	
	function successUpzIndex(obj){
		$(obj).siblings().eq(2).text(parseInt($(obj).siblings().eq(2).text(),10)+1);
		$("#show").find("[value="+$(obj).parent().siblings().eq(0).find("#word_1 input").val()+"]")
			.css("z-index",parseInt($(obj).siblings().eq(2).text(),10)+1);
	}
	
	function successDownzIndex(obj){
		$(obj).siblings().eq(2).text(parseInt($(obj).siblings().eq(2).text(),10)-1);
		$("#show").find("[value="+$(obj).parent().siblings().eq(0).find("#word_1 input").val()+"]")
			.css("z-index",parseInt($(obj).siblings().eq(2).text(),10)-1);
	}
	
	function successDeleteUserClothes(obj){
		$(obj).parent().parent().remove();
		var now = parseInt($("#totalPrice span").text(),10);
		var temp = parseInt($(obj).parent().siblings().eq(0).find("#word_3 input").val(),10);
		$("#totalPrice span").text(now-temp);
		$("#show").find("[value="+$(obj).parent().siblings().eq(0).find("#word_1 input").val()+"]").remove();
	}

	
	//======================================================
	//======================================================
	//======================================================
		
	function successLogo(responseData){
		
		showMessage(responseData);
		
		if(responseData.code==99){
			alert("权限不足");
		}
		
		var pageNum = parseInt($("#pageNum").text(),10);
		
		//给当前pageMax赋值
		var pageMax = responseData.code;
		$("#pageMax").text(pageMax);
		
		if(pageNum == 1){
			$("#prePage").css("display","none");
		}else{
			$("#prePage").css("display","block");
		}
		
		if(pageMax == pageNum){
			$("#nextPage").css("display","none");
		}else{
			$("#nextPage").css("display","block");
		}
		
		//清空table
		$("#personInfo").find("tr").eq(0).siblings().remove();				
		
		var userList = responseData.data;
		
		$(userList).each(function(idx,obj){
			var tr = $("<tr>");
			var td = $("<td>");
			var sex,isAdmin;
			if (obj.sex==1) sex = '男';
			else sex='女';
			if (obj.isAdmin == '1') isAdmin='是';
			else isAdmin = '否';
			tr.html("<td>"+obj.id+"</td>"+"<td>"+obj.username+"</td>"+"<td>"+obj.realname+"</td>"+"<td>"+sex+"</td>"+"<td></td>"+"<td>"+isAdmin+"</td>");
			var model = $("<img>");
			model.attr("src","../images/data/model/"+obj.model+".png").css({"width":"50px","height":"75px"}).attr("name",obj.model);
			tr.find("td").eq(4).append(model);
			var btDelete = $("<button>");
			
			btDelete.text("删除").attr({
				"id":"button",
				"class":"delete",
				"onclick":"deleteUser(this)"
			}).css("background-color","#E85761");
			btDelete.hover(function(){
				btDelete.css("background-color","red");
			},function(){
				btDelete.css("background-color","#E85761");
			});
			var btEdit = $("<button>");
			
			btEdit.text("修改").attr({
				"id":"button",
				"onclick":"updateUser(this)"
			}).css("margin-left","35px");
			
			td.append(btEdit);
			td.append(btDelete);
			tr.append(td).css({"height":"50px","background-color":"#EEEEEE"});
			
			$("#personInfo").append(tr);
		});  
	}
	
	function logoOut(){
		location.href="<%=basePath%>/jsp/logoOut.jsp";
	}
	
</script>
</html>