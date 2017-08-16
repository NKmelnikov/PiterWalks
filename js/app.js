//-------отрисовка диагоналей---------------

var angle = Math.atan2($(window).width(), $(window).height());
console.log(angle);
$('.diagonal-box-1,.diagonal-box-2,.diagonal-box-3,.diagonal-box-4').css('transform', 'skew(' + angle + 'rad)').show();

//---------------------------------

// $('.triangle').each(function () {
// 	$(this).on("mouseenter", function() {
// 		$(this).css({'opacity':'1'});
// 	}).on('mouseleave', function() {
// 		$(this).css({'opacity': '.1'});
// 	});
// });

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
ctx.lineTo(800,300);
ctx.lineTo(1000, 300);
ctx.closePath();
ctx.stroke();
//9
ctx.beginPath();
ctx.strokeStyle = "#096";
ctx.moveTo(800, 50);
ctx.lineTo(1000, 50);
ctx.lineTo(1000, 300);
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

var img3 = new Image();
img3.onload = function () {
	ctx.drawImage(this, 200, 50, img3.width, img3.height);
};
img3.src = "/img/route/hover/zingers-house.png";

var img4 = new Image();
img4.onload = function () {
	ctx.drawImage(this, 400, 50, img4.width, img4.height);
};
img4.src = "/img/route/hover/krylov.png";

var img5 = new Image();
img5.onload = function () {
	ctx.drawImage(this, 400, 18, img5.width, img5.height);
};
img5.src = "/img/route/hover/michaels-horse.png";

var img6 = new Image();
img6.onload = function () {
	ctx.drawImage(this, 600, 50, img6.width, img6.height);
};
img6.src = "/img/route/hover/eliseevs-house.png";

var img7 = new Image();
img7.onload = function () {
	ctx.drawImage(this, 600, 50, img7.width, img7.height);
};
img7.src = "/img/route/hover/kathrine.png";

var img8 = new Image();
img8.onload = function () {
	ctx.drawImage(this, 800, 50, img8.width, img8.height);
};
img8.src = "/img/route/hover/kazansky.png";

var img9 = new Image();
img9.onload = function () {
	ctx.drawImage(this, 800, 20, img9.width, img9.height);
};
img9.src = "/img/route/hover/alex-the-II.png";

var img10 = new Image();
img10.onload = function () {
	ctx.drawImage(this, 1000, 50, img10.width, img10.height);
};
img10.src = "/img/route/hover/piter-the-woodwoker.png";


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
function handleMouseMove(e) {
	e.preventDefault();
	var mouseX = parseInt(e.clientX - offsetX);
	var mouseY = parseInt(e.clientY-375);
//1
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(0, 50);
	ctx.lineTo(200, 50);
	ctx.lineTo(200, 300);
	ctx.closePath();
	ctx.stroke();
	if (ctx.isPointInPath(mouseX, mouseY)) {
		console.log('Hello!!1');
		return;
	}
//2
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(200, 50);
	ctx.lineTo(400, 50);
	ctx.lineTo(200, 300);
	ctx.closePath();
	ctx.stroke();

	if (ctx.isPointInPath(mouseX, mouseY)) {
		console.log('Hello!!2');
		return;
	}
//3
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(400, 50);
	ctx.lineTo(400, 300);
	ctx.lineTo(200, 300);
	ctx.closePath();
	ctx.stroke();

if (ctx.isPointInPath(mouseX, mouseY)) {
	console.log('Hello!!3');
	return;
}

//4
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(400, 50);
	ctx.lineTo(400,300);
	ctx.lineTo(600, 300);
	ctx.closePath();
	ctx.stroke();

if (ctx.isPointInPath(mouseX, mouseY)) {
	console.log('Hello!!4');
	return;
}

//5
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(400, 50);
	ctx.lineTo(600, 50);
	ctx.lineTo(600, 300);
	ctx.closePath();
	ctx.stroke();

if (ctx.isPointInPath(mouseX, mouseY)) {
	console.log('Hello!!5');
	return;
}

//6
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(600, 50);
	ctx.lineTo(800, 50);
	ctx.lineTo(600, 300);
	ctx.closePath();
	ctx.stroke();

if (ctx.isPointInPath(mouseX, mouseY)) {
	console.log('Hello!!6');
	return;
}

//7
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(800, 50);
	ctx.lineTo(800, 300);
	ctx.lineTo(600, 300);
	ctx.closePath();
	ctx.stroke();

	if (ctx.isPointInPath(mouseX, mouseY)) {
		console.log('Hello!!7');
		return;
	}

//8
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(800, 50);
	ctx.lineTo(800,300);
	ctx.lineTo(1000, 300);
	ctx.closePath();
	ctx.stroke();

	if (ctx.isPointInPath(mouseX, mouseY)) {
		console.log('Hello!!8');
		return;
	}

//9
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(800, 50);
	ctx.lineTo(1000, 50);
	ctx.lineTo(1000, 300);
	ctx.closePath();
	ctx.stroke();

	if (ctx.isPointInPath(mouseX, mouseY)) {
		console.log('Hello!!9');
		return;
	}

//10
	ctx.beginPath();
	ctx.strokeStyle = "#096";
	ctx.moveTo(1000, 50);
	ctx.lineTo(1200, 50);
	ctx.lineTo(1000, 300);
	ctx.closePath();
	ctx.stroke();

	if (ctx.isPointInPath(mouseX, mouseY)) {
		console.log('Hello!!10');
		return;
	}


}






$("#canvas").mousemove(function (e) {
	handleMouseMove(e);
});




































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