//jQuery to collapse the navbar on scroll

(function($) {
    $(function() {
        $("#survey").on('click', function(event) {
            $("#survey-intro").fadeOut("slow", function() {
                $("#surveyMonkeyInfo").fadeIn("slow");
            });
        }); 
    });
})(jQuery);