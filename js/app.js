var angle = Math.atan2($(window).width(), $(window).height());
$('.diagonal-box-1,.diagonal-box-2').css('transform', 'skew(' + angle + 'rad)').show();