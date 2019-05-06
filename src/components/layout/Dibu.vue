<template>
	<div class="fuwu w1200">
		<div class="fw-l huadong fadeInLeft">
			<div class="fw-l1">
				<h2>病友服务</h2>
				<ul>
					<li>
						<a href="#"><img src="static/img/ico1.png" />
							<p>预约挂号</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico2.png" />
							<p>出诊时间</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico3.png" />
							<p>停该诊通知</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico4.png" />
							<p>就诊指南</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico5.png" />
							<p>来院路线</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico6.png" />
							<p>院内导航</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico7.png" />
							<p>医保之窗</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico8.png" />
							<p>健康体检</p>
						</a>
					</li>
					<li>
						<a href="#"><img src="static/img/ico9.png" />
							<p>健康知识</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="ksdh">
				<h2>科室导航  <a href="#">更多></a></h2>
				<div class="dh-tab">
					<p @mouseover="temp=1" :class="{active:temp==1}">临床/医技科室</p>
					<p @mouseover="temp=2" :class="{active:temp==2}">医学/诊疗中心</p>
					<p @mouseover="temp=3" :class="{active:temp==3}">职能科室</p>
				</div>
				<div class="dh-list">
					<ul v-show="temp==1">
						<a href="#" class="btn btn-default btn-round">代谢内分泌科</a>
						<a href="#" class="btn btn-default btn-round">精神病学科</a>
						<a href="#" class="btn btn-default btn-round">心血管外科</a>
						<a href="#" class="btn btn-default btn-round">胸外科</a>
						<a href="#" class="btn btn-default btn-round">心血管内科</a>
						<a href="#" class="btn btn-default btn-round">风湿免疫科</a>
					</ul>
					<ul v-show="temp==2">
						<a href="#" class="btn btn-default btn-round">糖尿病中心</a>
						<a href="#" class="btn btn-default btn-round">血液净化中心</a>
						<a href="#" class="btn btn-default btn-round">肝病中心</a>
						<a href="#" class="btn btn-default btn-round">微创外科中心</a>
						<a href="#" class="btn btn-default btn-round">产前诊断中心</a>
						<a href="#" class="btn btn-default btn-round">眼病研究中心</a>
					</ul>
					<ul v-show="temp==3">
						<a href="#" class="btn btn-default btn-round">党委办公室</a>
						<a href="#" class="btn btn-default btn-round">医院办公室</a>
						<a href="#" class="btn btn-default btn-round">人力资源部</a>
						<a href="#" class="btn btn-default btn-round">医务部</a>
						<a href="#" class="btn btn-default btn-round">教务部</a>
						<a href="#" class="btn btn-default btn-round">科研部</a>
					</ul>
				</div>
			</div>
		</div>
		<div class="fw-r huadong fadeInRight">
			<div class="tab1">
				<div class="mcbox">
						<div class="tab">
							<div class="tab-dj" @mouseover="cur=1" :class="{active:cur==1}">
								<router-link to="baidu.com">医院要问</router-link>
							</div>
							<div class="tab-dj" @mouseover="cur=2" :class="{active:cur==2}">
								<router-link to="baidu.com">综合新闻</router-link>
							</div>
							<div class="tab-dj" @mouseover="cur=3" :class="{active:cur==3}">
								<router-link to="baidu.com">媒体资讯</router-link>
							</div>
						</div>
						<div class="list">
							<ul v-show="cur==1">
								<li v-for="(tab,index) in tablist" :key="index">
									<a :href="tab.url">
										<p>{{tab.title}}</p>
										<span>04-25</span>
									</a>
								</li>
							</ul>
							<ul v-show="cur==2">
								<li v-for="(tab,index) in tablist1" :key="index">
									<a :href="tab.url">
										<p>{{tab.title}}</p>
										<span>04-25</span>
									</a>
								</li>
							</ul>
							<ul v-show="cur==3">
								<li v-for="(tab,index) in tablist2" :key="index">
									<a :href="tab.url">
										<p>{{tab.title}}</p>
										<span>04-25</span>
									</a>
								</li>
							</ul>
							
						</div>
					</div>
			</div>
			
			
			<div class="ys">
				<div class="dj">
					<div class="cys" @click="tbc=1"><img src="static/img/ba.png" /></div>
					<div class="bys" :class="{bh:tbc==1}">
						<h2>国家科研平台</h2>
						<p>
							<a href="#">国家代谢性疾病临床医学研究中心</a>
						</p>
						<p>
							<a href="#">国家精神心理疾病临床医学研究中心</a>
						</p>
						<p>
							<a href="#">精神疾病诊治技术国家地方联合工程实验室</a>
						</p>
					</div>
				</div>
				<div class="dj">
					<div class="cys" @click="tbc=2"><img src="static/img/ft.png" /></div>
					<div class="bys" :class="{bh:tbc==2}">
						<h2>国家精品课程</h2>
						<p>
							<a href="#">国家代谢性疾病临床医学研究中心</a>
						</p>
						<p>
							<a href="#">国家精神心理疾病临床医学研究中心</a>
						</p>
						<p>
							<a href="#">精神疾病诊治技术国家地方联合工程实验室</a>
						</p>
					</div>
				</div>
				<div class="dj">
					<div class="cys" @click="tbc=3"><img src="static/img/gl.png" /></div>
					<div class="bys" :class="{bh:tbc==3}">
						<h2>重点学科</h2>
						<a href="#">代谢内分泌科</a>
						<a href="#">精神病学</a>
						<a href="#">胸心外科学</a>
						<a href="#">耳鼻咽喉科</a>
						<a href="#">神经病学</a>
						<a href="#">普通外科</a>
					</div>
				</div>
				<div class="dj">
					<div class="cys" @click="tbc=4"><img src="static/img/gz.png" /></div>
					<div class="bys" :class="{bh:tbc==4}">
						<h2>群英荟萃</h2>
						<p>
							<a href="#">国家代谢性疾病临床医学研究中心</a>
						</p>
						<p>
							<a href="#">国家精神心理疾病临床医学研究中心</a>
						</p>
						<p>
							<a href="#">精神疾病诊治技术国家地方联合工程实验室</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	
