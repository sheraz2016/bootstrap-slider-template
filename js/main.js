/*function for shrinkable navbar*/

	$(document).ready(function(){
		$(window).scroll(function() {
		  if ($(document).scrollTop() > 50) {
			$('nav').addClass('shrink');
		  } else {
			$('nav').removeClass('shrink');
		  }
		});
		$("#navigation").load("header.html");
		$("footer").load("footer.html");
	(function(d, s, id) 
	{
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=699746470082114";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	/*function for social icons*/
		var hideTimeout = null;
		var show = function() 
		{
			$('#social-ico').show();
		}
		var hide = function() 
		{
	  		$('#social-ico').hide("slow");
		}
	$(window).scroll(function(e){
  		if (hideTimeout) 
		{
    		window.clearTimeout(hideTimeout);
      		hideTimeout = null;
    	}
    		hide();
    	window.setTimeout(show, 500);
  });
	/*carousel enabling*/
		$('.carousel').carousel({
        interval: 5000 //changes the speed
    })
	/*Carousel caption fading in and out*/
		$("#myCarousel").mouseenter(function(){
    	$(".carousel-caption").addClass("show-caption").fadeIn(1000).css({"visibility":"visible","left":"70%"});
    });
    $("#myCarousel").mouseleave(function(){
        $(".carousel-caption").removeClass("show-caption").fadeOut(100).css({"visibility":"visible","left":"71%"});
    });
	/*main heading on carousel*/	
	$("#myCarousel").mouseenter(function(){
    	$(".intro-text").addClass(".intro-text").fadeIn(100).css({"visibility":"visible","top":"10px"});
    });
    $("#myCarousel").mouseleave(function(){
        $(".intro-text").removeClass(".intro-text").fadeOut(100).css({"visibility":"visible","top":"-200px"});
    });
	/*gallery captions on hover*/
			   $('.bg-col').hover(
        function(){
            $(this).find('.caption').slideDown(500); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(500); //.fadeOut(205)
        }
    ); 
});