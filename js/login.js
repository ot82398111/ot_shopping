(()=>{
	$("#btn").click(function(e){
    e.preventDefault();
    var n = $("#uname").val();
    var p = $("#upwd").val();
    $.ajax({
        type:"GET",
        url:"data/login.php",
        data:{uname:n,upwd:p},
        success:function(data){
         console.log(data.code+":"+data.msg);
				 var code=data.code;
					if(code==1){
						alert(data.msg);
                        sessionStorage.setItem("uname",data.uname);
                        sessionStorage.setItem("uid",data.uid);
						location.href="01-index.html";
					}else{
						alert("用户名或密码错误，请重新登录！");
						location.href="login.html";
					}
        },
        error:function(data){
            console.log("您的网络出现故障，请检查");
        }
				
    });
});


})();