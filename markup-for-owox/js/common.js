$(document).ready(function() {

	
	 $('.bxslider').bxSlider({
		pager: false,
		slideWidth: 200,
		minSlides: 2,
		maxSlides: 5,
		moveSlides: 1,
		slideMargin: 10
		
	});


	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.custom-select').niceSelect();
				$(document).on('click', 'ul.tabs__caption li:not(.active)', function() {
					$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
				});
	

	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".sandwich").toggleClass("active");
	});


	$(".rslides").responsiveSlides({
				auto: false,
				pager: true,
				speed: 300,
				maxwidth: 777,
	});

		$(".button").magnificPopup();
		$(".registration").magnificPopup();

		$("#form").submit(function() { //Change
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за  Вашу заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 500);
		});
		return false;
	});

		$("#form-reg").submit(function() { //Change
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("В ближайшее время мы с Вами свяжемся!");
			setTimeout(function() {
				$.magnificPopup.close();
			}, 500);
		});
		return false;
	});


});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});


