$(function () {

	scrollSpy();

	accordion();

	burger();

	tab();

	$('.burger', $('.header')).click(function () {
		$('.header_sidebar, .overlay').toggleClass('active');
		$('.link-spy, .overlay').click(function () {
			$('.burger, .header_sidebar, .overlay ').removeClass('active');

		});
	});

	$(".tel").mask("+7(999)-999-99-99", {placeholder: "+7(___)-___-__-__"});

});