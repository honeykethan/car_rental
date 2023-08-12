;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

	$('.menu_list li a').each(function () {
        var $this = $(this);
        $this.on('click', function (e) {
            var has = $this.hasClass('open');
            $('.menu_list li a').removeClass('open');
            if(has) {
                $this.removeClass('open');
            } else {
                $this.addClass('open');
            }
        });
    });
    
	
	 var dropToggle = $('.menu_list > li').has('ul').children('a');
    dropToggle.on('click', function() {
        dropToggle.not(this).closest('li').find('ul').slideUp(300);
        $(this).closest('li').children('ul').slideToggle(300);
        return false;
    });
    
    /*--------------- mobile dropdown js--------*/
    function Menu_js() {
        if ($('.dropdown').length) {
            $('.dropdown > .dropdown-toggle').click(function () {
                var location = $(this).attr('href');
                window.location.href = location;
                return false;
            });
        }
    }
    Menu_js();
    function dropdown_js() {
        $('.dropdown > a').after(('<span class="menu_icon" aria-hidden="true" data-toggle="dropdown" />'));
        $('.menu_nav > li .menu_icon').on('click', function (e) {
            $(this).parent().find('ul').first().slideToggle(300);
            $(this).parent().siblings().find('ul').hide(300);
        });
    }
    dropdown_js();
    
	$('.close_icon').on('click', function() {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
        $('.menu_list ul').slideUp(300);
        $('.menu_list li a').removeClass('open');
    });
	$('.bar_menu').on('click', function() {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
		return false;
    });
	
	$('.cart_bag_btn').on('click', function() {
        $('body').addClass('cart_open');
		return false;
    });
	$('.cart_close_btn').on('click', function() {
        $('body').removeClass('cart_open');
    });
	
	$('.list_finding .nav li a').on('hover', function() {
        $('.marker_icon .nav li').addClass('hover');
    });
	
	
	if($(window).width() >= 992){
	  $('.list_finding .nav .newyourk').hover(
	   function(){ $('.marker_icon .nav li.newyourk').toggleClass('hover') },
	)
	$('.list_finding .nav .los').hover(
	   function(){ $('.marker_icon .nav li.los').toggleClass('hover') },
	)
	$('.list_finding .nav .chicago').hover(
	   function(){ $('.marker_icon .nav li.chicago').toggleClass('hover') },
	)
	$('.list_finding .nav .houston').hover(
	   function(){ $('.marker_icon .nav li.houston').toggleClass('hover') },
	)
	$('.list_finding .nav .phil').hover(
	   function(){ $('.marker_icon .nav li.phil').toggleClass('hover') },
	)
	$('.list_finding .nav .aiami').hover(
	   function(){ $('.marker_icon .nav li.aiami').toggleClass('hover') },
	)
	$('.list_finding .nav .at').hover(
	   function(){ $('.marker_icon .nav li.at').toggleClass('hover') },
	)
	$('.list_finding .nav .bostan').hover(
	   function(){ $('.marker_icon .nav li.bostan').toggleClass('hover') },
	)
	$('.list_finding .nav .san').hover(
	   function(){ $('.marker_icon .nav li.san').toggleClass('hover') },
	)
	$('.list_finding .nav .pho').hover(
	   function(){ $('.marker_icon .nav li.pho').toggleClass('hover') },
	)
	$('.list_finding .nav .det').hover(
	   function(){ $('.marker_icon .nav li.det').toggleClass('hover') },
	)
	$('.list_finding .nav .seat').hover(
	   function(){ $('.marker_icon .nav li.seat').toggleClass('hover') },
	)
	$('.list_finding .nav .diego').hover(
	   function(){ $('.marker_icon .nav li.diego').toggleClass('hover') },
	)
	$('.list_finding .nav .louis').hover(
	   function(){ $('.marker_icon .nav li.louis').toggleClass('hover') },
	)
	$('.list_finding .nav .balti').hover(
	   function(){ $('.marker_icon .nav li.balti').toggleClass('hover') },
	)
	}
	
    if ($('.calculator_area').length) {
        $('.calculator_box .submit_btn').on('click', function () {
            $('.calculator_box,.calculator_area').addClass('open');
            return false;
        });
        $('.calculator_area').on('click', function () {
            $('.calculator_box,.calculator_area').removeClass('open')
        })
    }
	
	
	$('.main_slider').on('init', function (e, slick) {
        var $firstAnimatingElements = $('div.slider_item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $('.main_slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.slider_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
	
	/*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
	var $status = $('.pagingInfo');
	var $slickElement = $('.main_slider');
	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + '/' + slick.slideCount);
	});
	$slickElement.slick({
		autoplay: false,
		autoplaySpeed: 2500,
		speed: 600, 
		dots: false,
		fade: true,
		prevArrow: ".arrow_left",
		nextArrow: ".arrow_right",
		draggable: false,
	});


	
	function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
	
	
	function datetime_picker(){
		if( $('#datetimepicker3') ){
			$('#datetimepicker3').datetimepicker();
		}
	}
	datetime_picker();
	
	function datetime_picker2(){
		if( $('#datetimepicker4') ){
			$('#datetimepicker4').datetimepicker();
		}
	}
	datetime_picker2();
	
	
	
	function time_picker2(){
		if( $('#datetimepicker5').length ){
			$('#datetimepicker5').datetimepicker({
				format: 'LT'
			});
		}
	}
	time_picker2();

	$('.input-group.date input, .click_1').on('click', function () {
        $('.input-group.date input').addClass('white');
        $('.input_1').addClass('white');
    });
	$('.input-group.time input, .click_2').on('click', function () {
        $('.input-group.time input').addClass('white');
        $('.input_2').addClass('white');
    });
	
	
	
	function video_popup(){
		if ( $('.popup-youtube, .popup-vimeo, .popup-gmaps').length ){
			$(document).ready(function() {
				$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,

					fixedContentPos: false
				});
			});
		}
	}
	video_popup();
	
	
	
	/*----------------------------------------------------*/
    /*  Gallery One js
    /*----------------------------------------------------*/
	function gallery_isotope(){
		if ( $('.bike_type_inner').length ){
			
			// Activate isotope in container
            $(".bike_type_inner").imagesLoaded( function() {
                $(".bike_type_inner").isotope({
					layoutMode: 'fitRows',
					percentPosition:true,
					masonry: {
						columnWidth: 1,
					}            
                }); 
            }); 
			
			// Add isotope click function
			$(".g_fillter ul li").on('click',function(){
				$(".g_fillter ul li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr("data-filter");
                $(".bike_type_inner").isotope({
                    filter: selector,
                });
				return false;
			});
		}
	}

	gallery_isotope();

	function niceSelect(){
		if( $('.nice_select').length ){
			$('.nice_select').niceSelect();
		}
	}
	niceSelect();
	
	/*----------------------------------------------------*/
    /*  Wow Animation Active js
    /*----------------------------------------------------*/
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
	
	
	function image_swipe(){
		if( $('.image_swipe').length ){
			$(".image_swipe").twentytwenty();
		}
	}
	image_swipe();
	

	/*----------------------------------------------------*/
    /*  Search Popup js
    /*----------------------------------------------------*/
	function popupAnimation(){
		if ( $('.popup-with-zoom-anim').length ){
			$(document).ready(function() {
				$('.popup-with-zoom-anim').magnificPopup({
					type: 'inline',

					fixedContentPos: false,
					fixedBgPos: true,

					overflowY: 'auto',

					closeBtnInside: true,
					preloader: false,

					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				});

				$('.popup-with-move-anim').magnificPopup({
					type: 'inline',

					fixedContentPos: false,
					fixedBgPos: true,

					overflowY: 'auto',

					closeBtnInside: true,
					preloader: false,

					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-slide-bottom'
				});
			});
		}
	}
	popupAnimation();
	

	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/

	function counterup(){
		if( $('.counter').length ){
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		}
	}
	counterup();

	
	/*----------------------------------------------------*/
    /*  Feature Car Slider
    /*----------------------------------------------------*/
    function f_car_slider(){
        if ( $('.f_car_slider').length ){
            $('.f_car_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:false, 
				center: false,
				navContainerClass: 'car_arrow',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                }
            })
        }
    }
    f_car_slider();
	
	/*----------------------------------------------------*/
    /*  Feature Car Slider
    /*----------------------------------------------------*/
    function tractor_brand_slider(){
        if ( $('.tractor_brand_slider').length ){
            $('.tractor_brand_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 5,
                nav: false,
                autoplay: true,
                smartSpeed: 700,
                dots:true, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 2,
                    },
                    575: {
                        items: 3,
                    },
                    767: {
                        items: 5,
                    },
                }
            })
        }
    }
    tractor_brand_slider();	
	/*----------------------------------------------------*/
    /*  Feature Car Slider
    /*----------------------------------------------------*/
    function car_tab_slider(){
        if ( $('.car_tab_slider').length ){
            $('.car_tab_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 1,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
            })
        }
    }
    car_tab_slider();
	/*----------------------------------------------------*/
    /*  Feature Car Slider
    /*----------------------------------------------------*/
    function comparisom_slider(){
        if ( $('.comparisom_slider').length ){
            $('.comparisom_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 2,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
				responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    1200: {
                        items: 2,
                    },
                }
            })
        }
    }
    comparisom_slider();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function f_bike_slider(){
        if ( $('.feature_bike_slider').length ){
            $('.feature_bike_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
				center: true,
				stagePadding: 560,
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
						stagePadding: 0,
                    },
					600: {
                        items: 1,
						stagePadding: 100,
                    },
					900: {
                        items: 1,
						stagePadding: 300,
                    },
                    1200: {
                        items: 1,
						stagePadding: 420,
                    },
                    1500: {
                        items: 1,
                    },
                }
            })
        }
    }
    f_bike_slider();
	
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function feature_yacht_slider(){
        if ( $('.f_yacht_slider').length ){
            $('.f_yacht_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                }
            })
        }
    }
    feature_yacht_slider();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function truck_type_slider(){
        if ( $('.truck_type_slider').length ){
            $('.truck_type_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                }
            })
        }
    }
    truck_type_slider();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function feedback_slider(){
        if ( $('.client_slider').length ){
            $('.client_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 1,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
            })
        }
    }
    feedback_slider();
	
	
	

	
	function product_slider(){
		if( $('.product_main_slider').length ){
			$('.product_main_slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
                dots: false,
				fade: true,
				asNavFor: '.product_nav_slider',
				accessibility: false
			});

		}
		
	}
	product_slider();
	
	function product_slider_nav(){
		if( $('.product_nav_slider').length ){
			$('.product_nav_slider').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.product_main_slider',
				dots: false,
				centerMode: false,
                arrows: false,
				focusOnSelect: true,
				accessibility: false,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                ]
			});
		}
		
	}
	product_slider_nav(); 
	
	
	function range_slider(){
		if( $('#slider-range').length ){
			$( "#slider-range" ).slider({ 
				range: true,
				min: 75,
				max: 500,
				values: [ 75, 300 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				}
			});
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			"K - $"+"M" + $( "#slider-range" ).slider( "values", 1 ) );
		}
	}
	range_slider();
	
	
	function range_slider2(){
		if( $('#slider-range2').length ){
			$( "#slider-range2" ).slider({ 
				range: true,
				min: 75,
				max: 500,
				values: [ 75, 300 ],
				slide: function( event, ui ) {
					$( "#amount2" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				}
			});
			$( "#amount2" ).val( "" + $( "#slider-range2" ).slider( "values", 0 ) +
			  "m - "+"m" + $( "#slider-range2" ).slider( "values", 1 ) );
		}
		
	}
	range_slider2();
	
	function price_widget(){
		if( $('#price_wd').length ){
			$( "#price_wd" ).slider({
			  range: true,
			  min: 75,
			  max: 500,
			  values: [ 75, 300 ],
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			$( "#amount" ).val( "$" + $( "#price_wd" ).slider( "values", 0 ) +
			  " - $" + $( "#price_wd" ).slider( "values", 1 ) );
		}
		
	}
	price_widget();
	
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function car_drive_slider(){
        if ( $('.car_drive_slider').length ){
            $('.car_drive_slider').owlCarousel({
                loop:true,
                margin: 128,
                items: 3,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
				navContainerClass: 'car_arrow',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
						margin: 30,
                    },
                    768: {
                        items: 2,
						margin: 100,
                    },
                    992: {
                        items: 3,
						margin: 30,
                    },
                    1199: {
                        items: 3,
                    }
                }
            })
        }
    }
    car_drive_slider();
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function car_company_slider(){
        if ( $('.car_company_slider').length ){
            $('.car_company_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 8,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
				navContainerClass: 'car_arrow',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    575: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 8,
                    }
                }
            })
        }
    }
    car_company_slider();
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function car_browse_slider(){
        if ( $('.car_browse_slider').length ){
            $('.car_browse_slider').owlCarousel({
                loop:true,
                margin: 60,
                items: 6,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
				navContainerClass: 'car_arrow',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
						margin: 30, 
                    },
                    400: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 6,
                    }
                }
            })
        }
    }
    car_browse_slider();
	
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function client_logo_slider(){
        if ( $('.client_logo_slider').length ){
            $('.client_logo_slider').owlCarousel({
                loop:true,
                margin: 80,
                items: 5,
                nav: false,
                autoplay: false,
                smartSpeed: 1500,
                dots:false, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    575: {
                        items: 3,
                    },
                    768: {
                        items: 5,
                    },
                    992: {
                        items: 5,
                    }
                }
            })
        }
    }
    client_logo_slider();
	
	function nice_scroll(){
		if( $('.nice_scroll').length ){
			$(".nice_scroll").niceScroll({
				cursorcolor: "#999b9d",
				cursorwidth: "6px",
                touchbehavior:true,
                grabcursorenabled: true,
			});
		}
	}
	nice_scroll();

	function wd_scroll(){
		if( $('.wd_scroll').length ){
			$(window).on("load",function(){
				$(".wd_scroll").mCustomScrollbar({
					theme:"dark",
				});
			});
		}
	}
	wd_scroll();
	

