var tab = function() {

	$('.tab_content__item').not('.active').slideUp();

	$('.tab_title__item').click(function() {
		var titleItem = $(this);
		var wrap = titleItem.parents('.tab_wrap');
		var contentItem = wrap.find($('.tab_content__item')).eq(titleItem.index());

		titleItem.addClass('active');
		wrap.find($('.tab_title__item')).not(titleItem).removeClass('active');

		contentItem.slideDown();
		wrap.find($('.tab_content__item')).not(contentItem).slideUp();
	});

};

/*
var tab = function() {

	$('.tab_title__item').click(function() {
		var titleItem = $(this);
		var contentItem = $('.tab_content__item').eq(titleItem.index());

		titleItem.addClass('active');
		$('.tab_title__item').not(titleItem).removeClass('active');

		contentItem.addClass('active');
		$('.tab_content__item').not(contentItem).removeClass('active');
	});

};*/
