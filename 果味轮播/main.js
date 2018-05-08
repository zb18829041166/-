$(document).ready(function(){	
	var totWidth=0;
	var positions = new Array();
	
	$('#slides .slide').each(function(i){
		
		/* 遍历幻灯片，将累计宽度放在totWidth */
		
		positions[i]= totWidth;
		totWidth += $(this).width();
		
		/*位置数据包括每张图片左移位置*/
		
		if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
		
	});
	
	$('#slides').width(totWidth);

	/* 将容器宽度更改为所有幻灯片的宽度*/

	$('#menu ul li a').click(function(e,keepScroll){

			/* 点击缩略图 */

			$('li.menuItem').removeClass('act').addClass('inact');
			$(this).parent().addClass('act');
			
			var pos = $(this).parent().prevAll('.menuItem').length;
			
			$('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);
			/* 开始滑动动画 */
			
			e.preventDefault();
			/* 防止链接默认操作 */
			
			
			// 如果点击图标，停止自动向前:
			if(!keepScroll) clearInterval(itvl);
	});
	
	$('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
	/* 页面开始加载的时候，第一个缩略图标记为 active */
	
	
	
	/*****
	 *
	 *	启动自动前进
	 *
	 ****/
	 
	var current=1;
	function autoAdvance()
	{
		if(current==-1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);	// [true] will be passed as the keepScroll parameter of the click function on line 28
		current++;
	}

	// 滑块将要自动前进的秒数:
	var changeEvery = 3;
	var itvl = setInterval(function(){autoAdvance()},changeEvery*1000);
});