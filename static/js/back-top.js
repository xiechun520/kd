/*智能悬浮层开始*/
$(function () {
	$(window).scroll(function() {
		var scrolltop = $(this).scrollTop();
		if(scrolltop >= 120) {
			$(".nav").addClass('navtop');//菜单浮动层
			$("#back-to-top").css("display","block");
			$("#back-to-top").click(function(){
				$("html,body").stop().animate({ scrollTop: 0 }, 500)
			});
		} else {
			$(".nav").removeClass('navtop');
			$(".header").removeClass('nav-top');
			$("#back-to-top").hide();
		};
	});
});

function addFavorite2() {
      var url = window.location;
      var title = document.title;
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("360se") > -1) {
          alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
      }
      else if (ua.indexOf("msie 8") > -1) {
          window.external.AddToFavoritesBar(url, title); //IE8
     }
     else if (document.all) {
   try{
    window.external.addFavorite(url, title);
   }catch(e){
    alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
   }
     }
     else if (window.sidebar) {
         window.sidebar.addPanel(title, url, "");
20     }
21     else {
22   alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
23     }
24 }