/*============================================
                Preloader
============================================*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(600).fadeOut('slow');
});

/*============================================
                Team
============================================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/*============================================
                Progress Bars
============================================*/

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*============================================
                Responsive Tabs
============================================*/

$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*============================================
                Portfolio
============================================*/

$(window).on('load', function () {

    //Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $(".no-gutters").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*============================================
                Magnifier
============================================*/

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});


/*============================================
                Testimonials
============================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>']
    });
});

/*============================================
                Stats
============================================*/

$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/*============================================
                Clients
============================================*/

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

/*============================================
                Google Map
============================================*/
/*
$(window).on('load', function () {
    
    // Map Variables
    var addressString = '230 Broadway, New York, NY 10007, USA';
    var myLatlng = {lat: 40.680050, lng: -73.417458};
    
    // 1. Reader Map
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 11,
        center: myLatlng
    });
    
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });
    
    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });
    
    
    // Show Info Window when user clicks marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
});

*/

/*============================================
                Navigation
============================================*/

/* Show & Hide White Navigation */

$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's load
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {
            // show white nav
            $("nav").addClass("white-nav-top");

            // show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // show back to top button
            $("#back-to-top").fadeIn();

        } else {
            // hide white nav
            $("nav").removeClass("white-nav-top");

            // show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // hide back to top button
            $("#back-to-top").fadeOut(0);
        }

    }

});

//smooth scrolling 

$(function () {
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

/*============================================
                Mobile Menu
============================================*/

$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Show mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });


});

/*============================================
                Animation
============================================*/

// animation on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});