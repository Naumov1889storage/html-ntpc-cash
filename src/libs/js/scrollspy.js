var scrollSpy = function () {

	$('.link-spy').click(function(e) {

		e.preventDefault();

		var href = $(this).attr('href');
		var scrollTo = $(href);
		var offsetTop = scrollTo.offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop - 15
		}, 300);

	});

};
