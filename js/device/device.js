(()=>{
	//中部左侧滚动固定定位
	var scrolls=$(".middle-order-left").offset().top+75;
	var left=$(".middle-order").offset().left;
	$(window).scroll(()=>{
		if($(document).scrollTop()>=scrolls)
			$(".middle-order-left").addClass("fixed_nav").css("left",left);
		else
			$(".middle-order-left").removeClass("fixed_nav");
	});
	//中部左侧数据加载
	var pId=location.search;
	$.get("data/device/device.php"+pId)
		.then(data=>{
		console.log(data);
		$(".middle-order-left h2").html(data[0].phoneType);
		$(".middle-order-left img").attr("src",data[0].img);
		$(".middle-order-left h3").html(data[0].avgPrice);
		$(".middle-order-left .se-allow").click(function(){
			location.href="recove-index.html";
		})
	})
})();