$(document).ready(function() {
  var visible_flag = false;
  setScroll();
  $(".ui.tabular.menu .item").tab();
  $('.unhide-eye').popup();
  $(window).load(function() {
    var bgs = {
      first: './images/沉香/bg1.jpg',
      second: './images/金絲楠木15公分/bg2.jpg',
      third: './images/海南黃花梨/bg4.jpg'
    };
    $("#first-carousel").owlCarousel({
      loop:true,
      // margin: 10,
      // nav:true,
      items: 1,
      autoHeight: true,
      // autoplay: true,
      // autoplayTimeout: 8000,
      // autoplayHoverPause: true,
    });
    $(".ui.tabular.menu .item").on('click', function(e) {
      var target = $(e.target).attr('data-tab');
      var $owl = $("#" + target + "-carousel");
      $owl.owlCarousel({
        loop:true,
        // margin: 10,
        // nav:true,
        items: 1,
        autoHeight: true,
        // autoplay: true,
        // autoplayTimeout: 8000,
        // autoplayHoverPause: true,
      });
      $owl.trigger('refresh.owl.carousel');
      $(".section").css({
        background: 'url(' + bgs[target] + ') center center / cover no-repeat'
      });
      $(".blur-segment").removeClass("first second third").addClass(target);
    });
  })
  
  $('.right.menu.open').on("click",function(e){
    e.preventDefault();
    var navbar_height = 100;
    // $('.ui.vertical.menu').css("top", navbar_height).toggle();
    var toggle_menu = $('.ui.vertical.menu');
    if (toggle_menu.hasClass('active')) {
      toggle_menu.css("top", navbar_height).addClass('animated fadeOut');
      toggle_menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass("active animated fadeOut").hide();
      });
    } else {
      toggle_menu.css("top", navbar_height).show(0).addClass("active animated fadeIn");
      toggle_menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass("animated fadeIn");
      });
    } 
  });
	var page_scroll_threshold = $("body").height();
	var previousScroll = 0, headerOrgOffset = $('.my-nav').outerHeight();
	$('.nav-wrap').height($('.my-nav').outerHeight());

	var scroll_flag = 0;
	$('.aniview').AniView({
		animateThreshold: 200
	});
	$(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    // console.log("currentScroll: ", currentScroll);
  	if (currentScroll > (headerOrgOffset / 2)|| !currentScroll) {
  	  if (currentScroll > 150 && (currentScroll > previousScroll)) {
  	  	if (scroll_flag == 0 || scroll_flag == -1) {
  	  		$('.nav-wrap').removeClass('animated slideInDown').addClass('animated slideOutUp');
  	  		$('.nav-wrap').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  	  			// $(this).removeClass('animated slideOutUp');
  	  			// $('.nav-wrap').slideUp();
  	  		});
  	  	} 
  	  	scroll_flag = 1;
  	  } else if (currentScroll <= previousScroll) {
  	  	// if (currentScroll > page_scroll_threshold) {
  	  	if (scroll_flag == 0 || scroll_flag == 1) {
  	   		$('.nav-wrap').removeClass('animated slideOutUp').addClass('animated slideInDown');
  	   		$('.nav-wrap').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  	   			// $(this).removeClass('animated slideInDown');
  	    		// $('#nav-wrap').slideDown();
  	   		});
  	   	}
  	   	scroll_flag = -1;
  	  	// }
  	  }
  	} 
  	previousScroll = currentScroll;
  });
  $(".unhide-eye").click(function() {
    if (visible_flag) {
      $(this).find("i").addClass("hide").removeClass("unhide active");
    } else {
      $(this).find("i").addClass("unhide active").removeClass("hide");
    }
    $(".blur-segment").toggle();
    visible_flag = !visible_flag;
  });
});

function setScroll() {
  $.scrollSpeed(60, 1000);
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 750, $.bez([.2,.98,.78,1]));
          return false;
        }
      }
    });
  });
}

function hasScrolled() {
  var st = $(this).scrollTop();
  
  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
     return;
  
  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $('header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = st;
}