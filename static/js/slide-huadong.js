jQuery(document).ready(function() {
(new huadong).init();
}),
(window.jQuery), function() {
	var t, e, i = function(t, e) {
			return function() {
				return t.apply(e, arguments)
			}
		};
	t = function() {
		function t() {}
		return t.prototype.extend = function(t, e) {
			var i, n;
			for (i in t) n = t[i], null != n && (e[i] = n);
			return e
		}, t.prototype.isMobile = function(t) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
		}, t
	}(), e = this.WeakMap || (e = function() {
		function t() {
			this.keys = [], this.values = []
		}
		return t.prototype.get = function(t) {
			var e, i, n, o, a;
			for (a = this.keys, e = n = 0, o = a.length; o > n; e = ++n) if (i = a[e], i === t) return this.values[e]
		}, t.prototype.set = function(t, e) {
			var i, n, o, a, s;
			for (s = this.keys, i = o = 0, a = s.length; a > o; i = ++o) if (n = s[i], n === t) return void(this.values[i] = e);
			return this.keys.push(t), this.values.push(e)
		}, t
	}()), this.huadong = function() {
		function n(t) {
			null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new e
		}
		return n.prototype.defaults = {
			boxClass: "huadong",
			animateClass: "animated",
			offset: 0,
			mobile: !0
		}, n.prototype.init = function() {
			var t;
			return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
		}, n.prototype.start = function() {
			var t, e, i, n;
			if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
				if (this.disabled()) return this.resetStyle();
				for (n = this.boxes, e = 0, i = n.length; i > e; e++) t = n[e], this.applyStyle(t, !0);
				return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
			}
		}, n.prototype.stop = function() {
			return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
		}, n.prototype.show = function(t) {
			return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
		}, n.prototype.applyStyle = function(t, e) {
			var i, n, o;
			return n = t.getAttribute("data-huadong-duration"), i = t.getAttribute("data-huadong-delay"), o = t.getAttribute("data-huadong-iteration"), this.animate(function(a) {
				return function() {
					return a.customStyle(t, e, n, i, o)
				}
			}(this))
		}, n.prototype.animate = function() {
			return "requestAnimationFrame" in window ?
			function(t) {
				return window.requestAnimationFrame(t)
			} : function(t) {
				return t()
			}
		}(), n.prototype.resetStyle = function() {
			var t, e, i, n, o;
			for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
			return o
		}, n.prototype.customStyle = function(t, e, i, n, o) {
			return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
				animationDuration: i
			}), n && this.vendorSet(t.style, {
				animationDelay: n
			}), o && this.vendorSet(t.style, {
				animationIterationCount: o
			}), this.vendorSet(t.style, {
				animationName: e ? "none" : this.cachedAnimationName(t)
			}), t
		}, n.prototype.vendors = ["moz", "webkit"], n.prototype.vendorSet = function(t, e) {
			var i, n, o, a;
			a = [];
			for (i in e) n = e[i], t["" + i] = n, a.push(function() {
				var e, a, s, r;
				for (s = this.vendors, r = [], e = 0, a = s.length; a > e; e++) o = s[e], r.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
				return r
			}.call(this));
			return a
		}, n.prototype.vendorCSS = function(t, e) {
			var i, n, o, a, s, r;
			for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), r = this.vendors, a = 0, s = r.length; s > a; a++) o = r[a], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
			return i
		}, n.prototype.animationName = function(t) {
			var e;
			try {
				e = this.vendorCSS(t, "animation-name").cssText
			} catch (i) {
				e = window.getComputedStyle(t).getPropertyValue("animation-name")
			}
			return "none" === e ? "" : e
		}, n.prototype.cacheAnimationName = function(t) {
			return this.animationNameCache.set(t, this.animationName(t))
		}, n.prototype.cachedAnimationName = function(t) {
			return this.animationNameCache.get(t)
		}, n.prototype.scrollHandler = function() {
			return this.scrolled = !0
		}, n.prototype.scrollCallback = function() {
			var t;
			return this.scrolled && (this.scrolled = !1, this.boxes = function() {
				var e, i, n, o;
				for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
				return o
			}.call(this), !this.boxes.length) ? this.stop() : void 0
		}, n.prototype.offsetTop = function(t) {
			for (var e; void 0 === t.offsetTop;) t = t.parentNode;
			for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
			return e
		}, n.prototype.isVisible = function(t) {
			var e, i, n, o, a;
			return i = t.getAttribute("data-huadong-offset") || this.config.offset, a = window.pageYOffset, o = a + this.element.clientHeight - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= a
		}, n.prototype.util = function() {
			return this._util || (this._util = new t)
		}, n.prototype.disabled = function() {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, n
	}()
}.call(this);

$(window).scroll(function() {
        $(".cpfw").each(function(e) {
            var t = $(this).offset().top,
            i = $(window).scrollTop() + $(window).height();
            i > t && $(this).find("li").each(function(e) {
                $(this).delay(400 * e).queue(function(e) {
                    $(this).css("opacity", 1),
                    $(this).css("transform", "translate(0,0)"),
                    e()
                })
            })
        })
        $(".mc-ct").each(function(e) {
            var t = $(this).offset().top,
            i = $(window).scrollTop() + $(window).height();
            i > t && $(this).find("li").each(function(e) {
                $(this).delay(400 * e).queue(function(e) {
                    $(this).css("opacity", 1),
                    $(this).css("transform", "translate(0,0)"),
                    e()
                })
            })
        })
        $(".news-right").each(function(e) {
            var t = $(this).offset().top,
            i = $(window).scrollTop() + $(window).height();
            i > t && $(this).find("li").each(function(e) {
                $(this).delay(400 * e).queue(function(e) {
                    $(this).css("opacity", 1),
                    $(this).css("transform", "translate(0,0)"),
                    e()
                })
            })
        })
    })