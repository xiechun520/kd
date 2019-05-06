var app = new Vue({
		el:'#app',
		data:{
			temp:true,
			banner:[
				{bannerurl:"#",bannerpic:"static/img/banner1.jpg"},
				{bannerurl:"#",bannerpic:"static/img/banner2.jpg"},
			],
			lbanner:[
				{lbantitle:"速拓医疗器械系统 历经16年市场检验功能全面,用户众多,成熟稳定",lbanurl:"#",lbanpic:"static/img/n1.jpg"},
				{lbantitle:"速拓医疗器械系统 历经16年市场检验功能全面,用户众多,成熟稳定",lbanurl:"#",lbanpic:"static/img/n2.jpg"},
				{lbantitle:"速拓医疗器械系统 历经16年市场检验功能全面,用户众多,成熟稳定",lbanurl:"#",lbanpic:"static/img/n3.jpg"}
			],
			news1:[
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"我院在中华护理学会首届全国护士心电图大赛获得三等奖",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()}
			],
			news2:[
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"探亲男孩被甩高速 真情救助暖人心",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()}
			],
			news3:[
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()},
				{title:"发挥先锋示范作用 为公众出行保驾护航",nurl:"#",dt:new Date().getMonth()+1+"-"+ new Date().getDate()}
			],
			notice:[
				{title:"",url:"#",ctime:new Date().getMonth()+1+"-"+ new Date().getDate()},
			]
		},
		created(){
		  	this.axiosqq()
		},
		methods:{
			axiosqq(){
				axios.get('http://api.tianapi.com/guonei/?key=6c3cc98e70b23637a15ffc09d0ce11aa').then((res) => {
			        this.notice = res.data.newslist;
			        /*console.log(res.data.newslist)*/
			      }).catch( error => { console.log(error); });
			},
			qh:function (t) {
                this.temp=t
            }
		}
	})