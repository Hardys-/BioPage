$( document ).ready(function() {
	$("div.header li > a").hover(function(){
			$(this).stop().animate({
				opacity:"0.5"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	});


	$("a.email-link").hover(function(){
			$(this).stop().animate({
				opacity:"0.5"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	})

	$("header").css({"height":$( window ).height()-100+'px'});
});
