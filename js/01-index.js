
//banner轮播广告原生版
(()=>{
  var bannerImgs=$("[data-load=bannerImgs]")[0],
      bannerInds=$("[data-load=bannerInds]")[0],
      n=0,LIWIDTH=1024,TRANS=300,INTERVAL=2000,
      timer=null;
  $.get("data/01-index/banners.php")
    .then(data=>{
      var banners=[...data];
      banners.push(banners[0]);
      var strImgs="";
      for(var img of banners){
        strImgs+=
          `<li>
            <a href="${img.href}">
              <img src="${img.img}">
            </a>
          </li>`
      }
      var strInds="<li></li>".repeat(banners.length-1);
      bannerImgs.innerHTML=strImgs;
      bannerImgs.style.width=1024*banners.length+"px";
      bannerInds.innerHTML=strInds;
      bannerInds.children[0].className="hover";
      return new Promise(resolve=>resolve());
    })
    .then(()=>{
      function moveOnce(){
        n++;
        var left=LIWIDTH*n;
        bannerImgs.style.left=-left+"px";
        bannerInds.children[n-1].className="";
        if(n==bannerImgs.children.length-1){
          bannerInds.children[0].className="hover";
          setTimeout(()=>{  
            bannerImgs.style.transition="";
            bannerImgs.style.left=0;
            n=0;
            setTimeout(()=>{
              bannerImgs.style.transition=
                "all ."+TRANS/100+"s linear";
            },100);
          },TRANS);
        }else
          bannerInds.children[n].className="hover";
      }
      timer=setInterval(moveOnce,INTERVAL+TRANS);
      return new Promise(resolve=>resolve(moveOnce));
    })
    .then((moveOnce)=>{
      bannerImgs.parentNode.onmouseover=function(){
        clearInterval(timer);
        timer=null;
      }
      bannerImgs.parentNode.onmouseout=function(){
        timer=setInterval(moveOnce,INTERVAL+TRANS);
      }
      for(let i=0;i<bannerInds.children.length;i++){
        bannerInds.children[i].onclick=function(){
          n=i;
          bannerImgs.style.left=-n*LIWIDTH+"px";
          bannerInds.find(".hover")[0].className="";
          bannerInds.children[i].className="hover";
        }
      }
      $("[data-move=left]")[0].onclick=function(e){
        e.preventDefault();
        if(n>0){
          n--;
          bannerImgs.style.left=-n*LIWIDTH+"px";
          bannerInds.children[n+1].className="";
          bannerInds.children[n].className="hover";
        }else{
          bannerImgs.style.transition="";
          n=bannerImgs.children.length-1;
          bannerImgs.style.left=-n*LIWIDTH+"px";
          setTimeout(()=>{
            bannerImgs.style.transition=
              "all ."+TRANS/100+"s linear";
            n--;
            bannerImgs.style.left=-n*LIWIDTH+"px";
            bannerInds.children[0].className="";
            bannerInds.children[n].className="hover";
          },100)
        }
      }
      $("[data-move=right]")[0].onclick=function(e){
        e.preventDefault();
        if(n<bannerInds.children.length-1){
          n++;
          bannerImgs.style.left=-n*LIWIDTH+"px";
          bannerInds.children[n-1].className="";
          bannerInds.children[n].className="hover";
        }else{
          n++;
          bannerImgs.style.left=-n*LIWIDTH+"px";
          bannerInds.lastElementChild.className="";
          bannerInds.firstElementChild.className="hover";
          setTimeout(()=>{
            bannerImgs.style.transition="";
            bannerImgs.style.left=0;
            n=0;
            setTimeout(()=>{
              bannerImgs.style.transition=
                "all ."+TRANS/100+"s linear";
            },100)
          },TRANS)
        }
      }
    })
    .catch(err=>console.log(err))
})();
//首页guzhangtype
(()=>{
	$.ajax({
		type:"GET",
		url:"data/01-index/floors.php",
		success:function(data){
			console.log(data);
			console.log(data.iphone.faultTypeImgs);
			var html="";
			var step="step.html?mid=";
			html+=
				`<div class="f2-left" id="${data.iphone[0].mid}">
					<img src="${data.iphone[0].img}">
				</div>`;
			html+=`<div class="f2-right">`;
			for(var i of data.iphone.faultTypeImgs){
				html+=
					`<a href="${step+data.iphone[0].mid}&tid=${i.tid}">
						<img src="${i.img}">
						<p>${i.descript}</p>
					</a>`;
			}
			html+=`</div>`;
			html+=
				`<div class="f2-left" id="${data.huawei[0].mid}">
					<img src="${data.huawei[0].img}">
				</div>`;
			html+=`<div class="f2-right">`;
			for(var h of data.huawei.faultTypeImgs){
				html+=
					`<a href="${step+data.huawei[0].mid}&tid=${h.tid}">
						<img src="${h.img}">
						<p>${h.descript}</p>
					</a>`;
			}
			html+=`</div>`;
			html+=
				`<div class="f2-left" id="${data.oppo[0].mid}">
					<img src="${data.oppo[0].img}">
				</div>`;
			html+=`<div class="f2-right">`;
			for(var o of data.oppo.faultTypeImgs){
				html+=
					`<a href="${step+data.oppo[0].mid}&tid=${o.tid}">
						<img src="${o.img}">
						<p>${o.descript}</p>
					</a>`;
			}
			html+=`</div>`;
			
			html+=
				`<div class="f2-left" id="${data.vivo[0].mid}">
					<img src="${data.vivo[0].img}">
				</div>`;
			html+=`<div class="f2-right">`;
			for(var v of data.vivo.faultTypeImgs){
				html+=
					`<a href="${step+data.vivo[0].mid}&tid=${v.tid}">
						<img src="${v.img}">
						<p>${v.descript}</p>
					</a>`;
			}
			html+=`</div>`;
			
			html+=
				`<div class="f2-left" id="${data.jinli[0].mid}">
					<img src="${data.jinli[0].img}">
				</div>`;
			html+=`<div class="f2-right">`;
			for(var j of data.jinli.faultTypeImgs){
				html+=
					`<a href="${step+data.jinli[0].mid}&tid=${j.tid}">
						<img src="${j.img}">
						<p>${j.descript}</p>
					</a>`;
			}
			html+=`</div>`;
			
			html+=
				`<div class="f2-left" id="${data.meizu[0].mid}">
					<img src="${data.meizu[0].img}">
				</div>`;
			html+=`<div class="f2-right">`;
			for(var m of data.meizu.faultTypeImgs){
				html+=
					`<a href="${step+data.meizu[0].mid}&tid=${m.tid}">
						<img src="${m.img}">
						<p>${m.descript}</p>
					</a>`;
			}
			html+=`</div>`;


			$("[data-type=faultType]").html(html);
		},
		error:function(){
			console.log("PHP有问题!检查下！");
		}
	});

	//故障类型绑定点击事件
	var moveLeft=parseFloat($("#f1>ul>img.move-icon").css("left")),
			moveIcon=$("#f1>ul>img.move-icon"),
			moveTypeH=parseFloat($("#guzhang-type").css("height")),
			moveType=$("#guzhang-type>div[data-type=faultType]"),
			liWidth=parseFloat($("#f1>ul>li").css("width"));
	console.log(moveLeft,moveIcon,moveTypeH,moveType,liWidth);
			$("#f1").on("click","ul li",function(){
				var n=$(this).index();
				$(this).children("p").css("color","red");
				$(this).siblings().children("p").css("color","#000");
				moveIcon.css("left",moveLeft+n*liWidth);
				moveType.css("top",-moveTypeH*n);
			});
})();
