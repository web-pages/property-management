//jQuery to collapse the navbar on scroll

(function($) {
    $(function() {
        //If offset attribute is present and set to false, do nothing
        if ($("#navbar-top").attr("offset") !== undefined && $("#navbar-top").attr("offset").toLowerCase() === "false")
            return;

        $(window).scroll(function() {
            if ($("#navbar-top").offset().top > 0) {
                $("#navbar-top").addClass("navbar-top-offset");
            } else {
                $("#navbar-top").removeClass("navbar-top-offset");
            }
        });    
    });
})(jQuery);