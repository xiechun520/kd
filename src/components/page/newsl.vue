<template>
  <div class="newslist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
       <router-link :to="{path:'/content',query:{ id:item.NewsID }}" class="around">
          <img class="mui-media-object mui-pull-left" :src="item.picUrl">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
	import Vue from 'vue';
export default {
  data() {
    return {
      newslist: [{
      			"NewsID": "1",
						"title": "翟晓川：对外援限制不佳，仍有机会赢下系列赛",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/11/2019/0331/098CE46F10F80BF7729B165ECE72BFD4014BA2F7_size45_w550_h250.jpeg",
						"url": "http://sports.ifeng.com/a/20190331/60503426_0.shtml"
					},
					{
						"NewsID": "2",
						"title": "杜锋笑了！广东横扫苏州 连续17赛季晋级CBA半决赛",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/01/2019/0330/216B8369F896285BD5BB1737F552BF246CB31D29_size118_w657_h402.png",
						"url": "http://sports.ifeng.com/a/20190330/60564553_0.shtml"
					},
					{
						"NewsID": "3",
						"title": "担任清华男篮主帅，陈磊要打造防守之师",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/09/2019/0330/DCBC1C1B2E128D848303B52AF6C3B1343FCBE3F2_size53_w660_h300.jpeg",
						"url": "http://sports.ifeng.com/a/20190330/60564433_0.shtml"
					},
					{
						"NewsID": "4",
						"title": "33分13助攻8板，新疆终于找对了外援，他让总决赛MVP坐穿板凳！",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/04/2019/0329/4E8B2DAF6DD842A4853F86ABD30884AA861FBA33_size30_w640_h422.jpeg",
						"url": "http://sports.ifeng.com/a/20190329/60473586_0.shtml"
					},
					{
						"NewsID": "5",
						"title": "2-0！费尔德和李根爆发合砍60分 新疆再胜广厦",
						"description": "CBA新闻",
						"picUrl": "http://d.ifengimg.com/w145_h103/e0.ifengimg.com/02/2019/0328/0F1328FAE35E510B8AB8C9414645499B1B770D44_size520_w680_h432.png",
						"url": "http://sports.ifeng.com/a/20190328/60502920_0.shtml"
					},
					{
						"NewsID": "6",
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
    };
  },
  created() {
//  this.getnewslist();
  },
  methods: {
    
  }
};
</script>
