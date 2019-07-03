/**
 * jQuery jslides_full 1.1.0
 *
 * http://www.cactussoft.cn
 *
 * Copyright (c) 2009 - 2013 Jerry
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
$(function(){
	var numpic = $('#slides_full li').size()-1;
	var nownow = 0;
	var inout = 0;
	var TT = 0;
	var SPEED = 8000;


	//$('#slides_full li').eq(0).siblings('li').css({'display':'none'});

	$('#slides_full li').eq(0).css({'display':'block'});
	
	var ulstart = '<ul id="pagination_full">',
		ulcontent = '',
		ulend = '</ul>';
	ADDLI();
	var pagination_full = $('#pagination_full li');
	var pagination_fullwidth = $('#pagination_full').width();
	$('#pagination_full').css('margin-left',(95-pagination_fullwidth))
	
	pagination_full.eq(0).addClass('current')
		
	function ADDLI(){
		//var lilicount = numpic + 1;
		for(var i = 0; i <= numpic; i++){
			ulcontent += '<li>' + '<a href="javascript:;">' + (i+1) + '</a>' + '</li>';
		}
		
		$('#slides_full').after(ulstart + ulcontent + ulend);	
	}

	pagination_full.on('click',DOTCHANGE)
	
	function DOTCHANGE(){
		
		var changenow = $(this).index();
		
		$('#slides_full li').eq(nownow).css('z-index','900');
		$('#slides_full li').eq(changenow).css({'z-index':'800'}).show();
		pagination_full.eq(changenow).addClass('current').siblings('li').removeClass('current');
		$('#slides_full li').eq(nownow).fadeOut(400,function(){$('#slides_full li').eq(changenow).fadeIn(500);});
		nownow = changenow;
	}
	
	pagination_full.mouseenter(function(){
		inout = 1;
	})
	
	pagination_full.mouseleave(function(){
		inout = 0;
	})
	
	function GOGO(){
		
		var NN = nownow+1;
		
		if( inout == 1 ){
			} else {
			if(nownow < numpic){
			$('#slides_full li').eq(nownow).css('z-index','900');
			$('#slides_full li').eq(NN).css({'z-index':'800'}).show();
			pagination_full.eq(NN).addClass('current').siblings('li').removeClass('current');
			$('#slides_full li').eq(nownow).fadeOut(400,function(){$('#slides_full li').eq(NN).fadeIn(500);});
			nownow += 1;

		}else{
			NN = 0;
			$('#slides_full li').eq(nownow).css('z-index','900');
			$('#slides_full li').eq(NN).stop(true,true).css({'z-index':'800'}).show();
			$('#slides_full li').eq(nownow).fadeOut(400,function(){$('#slides_full li').eq(0).fadeIn(500);});
			pagination_full.eq(NN).addClass('current').siblings('li').removeClass('current');

			nownow=0;

			}
		}
		TT = setTimeout(GOGO, SPEED);
	}
	
	TT = setTimeout(GOGO, SPEED); 

})