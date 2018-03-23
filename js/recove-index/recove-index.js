(()=>{
	$("[data-type=hssplist]").mouseover(function(){
	console.log($(".hssplist"));
		$(".hssplist").eq($(this).index()).show().siblings(".hssplist").hide();
	})
	//淡入淡出轮播
	var banner=$("[data-load=bannerImgs]");
	var inds=$("[data-load=bannerInds]");
	var curIndex=0;
	var time=setInterval(function(){
		if(curIndex<banner.find("li").length-1){
			curIndex++;
		}
		else{
			curIndex=0;
		}
		changeTo(curIndex);
	},2000)
	function changeTo(index){
		banner.find("li").removeClass("imgOn").hide().eq(index).fadeIn().addClass("imgOn");
		inds.find("li").removeClass("hover").eq(index).addClass("hover");
	}
	inds.find("li").each(function(item){
		$(this).hover(function(){
			clearInterval(time);time=null;
			changeTo(item);
			curIndex=item;
		},function(){
			time=setInterval(function(){
			if(curIndex<banner.find("li").length-1){
			curIndex++;
			}else{
				curIndex=0;
			}
			changeTo(curIndex);
			},2000)	
		});
	});
})();
//加载数据
(()=>{
	$.ajax({
		url:'data/recoveData/loadPhone.php',
		type:'get',
		success:function(data){
			console.log(data);
			var phoneDetail=data.data;
			var phoneType=data.phone;
			var html="";
			for(var d of phoneDetail){
				html+=`
					<li>
						<a href="device.html?id=${d.id}">
							<img src="${d.img}" alt="iPhone7" />
							<span>${d.phoneType}</span>
							<p>回收均价<strong>￥${d.avgPrice}</strong></p>
						</a>
					</li>	
				`;
			}
			$("#showPhoneMsg").html(html);
			var html="";
			for(var p of phoneType){
				html+=`
					<li>
						<a href="javascript:;">${p.mname}</a>
						<p class="change" >点击搜索</p>
					</li>	
				`;
			}
			$("[data-show=phone]").html(html);
		},
		error:function(){
			console.log("检查PHP语句或者链接问题");
		}
	}).then(()=>{
		$(".change").click(function(){
			var mname=$(this).prev().html();
			location.href="deviceList.html?mname="+mname;
		});
	}).then(()=>{
		//搜索内容
		$("#search_info").keyup(function(e){
			if(e.keyCode!=38&&e.keyCode!=40&&e.keyCode!=13)
			if($(this).val()!=''){
				$("#shelper").css("display","block");
				$.get("data/recoveData/search.php?kw="+$(this).val(),function(data){
					console.log(data);
					var data=data;
					if(data.length>0){
						var html="";
						for(var item of data){
							html+=`<li class="search-item">${item.phoneType}</li>
								<input type="hidden" value="${item.id}"/>	
							`;
						}
						$("#shelper").html(html);
					}else{
						$("#shelper").html("<li class='search-item'>你搜索的商品不存在</li>");
					}
					return new Promise(resolve=>resolve(data))
				}).then((data)=>{
				$("#shelper").on("click","li",function(){
						$("#search_info").val($(this).html());
						$("#search_info").next().val($(this).next().val());
						$("#shelper").css("display","none");
					});
				$("#search").on("click",function(){
					
					if($("#search_info").val()!=''){
						location.href="device.html?id="+$("#search_info").next().val();
					}
				})
				})
			}else{
				$("#shelper").css("display","none");
			}
		})
	})
})();