
<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
        	<router-link to="#">
        		<img :src="sliders[sliders.length - 1].img" alt="">
        		<span>{{sliders[sliders.length - 1].title}}</span>
        	</router-link>
        </li>
        <li v-for="(item, index) in sliders" :key="index">
        	<router-link :to="item.url">
        		<img :src="item.img" :alt="item.title">
        		<span>{{item.title}}</span>
        	</router-link>
        </li>
        <li>
        	<router-link to="#">
        		<img :src="sliders[0].img" alt="">
        		<span>{{sliders[0].title}}</span>
        	</router-link>
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(430, 1, speed)">
        	<span></span>
        </li>
        <li class="right" @click="move(430, -1, speed)">
        	<span></span>
        </li>
      </ul>
      <ul class="dots">
        <li v-for="(dot, i, sz) in sliders" :key="i" 
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)
        >
        	{{i+1}}
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      sliders:[
        {
        	url:"#",
        	title:"五官科楼前坪突发抽搐患者得到我院及时...",
          	img:'static/img/n1.jpg'
        },
        {
        	url:"#",
        	title:"中南大学湘雅二医院儿童医学中心获“儿...",
          	img:'static/img/n2.jpg'
        },
        {
        	url:"#",
        	title:"中南大学湘雅二医院儿童医学中心获“儿...",
          	img:'static/img/n3.jpg'
        }
      ],
      currentIndex:1,
      distance:-430,
      transitionEnd: true,
      speed: this.initialSpeed
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      direction === -1 ? this.currentIndex += offset/430 : this.currentIndex -= offset/430
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5
 
      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      if (this.temp) { 
        window.clearInterval(this.temp)
        this.temp = null 
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          if (des < -1290) this.distance = -430
          if (des > -430) this.distance = -1290
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      const offset = Math.abs(index - this.currentIndex) * 430
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed 
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(430, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>
<style>
.window{
	width: 100%;
	height: 263px;
	overflow: hidden;
	position: relative;
}
.container{
	width: 3000px;
	height: 263px;
	overflow: hidden;
}
.container li{
	float: left;
	position: relative;
}
.container li span{
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 40px;
	background: rgba(0,0,0,0.7);
	color: #ffffff;
	line-height: 40px;
	padding: 0px 20px;
}
.container li img{
	width: 430px;
	height: 263px;
}
.direction{
	position: absolute;
	top: 110px;
	left: 0px;
	width: 100%;
}
.direction .left,.direction .right{
	background-color: #43aea6b3;
	display: inline-block;
	width: 35px;
	height: 35px;
	float: left;
	cursor: pointer;
	margin-left: 10px;
	border-radius: 50%;
}
.direction .left span,.direction .right span{
	display: inline-block;
	width: 35px;
	height: 30px;
	background: url(../../../static/img/banner-fy.png) repeat;
	background-position: 33px -3px;
    background-size: 34px 80px;
}
.direction .right span{
	background-position: 36px 37px;
}
.direction .right{
	float: right;
	margin-right: 10px;
}	
.dots{
	position: absolute;
	bottom: 10px;
	right: 10px;
	z-index: 1;
	overflow: hidden;
}
.dots li{
	width: 20px;
	height: 20px;
	background: #000000;
	float: left;
	color: #FFFFFF;
	text-align: center;
	line-height: 20px;
	margin: 0px 3px;
	cursor: pointer;
}
.dots li:hover{
	background: #43aea6;
}
.dots li.dotted{
	background: #43aea6;
}
</style>