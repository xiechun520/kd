<template>
	<div>
		<Apppageh/>
		<div class="news1 w1200">
			<div class="news1-l">
				<h2><router-link to="/news">医院要闻</router-link> <router-link to="/news" class="link">更多 ></router-link></h2>
				<ul>
					<li v-for="(x,index) in news" :key="index">
						<a :href="x.url">{{x.title}}<span>04-21</span></a>
					</li>
				</ul>
			</div>
			<div class="news1-r">
				<div id="imgContainer">
					<img v-for="(img, index) in newsbanner" :key="index" :src="img.picUrl" />
				</div>
			</div>
		</div>
		<div class="bk20"></div>
		<div class="news2 w1200">
			<div class="news2-l">
				<div class="news2-1">
					<div class="news2-n">
						<h2><a href="#">医院要闻</a> <a href="#" class="link">更多 ></a></h2>
						<ul>
							<li v-for="(x,index) in news" :key="index">
						<a :href="x.url">{{x.title}}<span>04-21</span></a>
					</li>
						</ul>
					</div>
					<div class="news2-n">
						<h2><a href="#">医院要闻</a> <a href="#" class="link">更多 ></a></h2>
						<ul>
							<li v-for="(x,index) in news" :key="index">
						<a :href="x.url">{{x.title}}<span>04-21</span></a>
					</li>
						</ul>
					</div>
				</div>
				<div class="bk20"></div>
				<div class="fw-xw">
					<div class="fw-tab">
						<a href="#" @mouseover="temp=1" :class="{on:temp==1}">医院要问</a>
						<a href="#" @mouseover="temp=2" :class="{on:temp==2}">综合新闻</a>
					</div>
					<div class="fw-list">
						<ul v-show="temp==1">
							<li v-for="(im,index) in news" :key="index">
								<a href="#">
									<p>{{im.title}}</p>
									<span>11-30</span></a>
							</li>
							
							
						</ul>
						<ul v-show="temp==2">
							<li v-for="(im,index) in news1" :key="index">
								<a href="#">
									<p>{{im.title}}</p>
									<span>11-30</span></a>
							</li>
							
						</ul>
					</div>
				</div>
				<div class="bk20"></div>
				<div class="fw-xw">
					<div class="fw-tab">
						<a href="#" @mouseover="cur=1" :class="{on:cur==1}">医院要问</a>
						<a href="#" @mouseover="cur=2" :class="{on:cur==2}">综合新闻</a>
					</div>
					<div class="fw-list">
						<ul v-show="cur==1">
							<li v-for="(im,index) in news" :key="index">
								<a href="#">
									<p>{{im.title}}</p>
									<span>11-30</span></a>
							</li>
						</ul>
						<ul v-show="cur==2">
							<li v-for="(im,index) in news1" :key="index">
								<a href="#">
									<p>{{im.title}}</p>
									<span>11-30</span></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="news2-r">
				<div class="news1-l">
					<h2><a href="#">医院要闻</a> <a href="#" class="link">更多 ></a></h2>
					<ul>
						<li v-for="(x,index) in news.slice(0, 4)" :key="index">
						<a :href="x.url">{{x.title}}<span>04-21</span></a>
					</li>
					</ul>
				</div>
				<div class="bk20"></div>
				<div class="fw2-xw">
					<div class="fw2-tab">
						<a href="#" @mouseover="por=1" :class="{on:por==1}">医院要问</a>
						<a href="#" @mouseover="por=2" :class="{on:por==2}">综合新闻</a>
					</div>
					<div class="fw2-list">
						<ul v-show="por==1">
							<li v-for="(im,index) in news.slice(0, 7)" :key="index">
								<a href="#">
									<p>{{im.title}}</p>
									<span>11-30</span></a>
							</li>
						</ul>
						<ul v-show="por==2">
							<li v-for="(im,index) in news1.slice(0, 7)" :key="index">
								<a href="#">
									<p>{{im.title}}</p>
									<span>11-30</span></a>
							</li>
						</ul>
					</div>
				</div>
				<div class="bk20"></div>
				<div class="yw">
					<h2><a href="#">医院要闻</a> <a href="#" class="link">更多 ></a></h2>
					<div class="yw-l">
						<a href="#"><img src="static/img/bao01.jpg" /></a>
					</div>
					<div class="yw-r">
						<a v-for="(im,index) in zk" :key="index">
				    {{ im }}
				    </a>
					</div>
				</div>
			</div>
		</div>
		<div class="bk20"></div>
		<app-footer/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Apppageh from '@/components/layout/page-header.vue'
	import AppFooter from '@/components/layout/Footer.vue'
	import "../../../static/js/jquery-2.1.4.min.js"
	import "../../../static/js/imgSwitch.min.js"

	export default {
		name: 'News',
		components: {
			Apppageh,
			AppFooter
		},
		data() {
			return {
				temp: 1,
				cur: 1,
				por: 1,
				newsbanner: [{
						"picUrl": "static/img/n1.jpg"
					},
					{
						"picUrl": "static/img/n2.jpg"
					},
					{
						"picUrl": "static/img/n3.jpg"
					},
					{
						"picUrl": "static/img/n4.jpg"
					},
				],
				news: [{
						"title": "翟晓川：对外援限制不佳，仍有机会赢下系列赛",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/11/2019/0331/098CE46F10F80BF7729B165ECE72BFD4014BA2F7_size45_w550_h250.jpeg",
						"url": "http://sports.ifeng.com/a/20190331/60503426_0.shtml"
					},
					{
						"title": "杜锋笑了！广东横扫苏州 连续17赛季晋级CBA半决赛",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/01/2019/0330/216B8369F896285BD5BB1737F552BF246CB31D29_size118_w657_h402.png",
						"url": "http://sports.ifeng.com/a/20190330/60564553_0.shtml"
					},
					{
						"title": "担任清华男篮主帅，陈磊要打造防守之师",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/09/2019/0330/DCBC1C1B2E128D848303B52AF6C3B1343FCBE3F2_size53_w660_h300.jpeg",
						"url": "http://sports.ifeng.com/a/20190330/60564433_0.shtml"
					},
					{
						"title": "33分13助攻8板，新疆终于找对了外援，他让总决赛MVP坐穿板凳！",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/04/2019/0329/4E8B2DAF6DD842A4853F86ABD30884AA861FBA33_size30_w640_h422.jpeg",
						"url": "http://sports.ifeng.com/a/20190329/60473586_0.shtml"
					},
					{
						"title": "2-0！费尔德和李根爆发合砍60分 新疆再胜广厦",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/02/2019/0328/0F1328FAE35E510B8AB8C9414645499B1B770D44_size520_w680_h432.png",
						"url": "http://sports.ifeng.com/a/20190328/60502920_0.shtml"
					},
					{
						"title": "4个2-0！CBA季后赛四强已无悬念，而接下来一轮对决才是重头戏",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/10/2019/0328/2B02DFF8A92B6790B131180989A6F59FD77D44E6_size57_w640_h435.jpeg",
						"url": "http://sports.ifeng.com/a/20190328/60532578_0.shtml"
					},
					{
						"title": "三节打卡下班！辽宁大胜福建夺赛点 郭艾伦25分王哲林24分",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/07/2019/0328/8699D72368AB509998954DDEAD2E8FB7DDB48A16_size47_w616_h501.jpeg",
						"url": "http://sports.ifeng.com/a/20190328/60564003_0.shtml"
					},
					{
						"title": "2-0！辽宁20分大胜福建 郭少砍25 8 6",
					}
				],
				news1: [{
						"title": "对外援限制不佳，仍有机会赢下系列赛",
					},
					{
						"title": "广东横扫苏州 连续17赛季晋级CBA半决赛",
					},
					{
						"title": "担任清华男篮主帅，陈磊要打造防守之师",
					},
					{
						"title": "新疆终于找对了外援，他让总决赛MVP坐穿板凳！",
					},
					{
						"title": "爆发合砍60分 新疆再胜广厦",
					},
					{
						"title": "而接下来一轮对决才是重头戏",
					},
					{
						"title": "辽宁大胜福建夺赛点 郭艾伦25分王哲林24分",
					},
					{
						"title": "辽宁20分大胜福建 郭少砍25 8 6",
					}
				],
				zk: {
			      1: '第189期',
			      2: '第190期',
			      3: '第191期',
			      4: '第192期',
			      5: '第193期',
			      6: '第194期',
			      7: '第195期',
			      8: '第196期',
			      9: '第197期',
			      10: '第198期',
			      11: '第199期',
			      12: '第200期',
			    }
			}
		},
		mounted() {
		}

	}
