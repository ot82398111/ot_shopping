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
	}).then(()=>{
		$(`<div class="modal">
			<div class="modal-bg"></div>
			<div id="modal-overlay"> 
				<div class="modal-data">		
						<div class="diandian clear"><i></i><p class="h2Icon">意见反馈</p></div>
						<p class="lingting">我们用心聆听每一位用户的声音，真诚希望能够用我们的进步，为您提供给服务。</p>
						<div class="shurukuang">
							<textarea id="feedback"></textarea>
							<p>还可以输入<span>500</span>字</p>
						</div>
						<a class="fabuBtn">发布</a>
						<a class="close">&times;</a>
				</div>
			</div>
			</div>
			`).appendTo($("body"));
	}).then(()=>{
		function overlay(){			
			if($('#modal-overlay').css('display')=="none"){
				console.log($('#modal-overlay').prev());
				$('#modal-overlay').css("display","block").prev().css("display","block");
			}else if($('#modal-overlay').css('display')=="block"){
				$('#modal-overlay').css("display","none").prev().css("display","none");
			}
		}
		$(".fankui").click(function(e){
			console.log($(e.target));
			e.preventDefault();
			overlay();
		})
		$(".close").click(function(e){
			e.preventDefault();
			overlay();
		})
	})
})();

//加载页面footer
$("#footer").load("data/footer.php");