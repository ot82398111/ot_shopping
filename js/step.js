//header
(()=>{
$.get("data/nav-top.php")
	.then(data=>{
		$("#top-nav").html(data);
	})
	.then(()=>{
		var mingzi = sessionStorage.getItem("uname");
				if(mingzi){
						console.log($("#welcome"));
					  $("#welcome").html(`${mingzi} <a href="javascript:;" class="tuichu">退出登录</a>`);
						$(".tuichu").click(function(e){
							e.preventDefault();
							sessionStorage.removeItem("uname");
							alert("退出成功！");
							history.go(0);
						});
				}
	})
})();

//加载页面footer
$("#footer").load("data/footer.php");


(()=>{
	//加载页面详情的title 手机类型 和颜色
	var num=location.search.slice(1).split("&");
	var m=num[0]; m=m.split("=")[1];
	var	t=num[1]; 
	var tid=t.split("=")[1];
	console.log(tid);
	$.ajax({
		type:"GET",
		url:"data/step.php",
		data:{mid:m,tid:tid},
		success:function(phone){
			var p=phone.data;
			var t=phone.phonetype;
			console.log(p,t);
			$("#addImg").html(`<img src="${p[0].img}" alt="故障图"/>`);
			$("#Title").html(p[0].title);
			var html="",price=[],all=[];
			for(var o of t){
				html+=
					`<div class="item">
							${o.type}
							<em class="checked" style="display:none;"><i class="iconok"></i></em>
						</div>`;
				price.push(o.price);
				all[o.type]=o.price;
			}
			$("#showType").html(html);
			$("#showColor").html(`<div class="item">
							<span>${p[0].color}</span>
							<em class="checked" style="display:none;"><i class="iconok"></i></em>
						</div>`);
			price.sort(function(a,b){return a-b});
			$("#showPrice>strong").html(`￥${parseFloat(price[0]).toFixed(2)}-￥${parseFloat(price[price.length-1]).toFixed(2)}`);
			
			//设备类型绑定事件
			$(".choose_mptype").on('click','.item',function(){
				var that=$(this);
				that.children("em").css("display","block");
				that.siblings().children("em").css("display","none");
				$("#addmp").val(that.text().trim());
			})

			
			//设备型号绑定事件
			$("#showType").on("click",".item",function(){
				var that=$(this);
				if($(".choose_mptype .checked").css('display')=='none'){
					alert ("请先选择手机类型！");
					return;
				}
				that.children("em").css("display","block");
				that.siblings().children("em").css("display","none");
				$("#showPrice>strong").html(`￥${parseFloat(all[that.text().trim()]).toFixed(2)}`);
				$("#addmpType").val(that.text().trim());
				if($("#testPhone").val()!=''){
					$(".order_price b").html($("#showPrice>strong").html());
				}
			})

			
			//设备颜色绑定事件
			$("#showColor").on('click','.item',function(){
				if($(".choose_mptype .checked").css('display')=='none'){
					alert ("请先选择手机类型！");
					return;
				}
				if($("#addmpType").val()==''){
					alert ('请先选择手机型号！');
					return;
				}else{
						$("#testPhone").val("text");
				
				var that=$(this);
				that.children("em").css("display","block");
				that.siblings().children("em").css("display","none");
				var p=$("#addmpType").val();
				console.log(all);
				$(".order_price b").html(`￥${parseFloat(all[p]).toFixed(2)}`);
				
				$(".down_order .next").css("backgroundColor","#FF5000")
				.children().css("color","#fff");
				
				$.get("data/test.php",{price:$("#showPrice strong").html().slice(1),mpType:$("#addmp").val(),type:$("#addmpType").val(),color:$("#showColor").text().trim()})
						.then(data=>{
							console.log(data);
							var orderUrl="order_list.html?mid="+m+"&tid="+tid+"&id="+data;
							$(".down_order .next").children().attr({"href":orderUrl,"target":"_blank"});
						})
									 
				
				console.log($("#addmp").val(),$("#showPrice strong").html().slice(1),$("#addmpType").val(),$("#showColor").text().trim());
				$(".down_order .next").click(function(){
					if(sessionStorage.getItem("uid")==null){
						alert("请先登陆！");
						$(".down_order .next").children().attr({"href":"login.html","target":"_blank"});
					}
				})
			}
			})
			
		},
		error:function(){
			console.log("请检查PHP语句或者PHP文件名！");
		}
	})
})();
//用户评论模块
(()=>{
	var num=location.search.slice(1).split("&");
	var	t=num[1]; t=t.split("=")[1];
	function loadProductsByPage(pno,tid){
			$.ajax({
					type:"GET",
					url:"data/step_user_comment.php",
					data:{pno:pno,tid:t},
					success:function(pager){
							var html="";
							for(var p of pager.data){
									html+=
									`<div class="user_msg">
											<div class="date">${p.time}</div>
											<div class="msg"><p>${p.comment}</p></div>
											<div class="reply"><span>手机维修回复：</span>${p.reply}</div>
										</div>	`;
						  }
						$("#showComment").html(html);
						var html="";
						if(pno==1){
								html+=`<li><a href="${1}">上一页</a></li>`;
						}else{
								html+=`<li><a href="${pno-1}">上一页</a></li>`;
						}
						for(var i=1;i<=pager.pageCount;i++){
								html+=`<li><a href="${i}">${i}</a></li>`;
						}
						if(pno==pager.pageCount){
								html+=`<li><a href="${pager.pageCount}">下一页</a></li>`;
						}else{
								html+=`<li><a href="${pno+1}">下一页</a></li>`;
						}
						$("#pagination").html(html);
						$("#pagination").children(":eq("+pno+")").addClass("active");
					},
					error:function(){
							console.log("网络出现故障！");
					}
			});
	}
	loadProductsByPage(1);
	$("#pagination").on("click","li a",function(e){
			e.preventDefault();
			var pno=parseInt($(this).attr("href"));
			console.log(pno);
			loadProductsByPage(pno,t);
	})

})();