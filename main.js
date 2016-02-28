$(document).ready(function() {
	$(".slim.carousel").owlCarousel({
		loop:true,
		// margin:10,
		// nav:true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		// autoHeight:true
		/*responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}*/
	});
});