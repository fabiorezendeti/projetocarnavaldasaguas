$(document).ready(function () {

    /* GLOBAL VARIABLES */

    // functional variables
    var winwidth = window.innerWidth;
    var winheight = window.innerHeight;
    var docHeight;
    var scroller = $("#scroll-wrapper");
    var didScroll = false;

    function getDocHeight() {
        docHeight = scroller[0].scrollHeight;
    }
    getDocHeight();

    // cached elements
    var win = $(window);
    var page = $("html, body");
    var nav = $(".navpanel");
    var navHead = $(".navhead, .logo");
    var navItem = $(".nav-item");
    var switcher = $(".switch");
    var homepage = $("section.section1");
    var hamburger = $(".menu-indicator, .hamburger-icon");
    var mobMenu = $(".mobile-menu, .mobile-menu-shadow-bg");
    var shadowBackground = $(".mobile-menu-shadow-bg");
    var mobMenuItem = $(".mob-item");
    var description = $(".description");
    var textSwitch = $(".more-less");
    var submit = $(".submit-button");
    var menuAnchor = $("nav ul li a");
    var sections = $("section");
    var foot = $("footer");

    sectionsOffsets = [];
    sectionsOffsets.length = sections.length;

    /* FUNCTION DEFINITIONS */

    // toggle mobile menu layout - horizontal/vertical (by screen width)
    function menuLayout() {
        if (homepage.width() > homepage.height()) {
            mobMenuItem.addClass("mobile-menu-horizontal");
            mobMenuItem.removeClass("mobile-menu-vertical");
        } else {
            mobMenuItem.addClass("mobile-menu-vertical");
            mobMenuItem.removeClass("mobile-menu-horizontal");
        }
    }

    // add section offsets to an array 
    function sectionOffsetsToArray(scrollOffset) {
        for (i = 0; i < sectionsOffsets.length; i++) {
            sectionsOffsets[i] = sections.eq(i).offset().top + scrollOffset;
        }
    }

    // indicate the page scroll progress
    // thanks to Sacha 
    // original source: https://codepen.io/SachaG/pen/GkfFe?editors=1010
    // article: http://jakearchibald.com/2013/animated-line-drawing-svg/

    $(function () {

        // 1. Set up SVG animation
        var progressPath = document.querySelector('.menu-indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            'stroke-dashoffset 300ms linear';

        // 2. Define updateProgress function
        var updateProgress = function () {

            // update document height
            getDocHeight();
            // calculate values
            var scroll = scroller.scrollTop();
            var height = docHeight - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            // update dashOffset
            progressPath.style.strokeDashoffset = progress;
        };

        // 3. trigger updateProgress once on load and then on scroll
        updateProgress();
        scroller.scroll(updateProgress);
        scroller.resize(updateProgress);
    });

    // sections top offsets to array, scrolling correction val. 0
    sectionOffsetsToArray(0);

    /* DESKTOP NAVIGATION */

    // scroll to the top on click on nav header
    navHead.on("click", function () {
        page.animate({
            scrollTop: 0
        }, 750);
    });

    // scroll to section on click
    navItem.on("click", function (event) {
        var sectionClass = $(this).attr("href");
        var sectionElem = $("section." + sectionClass);
        event.preventDefault();
        page.animate({
            scrollTop: sectionElem.offset().top - 49
        }, 750);
    });

    // hide and reveal functionality of the navbar
    switcher.on("click", function () {
        nav.toggleClass("pull");
        setTimeout(function () {
            switcher.toggleClass("transparent-gray glyphicon-chevron-left glyphicon-chevron-right");
        }, 700);
    });

    // MOBILE NAVIGATION

    // highlight active/selected section, hide the menu, scroll to selected section. 
    mobMenuItem.on("click", function () {

        var clas = $(this).attr("class");
        var section = $("section." + clas);
        var index = mobMenuItem.index(this);

        mobMenuItem.removeClass("selected");
        $(this).addClass("selected");

        mobMenu.fadeOut(250);
        scroller.animate({
            scrollTop: sectionsOffsets[index]
        }, 750);
    });

    // toggle mobile navigation and its horizontal/vertical layout (by screen size)
    hamburger.on("click", function () {
        mobMenu.toggle("fade", 250);
        menuLayout();
    });

    // show more / less of project article
    textSwitch.on("click", function (event) {
        event.preventDefault();
        var it = $(this);
        var position = textSwitch.index(this);
        var text = description.eq(position).is(":visible") ? "Show more" : "Show less";
        description.eq(position).slideToggle(200, function () {
            it.text(text);
        });
    });

    // animate send button on hover - pulse effect
    submit.hover(function () {
        $(this).toggleClass("pulse");
    });

    function updateScrollItem(wrapper, item, changer) {
        var scrollTop = wrapper.scrollTop();
        var halfScreen = winheight / 2;
        var halfIntersection = $(".intersection:first-child").height() / 2;
        var halfSection = halfScreen - halfIntersection;

        for (var i = 0; i < sectionsOffsets.length; i++) {
            if (scrollTop > sectionsOffsets[i] - halfSection) {
                item.removeClass(changer);
                item.eq(i).addClass(changer);
            }
        }
    }
    // DESKTOP SCROLL UPDATE
    win.scroll(function () {
        updateScrollItem(win, navItem, "active");
    });

    // MOBILE SCROLL UPDATE
    scroller.scroll(function () {
        updateScrollItem(scroller, mobMenuItem, "selected");
    });

    win.trigger("scroll");

    // customize the appeareance on resize event  
    win.resize(function () {

        nav.add(switcher).add(hamburger).not("in-view").addClass("in-view");

        getDocHeight();

        // store the scroll value added on resize/orientation change
        var scrollCorrection = scroller.scrollTop();

        // set new calculated values for section offsets and store it in an array   
        sectionOffsetsToArray(scrollCorrection);

        // switch to horizontal/vertical mobile menu layout
        menuLayout();

    });
});

$(window).on("load", function () {

    // GLOBAL VARIABLES
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var win = $(window);
    var didScroll = false;
    var scrollTop;
    var hits = 0;
    var ms = 0;
    var elementsToAnimate = $(".send-item").length;
    var startClass = "in-view";
    var animated = $(".animated");
    var bounceIn = "bounceIn";

    var send = $(".send-wrapper");
    var scroller = $("#scroll-wrapper");

    var navpanel = $(".navpanel");
    var switcher = $(".glyphicon-chevron-right");
    var hamburger = $(".menu-indicator, .hamburger-icon");
    var title1 = $(".title-1");
    var title2 = $(".title-2");
    var menuTrigger = $(".mobile-menu");

    // run the headlines
    function animateHeadlines(delay1, delay2) {
        setTimeout(function () {
            title1.each(function () {
                $(this).addClass(startClass).css("transition-delay", ms + "ms");
                ms += 150;
            });
        }, delay1);
        setTimeout(function () {
            title2.addClass(startClass);
        }, delay2);
    }

    // catch animated element in view
    function playInView(element, effect) {
        var scrollTop = win.scrollTop();
        var winBottom = (scrollTop + winHeight);
        var children = element.children();
        var ms = 0;

        children.each(function () {
            var $elem = $(this);
            var elemHeight = $elem.height();
            var elemOffset = $elem.offset().top;
            var elemBottom = elemHeight + elemOffset;

            if ((scrollTop <= elemBottom) && (winBottom >= elemOffset)) {
                if ($elem.not(effect)) {
                    setTimeout(function () {
                        $elem.addClass(effect);
                    }, ms);
                    ms += 700;
                    hits++;
                }
            }
        });
    }

    // periodically check whether element is in view after all animated stop checking
    function checkAnimated() {
        win.scroll(function () {
            didScroll = true;
        });

        var animateInInterval = setInterval(function () {
            if (didScroll) {
                didScroll = false;
                playInView(send, bounceIn);
            }
            if (hits === elementsToAnimate) {
                clearInterval(animateInInterval);
            }
        }, 250);
    }

    checkAnimated();

    win.trigger("scroll");

    if (winWidth > 991) {
        // intro animation set for desktop
        navpanel.add(switcher).addClass(startClass);
        animateHeadlines(1000, 2000);
    } else {
        // only intro runs
        hamburger.addClass(startClass);
        animateHeadlines(150, 1150);
    }
});
