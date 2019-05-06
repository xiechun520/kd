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
		<div class=" text-center w1200 huadong fadeInUp">
			<div class="nav" :class="{navpt:yc}">
				<nav id="nav-pc">
					<ul class="menu">
						<li>
							<router-link to="/">网站首页</router-link>
						</li>
						<li>
							<router-link to="/news">医院概述<i class="fa fa-angle-down"></i></router-link>
							<ul class="sub-menu">
								<li>
									<router-link to="/content">医院介绍</router-link>
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
									<router-link to="/newsl">医院要闻</router-link>
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
			<div class="slider">
				<yd-slider autoplay="3000">
					<yd-slider-item v-for="(item,index) in banner">
						<a>
							<img :src="item.bannerpic">
						</a>
					</yd-slider-item>
				</yd-slider>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Slider, SliderItem } from 'vue-ydui/dist/lib.rem/slider';
	Vue.component(Slider.name, Slider);
	Vue.component(SliderItem.name, SliderItem);
	export default {
		data(){
			return {
				yc:true,
				banner: [{
						bannerurl: "#",
						bannerpic: "static/img/banner1.jpg"
					},
					{
						bannerurl: "#",
						bannerpic: "static/img/banner2.jpg"
					},
				]
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

<style>

</style>