<template>
	<div>
		<footer class="huadong fadeInUp">
			<div class="w1200">
				<div class="footer-l">
					<img src="static/img/footlogo.png" />
				</div>
				<div class="ft-r">
					<h1>友情链接</h1>
					<div class="ft-lj">
						<select class="select" name="select" onchange="gotoLink(this);">
							<option value="http://www.moe.edu.cn/">中华人民共和国教育部 </option>
							<option value="http://www.nhfpc.gov.cn/">国家卫生健康委员会 </option>
							<option value="http://www.most.gov.cn/">中华人民共和国科学技术部 </option>
							<option value="http://www.hunanwst.gov.cn/">湖南省卫生和计划生育委员会 </option>
							<option value="http://gov.hnedu.cn/index.html">湖南省教育厅 </option>
							<option value="http://www.hnst.gov.cn/">湖南省科技厅 </option>
							<option value="http://www.csu.edu.cn/">中南大学</option>
							<option value="http://www.xysm.csu.edu.cn/">中南大学湘雅医学院</option>
						</select>
						<select class="select" name="select" onchange="gotoLink(this);">
							<option value="http://www.moe.edu.cn/">中华人民共和国教育部 </option>
							<option value="http://www.nhfpc.gov.cn/">国家卫生健康委员会 </option>
							<option value="http://www.most.gov.cn/">中华人民共和国科学技术部 </option>
							<option value="http://www.hunanwst.gov.cn/">湖南省卫生和计划生育委员会 </option>
							<option value="http://gov.hnedu.cn/index.html">湖南省教育厅 </option>
							<option value="http://www.hnst.gov.cn/">湖南省科技厅 </option>
							<option value="http://www.csu.edu.cn/">中南大学</option>
							<option value="http://www.xysm.csu.edu.cn/">中南大学湘雅医学院</option>
						</select>
						<select class="select" name="select" onchange="gotoLink(this);">
							<option value="http://www.moe.edu.cn/">中华人民共和国教育部 </option>
							<option value="http://www.nhfpc.gov.cn/">国家卫生健康委员会 </option>
							<option value="http://www.most.gov.cn/">中华人民共和国科学技术部 </option>
							<option value="http://www.hunanwst.gov.cn/">湖南省卫生和计划生育委员会 </option>
							<option value="http://gov.hnedu.cn/index.html">湖南省教育厅 </option>
							<option value="http://www.hnst.gov.cn/">湖南省科技厅 </option>
							<option value="http://www.csu.edu.cn/">中南大学</option>
							<option value="http://www.xysm.csu.edu.cn/">中南大学湘雅医学院</option>
						</select>
						<select class="select" name="select" onchange="gotoLink(this);">
							<option value="http://www.moe.edu.cn/">中华人民共和国教育部 </option>
							<option value="http://www.nhfpc.gov.cn/">国家卫生健康委员会 </option>
							<option value="http://www.most.gov.cn/">中华人民共和国科学技术部 </option>
							<option value="http://www.hunanwst.gov.cn/">湖南省卫生和计划生育委员会 </option>
							<option value="http://gov.hnedu.cn/index.html">湖南省教育厅 </option>
							<option value="http://www.hnst.gov.cn/">湖南省科技厅 </option>
							<option value="http://www.csu.edu.cn/">中南大学</option>
							<option value="http://www.xysm.csu.edu.cn/">中南大学湘雅医学院</option>
						</select>
					</div>
					<div class="copyright">
						<div class="cpr-l">
							<p>版权所有：中南大学湘雅二医院 备案号：ICP备14002715号-1 </p>
							<p>地址：中国-湖南-长沙市人民中路139号 技术支持:湖南科创信息技术股份有限公司</p>
							<p>总访问量：17749042</p>
						</div>
						<div class="cpr-r"><img src="static/img/weixin.jpg" /></div>
					</div>
				</div>

			</div>
		</footer>

		<div id="kefu">
			<div class="kefud">
				<a class="kficon" title="QQ客服" target="-blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=56016954&amp;site=qq&amp;menu=yes"><i class="fa fa-qq" title="QQ客服"></i></a>
				<div class="phone-footer">
					<a class="kficon" title="电话联系" href="#"><i class="fa fa-phone" title="电话联系"></i></a>
					<div class="kfcc">
						<div class="pht"><img src="static/img/lxdw_pic3.png" /> <span>服务热线：</span><br>400-000-888<br>13512192931</div>
					</div>
				</div>
				<div class="weixin-footer">
					<a class="kficon" title="微信公众号" href="#"><i class="fa fa-qrcode" title="微信公众号"></i></a>
					<div class="kfwx">
						<div class="ewm"><img src="static/img/weixin.jpg" alt="微信公众号"> 微信公众号</div>
					</div>
				</div>
			</div>
			<a id="back-to-top" class="kficon" title="回到顶部" v-show="yx" @click="back()"><i class="fa fa-angle-up"></i></a>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				yx:true,
				
			}
		},
		
		created(){
			this.scrollToTop();
		},
		mounted () {
		  window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed () {
		    window.removeEventListener('scroll', this.scrollToTop); 
		},
		methods: {
			scrollToTop(el) {
				var that = this
			    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			    if (scrollTop > 150) {
			          that.yx = true
			    } else {
			    	that.yx = false
			    }
			},
			back () {
			        document.documentElement.scrollTop = 0
			}
		}
	}
</script>

<style>

</style>