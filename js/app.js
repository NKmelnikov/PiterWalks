//-------отрисовка диагоналей---------------

var angle = Math.atan2($(window).width(), $(window).height());
console.log(angle);
$('.diagonal-box-1,.diagonal-box-2,.diagonal-box-3,.diagonal-box-4').css('transform', 'skew(' + angle + 'rad)').show();

//---------------------------------

$('.triangle').each(function () {
	$(this).on("mouseenter", function() {
		$(this).css({'opacity':'1'});
	}).on('mouseleave', function() {
		$(this).css({'opacity': '.1'});
	});
});

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var $canvas = $("#canvas");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;

//1
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(0, 50);
ctx.lineTo(200, 50);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.stroke();
//2
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(200, 50);
ctx.lineTo(400, 50);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.stroke();
//3
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(400, 50);
ctx.lineTo(400, 300);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.stroke();
//4
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(400, 50);
ctx.lineTo(400,300);
ctx.lineTo(600, 300);
ctx.closePath();
ctx.stroke();
//5
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(400, 50);
ctx.lineTo(600, 50);
ctx.lineTo(600, 300);
ctx.closePath();
ctx.stroke();
//6
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(600, 50);
ctx.lineTo(800, 50);
ctx.lineTo(600, 300);
ctx.closePath();
ctx.stroke();
//7
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(800, 50);
ctx.lineTo(800, 300);
ctx.lineTo(600, 300);
ctx.closePath();
ctx.stroke();
//8
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(800, 50);
ctx.lineTo(1000, 50);
ctx.lineTo(800, 300);
ctx.closePath();
ctx.stroke();
//9
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(1000, 50);
ctx.lineTo(1000, 300);
ctx.lineTo(800, 300);
ctx.closePath();
ctx.stroke();
//10
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(1000, 50);
ctx.lineTo(1200, 50);
ctx.lineTo(1000, 300);
ctx.closePath();
ctx.stroke();

var img1 = new Image();
img1.onload = function () {
	ctx.drawImage(this, 0, 10, img1.width, img1.height);
};
img1.src = "/img/route/hover/atlant.png";

var img2 = new Image();
img2.onload = function () {
	ctx.drawImage(this, 195, 35, img2.width, img2.height);
};
img2.src = "/img/route/hover/anichkov-bridge.png";
// $('.one-mid').on("mouseenter", function() {
	// 	$(this).css({
	// 		'opacity':'1',
	// 		'background':'url(/img/route/hover/atlant.png)'
	// 	});
	// }).on('mouseleave', function() {
	// 	$(this).css({
	// 		'opacity': '.1',
	// 		'background':'url(/img/route/hover/atlant.png)'
	// 	});
	// });


// $('.triangle').click(function () {
// 	console.log(this.id);
// 	$('#third-section-img-pop-up').show();
// });
// $('.middle-bundle').mousemove(function(e){
// 	var client_x = e.pageX;
// 	var client_y = e.pageY;
// 	var offset = $(this).offset();
//
// 	var x = e.pageX - offset.left;
// 	var y = e.pageY - offset.top;
// 	console.log('x: ' + x);
// 	console.log('y: ' + y);
// 		// if(x > 200 && y < x*1.25){
// 		// 	$('.three-mid').css({
// 		// 		'opacity':'1',
// 		// 		'background':'url(/img/route/hover/zingers-house.png)'
// 		// 	});
// 		// } else {
// 		// 	$('.one-mid').css({'opacity':'.1','background':'url(/img/route/zingers-house.png)'});
// 		// }
// 	// save x, y.
// });
// function handleMouseMove(e) {
// 	e.preventDefault();
// 	var offset = $(this).offset();
// 	var mouseX = parseInt(e.clientX - offset.left);
// 	var mouseY = parseInt(e.clientY - offset.top);
//
// 	var inside = $('.one-mid').isPointInPath(mouseX, mouseY);
// 	var src = (inside) ? "Inside" : "Outside";
// 	console.log(src);
// }
//
// $(".middle-bundle").mousemove(function (e) {
// 	handleMouseMove(e);
// });