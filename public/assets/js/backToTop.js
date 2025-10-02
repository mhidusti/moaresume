jQuery(document).ready(function($){
    // Switch theme
    $(".switch").on("click", function(){
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $(".switch").removeClass("switched");
        } else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
        }
    });

    // Progress path
    var path = document.querySelector(".progress-wrap path");
    if (path) {
        var pathLength = path.getTotalLength();
        path.style.transition = path.style.WebkitTransition = "none";
        path.style.strokeDasharray = pathLength + " " + pathLength;
        path.style.strokeDashoffset = pathLength;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        var updateProgress = function(){
            var scroll = $(window).scrollTop(),
                height = $(document).height() - $(window).height(),
                progress = pathLength - scroll * pathLength / height;
            path.style.strokeDashoffset = progress;
        };

        updateProgress();
        $(window).scroll(updateProgress);
    }

    // Active progress
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 50) {
            $(".progress-wrap").addClass("active-progress");
        } else {
            $(".progress-wrap").removeClass("active-progress");
        }
    });

    // Scroll to top
    $(".progress-wrap").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:0}, 550);
        return false;
    });
});
