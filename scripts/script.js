  /* sticky menu */
    $(document).ready(function() {
        var stickyNavTop = $('.nav').offset().top;
        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); 
            if (scrollTop > stickyNavTop) { 
                $('.nav').addClass('sticky');
			} else {
			    $('.nav').removeClass('sticky'); 
			}
        };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    });
    /* responsive menu */
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    } 
    /* scrolling functions */
    $(".scrollDown").click(function() {
        $('html, body').animate({
            scrollTop: $("#content").offset().top
        }, 2000);
    });
    
    $(".scrollUp").click(function() {
        $('html, body').animate({
            scrollTop: $(".intro").offset().top
        }, 2000);
    });