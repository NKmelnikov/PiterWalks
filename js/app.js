//-------отрисовка диагоналей---------------

var angle = Math.atan2($(window).width(), $(window).height());
$('.diagonal-box-1,.diagonal-box-2,.diagonal-box-3,.diagonal-box-4').css('transform', 'skew(' + angle + 'rad)').show();

//---------------------------------

$('.up-part div,.mid-part div,.bot-part div').each(function () {
	$(this).on("mouseenter", function() {
		$(this).css({'opacity':'1','overflow-x':'visible'});
		var className = this.className;
		$('.route-'+className).show();
	}).on('mouseleave', function() {
		$(this).css({'opacity':'.1','overflow-x':'visible'});
		var className = this.className;
		$('.route-'+className).hide();
	});
});


$('.up-part div,.mid-part div,.bot-part div').click(function () {
	var _id = this.id;
	$('#third-section-img-pu').css('display','flex');
	updateValues(_id-1)
});

$('.exit-cross').click(function () {
	$('#third-section-img-pu').hide();
});


	$('.carousel').slick({
		adaptiveHeight: false,
		speed:1000,
		fade: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

$('.pu-next-memorial-button').click(function(){
	var currenId = parseInt($('.pu-route-number').text(),10);
		updateValues(currenId);
});

moment.locale(navigator.language);

$('.date-select').clndr({
	weekOffset: 1,
	daysOfTheWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	showAdjacentMonths: false,
	events: [
		{ date: '2017-09-09', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' }
	],
	clickEvents: {
		click: function(target) {
			console.log(target);
		},
		onMonthChange: function(month) {
			console.log('you just went to ' + month.format('MMMM, YYYY'));
		}
	},
	doneRendering: function() {
		console.log('this would be a fine place to attach custom event handlers.');
	}
});

function updateValues(id){
	id = id > 19 ? 0 : id;
	$('.pu-route-number').text(puStaff[id].num);
	$('.pu-sign-name').text(puStaff[id].name);
	$('.pu-sign-description').text(puStaff[id].shot_desc);

	$('.firstImage').css({
		'background':'url(/img/pop-up/'+ (id + 1) +'/1.jpg) no-repeat',
		'background-size':'contain',
		'background-position': 'center'
	});
	$('.secondImage').css({
		'background':'url(/img/pop-up/'+ (id + 1) +'/2.jpg) no-repeat',
		'background-size':'contain',
		'background-position': 'center'
	});
	$('.thirdImage').css({
		'background':'url(/img/pop-up/'+ (id + 1) +'/3.jpg) no-repeat',
		'background-size':'contain',
		'background-position': 'center'
	});
	$('.first-desc-text').text(puStaff[id].first_long_desc);
	$('.second-desc-text').text(puStaff[id].second_long_desc);
	console.log($('.second-desc-text').text().length);
}



