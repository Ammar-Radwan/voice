$(window).on("load", function (){

    $(".loading-page").fadeOut(500);
    $(".loading .load-cont").remove();

});


$(document).ready(function (){
    // no text decoration when [a] hover 
    $('a').click(function (){
        $(this).css('text-decoration', 'none');
    });
    
    // organize hover of main navbar list items
    $('#main-nav .list .list-item').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });

    
    
    // call smooht scroll for main navbar items
    $("#main-nav .list .list-item a").click(smoohtScroll);
    // call smooht scroll for mobile navbar items
    $(".mb-nav .mb-list .mb-list-item a").click(smoohtScroll);
    // call smooth scroll for down btn of home section
    $('.down-btn').click(smoohtScroll);
    // call smooth scroll for up btn of footer
    $('.up-btn').click(smoohtScroll);


    
    // smooth scroll function
    var navHeight = $("#main-header").outerHeight();
    function smoohtScroll(e){
        var listHref = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(listHref).offset().top - navHeight
        }, 1000);
        e.preventDefault();
        $('.mb-list-box').slideUp();
    }

    // mobile navbar slide toggle
    $('.mb-nav-icon').click(function (){
        $('.mb-list-box').slideToggle();
    }); 
    

    $(window).scroll(function (){
        if($(document).scrollTop() >= 300){
            $("#main-header").css({
                "height": "auto",
                "padding": "15px 0",
                "background": "linear-gradient(200deg, #22f8a0 12%, #259f6d)",
                "box-shadow": "rgba(0, 0, 0, 0.3) 0px 0px 30px 0px",
                "margin-top": "0"
            });
            $("#main-nav .download-btn").css('display', 'block');
        }else {
            $("#main-header").css({
                "height": "38px",
                "padding": "0",
                "background": "transparent",
                "box-shadow": "none",
                "margin-top": "60px"
            });
            $("#main-nav .download-btn").css('display', 'none');
        }
    });

    /* turn on counter */
    $('.count').countTo();


    /* turn on wow */
    new WOW().init();

});

