</template>

<script>
	import Vue from 'vue';
	import { apiAddress,apiAddress1,apiAddress2 } from '@/api/api';// 导入我们的api接口
	export default {
		name: 'Address', 
		data() {
			return {
				temp:1,
				cur:1,
				tbc:1,
				tablist: [
					{
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
				      "description": "CBA新闻",
				      "picUrl": "http://d.ifengimg.com/w145_h103/p1.ifengimg.com/2019_13/3AEEE74DF9EF56AB1F5FF3A5049D70DE39C8D669_w1024_h683.jpg",
				      "url": "http://sports.ifeng.com/a/20190328/60473438_0.shtml"
				    },
				    {
				      "title": "爆粗口回应谩骂！江苏总经理：不需要同情可怜 不接受批评",
				      "description": "CBA新闻",
				      "picUrl": "http://d.ifengimg.com/w145_h103/p3.ifengimg.com/2019_13/4416D39F773D4C412589E928ABB5F2150D2C3264_w391_h228.jpg",
				      "url": "http://sports.ifeng.com/a/20190328/60563967_0.shtml"
				    },
				    {
				      "title": "升国旗仪式时举止不庄重，首钢外援杰克逊挨罚",
				      "description": "CBA新闻",
				      "picUrl": "http://d.ifengimg.com/w145_h103/p0.ifengimg.com/2019_13/1BE7338CAF8CB71500D6C4AD513206AC603A24EB_w230_h152.png",
				      "url": "http://sports.ifeng.com/a/20190328/60563905_0.shtml"
				    }
				],
				tablist1: [
					{
				      "title": "封丘水岸油菜花海",
				      "description": "旅游资讯",
				      "picUrl": "https://img3.utuku.china.com/200x147/travel/20190411/da1570e6-3099-4101-acc9-a5cfdb4c4902.jpg",
				      "url": "https://travel.china.com/tour/11167035/20190411/35641450.html"
				    },
				    {
				      "title": "打卡苏州新地标：携程旅拍联手苏州文旅局共创文旅融合新格局",
				      "description": "旅游资讯",
				      "picUrl": "https://img2.utuku.china.com/200x147/travel/20190410/133ca2d9-c5cc-43f1-80b9-fda744f8c8fc.png",
				      "url": "https://travel.china.com/tour/11167035/20190410/35631849.html"
				    },
				    {
				      "title": "诚邀天下有心人 踏上最美“中纹”发现之旅",
				      "description": "旅游资讯",
				      "picUrl": "https://img2.utuku.china.com/200x147/travel/20190403/d37f29b5-1910-454a-bd97-a73d72df6c99.jpg",
				      "url": "https://travel.china.com/tour/11167035/20190403/35583381.html"
				    },
				    {
				      "title": "石公山居——还你现实版的“苏明玉”",
				      "description": "旅游资讯",
				      "picUrl": "https://img1.utuku.china.com/200x147/travel/20190329/05c58b59-69ce-4e23-bc0c-3d3bfab9201d.png",
				      "url": "https://travel.china.com/tour/11167035/20190329/35549365.html"
				    },
				    {
				      "title": "月入1.4万元：非洲90后导游工资翻同龄人4倍",
				      "description": "旅游资讯",
				      "picUrl": "https://img0.utuku.china.com/200x147/travel/20190329/d0eb2b99-4488-4503-8263-886773f78e91.jpg",
				      "url": "https://travel.china.com/tour/11167035/20190329/35544842.html"
				    },
				    {
				      "title": "故宫游添新看点 2千多件明清家具仓储式展览",
				      "description": "旅游资讯",
				      "picUrl": "https://img3.utuku.china.com/200x147/travel/20180920/cc9dc0e0-5189-4f97-a665-5e01b3c27115.jpg",
				      "url": "https://travel.china.com/hotspot/13000493/20180920/33958825.html"
				    },
				    {
				      "title": "2018北京国际商务及会奖旅游展开幕 全球350余家展商齐聚一堂",
				      "description": "旅游资讯",
				      "picUrl": "https://img3.utuku.china.com/200x147/travel/20180913/ad3cd024-21d7-4f5b-8f2d-c45a658fa12d.jpg",
				      "url": "https://travel.china.com/hotspot/13000493/20180912/33880235.html"
				    },
				    {
				      "title": "西夏陵全力冲刺申报世遗",
				      "description": "旅游资讯",
				      "picUrl": "https://img1.utuku.china.com/200x147/travel/20180912/5bb1e748-c764-4c48-9a27-199278b02b6c.jpg",
				      "url": "https://travel.china.com/hotspot/13000493/20180912/33874348.html"
				    },
				    {
				      "title": "中秋、国庆拼假花样多 长线游品质游受青睐",
				      "description": "旅游资讯",
				      "picUrl": "https://img1.utuku.china.com/200x147/travel/20180912/c1a51f8c-f500-4ace-9d98-1c9e8a69d450.jpg",
				      "url": "https://travel.china.com/hotspot/13000493/20180912/33874249.html"
				    },
				    {
				      "title": "秘鲁旅游业可持续发展之路：对地球保有深沉的爱和尊敬",
				      "description": "旅游资讯",
				      "picUrl": "https://img1.utuku.china.com/200x147/travel/20180912/4ef435b3-1e3a-4698-b234-640876c575c5.jpg",
				      "url": "https://travel.china.com/hotspot/13000493/20180912/33878630.html"
				    }
				
				],
				tablist2: [
					{
				      "title": "格力电器拟分红90亿：董明珠总收入上亿",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/29/026a8f25fc6d4863bb74685ac881b0a9.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0429/10/EDU2RFQK00097U7T.html"
				    },
				    {
				      "title": "屏幕使用时间app遭大规模下架 苹果：侵犯隐私",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/29/27c0344443c144e99f28cbd920d9944f.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0429/08/EDTRNL4O00097U7T.html"
				    },
				    {
				      "title": "刚买一年，价格掉一半！新能源车，为啥转手就尴",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/29/b5657bdc7cc2479e9d5e87a6b2918083.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0429/07/EDTQ7BT300097U7T.html"
				    },
				    {
				      "title": "格力公布2018财报，董明珠赢得与雷军的十亿赌",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/29/88c9db455f174da4877626eee9e05deb.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0429/07/EDTOHJOV00097U7T.html"
				    },
				    {
				      "title": "格力电器：2018年净利同比增16.97% Q4获港资增",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/28/4519affcec4c436c9a028af50c937eb7.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0428/22/EDSOCF2F00097U7T.html"
				    },
				    {
				      "title": "全内置风冷×液冷红魔3发布：售价2899元起",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/28/f023a2941ada4ef9906485aae47b7949.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0428/21/EDSMPHEK00097U7T.html"
				    },
				    {
				      "title": "新能源车提振 比亚迪Q1净利润同比增6倍",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/28/80d4660c45c1450a936b51f15edc2bf0.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0428/19/EDSF5G7S00097U7T.html"
				    },
				    {
				      "title": "FCC批准SpaceX 1584颗互联网卫星在低轨道运行",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/28/bd516ad7246444b3a9f59e2dc6e432e8.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0428/16/EDS5S2VF00097U7T.html"
				    },
				    {
				      "title": "神马专车维权：购特斯拉278辆，超20%出现机电故",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/28/1173192ea2374039b4c8faac3125f375.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0428/10/EDRFQME900097U7T.html"
				    },
				    {
				      "title": "格力待嫁：股权转让扑朔迷离 珠海国资委称方向",
				      "description": "网易IT",
				      "picUrl": "http://cms-bucket.ws.126.net/2019/04/28/264ed36aea6f4a5c8d786da9303957d0.png?imageView&thumbnail=200y140",
				      "url": "https://tech.163.com/19/0428/08/EDR8815L00097U7T.html"
				    }
				
				]
			}
		},
		created(){
			this.onLoad();
			this.setTimer();
		},
		methods: {
			onLoad() {
				var that = this ;
	            // 调用api接口，并且提供了两个参数                
	            apiAddress({                    
	                type: 0,                    
	                sort: 1                
	            }).then(res => {
	                that.tablist = res.newslist;         
	            }), 
	            apiAddress1({                    
	                type: 0,                    
	                sort: 1                
	            }).then(res => {
	                that.tablist1 = res.newslist;         
	            }),
	            apiAddress2({                    
	                type: 0,                    
	                sort: 1                
	            }).then(res => {
	                that.tablist2 = res.newslist;         
	            })
	        },
	        setTimer() {
	        	var that = this ;
                    this.timer = setInterval( () => {
                        this.temp++
                        that.temp = this.temp;
                        if (this.temp > 3) {
					    this.temp=1;
                		}   
                    }, 3500),
                    this.timer = setInterval( () => {
                        this.cur++
                        that.cur = this.cur;
                        if (this.cur > 3) {
					    this.cur=1;
                		}   
                    }, 3000)
                 
            }
	        

		}
	}
