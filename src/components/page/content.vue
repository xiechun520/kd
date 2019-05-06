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
			<div class="page1-r">
				<h2>{{newsinfo.description}}</h2>
				<div class="content">
					<h3 style="text-align: center;padding: 10px 0px;">{{newsinfo.title}}</h3>
					<img :src="newsinfo.picUrl"/>
				</div>
				
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
	import { apiAddress} from '@/api/api';// 导入我们的api接
	export default {
		name: 'content',
		components: {
			Apppageh,
			AppFooter
		},
		created: function() {
		    var newsID=this.$route.query.id;
		    var that = this ;
		    apiAddress({                    
	                /*type: 0,                    
	                sort: 1  */              
	            }).then(res => {
	                console.log(res.newslist[newsID]);
	                that.newsinfo = res.newslist[newsID]; 
	            })
		},
		data(){
			return{
				newsinfo:{}
				
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