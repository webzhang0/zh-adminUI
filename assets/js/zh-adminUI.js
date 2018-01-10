/*================
**侧边栏折叠
*==================*/
!function ($) {
	$.fn.asideFold = function (options) {
		var defaults = {
			menu: '.aside-menu dl dt',
			submenu: '.aside-menu dl dd',
			type: 1,			//1 只能打开一个。2 必须有一个打开。3 可打开多个。
			trigger: 'click',
			activeClass: 'selected',
			speed: 'first'
		}
		var options = $.extend(defaults, options);
		$(this).each(function () {
			var that = $(this);
			that.find(options.menu).on(options.trigger, function () {
				if ($(this).next().is(':visible')) {
					if (options.type == 2) {
						return false;
					} else {
						$(this).next().slideUp(options.speed).end().removeClass(options.activeClass);
					}
				} else {
					if (options.type == 3) {
						$(this).next().slideDown(options.speed).end().addClass(options.activeClass);
					} else {
						that.find(options.submenu).slideUp(options.speed);
						that.find(options.menu).removeClass(options.activeClass);
						$(this).next().slideDown(options.speed).end().addClass(options.activeClass);
					}
				}
			})
		})
	}
}(window.jQuery)