</script>

<style>
.fuwu {
	padding: 0px 0px 20px 0px;
	overflow: hidden;
}

.fw-l {
	padding: 20px 20px;
	overflow: hidden;
	width: 30%;
	float: left;
	margin-right: 2%;
	border: 1px solid #E1E1E1;
	background-color: #ffffff;
}

.fw-l1 {
	overflow: hidden;
}

.fw-l1 h2,
.ksdh h2 {
	padding: 0px 5px;
	font-size: 16px;
	color: #43aea6;
}

.fw-l1 ul {
	overflow: hidden;
	padding: 10px 0px;
}

.fw-l1 ul li {
	width: 33.3%;
	padding: 5px 5px;
	float: left;
}

.fw-l1 ul li a {
	display: block;
	overflow: hidden;
	position: relative;
}

.fw-l1 ul li p {
	width: 100%;
	position: absolute;
	left: 0px;
	bottom: 5px;
	text-align: center;
	color: #ffffff;
}

.fw-l1 ul li a:hover p {
	color: #e4e4e4;
}

.ksdh {
	overflow: hidden;
}

.ksdh h2 a {
	float: right;
	font-family: "宋体";
	font-size: 13px;
	color: #43aea6;
}

.ksdh h2 a:hover {
	color: #333333;
}

