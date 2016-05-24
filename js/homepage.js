	function backGroundChange(){	
	var curImgId = 1;
	var numberOfImages = 6;
	window.setInterval(function() {
		$('header').fadeTo(700, 0.7, function() {
		$(this).css('background-image','url(../hao_hu_601termproject/img/' + curImgId + '.png)').fadeTo(300, 1);
		});
	curImgId = (curImgId + 1)% numberOfImages;
	}, 5 * 4000);}



$( document ).ready(function() {
	backGroundChange();
	
	$("#summary p:eq(0)").css({"font-weight":"bold","font-size":parseInt($("#summary p:eq(0)").css("font-size"))+2+'px'});

	if($(window).width() > 1200) {$(".skillset").css({"width":($( window ).width()*0.92-140) / 5+'px'});  };

	$(".tag").hover(function(){
        	$(this).stop().animate({
			opacity:"0.8"
        		}, 600);
		$(this).stop().animate({
			"font-size":"+=2px",
			"width":"+=5px",
			"height":"+=3px",
			},'swing');
    		},function(){
        		$(this).stop().animate({
            		opacity:"1"
        		}, 600);
		$(this).stop().animate({
			"font-size":"-=2px",
			"width":"-=5px",
			"height":"-=3px",
			},'swing');
		$(this).css({
			"width": "317px",
			"height": "31px"
			});
    	});

	
	$(".skills").hover(function() {
		$( this ).fadeOut( 500 );
  		$( this ).fadeIn( 400 );
		},$(".skills").stop());

	
	$(".skills").after("<h6></h6>");

	$(".skills > h6").css({"height":"2px"})


	$("span.profile").hover(function () {
    		$(this).append('<div class="profilePic"><img src="../hao_hu_601termproject/img/profile.jpg" alt="Profile Picture"/></div>');
		}, function () {
   			$("div.profilePic").remove();
 	 	})

	$("span.question0").hover(function () {
    		$(this).append('<div class="tooltip0"><p>IEEE is the world\'s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity.</p><p> I joined IEEE as a Graduate Student Member.</p></div>');
  		$(".skills").stop();
		$(".skills").css("opacity","1");
		}, function () {
   			$("div.tooltip0").remove();
 	 	})

	$("span.question1").hover(function () {
    		$(this).append('<div class="tooltip1"><p>IBM: The International Brotherhood of Magicians is the world\'s largest organization of magicians, with members in 88 countries. Founded in 1922 by Len Vintus and Gene Gordon.</p></div>');
  		$(".skills").stop();
		$(".skills").css("opacity","1");
		}, function () {
   			$("div.tooltip1").remove();
 	 	})

	$("span.question2").hover(function () {
    		$(this).append('<div class="tooltip2"><p>WTF: The World Taekwondo Federation is the International Federation (IF) governing the sport of Taekwondo and is a member of the Association of Summer Olympic International Federations (ASOIF).</p><p> I am currently a 2nd Dan Black Belt, Certificated by Kukkiwon.</p></div>');
		$(".skills").stop();
		$(".skills").css("opacity","1");
  		}, function () {
   			$("div.tooltip2").remove();
 	 	})
	

	$(window).scroll(function() {
    		if ($(this).scrollTop() > 100) {
			$("#summary").slideDown(500,'swing');
		};

		if ($(this).scrollTop() > 300) {
			$("#features").slideDown(500,'swing');
		};

		if ($(this).scrollTop() < 100) {
			$("#summary").slideUp(350,'swing');
		};

		if ($(this).scrollTop() < 300) {
			$("#features").slideUp(350,'swing');
		};
	})



	

});

//Author Hao Hu, Boston University
