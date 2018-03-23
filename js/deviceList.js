//搜索
(()=>{
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
})();
(()=>{
	var slide=location.search.slice(1);
	var txt=slide.split("=")[1];
	txt=decodeURI(txt);
	var txA=$(".jixing .two a");
	for(var i=0;i<txA.length;i++){
		if(txA.eq(i).html()==txt){
			txA.eq(i).addClass("active").siblings().removeClass("active");
		}
	}
	
	$.get("data/device/deviceList.php?"+slide)
	.then(data=>{
		console.log(data);
		$(".hssp p span").html(data[0][0]['COUNT(*)']);
		var html="";
		for(var pli of data.data){
			html+=`
				<li>
					<a href="device.html?id=${pli.id}">
						<img src="${pli.img}" />
						<span>${pli.phoneType}</span>
						<p>回收均价<strong>￥${pli.avgPrice}</strong></p>
					</a>
				</li>	
			`;
		}
		$(".hssplist").html(html);
	})
})();