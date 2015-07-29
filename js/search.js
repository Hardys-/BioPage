$( document ).ready(function() {
	
	$("#submit").hover(function(){
			$(this).stop().animate({
				opacity:"0.8"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	});

	var tag = false;
	$("#submit").click(function(){
		if(tag == false){
			$("div.content").stop().animate({"position": "relative","top":"-="+($(this).position().top-80)+"px","left":"-="+($(this).position().left-440)+"px"},"swing");
			$("div.content").css({"position": "relative", "top": "100px", "left": "100px" });
			tag = true;
		};
	});
	

});
