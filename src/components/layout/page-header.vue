<template>
	<div>
		<header>
			<div class="w1200">
				<div class="logo">
					<a href="#"><img src="static/img/logo.png"></a>
				</div>
				<div class="header-right">
					<div class="hd-lj">
						<a href="javascript:void(0)" onclick="SetHome(this,window.location)"><i class="fa fa-home"></i>设为首页</a><span>|</span>
						<a href="javascript:void(0)" onclick="shoucang(document.title,window.location)"><i class="fa fa-plus-square"></i>加入收藏</a>
					</div>
					<div class="search">
						<input type="text" name="" id="" value="" class="search-box" placeholder="">
						<a href="#" class="search-click">搜索</a>
					</div>
				</div>
			</div>
		</header>
		<div class="nav" :class="{navpt:yc==1}" id="#nav">
				<nav id="nav-pc">
					<ul class="menu">
						<li>
							<router-link to="/">网站首页</router-link>
						</li>
						<li>
							<router-link to="/news">医院概述<i class="fa fa-angle-down"></i></router-link>
							<ul class="sub-menu">
								<li>
									<a href="#">医院介绍</a>
								</li>
								<li>
									<a href="#">现任领导</a>
								</li>
								<li>
									<a href="#">院史博览</a>
								</li>
								<li>
									<a href="#">院容院貌</a>
								</li>
								<li>
									<a href="#">医院文化</a>
								</li>
								<li>
									<a href="#">医院荣誉</a>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/pro">新闻中心<i class="fa fa-angle-down"></i></router-link>
							<ul class="sub-menu">
								<li>
									<a href="#">医院要闻</a>
								</li>
								<li>
									<a href="#">综合新闻</a>
								</li>
								<li>
									<a href="#">媒体聚焦</a>
								</li>
								<li>
									<a href="#">视频专区</a>
								</li>
								<li>
									<a href="#">精彩专题</a>
								</li>
								<li>
									<a href="#">电子院报</a>
								</li>
								<li>
									<a href="#">病友飞鸿</a>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/pro">通知公告<i class="fa fa-angle-down"></i></router-link>
							<ul class="sub-menu">
								<li>
									<a href="#">院内通知</a>
								</li>
								<li>
									<a href="#">学术讲座</a>
								</li>
								<li>
									<a href="#">招标公告</a>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/pro">病友服务<i class="fa fa-angle-down"></i></router-link>
							<ul class="sub-menu">
								<li>
									<a href="#">预约挂号</a>
								</li>
								<li>
									<a href="#">出诊时间</a>
								</li>
								<li>
									<a href="#">结果查询</a>
								</li>
								<li>
									<a href="#">医保之窗</a>
								</li>
								<li>
									<a href="#">来院路线</a>
								</li>
								<li>
									<a href="#">院内导航</a>
								</li>
								<li>
									<a href="#">健康体检</a>
								</li>
								<li>
									<a href="#">健康知识</a>
								</li>
							</ul>
						</li>
						<li>
							<router-link to="/pro">交流合作<i class="fa fa-angle-down"></i></router-link>
							<ul class="sub-menu">
								<li>
									<a href="#">社会事务</a>
								</li>
								<li>
									<a href="#">国际交流</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
			<div class="path w1200">
				当前位置 : <a href="#">主页</a><span>&gt;</span><a href="#">客户案例</a>
			</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
	  name: 'page-header',
	   data(){
	  	return{
	  		yc:null
	  	}
	  },
	  
	  mounted () {
		  window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed () {
		    window.removeEventListener('scroll', this.scrollToTop); 
		},
	  created(){
		this.scrollToTop()
		},
		methods:{
			scrollToTop(el) {
				var that = this
			    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			    if (scrollTop > 150) {
			    	that.yc = true
			    } else {
			    	that.yc = false
			    }
			}
		}
	}
</script>

<style scoped>
.nav {
	position: inherit;
	display: table;
	width: 1200px;
	margin: auto;
}
.navpt {
	position: fixed;
	top: 0px;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	width: 1200px;
	background: rgba(94, 94, 94, 0.9);
}
/*当前位置*/
.path {
	height: 45px;
	line-height: 45px;
}
.path span {
	font-family: "宋体";
	margin: 0px 5px;
}


</style>