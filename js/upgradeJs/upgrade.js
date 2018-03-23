//翻转
(()=>{
	var turn = function(target,time,opts){
			target.find('a').hover(function(){
					$(this).find('img').stop().animate(opts[0],time,function(){
						console.log($(this).next());
							$(this).hide().next().show();
							$(this).next().animate(opts[1],time);
					});
			},function(){
					$(this).find('.info').animate(opts[0],time,function(){
							console.log($(this));
							$(this).hide().prev().show();
							$(this).prev().animate(opts[1],time);
					});
			});
	}
	var verticalOpts = [{'width':0},{'width':'241px'}];
	turn($('#vertical'),150,verticalOpts);

})();