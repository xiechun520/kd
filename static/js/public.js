	export function scrollToTop(el) {
				var that = this
			    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			    if (scrollTop > 150) {
			    	that.yc = true
			    } else {
			    	that.yc = false
			    }
			}
	
	export function dsqqd(){
				　var that = this ;
                    this.timer = setInterval( () => {
                        this.temp++
                        that.temp = this.temp;
                        if (this.temp > 3) {
					    this.temp=1;
                		}   
                    }, 3500)
			}
	
	export function dsqtz(){
				　clearInterval(this.timer)
			}
	
	
	export function setTimer() {//定时切换tab
	        	var that = this ;
                    this.timer = setInterval( () => {
                        this.temp++
                        that.temp = this.temp;
                        if (this.temp > 3) {
					    this.temp=1;
                		}   
                    }, 3500)
            }
	
	
	