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
	var num=location.search.slice(1).split("&");
	var m=num[2]; m=m.split("=")[1];
	console.log(m);
	$.get("data/get_order_message.php",{id:m})
		.then(function(data){
			console.log(data);
			var html="";
			for(var o of data){
				html+=`
					<li><span>产品：</span><span class="mpType">${o.mpType}</span></li>
					<li><span>型号：</span><span class="type">${o.type}</span></li>
					<li><span>故障部位：</span><span class="color">${o.color}</span></li>
					<li><span>故障报价：</span><span class="price">${o.price}</span></li>
				`;
			}
			$(".userInfo").html(html);
		})
})();

(()=>{
		var result=false;
		var orderArr=[];
		$(".weixiuleixing a").click(function(){
			var that=$(this);
					that.children("em").css("display","block");
					orderArr["type"]=that.text().trim();
					that.siblings().children("em").css("display","none"); 
		})
		$(".userName").blur(function(){
			if($(this).val()==''){
				$(this).next().css("display","block");
			}else{
				result=true;
				orderArr["username"]=$(this).val();
				$(this).next().css("display","none");
			}
		})
		$(".telphone").blur(function(){
			var val=$(this).val();
			if(val.length>0){
				var rel=/^(\+86|0086)?\s*1[34578]\d{9}$/.test(val);
				if(rel==false){
					$(this).next().css("display","block");
					result=false;
				}else{
					result=true;
					orderArr["phone"]=$(this).val();
					$(this).next().css("display","none");
				}
			}else{
				$(this).next().css("display","block");
				result=false;
				$(this).next().css("display","none");
			}
		})
		//code码
		$(".codeMa").keyup(function(){
			console.log($(this));
			if($(this).val().length==4){
				$.ajax({
					type:"get",
					url:"data/01_chk_code.php",
					data:{code:$(this).val()},
					success:function(data){
						console.log(data);
						if(data=="true"){
							result=true;
							$(this).parent().children().last().css("display","none");
						}else if(data=="false"){
							$(this).parent().children().last().css("display","block");
							result=false;
						}
					}
				})
			}
		})
		$(".codeMa").blur(function(){
			if($(this).val().length!=4){
				$(this).parent().children().last().css("display","block");
				result=false;
			}
			if(result==true){
				$(this).parent().children().last().css("display","none");
			}
		})
		$(".shuaxin").click(function(){
			$(this).attr("src","data/01_code.php");
		})
		//省市级联
		function loadNext(
			$selCurr,
			$selNext,
			url,
			data,
			valFieldName,
			txtFieldName
		){
			return new Promise(resolve=>{
				$selCurr.nextAll()
								.children(":not(:first-child)")
								.remove();
				if($selCurr.prop("selectedIndex")>0){
					$selNext.append("<option>获取中...</option>");
					$.get(url,data)
						.then(data=>{
							var html="";
							for(var obj of data){
								html+=
									`<option value="${obj[valFieldName]}">
										${obj[txtFieldName]}
									 </option>`
							}
							$selNext.children().last()
								.replaceWith(html);
							resolve($selNext);
						})
				}
			})
		}
		$.get("data/searchCity/provinces.php")
		.then(data=>{
			console.log(data);
			var $selProvince=$("#selProvince");
			var html="<option>-------省-------</option>";
			for(var c of data){
				html+=`<option value="${c.provinceid}">${c.province}</option>`
			}
			$selProvince.children().last().replaceWith(html);
			$selProvince.change(e=>{
				loadNext(
					$(e.target),
					$("#selCity"),
					"data/searchCity/cities.php",
					{provinceid:$(e.target).val()},
					"cityid",
					"city"
				).then($selCity=>{
					$selCity.change(e=>{
						loadNext(
							$(e.target),
							$("#selArea"),
							"data/searchCity/areas.php",
							{cityid:$(e.target).val()},
							"areaid",
							"area"
						)
					})
				});
				//为$selNext绑定change事件
			})
		});
	  
		
		$("#thisStep").click(function(){
			orderArr["province"]=$("#selProvince option:selected").html();
			orderArr["city"]=$("#selCity option:selected").html().trim();
			orderArr["area"]=$("#selArea option:selected").html().trim();
			orderArr["detailAddress"]=$(".jiuxiu_adrdetail").val();
			orderArr["xiuxiuCenter"]=$(".weixiuzhongxin select option:selected").val();
			orderArr["imei"]=$(".jx_imei").val();
			orderArr["remark"]=$(".jx_remark").val();
			console.log(orderArr,result,sessionStorage.getItem("uid"),$(".mpType").html());
			if(result==true){
				console.log(0);
				$.get("data/user_order.php",{
					uid:sessionStorage.getItem("uid"),
					mpType:$(".mpType").html(),
					type:$(".type").html(),
					color:$(".color").html(),
					price:$(".price").html(),
					province:orderArr["province"],
					city:orderArr["city"],
					area:orderArr["area"],
					detailAddress:orderArr["detailAddress"],
					xiuxiuCenter:orderArr["xiuxiuCenter"],
					username:orderArr["username"],
					phone:orderArr["phone"],
					imei:orderArr["imei"],
					remark:orderArr["remark"]
				})
				.then(function(data){
					console.log(data);
					if(data.code==1){
						alert("下单成功稍后会有客服联系你！可以在用户用心查看订单信息！");
						location.href="01-index.html";
					}
				})
			}
		});
})();
//用户评论
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