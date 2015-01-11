(function($) {
	$(function() {
		//If scrollspy object has not been defined,
		//then there is no need to execute this function
		if (typeof scrollspies === 'undefined') return;

		var offsetTop = ($("#navbar-top").length) ? $("#navbar-top").outerHeight(true) : 0;

		$.each(scrollspies, function(key, val) {
			var content = $(key), 
				target = $(val.target);


			//If target is not visible, it is useless
			//to even define the scrollspy
			if (!target || !target.is(':visible'))
				return true; //returning true has the same effect as continue

			//Add the nav classes to ul elements
			//because it is required by scrollspy
			//But only add it if it does not exist
			target.find("ul:not([class='nav'])").addClass('nav');

			content.scrollspy({target: val.target, offset: offsetTop});
		});
	});
})(jQuery);