var fecss = {
	
	genGuideGrid:function(step){
		//step = step || 20;
		var x = 0, y = 0;
		while(x < screen.width) {
			$('<div/>',{
				class:'guide-line v-line',
			})
			.attr('data-left', x)
			.appendTo($('body.fe-dbg'));
			x = x + step;
		}
		while(y < screen.height) {
			$('<div/>',{
				class:'guide-line h-line',
			})
			.attr('data-top', y)
			.appendTo($('body.fe-dbg'));
			y = y + step;
		}
		this.rebuildGuideGrid();
	},
	
	rebuildGuideGrid:function() {
		$('.fe-dbg .guide-line.h-line').each(function(index){
			var top_val = $(this).attr('data-top');
			if(top_val != undefined) {
				$(this).css({top:top_val});
			} else {
				$(this).empty().remove();
			}
		});
		
		$('.fe-dbg .guide-line.v-line').each(function(index){
			var left_val = $(this).attr('data-left');
			if(left_val != undefined) {
				$(this).css({left:left_val});
			} else {
				$(this).empty().remove();
			}
		});
	},
	
	ajaxLoading:function() {
		
	},
	
}

$(document).ready(function() {
	
	fecss.rebuildGuideGrid();
	
	$('.fecss .image.box.contain').each(function(index){
		var img = $(this).attr('data-bgimg');
		if(img != undefined) {
			$(this).css({'background-image':'url('+img+')'});
		} else {
			
		}
	});
	
	$('.fecss .image.box.cover').each(function(index){
		var img = $(this).attr('data-bgimg');
		if(img != undefined) {
			$(this).css({'background-image':'url('+img+')'});
		} else {
			
		}
	});
	
});