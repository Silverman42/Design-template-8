$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    jQuery.fn.extend({
        navbarAnimate: function (offset, cssClass) {
            return this.each(function () {  
                if ($(window).scrollTop() >= offset) {
                    $(this.children[0].children[0].children[1].children[0]).hide();
                    $(this.children[0].children[0].children[1].children[1]).show();
                } else {
                    $(this.children[0].children[0].children[1].children[0]).show();
                    $(this.children[0].children[0].children[1].children[1]).hide();
                }
            })
        },
        scrollAnimate: function (event, timing, animateArea, selectorHash) {
            if (selectorHash !== "") {
                event.preventDefault();
                //hash content of the selected element
                var hash = selectorHash;
                //animating the scroll to move to the location of the hash
                $(animateArea).animate({
                    scrollTop: $(hash).offset().top
                }, timing, function () {
                    //Adding hash (#) to url after scrolling is done
                    window.location.hash = hash;
                })
            }
        },
        cssAnimate: function (inAnimate) {
            return this.each(function(){
                if($(window).scrollTop() >= $(this).offset().top - 500){
                    $(this).addClass(inAnimate);
                }
            });
        },
        cssAnimate2: function (trigger, offset, animateClass, retainAnimate) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            if (trigger == offset && retainAnimate == 'false') {
                this.addClass('animated ' + animateClass)
                    .one(animationEnd, function () {
                        $(this).removeClass('animated ' + animateClass);
                    })
                return this;
            } else if (trigger == offset && retainAnimate == 'true') {
                this.velocity(animateClass, {
                    loop: 2
                });
                return this;
            }
        }
    });
    $(".service-hide").cssAnimate('service-show'); //Executing Animation before scroll event is executed 
    $(".testimony-hide").cssAnimate('service-show');//Executing Animation before scroll event is executed
    $(".testimony-hide-inverse").cssAnimate('service-show');//Executing Animation before scroll event is executed
    if($(window).scrollTop() > 10){
        $('.logo').addClass('logo-reduce');
        $('.navbar-inverse').removeClass('navbar-inverse-2');
    }
    var logoWidth = $(".logoCaption").innerWidth();
    $(window).scroll(function () {
        $(".service-hide").cssAnimate('service-show')
        $(".testimony-hide").cssAnimate('service-show');
        $(".testimony-hide-inverse").cssAnimate('service-show');
        if($(window).scrollTop() > 10){
            $('.logo').addClass('logo-reduce');
            $('.navbar-inverse').removeClass('navbar-inverse-2');
        }
        else if($(window).scrollTop() < 30){
            $('.logo').removeClass('logo-reduce');
            $('.navbar-inverse').addClass('navbar-inverse-2')
        }
        
    })
    var timing = 800;
    var animateArea = "html, body";
    var selectorHash;
    $(".mapServices").click(function (event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapHome").click(function (event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapContact").click(function (event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapAbout").click(function (event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapPortfolio").click(function (event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    //to get current year 
    var year = new Date()
    $("#year").text(year.getFullYear());
    /*
    $("#mapAbout").click(function (event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);

    });
    
    //image Slider
    inputData2 = [{
        imageUrl: "img/1.jpg",
        imageCaption: "Welcome to Fibreware Web Solutions",
        imageSubCaption: "Your most reliable web solution company"
    }, {
        imageUrl: "img/2.jpg",
        imageCaption: "Rich and Responsive User Interface",
        imageSubCaption: "Your Web services served to your clients on all devices"
    }, {
        imageUrl: "img/3.jpg",
        imageCaption: "Be Empowered to be creative",
        imageSubCaption: "We ensure that with the appropriate web tool set, your ideas are unlimited "
    }];

    var selector2 = "#slider";
    var counter = 0;
    var banner = "#banner";
    var bannerCaption = "#bannerCaption";
    var bannerSubCaption = "#bannerSubCaption";
    slide(inputData2, selector2, banner, bannerCaption, bannerSubCaption);
    setInterval(function () {
        //$(selector2).stop(true, true);
        $(banner).stop(true, true);
        $(bannerCaption).stop(true, true);
        $(bannerSubCaption).stop(true, true);
        slide(inputData2, selector2, banner, bannerCaption, bannerSubCaption);
    }, 5000);
    /*-----Welcome Screen Animate---*/
    //***$("#item-one").velocity({scale:1.3},{loop:true, duration: "slow"});
});
/*$(window).load(function(){
    $("#item-one").velocity("stop")
    .velocity({opacity:0});
    $("#item-three").velocity({opacity:1},{duration:1000});
    $(".welcome-screen").velocity({height:"0%",paddingTop:"0px"},{delay:2000});
})*/
