//JavaScript to make navbar auto-collapse on mobile

(function($) {
        $(function() {
            $('#navigation-menu ul li a').on('click', function() {
                if ($('.navbar-toggle').is(':visible'))
                    $('.navbar-toggle').click();
            });
        });
})(jQuery);
