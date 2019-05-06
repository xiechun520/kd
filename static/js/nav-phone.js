$(function () {
	
/*手机菜单按钮特效*/
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	var pbuttons = document.querySelectorAll(".nav-phone-button");
	if (pbuttons.length > 0) {
	  forEach(pbuttons, function(pbutton) {
		pbutton.addEventListener("click", function() {
		  this.classList.toggle("is-active");
		}, false);
	  });
	}
	
//手机菜单导航
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.menup1');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.menup2-ul').not($next).slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('#nav-phone-id'), false);
	$('.menup2').click(function () {
		$(this).next(".menup3-ul").slideToggle();
		$(this).toggleClass('open1');
	});
	$('.nav-phone-button').click(function () {
		$('.nav-phone').slideToggle();
	});
//手机导航结束
});