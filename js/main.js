'use strict';
$(function () {
	$(".bg-1").mouseenter(function (event) {
		$('.bg-full').css('background-position', '0 -510px');
	});
	$(".bg-2").mouseenter(function (event) {
		$('.bg-full').css('background-position', '0 -1020px');
	});
	$(".bg-3").mouseenter(function (event) {
		$('.bg-full').css('background-position', '0 -1530px');
	});
  $(".bg-full").mouseleave(function (event) {
    $('.bg-full').css('background-position', '0px 0px');
  });

	var texto = $('#texto');
	var imagen = $('#imagen');
	var agenda = $('#agenda');
	var primera = $('.bg-1');
	var segunda = $('.bg-2');
	var tercera = $('.bg-3');

	primera.mouseenter(function () {
	    if(texto.css('display') == 'none') texto.css('opacity', '0');
	    texto.stop(true).show().animate({opacity: 1}, 400, function () { $(this).css('opacity', ''); });
	    setTimeout(function(){
	        texto.stop(true).fadeOut(200);
	    }, 500);
	});
	segunda.mouseenter(function(){
	    if(imagen.css('display') == 'none') imagen.css('opacity', '0');
	    imagen.stop(true).show().animate({opacity: 1}, 400, function () { $(this).css('opacity', ''); });
	    setTimeout(function(){
	        imagen.stop(true).fadeOut(200);
	    }, 500);
	});
	tercera.mouseenter(function(){
			if(agenda.css('display') == 'none') agenda.css('opacity', '0');
			agenda.stop(true).show().animate({opacity: 1}, 400, function () { $(this).css('opacity', ''); });
			setTimeout(function(){
					agenda.stop(true).fadeOut(200);
			}, 500);
	});
});
