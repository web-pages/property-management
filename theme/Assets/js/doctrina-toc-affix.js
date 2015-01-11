(function($) {
	$(function() {
		var el = $('#toc-affix');

		if (!el || !el.is(':visible'))
			return;

		var topPos = $("#navbar-top").outerHeight(true),
			offsetTop = el.offset().top - topPos,
			width = el.width();

		//When position becomes fixed, both width
		//and top css attributes need to be set
		el.css({'top': topPos, 'width': width});

		el.affix({
			offset: {
				top: offsetTop
			}
		});
	});
})(jQuery);