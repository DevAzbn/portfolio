var iface = {
	
	setActive:function(el, active){
		if(active) {
			el.addClass('active');
		} else {
			el.removeClass('active');
		}
	},
	
}

$(document).ready(function() {
	
	/*
	setTimeout(function(){
		$('body').addClass('active');
	},50);
	*/
	
	$(function(){
		var style = $('#fecss-compiled-style');
		if(window.location.hash == '#debug') {
			$('<link rel="stylesheet/less" type="text/css" href="css/root.less?update=201509210901" /><script src="js/less.min.js"></script>').insertAfter(style);
			style.empty().remove();
		}
	});
	
	
	$('.menu .menu-list li a')
		.on('click',function(event){
			event.preventDefault();
			var btn = $(this);
			var href = btn.attr('href');
			iface.setActive($('.menu .menu-list li'), false);
			iface.setActive($('.content .item-block'), false);
			//$('.menu .menu-list li').removeClass('active');
			//$('.content .item-block').removeClass('active');
			iface.setActive(btn.parent(), true);
			iface.setActive($(href), true);
			//btn.parent().addClass('active');
			//$(href).addClass('active');
			$('.content').addClass('xs-active');
		})
		;
	
	$(function(){
		var item_list = $('.menu .menu-list li a[href="' + window.location.hash + '"]');
		var size = item_list.size();
		if(size) {
			item_list.eq(0).trigger('click');
		} else {
			$('.menu .menu-list li a').eq(0).trigger('click');
		}
	});
	
	
	$('.item-block .menu-btn')
		.on('click',function(event){
			event.preventDefault();
			var btn = $(this);
			$('.content').removeClass('xs-active');
		})
		;
	
	$('.item .title .main_info .close-btn')
		.on('click',function(event){
			event.preventDefault();
			var btn = $(this);
			btn.parent().parent().find('a.title-link').eq(0).trigger('click');
		})
		;
	
	$('.dyn-text-container .item .title a.title-link')
		.on('click',function(event){
			event.preventDefault();
			var btn = $(this);
			if(btn.hasClass('active')) {
				$('.dyn-text-container .item').removeClass('passive');
				btn.parent().parent().removeClass('passive');
				$('.item-block .menu-btn').removeClass('passive');
				btn.removeClass('active');
			} else {
				$('.dyn-text-container .item').addClass('passive');
				btn.parent().parent().removeClass('passive');
				$('.item-block .menu-btn').addClass('passive');
				btn.addClass('active');
			}
		})
		;
	
	$('.page-loader .close-loader').on('click',function(event){
		event.preventDefault();
		$('.page-loader').removeClass('active');
	});
	$(window).load(function(event){
		$('.page-loader').removeClass('active');
	});
	
});