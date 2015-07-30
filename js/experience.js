$( document ).ready(function() {
	$( "#accordion" ).accordion();
	$( "#accordion div img.fx" ).hover(
		function(){
			var p = $(this).position();
			$( this ).css({"cursor":"pointer"});
			$( this ).stop().animate({height:"+=15px",width:"+=12px",opacity:'0.8',"margin-left":"-=6px"},'slow');
		}
		,function(){
			$( this ).stop().animate({height:"-=15px",width:"-=12px",opacity:'1',"margin-left":"+=6px"},"swing");	
	});
       
	if($(window).height() < 600){$("header").css({"height":600+'px'});};

	$("#iframediv iframe").css({"width":$(window).width()*0.76-300+'px',"height":$("header").height()-120+"px"});

	$( "#accordion div img[src*='cv']" ).click(function(){
			$("#iframediv iframe").attr('src', "doc/cv.pdf");
	});

	$( "#accordion div img[src*='project']" ).click(function(){
			$("#iframediv iframe").attr('src', "doc/project.pdf");
	});

	$( "#accordion div img[src*='honors']" ).click(function(){
			$("#iframediv iframe").attr('src', "doc/honors.pdf");
	});

});

