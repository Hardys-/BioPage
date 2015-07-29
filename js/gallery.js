$( document ).ready(function() {
	$("div.title").hover(function(){
			$(this).stop().animate({
				opacity:"0.8"
				}, 500);
			},function(){
				$(this).stop().animate({
				opacity:"1"
			}, 500);
	});


	$("div.title").click(function(){
		if( $("div.title").text().indexOf("Portrait") >= 0){
			$("iframe.gallery-frame").attr('src', "gallery/gallery-me.html");
			$("div.title").html("<img src=\"img/land.png\" alt=\"Landscape\"/>&nbsp;Switch to Landscape Gallery");
			$("div.title").css({"width":"260px"});
			$("div.main").css({"margin-left":"150px"});

		}
		else if( $("div.title").text().indexOf("Landscape") >= 0)
		{
			$("iframe.gallery-frame").attr('src', "gallery/gallery-landscape.html");
			$("div.title").html("<img src=\"img/people.png\" alt=\"People\"/>&nbsp;Switch to Portrait Gallery"); 
			$("div.title").css({"width":"240px"});
		}	
	});

	$("header").css({"height":"650px"});
});

