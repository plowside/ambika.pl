/*
Theme Name: Cali Constuctions - Construction HTML5 Template.
Author: Slidesigma
Author URL: https://www.templatemonster.com/vendors/slidesigmathemes/
Version: 1.0.0
*/
document.querySelectorAll('a[href^="#cennik-uslug"]').forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth' }, 3000);
	});
});

(function ($) {
	'use strict';
	// preloader
	$(window).on('load', function () {
		$('.preloader').hide();
		$('.loader').removeClass();
		$('html').addClass('overflow');
	});
	//fix header
	$(window).scroll(function () {
		var sticky = $('.menu-style'),
			scroll = $(window).scrollTop();
		if (scroll >= 100) sticky.addClass('sticky');
		else sticky.removeClass('sticky');
	});
	// navigation
	$('.menu-item-has-children>a').append('<span class="arrow"></span>');
	$('.menu-item-has-children>a').attr('aria-expanded', 'false');
	$('.menu-item-has-children>a').attr('aria-haspopup', 'true');
	$('.menu-item-has-children>a').attr('itemprop', 'url');
	$('.menu-item-has-megamenu>a').append('<span class="arrow"></span>');
	//mobile nav
	$(document).ready(function () {
		$(".hamburger-menu").click(function () {
			$(".menu-btn").toggleClass("active");
			$(".navigation").toggleClass("active");
			$("body").toggleClass("menu-open");
			$('html').toggleClass('overflow');
		});
		$(".float-btn-inner").click(function () {
			$(".map-search-box").toggleClass("active");
		});
	});
	$(document).ready(function () {
		$('.main-menu li.menu-item-has-children>a, .main-menu li.menu-item-has-megamenu>a').on('click', function (e) {
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul, .megamenu').slideUp();
			} else {

				var href = $(this).attr('href');
				$(this).removeAttr('href');
				element.addClass('open');
				element.children('ul, .megamenu').slideDown();
				element.siblings('li').children('ul, .megamenu').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul, .megamenu').slideUp();
				$(this).attr('aria-expanded', 'true');
				//$(this).wait(2000).attr('href',href);
				e.preventDefault();
				$(this).attr('href', href);
			}
		});
		$('.main-menu li.menu-item-has-children>a>span, .main-menu li.menu-item-has-megamenu>a>span').on('click', function (e) {
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul, .megamenu').slideUp();
				e.preventDefault();
			}
		});
	});
	$(function () {
		if ($('body').is('#homepage-with-map')) {
			$(window).on('load', function () {
				$('body').addClass('navigation-bottom');
				if ($('body').hasClass('navigation-bottom')) {
					$('.main-menu li.menu-item-has-children').addClass('nav-postion');
				} else {
					$('.main-menu li.menu-item-has-children').removeClass('nav-postion');
				}

			});
			$(window).scroll(function () {
				if ($(window).scrollTop() >= 800) {
					$('.menu-style').addClass('fixed-header');
					$('.topbar').addClass('fixed-top');
				}
				else {
					$('.menu-style').removeClass('fixed-header');
					$('.topbar').removeClass('fixed-top');
				}
				if ($('.menu-style').hasClass('fixed-header')) {
					$('body').removeClass('navigation-bottom');
					$('.main-menu li.menu-item-has-children').removeClass('nav-postion');
				} else {
					$('body').addClass('navigation-bottom');
					$('.main-menu li.menu-item-has-children').addClass('nav-postion');
				}
			});

		}
	});

	// nice select
	$(document).ready(function () {
		$('.custom-select').niceSelect();
	});
	// back to top
	var offset = 220;
	var duration = 500;
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > offset) {
			$('.back-top').fadeIn(duration);
		} else {
			$('.back-top').fadeOut(duration);
		}
	});

	$('.back-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, "slow");
		return false;
	});

	if ($(window).scrollTop() > offset) {
		$('.back-top').fadeOut(0);
	}
	$('a[href="#"]').click(function (e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
	});
	// range slider
	$(function () {
		$("#slider-range").slider({
			range: true,
			min: 20,
			max: 500,
			thousand: ',',
			values: [50, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0]);
				$("#amount1").val("$" + ui.values[1]);
			}
		});
		$("#amount").val($("#slider-range").slider("values", 0));
		$("#amount1").val("$" + $("#slider-range").slider("values", 1));
	});
	$(function () {
		$("#slider-range-price").slider({
			range: true,
			min: 20,
			max: 500,
			thousand: ',',
			values: [50, 300],
			slide: function (event, ui) {
				$("#amount-price").val("$" + ui.values[0]);
				$("#amount1-price").val("$" + ui.values[1]);
			}
		});
		$("#amount-price").val("$" + $("#slider-range-price").slider("values", 0));
		$("#amount1-price").val("$" + $("#slider-range-price").slider("values", 1));
	});

	$(function () {
		$("#shop-range-price").slider({
			range: true,
			min: 20,
			max: 500,
			thousand: ',',
			values: [50, 300],
			slide: function (event, ui) {
				$("#shop-price").val("$" + ui.values[0]);
				$("#shop1-price").val("$" + ui.values[1]);
			}
		});
		$("#shop-price").val("$" + $("#shop-range-price").slider("values", 0));
		$("#shop1-price").val("$" + $("#shop-range-price").slider("values", 1));
	});
	// main banner
	var swiper = new Swiper('.main-banner', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 4000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.main-button-next',
			prevEl: '.main-button-prev',
		},
	});
	// recent property
	var swiper = new Swiper('.recent-property-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.recent-button-next',
			prevEl: '.recent-button-prev',
		},
		pagination: {
			el: '.recent-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	// featured property
	var swiper = new Swiper('.featured-property-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.featured-button-next',
			prevEl: '.featured-button-prev',
		},
		pagination: {
			el: '.featured-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	// for sale property
	var swiper = new Swiper('.forsale-property-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.forsale-button-next',
			prevEl: '.forsale-button-prev',
		},
		pagination: {
			el: '.forsale-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	// for rent property
	var swiper = new Swiper('.forrent-property-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.forrent-button-next',
			prevEl: '.forrent-button-prev',
		},
		pagination: {
			el: '.forrent-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
	// Blog Slider
	var swiper = new Swiper('.blog-slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.blog-button-next',
			prevEl: '.blog-button-prev',
		},
		pagination: {
			el: '.blog-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

	// categories-slider
	$('.home-maintainance-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.hm-button-prev'),
		nextArrow: $('.hm-button-next'),
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		cssEase: 'linear',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}]
	});
	$('.gen-construction-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.gen-con-button-prev'),
		nextArrow: $('.gen-con-button-next'),
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		cssEase: 'linear',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}]
	});
	$('.restructured-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.res-button-prev'),
		nextArrow: $('.res-button-next'),
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		cssEase: 'linear',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}]
	});
	$('.project-management-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.pm-button-prev'),
		nextArrow: $('.pm-button-next'),
		dots: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		cssEase: 'linear',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}]
	});
	$(".categories-tabs .nav .nav-item").click(function () {
		$('.home-maintainance-slider, .gen-construction-slider, .restructured-slider, .project-management-slider').slick('refresh');
	});
	$(".nav-link").click(function () {
		var ref = $(this).attr("ref");
		$("#" + ref).addClass('active');
		$("#" + ref).addClass('show');
		$("#" + ref).siblings().removeClass('active');
		$("#" + ref).siblings().removeClass('show');


	});
	// testimonial slider
	$('.testimonial-nav').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		asNavFor: '.testimonial-for',
		responsive: [{
			breakpoint: 1800,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				arrows: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				arrows: false,
			}
		}]
	});
	$('.testimonial-for').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		vertical: true,
		asNavFor: '.testimonial-nav'
	});
	// filter gallery
	$(document).ready(function () {
		$('.gallery-grid').isotope(function () {
			itemSelector: '.filter-box'
		});
		$('.filter-gallery>ul>li').click(function () {
			$('.filter-gallery>ul>li').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$('.gallery-grid').isotope({
				filter: selector
			})
			return false;
		});
	});
	// blog-slider-inner
	var swiper = new Swiper('.blog-slider-inner', {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
	var swiper = new Swiper('.listing-slider-classic', {
		slidesPerView: 'auto',
		spaceBetween: 3,
	});
	// detail-page-slider
	$('.detail-page-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.detail-page-slider-nav'
	});
	$('.detail-page-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.detail-page-slider-for',
		dots: false,
		centerMode: true,
		centerPadding: '30px',
		focusOnSelect: true,
		responsive: [{
			breakpoint: 567,
			settings: {
				slidesToShow: 2,
			}
		}]
	});

	$('.magnific-gallery').magnificPopup({
		delegate: 'a.popup',
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
		}
	});
	$('.popup-video').magnificPopup({ type: 'iframe' });
	$('.floorplan-gallery').magnificPopup({
		delegate: 'a.popup',
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
		}
	});
	// counter
	$('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	$(function () {
		if ($('div').is('.property-list-view')) {
			const slider = document.querySelector(".property-feature");
			let isDown = false;
			let startX;
			let scrollLeft;
			slider.addEventListener("mousedown", e => {
				isDown = true;
				slider.classList.add("active");
				startX = e.pageX - slider.offsetLeft;
				scrollLeft = slider.scrollLeft;
			});
			slider.addEventListener("mouseleave", () => {
				isDown = false;
				slider.classList.remove("active");
			});
			slider.addEventListener("mouseup", () => {
				isDown = false;
				slider.classList.remove("active");
			});
			slider.addEventListener("mousemove", e => {
				if (!isDown) return;
				e.preventDefault();
				const x = e.pageX - slider.offsetLeft;
				const walk = x - startX;
				slider.scrollLeft = scrollLeft - walk;
			});
		}
	});
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
	});
	$('.magnific-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade',
		gallery: {
			enabled: true
		}
	});

	// quantity plus minus
	$('.minus-btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('.quantity').find('input');
		var value = parseInt($input.val());
		if (value > 1) {
			value = value - 1;
		} else {
			value = 1;
		}
		$input.val(value);
	});
	$('.plus-btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $input = $this.closest('.quantity').find('input');
		var value = parseInt($input.val());
		if (value < 100) {
			value = value + 1;
		} else {
			value = 100;
		}
		$input.val(value);
	});

	$('.showConsult').click(function () {
		$('#popup1h4').html($(this).attr('value'));
		$("#popup1").fadeIn(1200);

	});
	$('.close').click(function () {
		$("#popup1").fadeOut(1200);
	});
    $('.close-maps').click(function () {
        $("#popup3").fadeOut(1200);
    });
    $('.close2').click(function () {
        $("#popup2").fadeOut(1200);
    });
    
    $('#shMap').click(function () {
       $("#popup3").fadeIn(1200);
    });

	$("tr.lmore-price").slice(0, 10).show();
	$("#loadMore").on('click', function (e) {
		e.preventDefault();
		$("tr.lmore-price:hidden").slice(0, 40).slideDown();
		if ($("tr.lmore-price:hidden").length == 0) {
			$("#loadLess").fadeIn('slow');
			$("#loadMore").hide();
			//$("#loadMore").text('Load only the first 4');
		}
		$('html,body').animate({
			scrollTop: $(this).offset().bottom
		}, 1500);
	});

	$("#loadLess").on('click', function (e) {
		e.preventDefault();
		$('tr.lmore-price:not(:lt(10))').fadeOut();
		$("#loadMore").fadeIn('slow');
		$("#loadLess").hide();

		var desiredHeight = $(window).height();

		$('html,body').animate({
			scrollTop: $(this).offset().top + desiredHeight
		}, 1500);
	});

	$("#sendMessPopup").on('click', function (e) {
		var formNamePopup = $("#formNamePopup").val();
		var formNumberPopup = $("#formNumberPopup").val();
		if(formNamePopup!='')
		{ 
		 if(formNumberPopup!='')
		 { 
		  if ($("#formAgreementPopup").is(':checked')) {
	       grecaptcha.ready(function() {
           grecaptcha.execute('6LeUbyUpAAAAAIulFzVMLoxgqj6g1i0cJU4LZk0R', {action: 'sendMessPopup'}).then(function(token) {
			$(".js-token").val(token);
			$.ajax({
				url: 'https://majsterio.pl/wp-admin/admin-ajax.php',
				type: 'POST',
				data: 'action=sendMessPopup&formNamePopup=' + formNamePopup + '&formNumberPopup=' + formNumberPopup + '&token=' + token,
				beforeSend: function (xhr) {
					//$('#misha_button').text('Загрузка, 5 сек...');	
				},
				success: function (data) {
					//$('#misha_button').text('Отправить');	
					if(data==1)
                    {
                       $("#popup1").fadeOut(1200); 
                       $("#popup2").fadeIn(1200); 
                    }
                    else
                    { 
                     alert("Błąd techniczny, prosimy o kontakt drogą telefoniczną! " + data);
                    } 
				}
			});
          });  
         });
		}
		else {
			console.log(' You`re fucking stupid ass! ');
		}
	   }
	   else{
		alert("Brak telefonu!");
	   } 
      }
      else{
	   alert("Brak imienia!");
      }

	});
	$("#Fs").on('click', function (e) {
		var Fi = $("#Fi").val();
		var Fe = $("#Fe").val();
		var Ft = $("#Ft").val();
		var Fu = $("#Fu").val();
		var Fm2 = $("#Fm2").val();
		if(Fi!='')
		{ 
		if(Fe!='')
		{ 
		if(Ft!='')
		{

		 if ($("#formAgreementonas").is(':checked')) {
			grecaptcha.ready(function() {
				grecaptcha.execute('6LeUbyUpAAAAAIulFzVMLoxgqj6g1i0cJU4LZk0R', {action: 'FormSelects'}).then(function(token) {
				  $(".js-token").val(token); 
		    $.ajax({
			url: 'https://majsterio.pl/wp-admin/admin-ajax.php',
			type: 'POST',
			data: 'action=FormSelects&Fi=' + Fi + '&Fe=' + Fe + '&Ft=' + Ft + '&Fu=' + Fu + '&Fm2=' + Fm2+ '&token=' + token,
			beforeSend: function (xhr) {	
			},
			success: function (data) {
				if(data==1)
                    {
                       $("#popup1").fadeOut(1200); 
                       $("#popup2").fadeIn(1200); 
                    }
                    else
                    { 
                     alert("Błąd techniczny, prosimy o kontakt drogą telefoniczną!");
                    } 
			}
		  });
	    	});
	     });
		}
		else {
			console.log(' You`re fucking stupid ass! ');
		}
      }
      else{
	   alert("Brak telefonu!");
      }
     }
     else{
	  alert("Brak email");
     }
    }
    else{
	 alert("Brak imienia oraz nazwiska"); 
    }
	});
    

    $("#Ks").on('click', function (event) {
        var Ki = $("#Ki").val();
        var Ke = $("#Ke").val();
        var Kt = $("#Kt").val();
        var Ktm = $("#Ktm").val();
        var Ktw = $("#Ktw").text();
        
		if(Ki!='')
		{ 
		 if(Ke!='')
		 { 
		   if(Kt!='')
		   {
			if(Ktm!='')
		    {
			 if ($("#FkA").is(':checked')) {	
				grecaptcha.ready(function() {
					grecaptcha.execute('6LeUbyUpAAAAAIulFzVMLoxgqj6g1i0cJU4LZk0R', {action: 'formKontaktSuccess'}).then(function(token) {
					  $(".js-token").val(token); 
			   $.ajax({
				url: 'https://majsterio.pl/wp-admin/admin-ajax.php',
				type: 'POST',
				data: 'action=formKontaktSuccess&Ki=' + Ki + '&Ke=' + Ke + '&Kt=' + Kt + '&Ktm=' + Ktm + '&Ktw=' + Ktw+ '&token=' + token,
				beforeSend: function (xhr) {
				   
				},
				success: function (data) { 
					if(data==1)
						{
						   $("#popup2").fadeIn(1200); 
						}
						else
						{ 
						 alert("Błąd techniczny, prosimy o kontakt drogą telefoniczną!" + data);
						} 
				}
			  });
			  });
		     }); 
		     }
			}
			else{
				alert("Brak tematu!");
			   } 
		   }
		   else{
			alert("Brak telefona!");
		   }
		 }
		 else{
			alert("Brak emaila!");
		 }
		}
        else{
			alert("Brak imienia oraz nazwiska");
		}

    });
	// time counter
	function makeTimer() {
		var endTime = new Date("01 January 2023 00:00:00 GMT+05:30");
		endTime = (Date.parse(endTime) / 1000);
		var now = new Date();
		now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		$("#cvdays").html(days);
		$("#cvhours").html(hours);
		$("#cvminutes").html(minutes);
		$("#cvseconds").html(seconds);
	}
	setInterval(function () {
		makeTimer();
	}, 1000);
	$('.service-detail-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});
	new WOW().init();

	$('.art_sc').on('click', function(e) {
		e.preventDefault();
		const ancor = $(this).attr('href');
	  
		$('html, body').animate({
		  scrollTop: $(ancor).offset().top-80
		}, 800);
	  });
	  

})(jQuery);

(function() {
	window.dataLayer = window.dataLayer || [];
	document.getElementById('sendMessPopup').addEventListener("click", function() {
		dataLayer.push ({
		   'event':'sendMessPopup',
		})
	});
 })();