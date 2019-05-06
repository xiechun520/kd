$(function(){
	$(".mcbox .tab a").eq(0).addClass('on').siblings().removeClass('on');
	$(".mcbox .tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.mcbox .list ul').eq(index).show().siblings().hide();
	});
	
	var auto = 0;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.mcbox .tab a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.mcbox .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.mcbox .list ul').eq(number).show().siblings().hide();
		}
		var tabChange = setInterval(autotab,3000);
		//鼠标悬停暂停切换
		$('.mcbox').mouseover(function(){
			clearInterval(tabChange);
		});
		$('.mcbox').mouseout(function(){
			tabChange = setInterval(autotab,3000);
		});
	  }
});

$(function(){
	$(".dh-tab p").eq(0).addClass('on').siblings().removeClass('on');
	$(".dh-list ul").eq(0).show().siblings().hide();
	$(".dh-tab p").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.dh-list ul').eq(index).show().siblings().hide();
	});
});
$(function(){
	$(".fw-tab a").eq(0).addClass('on').siblings().removeClass('on');
	$(".fw-list ul").eq(0).show().siblings().hide();
	$(".fw-tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.fw-list ul').eq(index).show().siblings().hide();
	});
});
$(function(){
	$(".fw1-tab a").eq(0).addClass('on').siblings().removeClass('on');
	$(".fw1-list ul").eq(0).show().siblings().hide();
	$(".fw1-tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.fw1-list ul').eq(index).show().siblings().hide();
	});
});
$(function(){
	$(".fw2-tab a").eq(0).addClass('on').siblings().removeClass('on');
	$(".fw2-list ul").eq(0).show().siblings().hide();
	$(".fw2-tab a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.fw2-list ul').eq(index).show().siblings().hide();
	});
});

/*折叠式导航开始*/
$(function () {
     $(".ys .bys").eq(0).addClass('bh').siblings().removeClass('bh');
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.cys');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var jQueryel = e.data.el;
			jQuerythis = $(this),
			jQuerynext = jQuerythis.next();

		jQuerynext.addClass('bh');

		if (!e.data.multiple) {
			jQueryel.find('.bys').not(jQuerynext).removeClass('bh');
		};
	}	
	var accordion = new Accordion($('.ys'), false);
	
});
/*折叠式导航结束*/