.dh-tab {
	overflow: hidden;
	margin: 10px 5px;
	padding: 3px 3px 0px 3px;
	background: #43aea6;
}

.dh-tab p {
	display: inline-block;
	padding: 10px 0px;
	width: 33.3%;
	float: left;
	text-align: center;
	color: #ffffff;
	cursor: pointer;
}

.dh-tab p.active {
	background: #FFFFFF;
	color: #43aea6;
}
.dh-list {
	overflow: hidden;
	padding: 10px 5px 0px 5px;
}

.dh-list a {
	display: inline-block;
	float: left;
	text-align: center;
	width: 31.3%;
	margin: 5px 1%;
	padding: 7px 0px;
	border-radius: 3px;
	background: #10c55b;
	color: #FFFFFF;
}

.fw-r {
	width: 68%;
	float: left;
}
.fw-xw {
	overflow: hidden;
	border: 1px solid #e1e1e1;
	background: #ffffff;
}
.tab1{
	overflow: hidden;
	background: #FFFFFF;
	border: 1px solid #e1e1e1;
}
.fw-tab {
	display: block;
	border-bottom: 1px solid #e1e1e1;
}

.fw-list li a {
	padding: 12px 55px 12px 15px;
}

.dj {
	margin-top: 20px;
	height: 197px;
}
.dj,
.cys {
	display: inline-block;
	width: auto;
	float: left;
}

.cys {
	cursor: pointer;
}

.bys {
	display: inline-block;
	width: 0px;
	height: 197px;
	overflow: hidden;
	background: #ffffff;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
}

div.bh {
	width: 636px;
	padding: 20px;
}

.bys h2 {
	font-size: 16px;
	padding-bottom: 10px;
	border-bottom: 1px dashed #e1e1e1;
	color: #43aea6;
	margin-bottom: 10px;
}

</style>