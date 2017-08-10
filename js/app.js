//-------отрисовка диагоналей---------------

var angle = Math.atan2($(window).width(), $(window).height());
console.log(angle);
$('.diagonal-box-1,.diagonal-box-2,.diagonal-box-3,.diagonal-box-4').css('transform', 'skew(' + angle + 'rad)').show();

//---------------------------------

$('.up-part div,.mid-part div,.bot-part div').each(function () {
	$(this).on("mouseenter", function() {
		$(this).css({'opacity':'1'});
	}).on('mouseleave', function() {
		$(this).css({'opacity': '.1'});
	});
});
$('.triangle').click(function () {
	console.log(this.id);
	$('#third-section-img-pop-up').show();
});