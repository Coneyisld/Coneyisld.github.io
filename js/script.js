$(window).on("load", function() {
	$(".loader .inner").fadeOut(600, function() {
		$(".loader").fadeOut(750);
	}); 
})



$(document).ready( function() {
  $('#slides').superslides({animation: "fade", play:5000, pagination: false});
  //typedJS
  var typed = new Typed(".typed", {
  	strings: ["Software Engineer", "Student", "Web Developer/Wizard", "Innovator", "Passionate Programmer"],
  	loop: true,
  	typeSpeed: 70,
  	startDelay: 1000,
  	showCursor: false,
  	backSpeed: 30
  });
  //owlCarousel
  $('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	})
  //easyPieChart
    var skillsTopOffset = $(".skillsSection").offset().top

    $(window).scroll( function() {
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
	        $('.chart').easyPieChart({
	            easing: 'easeOut',
	            barColor: '#2ecc71',
	            trackColor: '#fff',
	            scaleColor: '#fff',
	            lineWidth: 4,
	            size:152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('percent').text(percent)	
	            }

	        });
    	}
    })
    //navbar slide effect
    $("#navbar li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

    const nav = $("#navbar");
    const navTop = nav.offset().top;
    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
    	var body = $("body");

    	if( $(window).scrollTop() >= navTop ) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	} else {
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav")
    	}
    }

    //FancyBox
    $("[data-fancybox]").fancybox();

    //ISOTOPE
    $('.items').isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: "linear",
    		queue: false
    	}
    })

    
    $('#filters a').click( function() {
    	$('#filters .current').removeClass(".current");
    	$(this).addClass("current");

    	let selector = $(this).attr("data-filter");

	        $('.items').isotope({
		    	filter: selector,
		    	animationOptions: {
		    		duration: 1500,
		    		easing: "linear",
		    		queue: false
		    	}
	    });

	    return false;

    })



});