</script>

<style>
	.news1 {
		padding: 0px 0px 20px 0px;
	}
	
	.news1-l {
		width: 30%;
		float: left;
		padding: 20px 30px 20px 20px;
		background: #ffffff;
	}
	
	.news1-l h2,
	.yw h2 {
		border-bottom: 1px solid #e1e1e1;
	}
	
	.news1-l h2 a,
	.yw h2 a {
		display: inline-block;
		padding: 7px 20px;
		font-size: 16px;
		background: #43aea6;
		color: #ffffff;
	}
	
	.news1-l h2 a.link,
	.yw h2 a.link {
		font-size: 13px;
		background: none;
		padding: 0px;
		font-family: '宋体';
		float: right;
		color: #333;
		margin-top: 10px;
	}
	
	.news1-l h2 a.link:hover,
	.yw h2 a.link:hover {
		color: #43aea6;
	}
	
	.news1-l li {
		height: 35px;
		line-height: 35px;
		border-bottom: 1px dashed #e1e1e1;
	}
	
	.news1-l li a {
		display: inline-block;
		width: 100%;
		height: 35px;
		line-height: 35px;
		position: relative;
		padding-right: 60px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.news1-l li a span {
		position: absolute;
		top: 0px;
		right: 10px;
		font-size: 13px;
		color: #888888;
	}
	
	.news1-r {
		width: 70%;
		float: left;
	}
	
	#imgContainer {
		width: 840px;
		height: 356px;
		overflow: hidden;
		position: relative;
	}
	
	#imgContainer img {
		display: none;
	}
	
	#imgMask {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	#imgMask .range {
		float: left;
		position: relative;
	}
	
	#imgMask .range div {
		position: absolute;
		left: 0;
		top: 0;
	}
	
	#imgContainer .pageBar {
		position: absolute;
		z-index: 99;
		right: 10px;
		bottom: 10px;
	}
	
	#imgContainer .pictureBar {
		z-index: 99;
	}
	
	.pageBar img,
	.pictureBar img {
		display: block !important;
		float: left;
		border: 1px solid #666;
		margin: 0px 2px 2px 2px;
		filter: alpha(opacity=50);
		-moz-opacity: .5;
		opacity: .5;
	}
	
	.pageBar img.current,
	.pictureBar img.current {
		filter: alpha(opacity=100);
		-moz-opacity: 1;
		opacity: 1;
		display: block !important;
	}
	
	.pageBar a {
		display: block;
		background: #000;
		border: 1px solid #666;
		color: #fff;
		float: left;
		width: 16px;
		font-size: 12px;
		margin: 2px;
		text-align: center;
		line-height: 16px;
		font-family: Arial;
		cursor: pointer;
		text-decoration: none;
	}
	
	.pageBar a:hover,
	.pageBar a.current {
		background: #43aea6;
		color: #fff;
	}
	
	.news2-l {
		width: 68%;
		float: left;
		background: #ffffff;
		padding: 17px 20px;
	}
	
	.news2-1 {
		width: 100%;
		display: flex;
		-webkit-display: flex;
		-moz-display: flex;
		-o-display: flex;
		justify-content: space-between;
		-wewblit-justify-content: space-between;
		-moz-justify-content: space-between;
		-o-justify-content: space-between;
	}
	
	.news2-n {
		width: 48%;
	}
	
	.news2-n h2 {
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 5px;
	}
	
	.news2-n h2 a {
		display: inline-block;
		padding: 7px 20px;
		font-size: 16px;
		background: #43aea6;
		color: #ffffff;
	}
	
	.news2-n h2 a.link {
		font-size: 13px;
		background: none;
		padding: 0px;
		font-family: '宋体';
		float: right;
		color: #333;
		margin-top: 10px;
	}
	
	.news2-n h2 a.link:hover {
		color: #43aea6;
	}
	
	.news2-n li {
		height: 35px;
		line-height: 35px;
		border-bottom: 1px dashed #e1e1e1;
	}
	
	.news2-n li a {
		display: inline-block;
		width: 100%;
		height: 35px;
		line-height: 35px;
		position: relative;
		padding-right: 60px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	
	.news2-n li a span {
		position: absolute;
		top: 0px;
		right: 10px;
		font-size: 13px;
		color: #888888;
	}
	
	.fw-tab,
	.fw1-tab,
	.fw2-tab {
		border-bottom: 1px solid #e1e1e1;
	}
	
	.fw-tab a,
	.fw1-tab a,
	.fw2-tab a {
		font-size: 17px;
		color: #43aea6;
		display: inline-block;
		font-weight: bold;
		padding: 9px 25px;
		margin-right: 10px;
	}
	
	.fw-tab a.on,
	.fw1-tab a.on,
	.fw2-tab a.on {
		color: #ffffff;
		background: #43aea6;
	}
	
	.fw-list,
	.fw1-list,
	.fw2-list {
		padding: 15px 0px;
		overflow: hidden;
	}
	
	.fw-list li,
	.fw1-list li {
		width: 48%;
		float: left;
		margin-right: 2%;
	}
	
	.fw-list li a,
	.fw1-list li a,
	.fw2-list li a {
		border-bottom: 1px dotted #d3d3d3;
		display: inline-block;
		width: 100%;
		height: auto;
		padding: 9px 55px 9px 0px;
		position: relative;
	}
	
	.fw-list li a p,
	.fw1-list li a p,
	.fw2-list li a p {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.fw-list li a span,
	.fw1-list li a span,
	.fw2-list li a span {
		position: absolute;
		top: 12px;
		right: 5px;
		font-size: 12px;
		color: #888;
	}
	
	.news2-r {
		width: 30%;
		margin-left: 2%;
		float: left;
		padding: 20px;
		overflow: hidden;
		background: #ffffff;
	}
	
	.news2-r .news1-l {
		width: 100%;
		padding: 0px;
	}
	
	.yw h2 {
		margin-bottom: 15px;
	}
	
	.yw-l {
		width: 40%;
		float: left;
	}
	
	.yw-r {
		width: 60%;
		float: left;
		padding-left: 20px;
	}
	
	.yw-r a {
		display: inline-block;
		width: 50%;
		float: left;
		padding: 7px 0px 7px 25px;
		position: relative;
	}
	
	.yw-r a:before {
		position: absolute;
		top: -28px;
		left: 5px;
		content: '.';
		font-size: 45px;
		width: 5px;
		height: 5px;
	}
</style>