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

	$(primera).hover(function() {
    $(texto).stop(true, true).fadeTo(800, 1);
	},
	function() {
	    $(texto).stop(true, true).fadeTo(400, 0);
	});

	$(segunda).hover(function() {
	    $(imagen).stop(true, true).fadeTo(800, 1); //stop previous animations
	},
	function() {
	    $(imagen).stop(true, true).fadeTo(400, 0);
	});

	$(tercera).hover(function() {
			$(agenda).stop(true, true).fadeTo(800, 1); //stop previous animations
	},
	function() {
			$(agenda).stop(true, true).fadeTo(400, 0);
	});
});
