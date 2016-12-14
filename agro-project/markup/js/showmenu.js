$(document).ready(function(){
	$(".show-menu").click(function(){
		$(".nav").slideToggle();
	})
});
$(window).resize(function() {	
	if ($(window).width() > 640){
		$(".nav").css('display','inline-block');
	}
	if ($(window).width() < 640){
		$(".nav").hide();
	}
});