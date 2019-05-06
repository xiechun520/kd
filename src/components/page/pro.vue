<template>
	<div>
		<Apppageh/>
		<div class="page w1200" id="app">
		<div class="page-l">
				<h2><i class="fa fa-bank"></i> 通知公告</h2>
				<div class="page-l1">
					<ul>
						<li><a href="#">院内通知 <i class="fa fa-angle-right"></i></a></li>
						<li><a href="#">院内通知 <i class="fa fa-angle-right"></i></a></li>
						<li><a href="#">院内通知 <i class="fa fa-angle-right"></i></a></li>
					</ul>
				</div>
				<div class="bk20"></div>
				<div class="bylb">
					<h3>病友服务</h3>
					<ul>
						<li><a href="#">预约挂号</a></li>
						<li><a href="#">出诊时间</a></li>
						<li><a href="#">结果查询</a></li>
						<li><a href="#">医保之窗</a></li>
						<li><a href="#">来院路线</a></li>
						<li><a href="#">院内导航</a></li>
						<li><a href="#">健康体检</a></li>
						<li><a href="#">健康知识</a></li>
					</ul>
				</div>
			</div>
			<div class="page-r">
				<h2>院内通知</h2>
				<ul>
					<li v-for="(nt, index) in notice" :key="nt.id">
						<router-link :to="{path:'/content',query:{ id:index }}">
							{{nt.title}} <span>4.02</span>
						</router-link>
						<!--<a :href="nt.url">{{nt.title}} <span>4.02</span></a>-->
					</li>
				</ul>
			</div>
		</div>
		<div class="bk20"></div>
		<AppFooter/>
	</div>
</template>


<script>
	import Vue from 'vue';
	import Apppageh from '@/components/layout/page-header.vue'
	import AppFooter from '@/components/layout/Footer.vue'
	export default {
		name: 'pro',
		components: {
			Apppageh,
			AppFooter
		},
		data(){
			return{
				notice: [{
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
				]
			}
		}
	}

</script>

<style>
	.page {
	overflow: hidden;
}

.page-l {
	width: 20%;
	float: left;
	margin-right: 2%;
}

.page-l h2 {
	font-weight: 500;
	height: 70px;
	line-height: 70px;
	background: #43aea6;
	padding: 0px 20px;
	color: #ffffff;
	font-size: 18px;
	border-radius: 25px 25px 0px 0px;
}

.page-l h2 i {
	font-size: 20px;
}

.page-l1 {
	overflow: hidden;
	border: 1px solid #E1E1E1;
	background: #ffffff;
}

.page-l1 li a {
	font-size: 16px;
	display: inline-block;
	width: 100%;
	height: 40px;
	line-height: 40px;
	padding: 0px 30px 0px 20px;
	border-bottom: 1px solid #e1e1e1;
	position: relative;
}

.page-l1 li a i {
	position: absolute;
	top: 10px;
	right: 15px;
	font-size: 22px;
	color: #43aea6;
}

.page-l1 li a:hover {
	background: #43AEA6;
	color: #ffffff;
}

.page-l1 li a:hover i {
	color: #ffffff;
}

.bylb h3 {
	font-size: 18px;
	font-weight: 500;
	height: 45px;
	line-height: 45px;
	padding: 0px 20px;
	/*background-image: url(../img/bybtbg.jpg);*/
	border: 1px solid #e1e1e1;
}

.bylb ul {
	overflow: hidden;
	background: #FFFFFF;
	padding: 15px;
	display: flex;
	-webkit-display: flex;
	-moz-display: flex;
	-o-display: flex;
	justify-content: space-between;
	-webkit-justify-content: space-between;
	-moz-justify-content: space-between;
	-o-justify-content: space-between;
	flex-flow: row wrap;
	-webkit-flex-flow: row wrap;
}

.bylb ul li {
	width: 47%;
	height: 35px;
	margin: 6px 0px;
}

.bylb ul li a {
	display: inline-block;
	text-align: center;
	width: 100%;
	height: 35px;
	line-height: 35px;
	background: #EEEEEE;
}

.bylb ul li a:hover {
	background: #43AEA6;
	color: #ffffff;
}

.page-r,
.page1-r {
	width: 78%;
	float: left;
	overflow: hidden;
	background: #ffffff;
	padding: 20px;
}

.page-r h2,
.page1-r h2 {
	font-size: 17px;
	border-bottom: 1px solid #E1E1E1;
	padding: 0px 0px 10px 15px;
	font-weight: 500;
	position: relative;
}

.page-r h2:before,
.page1-r h2:before {
	content: '';
	position: absolute;
	top: 96%;
	left: 0px;
	width: 100px;
	height: 2px;
	background: #43aea6;
}

.page-r li {
	border-bottom: 1px dashed #e1e1e1;
}

.page-r li a {
	display: block;
	height: 45px;
	line-height: 45px;
	padding: 0px 80px 0px 10px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	position: relative;
}

.page-r li a span {
	position: absolute;
	top: 0px;
	right: 10px;
	color: #888888;
}

.content {
	line-height: 24px;
	padding: 20px 0px;
}

.content img {
	margin: 10px 0px;
}
</style>