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
<script src="http://libs.baidu.com/jquery/1.9.1/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/jquery.main.js"></script>
<title></title>
</head>
<style>
		* {
			padding: 0;
			margin: 0;
		}
		
		.menu {
			background-color: #a3aab2;
			width: 140px;
			height: 100%;
		}
		
		.menu ul {
			width: 100%;
			height: 100%;
		}
		
		.menu ul li {
			list-style: none;
			height: 14%;
			width: 80%;
			padding-right:10%;
			padding-left:10%;
			padding-top:10%;
		}
		
		.img {
			width: 100%;
			height: auto;
		}
	</style>

	<body class="menu">
		<ul>
			<li>
				<a href="<%=basePath%>/jsp/user.jsp" target="right"><img class="img" src="<%=basePath%>/images/ui/self.png"></a>
			</li>
			<li>
				<a href="<%=basePath%>/jsp/userlist.jsp" target="right"><img class="img" src="<%=basePath%>/images/ui/userList.png"></a>
			</li>
			<li>
				<a href="<%=basePath%>/jsp/suittype.jsp" target="right"><img class="img" src="<%=basePath%>/images/ui/catalog.png"></a>
			</li>
			<li>
				<a href="<%=basePath%>/jsp/suits.jsp" target="right"><img class="img" src="<%=basePath%>/images/ui/suits.png"></a>
			</li>
			<li>
				<a href="<%=basePath%>/jsp/room.jsp" target="right"><img class="img" src="<%=basePath%>/images/ui/mySuits.png"></a>
			</li>
			<li>
				<a href=""><img id="img" class="img" src="<%=basePath%>/images/ui/exit.png"></a>
			</li>
		</ul>
	</body>
	<script type="text/javascript">
	$("#img").click(function(){
		sessionStorage.clear();
		window.parent.location.assign('<%=basePath%>/jsp/login.jsp');
		});
	</script>
</html>
