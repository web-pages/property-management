//Jquery for animating the page-scroll.
//Note: Relies upon the JQuery easing library

(function($) {
	$(function() {
		var offsetTop = ($("#navbar-top").length && typeof noscrollanimateoffset === 'undefined') ? $("#navbar-top").outerHeight(true) : 0;

		$('a[href*=#]:not([href=#])').click(function(event) {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {

					paddingmargin = (typeof noscrollanimateoffset === 'undefined')
						? (parseInt(target.css('padding-top')) + parseInt(target.css('margin-top')))
						: 0;
						
					$('html, body').animate({
						scrollTop: target.offset().top - offsetTop + paddingmargin
					}, 1000, 'jswing');

					event.preventDefault();
				}
			}
		});
	});
})(jQuery);