//	
	setTimeout(function() {
		$('.preloader').addClass('loaded');
		// Una vez haya terminado el preloader aparezca el scroll
		$('body').removeClass('no-scroll-y');

		if ($('.preloader').hasClass('loaded')) {
		  // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
		  $('.preloader').delay(100).queue(function() {
			$(this).remove();
		  });
		}
	  },100);

	
    $('#f-option').change(function () {
         if ($(this).is(':checked')) {
            $(".common").css("display", "none");
         } else {
             $(".common").css("display", "flex");
         }
     });
    
    /*-------------------------------------------------------------------------------
	  tooltip js
	-------------------------------------------------------------------------------*/
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip()
    }
    
    var inputs = document.querySelectorAll('.file-input')

    for (var i = 0, len = inputs.length; i < len; i++) {
      customInput(inputs[i])
    }

    function customInput (el) {
      const fileInput = el.querySelector('[type="file"]')
      const label = el.querySelector('[data-js-label]')

      fileInput.onchange =
      fileInput.onmouseout = function () {
        if (!fileInput.value) return

        var value = fileInput.value.replace(/^.*[\\\/]/, '')
        el.className += ' -chosen'
        label.innerText = value
      }
    }
    

})(jQuery)




function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();

//# sourceMappingURL=theme-dist.js.map