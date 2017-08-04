//-------отрисовка диагоналей---------------

var angle = Math.atan2($(window).width(), $(window).height());
console.log(angle);
$('.diagonal-box-1,.diagonal-box-2,.diagonal-box-3,.diagonal-box-4').css('transform', 'skew(' + angle + 'rad)').show();

//---------------------------------

$('#second-section').bind('inview', function (event, visible) {
	console.log(1);
	if (visible == true) {
		console.log(2);

		$('#page-counter').addClass('orange');
	} else {
		// element has gone out of viewport
	}
});